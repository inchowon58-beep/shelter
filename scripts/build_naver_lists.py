import json
import secrets
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://shelter.cattery.co.kr/new/"
CHUNK = 2000

GROUPS = [
    ["인천", "부평", "남동구", "미추홀구", "연수구", "계양구", "강화", "송도", "청라"],
    ["수원", "권선구", "영통", "영통구", "팔달구", "장안구"],
    ["부산", "해운대", "동래구", "사하구", "수영구", "사상구", "금정구", "연제구", "기장", "영도구"],
    ["울산", "울주"],
    ["대구", "달서구", "수성구", "달성군"],
]

rank = {region: (group_index, region_index) for group_index, group in enumerate(GROUPS) for region_index, region in enumerate(group)}
pages = json.loads((ROOT / "lib" / "new-landings" / "pages.json").read_text(encoding="utf-8"))["pages"]

def sort_key(item):
    index, page = item
    if page["region"] in rank:
        return (0, rank[page["region"]], index)
    return (1, 0, index)

ordered = [page for _, page in sorted(enumerate(pages), key=sort_key)]
urls = [BASE + page["slug"] for page in ordered]

out_dir = ROOT / "웹문서등록"
out_dir.mkdir(exist_ok=True)
for old in out_dir.glob("*.txt"):
    old.unlink()

for start in range(0, len(urls), CHUNK):
    chunk = urls[start : start + CHUNK]
    number = start // CHUNK + 1
    (out_dir / f"{number:02d}.txt").write_text("\n".join(chunk) + "\n", encoding="utf-8")

key = secrets.token_hex(16)
key_path = ROOT / "public" / f"{key}.txt"
key_path.write_text(key, encoding="utf-8")
(out_dir / "indexnow-key.txt").write_text(key + "\n", encoding="utf-8")
print(f"urls {len(urls)}")
print(f"files {((len(urls) - 1) // CHUNK) + 1}")
print(f"first {urls[0]}")
print(f"key {key}")
