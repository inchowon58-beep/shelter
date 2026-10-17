import json
import os
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "lib" / "new-landings"
MODEL = "gemini-3.8-flash"

REGIONS = """
화성 남양주 송파 인천 평택 강남구 강남 김해 대구 달서구 시흥 파주 노원 부평 덕양구 고양시 제주도 제주
남동구 김포 관악구 분당 은평구 강동구 강동 성남 대전 의정부 용인 기흥 양천구 성북 성북구 광주 미추홀구
수성구 서초 서초구 구미 연수구 광산구 원미구 구로 구로구 세종 중랑구 중랑 동작구 동작 해운대 수지 위례
영등포 유성 마포 권선구 영통구 영통 원주 양산 아산 동대문 진주 광진구 상록구 하남 전주 안양 동안구 덕진구
도봉구 도봉 서대문 서대문구 울산 단원구 안산 사하구 일산동구 춘천 강북구 강북 일산서구 계양구 청주 흥덕구
양주 광명 순천 성동구 성동 장안구 부산 여수 동래구 처인구 익산 경산 천안 동남구 달성군 군포 군산 경주
성산구 수정구 오산 거제 만안구 소사구 금천구 포항 이천 울주 금정구 목포 연제구 창원 의창구 중원구 강릉
충주 용산 사상구 상당구 팔달구 진해 청원 구리 서원구 서귀포 기장 서산 수영구 당진 대덕구 의왕 안동 광양
포천 강서구 강서 종로 종로구 김천 제천 양평 통영 나주 여주 논산 사천 칠곡 영도구 정읍 공주 밀양 영천 영주
완주 홍성 보령 상주 무안 음성 동해 동두천 진천 과천 속초 김제 예산 남원 강화 문경 홍천 해남 가평 삼척
화순 고흥 태안 부여 거창 함안 창녕 예천 영암 영광 고창 금산 의성 서천 고성 부안 옥천 계룡 서울 부천 온양
배곧 마곡 안성 청라 산본 동탄 송탄 연천 태백 이태원 홍대 조치원 평창 송추 미사 수원 송도 목동 화곡 마산
청양 보은 영동 무주 진안 순창 담양 곡성 보성 장흥 강진 남해 하동 구례 의령 합천 군위 영덕 청송 봉화 영양
울진 영월 양양 인제 화천 철원
""".split()

KEYWORDS = [
    (
        "강아지파양",
        "보호자가 이사, 질병, 생활 변화처럼 불가피한 사정으로 반려견을 직접 돌보기 어려울 때의 상담 글이다. 비난하지 않고, 전화 상담, 상황 확인, 보호 연계, 이후 입양 연결 순서로 안내한다. 입양 홍보가 아니라 파양 상담이 중심이다.",
    ),
    (
        "강아지보호소",
        "지역에서 강아지를 보호하는 공간과 돌봄, 새 가족을 연결하는 과정을 안내하는 글이다. 시설의 일상 케어, 건강 확인, 입양 전 상담을 중심으로 쓴다.",
    ),
    (
        "유기견센터",
        "유기견을 맡기거나 찾으려는 사람이 센터에 문의할 때 필요한 안내 글이다. 접수, 보호 연계, 주인 확인이 필요한 경우의 상담, 이후 입양 안내를 다룬다. 행정 기관인 것처럼 허위 명칭을 쓰지 말고 상담 연계 안내로 쓴다.",
    ),
    (
        "유기견보호소",
        "보호 중인 유기견의 생활, 돌봄, 입양 전 만남을 안내하는 글이다. 보호소의 하루와 입양 가정이 확인할 점을 중심으로 쓴다.",
    ),
    (
        "유기동물보호소",
        "개와 고양이를 함께 보호하는 공간으로, 유기동물을 맡기거나 입양하려는 사람에게 절차를 안내하는 글이다. 특정 동물 한 종만 다루지 않는다.",
    ),
    (
        "고양이보호소",
        "반려묘가 지내는 보호 공간, 스트레스가 적은 환경, 입양 전 상담을 안내하는 글이다. 강아지 이야기를 끌어오지 않는다.",
    ),
    (
        "고양이파양",
        "보호자가 반려묘를 더 돌보기 어려울 때의 상담 글이다. 비난하지 않고, 상담, 보호 연계, 이후 입양 연결을 안내한다. 강아지 파양 문장을 재사용하지 않는다.",
    ),
    (
        "유기묘보호소",
        "보호 중인 유기묘의 환경, 건강 확인, 입양 가정을 연결하는 과정을 안내하는 글이다.",
    ),
    (
        "유기견보호센터",
        "유기견이 입소해 돌봄을 받고, 상담 후 입양으로 이어지는 보호센터 안내 글이다. 유기견센터 글과는 문장과 순서를 다르게 쓴다.",
    ),
]

BANNED = [
    "서울", "부산", "대구", "인천", "광주", "대전", "울산", "수원", "제주", "창원",
    "성남", "용인", "화성", "청주", "천안", "전주", "포항", "김해", "제주도",
]


def extract_css() -> str:
    raw = (ROOT / "app" / "서울-강아지보호소" / "page.tsx").read_text(encoding="utf-8")
    match = re.search(r'const pageStyles = "((?:\\.|[^"\\])*)"', raw)
    if not match:
        raise SystemExit("기존 페이지에서 스타일을 읽지 못했습니다.")
    css = json.loads('"' + match.group(1) + '"')
    css = re.sub(r"\.lp-hero-bg\s*\{[^{}]*background-image:[^{}]*\}", "", css)
    return css.strip() + "\n"


def call_gemini(prompt: str) -> dict:
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not key:
        raise SystemExit("GEMINI_API_KEY 가 없습니다.")
    payload = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.9,
            "maxOutputTokens": 4096,
            "responseMimeType": "application/json",
        },
    }
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "x-goog-api-key": key,
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=90) as res:
            data = json.load(res)
    except urllib.error.HTTPError as err:
        detail = err.read().decode("utf-8", "replace")[:500]
        raise RuntimeError(f"HTTP {err.code}: {detail}") from err
    parts = data["candidates"][0]["content"]["parts"]
    text = "".join(part.get("text", "") for part in parts).strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text)
    return json.loads(text)


def validate(keyword: str, data: dict) -> None:
    required = [
        "title",
        "description",
        "keywords",
        "h1Html",
        "heroLead",
        "aboutTitleHtml",
        "aboutBody",
        "featureTitleHtml",
        "features",
        "galleryTitleHtml",
        "reviews",
        "faqs",
    ]
    missing = [key for key in required if key not in data]
    if missing:
        raise ValueError(f"빠진 항목: {missing}")
    if not isinstance(data["keywords"], list) or len(data["keywords"]) < 4:
        raise ValueError("keywords 부족")
    if len(data["features"]) != 3 or len(data["reviews"]) != 3 or len(data["faqs"]) != 3:
        raise ValueError("features/reviews/faqs 개수")
    blob = json.dumps(data, ensure_ascii=False)
    if blob.count("{region}") < 8:
        raise ValueError("{region} 치환 칸이 부족합니다.")
    if keyword not in data["title"] or keyword not in data["h1Html"]:
        raise ValueError("제목 또는 헤드라인에 키워드가 없습니다.")
    for banned in BANNED:
        if banned in blob:
            raise ValueError("banned " + banned.encode("unicode_escape").decode())
    for review in data["reviews"]:
        if "{region}" not in review.get("text", "") and "{region}" not in review.get("place", ""):
            raise ValueError("후기에 지역 칸이 없습니다.")
    for faq in data["faqs"]:
        if not faq.get("q") or not faq.get("a"):
            raise ValueError("질문 항목이 비었습니다.")


def prompt_for(keyword: str, angle: str) -> str:
    return f"""당신은 한국어 랜딩 페이지 글을 씁니다. 브랜드 이름은 아가펫보호소입니다. 전화는 0505-707-0401입니다.
주제 키워드는 "{keyword}" 하나뿐입니다.
관점: {angle}

규칙:
- 지역 이름은 절대 쓰지 말고, 지역이 들어갈 자리는 반드시 {{region}} 로만 표기합니다. 예: {{region}}{keyword}
- {{region}} 는 제목, 설명, 헤드라인, 본문, 강점 제목, 후기, 질문에 자연스럽게 들어가야 합니다.
- 다른 도시, 구, 동 이름은 쓰지 않습니다.
- 성공률, 안락사 건수, 운영 연수처럼 확인할 수 없는 숫자는 쓰지 않습니다.
- 문장은 상담 안내문처럼 차분하고 구체적으로 씁니다. 키워드를 문장마다 반복하지 않습니다.
- h1Html, aboutTitleHtml, featureTitleHtml, galleryTitleHtml 에는 <em>강조</em> 를 한 번씩만 넣을 수 있습니다. 다른 HTML 태그는 금지합니다.
- 후기 작성자는 김OO, 박OO, 이OO 만 사용합니다.
- JSON만 출력합니다.

반환 형식:
{{
  "title": "{{region}}{keyword}로 시작하는 40자 안팎 제목",
  "description": "90자에서 140자 설명",
  "keywords": ["{{region}}{keyword}", "관련 검색어 4개 이상"],
  "h1Html": "헤드라인",
  "heroLead": "두 문장",
  "aboutTitleHtml": "소제목",
  "aboutBody": "세 문장 이상의 본문",
  "featureTitleHtml": "강점 소제목",
  "features": [{{"title": "한 줄"}}, {{"title": "한 줄"}}, {{"title": "한 줄"}}],
  "galleryTitleHtml": "사진 소제목",
  "reviews": [
    {{"text": "두 문장", "author": "김OO", "place": "{{region}}"}},
    {{"text": "두 문장", "author": "박OO", "place": "{{region}}"}},
    {{"text": "두 문장", "author": "이OO", "place": "{{region}}"}}
  ],
  "faqs": [
    {{"q": "질문", "a": "두 문장 답변"}},
    {{"q": "질문", "a": "두 문장 답변"}},
    {{"q": "질문", "a": "두 문장 답변"}}
  ]
}}
"""


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    css = extract_css()
    (OUT_DIR / "landing-css.json").write_text(
        json.dumps({"css": css}, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"css {len(css)} chars")

    template_path = OUT_DIR / "templates.json"
    templates = {}
    if template_path.exists():
        templates = json.loads(template_path.read_text(encoding="utf-8"))
    for keyword, angle in KEYWORDS:
        if keyword in templates:
            print(f"skip {keyword}")
            continue
        last_error = None
        for attempt in range(1, 4):
            try:
                data = call_gemini(prompt_for(keyword, angle))
                validate(keyword, data)
                data["keyword"] = keyword
                templates[keyword] = data
                template_path.write_text(
                    json.dumps(templates, ensure_ascii=False, indent=2),
                    encoding="utf-8",
                )
                print(f"ok {keyword} attempt {attempt}")
                break
            except Exception as err:
                last_error = err
                print(f"retry {keyword} attempt {attempt}: {err}")
                time.sleep(2)
        else:
            raise SystemExit(f"{keyword} 생성 실패: {last_error}")
        time.sleep(1)

    (OUT_DIR / "templates.json").write_text(
        json.dumps(templates, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    existing = {path.name for path in (ROOT / "app").iterdir() if path.is_dir()}
    pages = []
    skipped = []
    seen = set()
    for region in REGIONS:
        for keyword, _angle in KEYWORDS:
            slug = f"{region}-{keyword}"
            if slug in seen:
                continue
            seen.add(slug)
            if slug in existing:
                skipped.append(slug)
                continue
            pages.append({"slug": slug, "region": region, "keyword": keyword})

    (OUT_DIR / "pages.json").write_text(
        json.dumps({"pages": pages, "skippedExisting": skipped}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"regions {len(REGIONS)} pages {len(pages)} skipped {len(skipped)}")


if __name__ == "__main__":
    main()
