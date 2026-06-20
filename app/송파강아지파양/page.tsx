import { Metadata } from "next";

export const metadata: Metadata = {
  title: "송파강아지파양 | 아가펫 - 완벽 가이드",
  description: "송파강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 송파강아지파양 관련 최신 내용을 확인하세요.",
  keywords: ["송파강아지파양", "송파강아지파양 가이드", "송파강아지파양 추천", "송파강아지파양 정보", "아가펫"],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://shelter.agapet.co.kr/%EC%86%A1%ED%8C%8C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "아가펫",
    title: "송파강아지파양 | 아가펫 - 완벽 가이드",
    description: "송파강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 송파강아지파양 관련 최신 내용을 확인하세요.",
    url: "https://shelter.agapet.co.kr/%EC%86%A1%ED%8C%8C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
    images: [{ url: "https://shelter.agapet.co.kr/images/shelter-01.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "송파강아지파양 | 아가펫 - 완벽 가이드",
    description: "송파강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 송파강아지파양 관련 최신 내용을 확인하세요.",
    images: ["https://shelter.agapet.co.kr/images/shelter-01.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "송파강아지파양 | 아가펫 - 완벽 가이드",
  "description": "송파강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 송파강아지파양 관련 최신 내용을 확인하세요.",
  "url": "https://shelter.agapet.co.kr/%EC%86%A1%ED%8C%8C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
  "inLanguage": "ko-KR",
  "isPartOf": {
    "@type": "WebSite",
    "name": "아가펫",
    "url": "https://shelter.agapet.co.kr"
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "송파강아지파양은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "송파강아지파양는 많은 사용자가 관심을 갖는 주제로, 목적과 상황에 맞게 이해하고 활용하는 것이 중요합니다."
        }
      },
      {
        "@type": "Question",
        "name": "송파강아지파양를 시작하려면 어떻게 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "먼저 송파강아지파양의 기본 개념을 파악한 뒤, 본 페이지의 핵심 포인트와 FAQ를 참고해 단계별로 진행하세요."
        }
      },
      {
        "@type": "Question",
        "name": "송파강아지파양 관련 정보는 어디서 확인할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "이 페이지와 아가펫의 관련 콘텐츠를 통해 송파강아지파양에 대한 신뢰할 수 있는 정보를 확인할 수 있습니다."
        }
      }
    ]
  }
};
const pageStyles = "\n.landing-gimpo {\n  --bg: #f7f4ef;\n  --surface: #ffffff;\n  --text: #1c1c1c;\n  --muted: #5c5c5c;\n  --accent: #b8923a;\n  --accent-hover: #9a7830;\n  --dark: #141414;\n  --dark-2: #222222;\n  --border: #e8dfd0;\n  font-family: Georgia, \"Times New Roman\", \"Apple SD Gothic Neo\", serif;\n  color: var(--text);\n  background: var(--bg);\n  min-height: 100vh;\n}\n.landing-gimpo .topbar {\n  display: flex; justify-content: space-between; align-items: center;\n  padding: 1rem 1.5rem; background: var(--dark); color: #fff;\n  position: sticky; top: 0; z-index: 20;\n}\n.landing-gimpo .brand {\n  font-weight: 700; color: #fff; text-decoration: none; letter-spacing: 0.04em;\n  font-size: 1.05rem;\n}\n.landing-gimpo .brand-sub { display: block; font-size: 0.65rem; color: #c9a962; letter-spacing: 0.18em; font-weight: 400; }\n.landing-gimpo .top-cta { color: #c9a962; text-decoration: none; font-size: 0.85rem; font-weight: 600; font-family: sans-serif; }\n.landing-gimpo .hero {\n  background: linear-gradient(180deg, #141414 0%, #2a2418 100%);\n  color: #fff; padding: 4rem 1.5rem 3.5rem; text-align: center;\n}\n.landing-gimpo .hero-inner { max-width: 820px; margin: 0 auto; }\n.landing-gimpo .badge {\n  display: inline-block; color: #c9a962; font-size: 0.75rem; letter-spacing: 0.22em;\n  text-transform: uppercase; margin-bottom: 1rem; font-family: sans-serif;\n}\n.landing-gimpo .hero h1 {\n  font-size: clamp(1.9rem, 5vw, 3rem); margin: 0 0 0.5rem; font-weight: 400; line-height: 1.25;\n}\n.landing-gimpo .hero h1 em { font-style: italic; color: #e8d5a8; }\n.landing-gimpo .hero p {\n  color: #d4cbb8; line-height: 1.85; margin: 0 0 1.75rem; font-family: sans-serif;\n  max-width: 620px; margin-left: auto; margin-right: auto;\n}\n.landing-gimpo .cta-button {\n  display: inline-block; background: #c9a962; color: #141414;\n  padding: 0.95rem 2rem; border-radius: 2px; text-decoration: none;\n  font-weight: 700; font-family: sans-serif; letter-spacing: 0.06em; font-size: 0.85rem;\n}\n.landing-gimpo .cta-button:hover { background: #b8923a; color: #fff; }\n.landing-gimpo main { max-width: 900px; margin: 0 auto; padding: 2rem 1.25rem 3rem; }\n.landing-gimpo section { margin-bottom: 1.5rem; }\n.landing-gimpo .card {\n  background: var(--surface); border: 1px solid var(--border);\n  padding: 1.6rem 1.75rem; box-shadow: 0 8px 24px rgba(20,20,20,0.06);\n}\n.landing-gimpo h2 {\n  font-size: 1.35rem; margin: 0 0 1rem; font-weight: 400;\n  border-bottom: 1px solid var(--border); padding-bottom: 0.6rem;\n}\n.landing-gimpo h2 em { font-style: italic; color: var(--accent); }\n.landing-gimpo ul { margin: 0; padding-left: 1.1rem; line-height: 1.9; font-family: sans-serif; }\n.landing-gimpo .gallery-grid {\n  display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 10px;\n}\n.landing-gimpo .gallery-grid img {\n  width: 100%; aspect-ratio: 4/3; object-fit: cover; filter: contrast(1.03);\n}\n.landing-gimpo .faq-item {\n  background: var(--surface); border-left: 3px solid var(--accent);\n  padding: 1rem 1.2rem; margin-bottom: 0.65rem; font-family: sans-serif;\n}\n.landing-gimpo .faq-item h3 { font-size: 0.95rem; margin: 0 0 0.35rem; }\n.landing-gimpo .faq-item p { margin: 0; color: var(--muted); line-height: 1.7; font-size: 0.92rem; }\n.landing-gimpo footer {\n  text-align: center; padding: 2.5rem 1rem; background: var(--dark); color: #999;\n  font-size: 0.82rem; font-family: sans-serif;\n}\n.landing-gimpo .sticky-action-bar { background: rgba(20,20,20,0.97); border-top: 1px solid #3a3a3a; }\n.landing-gimpo .sticky-action-bar .btn-call { background: #2a2a2a; color: #fff; border: 1px solid #555; }\n.landing-gimpo .sticky-action-bar .btn-cta { background: #c9a962; color: #141414; }\n\n.sticky-action-bar {\n  position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;\n  display: flex; gap: 8px; padding: 10px 12px;\n  padding-bottom: max(10px, env(safe-area-inset-bottom));\n  background: rgba(255,255,255,0.97);\n  border-top: 1px solid #ddd;\n  box-shadow: 0 -4px 24px rgba(0,0,0,0.12);\n}\n.sticky-action-bar a {\n  flex: 1; text-align: center; padding: 13px 10px; border-radius: 8px;\n  text-decoration: none; font-weight: 700; font-size: 0.92rem;\n  font-family: \"Segoe UI\", \"Apple SD Gothic Neo\", sans-serif;\n}\n.sticky-action-bar .btn-call { background: #1d4ed8; color: #fff; }\n.sticky-action-bar .btn-cta { background: #2d7058; color: #fff; }\n.has-sticky-bar { padding-bottom: calc(84px + env(safe-area-inset-bottom)); }\n";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="landing-gimpo has-sticky-bar">
        <nav className="topbar">
          <a href="https://agapet.co.kr" className="brand">"아가펫"<span className="brand-sub">PREMIUM ACADEMY</span></a>
          <a href="https://agapet.co.kr" className="top-cta">CONTACT US →</a>
        </nav>
        <header className="hero">
          <div className="hero-inner">
            <span className="badge">"GIMPO PREMIUM PET GROOMING"</span>
            <h1>"송파강아지파양 완벽 가이드"</h1>
            <p>"송파강아지파양에 대해 꼭 알아야 할 정보를 SEO에 최적화된 형태로 제공합니다."</p>
            <a href="https://agapet.co.kr" className="cta-button">"상담 문의하기"</a>
          </div>
        </header>
        <main>

          <section className="card">
            <h2>"About 송파강아지파양"</h2>
            <p>"송파강아지파양는 검색 사용자들이 가장 많이 찾는 주제 중 하나입니다. 본 가이드는 송파강아지파양의 개념부터 실전 활용까지 체계적으로 설명하여 검색 의도에 맞는 정보를 빠르게 전달합니다."</p>
          </section>
          <section className="card">
            <h2>"Key Points"</h2>
            <ul>
            <li>"송파강아지파양의 정의와 활용 분야를 쉽게 이해할 수 있습니다."</li>
            <li>"송파강아지파양 선택 시 반드시 확인해야 할 핵심 체크리스트를 제공합니다."</li>
            <li>"송파강아지파양 관련 자주 묻는 질문과 실용적인 답변을 정리했습니다."</li>
            <li>"송파강아지파양 트렌드와 최신 정보를 지속적으로 업데이트합니다."</li>
            </ul>
          </section>
          <section>
            <h2>"FAQ"</h2>
        <div className="faq-item">
          <h3>"송파강아지파양은 무엇인가요?"</h3>
          <p>"송파강아지파양는 많은 사용자가 관심을 갖는 주제로, 목적과 상황에 맞게 이해하고 활용하는 것이 중요합니다."</p>
        </div>
        <div className="faq-item">
          <h3>"송파강아지파양를 시작하려면 어떻게 해야 하나요?"</h3>
          <p>"먼저 송파강아지파양의 기본 개념을 파악한 뒤, 본 페이지의 핵심 포인트와 FAQ를 참고해 단계별로 진행하세요."</p>
        </div>
        <div className="faq-item">
          <h3>"송파강아지파양 관련 정보는 어디서 확인할 수 있나요?"</h3>
          <p>"이 페이지와 아가펫의 관련 콘텐츠를 통해 송파강아지파양에 대한 신뢰할 수 있는 정보를 확인할 수 있습니다."</p>
        </div>
          </section>
        </main>
        <footer>
          <p>&copy; "아가펫". All rights reserved.</p>
        </footer>
        <div className="sticky-action-bar">
          <a href="tel:05057070401" className="btn-call">📞 전화하기 "0505-707-0401"</a>
          <a href="https://agapet.co.kr" className="btn-cta">"상담 신청"</a>
        </div>
      </div>
    </>
  );
}
