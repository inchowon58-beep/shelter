import { Metadata } from "next";

export const metadata: Metadata = {
  title: "목동강아지파양, 아가펫스토리에서 책임감 있는 새 보금자리를 찾으세요",
  description: "목동 지역에서 강아지 파양을 고민하고 계신가요? 아가펫스토리는 소중한 반려견의 행복을 최우선으로, 안전하고 신뢰할 수 있는 파양 절차와 새로운 가족을 연결해 드립니다.",
  keywords: ["목동강아지파양", "목동 강아지 재입양", "목동 반려견 파양", "강아지 위탁", "반려견 새 가족 찾기"],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://shelter.agapet.co.kr/%EB%AA%A9%EB%8F%99%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "아가펫스토리",
    title: "목동강아지파양, 아가펫스토리에서 책임감 있는 새 보금자리를 찾으세요",
    description: "목동 지역에서 강아지 파양을 고민하고 계신가요? 아가펫스토리는 소중한 반려견의 행복을 최우선으로, 안전하고 신뢰할 수 있는 파양 절차와 새로운 가족을 연결해 드립니다.",
    url: "https://shelter.agapet.co.kr/%EB%AA%A9%EB%8F%99%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
    images: [{ url: "https://shelter.agapet.co.kr/images/landing/목동강아지파양/아가펫강아지보호소 (18).png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "목동강아지파양, 아가펫스토리에서 책임감 있는 새 보금자리를 찾으세요",
    description: "목동 지역에서 강아지 파양을 고민하고 계신가요? 아가펫스토리는 소중한 반려견의 행복을 최우선으로, 안전하고 신뢰할 수 있는 파양 절차와 새로운 가족을 연결해 드립니다.",
    images: ["https://shelter.agapet.co.kr/images/landing/목동강아지파양/아가펫강아지보호소 (18).png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "목동강아지파양, 아가펫스토리에서 책임감 있는 새 보금자리를 찾으세요",
  "description": "목동 지역에서 강아지 파양을 고민하고 계신가요? 아가펫스토리는 소중한 반려견의 행복을 최우선으로, 안전하고 신뢰할 수 있는 파양 절차와 새로운 가족을 연결해 드립니다.",
  "url": "https://shelter.agapet.co.kr/%EB%AA%A9%EB%8F%99%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
  "inLanguage": "ko-KR",
  "isPartOf": {
    "@type": "WebSite",
    "name": "아가펫스토리",
    "url": "https://shelter.agapet.co.kr"
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "목동 지역 강아지 파양 절차는 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아가펫스토리에서는 먼저 전문 상담을 통해 반려견의 상태와 보호자님의 상황을 파악합니다. 이후 새로운 입양 가정 매칭, 입양 전 만남, 최종 입양 확정 및 사후 관리까지 체계적인 절차로 진행됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "파양 시 비용이 발생하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 책임감 있는 파양 및 재입양 과정을 위한 소정의 상담 및 위탁 관리 비용이 발생할 수 있습니다. 자세한 내용은 상담 시 투명하게 안내해 드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "파양 후 강아지의 근황을 알 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아가펫스토리는 반려견의 새 가족 적응을 중요하게 생각하며, 일정 기간 동안 새로운 가정과 소통하며 반려견의 안정적인 정착을 돕습니다. 원하실 경우 제한적으로 근황 공유가 가능합니다."
        }
      }
    ]
  }
};
const pageStyles = "\n.landing-gimpo {\n  --bg: #f7f4ef;\n  --surface: #ffffff;\n  --text: #1c1c1c;\n  --muted: #5c5c5c;\n  --accent: #c9a962;\n  --accent-light: #e8d5a8;\n  --accent-soft: #faf6ee;\n  --accent-hover: #b8923a;\n  --dark: #141414;\n  --border: #e8dfd0;\n  --header-bg: rgba(20,20,20,0.96);\n  --header-text: #ffffff;\n  --hero-overlay: linear-gradient(180deg, rgba(20,20,20,0.75) 0%, rgba(42,36,24,0.65) 100%);\n  --font-serif: 'Cormorant Garamond', 'Noto Serif KR', Georgia, serif;\n  --font-sans: 'Montserrat', 'Noto Sans KR', sans-serif;\n  --btn-radius: 2px;\n  --img-radius: 4px;\n  --btn-primary-bg: #c9a962;\n  --btn-primary-text: #141414;\n  --btn-outline-bg: #ffffff;\n  --btn-outline-text: #141414;\n  --btn-top-bg: #c9a962;\n  --btn-top-text: #141414;\n  --btn-call-bg: #2a2a2a;\n  --btn-call-text: #ffffff;\n  --btn-sticky-cta-bg: #c9a962;\n  --btn-sticky-cta-text: #141414;\n}\n.landing-gimpo .sticky-action-bar { background: rgba(20,20,20,0.97); border-top: 1px solid #3a3a3a; }\n.landing-gimpo .sticky-action-bar .btn-call { background: var(--btn-call-bg); color: var(--btn-call-text); border: 1px solid #555; }\n.landing-gimpo .sticky-action-bar .btn-cta { background: var(--btn-sticky-cta-bg); color: var(--btn-sticky-cta-text); }\n\n.lp-root { min-height: 100vh; background: var(--bg); color: var(--text); font-family: var(--font-sans); line-height: 1.7; }\n.lp-root img { max-width: 100%; height: auto; display: block; }\n.lp-root a { text-decoration: none; color: inherit; transition: opacity 0.25s, color 0.25s; }\n.lp-root a:hover { opacity: 0.88; }\n\n.lp-header {\n  position: sticky; top: 0; z-index: 100;\n  background: var(--header-bg); backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--border);\n}\n.lp-header-inner {\n  max-width: 1200px; margin: 0 auto; padding: 0.75rem 1.5rem;\n  display: flex; align-items: center; justify-content: space-between; gap: 1rem;\n}\n.lp-brand { display: flex; flex-direction: column; line-height: 1.25; flex-shrink: 0; }\n.lp-brand-sub { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 600; }\n.lp-brand-main { font-family: var(--font-serif); font-size: 1.05rem; font-weight: 500; color: var(--header-text); }\n.lp-nav { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.35rem 1.1rem; flex: 1; }\n.lp-nav a { font-size: 0.82rem; font-weight: 500; color: var(--header-text); opacity: 0.88; white-space: nowrap; }\n.lp-nav a:hover { color: var(--accent); opacity: 1; }\n.lp-nav-check { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }\n.lp-nav-toggle {\n  display: none; align-items: center; justify-content: center;\n  width: 2.5rem; height: 2.5rem; padding: 0; border: 1px solid var(--border);\n  border-radius: var(--btn-radius); background: var(--surface); cursor: pointer; flex-shrink: 0;\n}\n.lp-nav-toggle-bar, .lp-nav-toggle-bar::before, .lp-nav-toggle-bar::after {\n  display: block; width: 1.15rem; height: 2px; background: var(--header-text); border-radius: 1px; position: relative;\n}\n.lp-nav-toggle-bar::before, .lp-nav-toggle-bar::after { content: \"\"; position: absolute; left: 0; }\n.lp-nav-toggle-bar::before { top: -6px; }\n.lp-nav-toggle-bar::after { top: 6px; }\n.lp-top-cta {\n  font-size: 0.82rem; font-weight: 700; color: var(--btn-top-text, #fff);\n  background: var(--btn-top-bg, var(--accent)); padding: 0.55rem 1rem; border-radius: var(--btn-radius);\n  white-space: nowrap; flex-shrink: 0;\n}\n.lp-top-cta:hover { opacity: 0.92; color: var(--btn-top-text, #fff); }\n\n.lp-hero { position: relative; min-height: clamp(420px, 72vh, 640px); display: flex; align-items: flex-end; overflow: hidden; }\n.lp-hero-bg {\n  position: absolute; inset: 0; background-size: cover; background-position: center;\n}\n.lp-hero-content {\n  position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem 3.5rem;\n  color: #fff; width: 100%;\n  text-shadow: 0 2px 16px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.45);\n}\n.lp-hero-badge {\n  display: inline-block; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.22em;\n  text-transform: uppercase; color: #fff; margin-bottom: 1rem;\n}\n.lp-hero-area { font-size: 0.9rem; color: rgba(255,255,255,0.92); margin-bottom: 0.5rem; }\n.lp-hero h1 {\n  font-family: var(--font-serif); font-size: clamp(2rem, 5vw, 3.2rem);\n  font-weight: 400; line-height: 1.2; margin: 0 0 1rem; max-width: 720px;\n}\n.lp-hero h1 em { font-style: italic; color: #fff; }\n.lp-hero-lead { font-size: 1.02rem; line-height: 1.85; max-width: 580px; color: rgba(255,255,255,0.95); margin: 0 0 1.75rem; }\n.lp-hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }\n.lp-btn {\n  display: inline-block; padding: 0.85rem 1.6rem; font-weight: 600; font-size: 0.88rem;\n  border-radius: var(--btn-radius); letter-spacing: 0.04em;\n  text-shadow: none;\n}\n.lp-btn-primary {\n  background: var(--btn-primary-bg, var(--accent));\n  color: var(--btn-primary-text, #fff);\n}\n.lp-btn-outline {\n  background: var(--btn-outline-bg, rgba(255,255,255,0.95));\n  color: var(--btn-outline-text, var(--dark));\n  border: none;\n}\n.lp-btn-primary:hover, .lp-btn-outline:hover, .lp-top-cta:hover { opacity: 0.92; }\n\n.lp-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }\n.lp-section { padding: clamp(3rem, 6vw, 5rem) 0; scroll-margin-top: 80px; }\n.lp-section-alt { background: var(--surface); }\n.lp-section-label {\n  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;\n  color: var(--accent); margin-bottom: 0.75rem;\n}\n.lp-section-title {\n  font-family: var(--font-serif); font-size: clamp(1.75rem, 3.5vw, 2.6rem);\n  font-weight: 400; line-height: 1.25; margin: 0 0 1rem;\n}\n.lp-section-title em { font-style: italic; color: var(--accent); }\n.lp-section-desc { color: var(--muted); max-width: 560px; line-height: 1.85; }\n\n.lp-about-grid {\n  display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 4vw, 4rem); align-items: center;\n}\n.lp-about-image {\n  border-radius: var(--img-radius); overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.12);\n  aspect-ratio: 4/5; object-fit: cover; width: 100%;\n}\n.lp-nearby {\n  margin-top: 1.25rem; padding: 1rem 1.2rem; background: var(--accent-soft);\n  border-radius: var(--img-radius); font-size: 0.92rem; color: var(--text);\n}\n.lp-nearby strong { color: var(--accent); display: block; margin-bottom: 0.5rem; }\n.lp-nearby-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }\n.lp-nearby-tag {\n  display: inline-block; padding: 0.3rem 0.65rem; font-size: 0.82rem;\n  background: var(--surface); border: 1px solid var(--border); border-radius: 999px; color: var(--muted);\n}\n\n.lp-regions-bar {\n  background: var(--surface); border-bottom: 1px solid var(--border);\n  padding: 0.85rem 0; scroll-margin-top: 80px;\n}\n.lp-regions-label {\n  margin: 0 0 0.65rem; font-size: 0.82rem; font-weight: 600; color: var(--muted);\n}\n.lp-regions-label span { color: var(--accent); }\n.lp-regions-scroll {\n  display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;\n  -webkit-overflow-scrolling: touch; scrollbar-width: none;\n}\n.lp-regions-scroll::-webkit-scrollbar { display: none; }\n.lp-region-chip {\n  flex: 0 0 auto; display: inline-block; padding: 0.55rem 1rem;\n  font-size: 0.84rem; font-weight: 600; border-radius: 999px;\n  background: var(--btn-primary-bg, var(--accent));\n  color: var(--btn-primary-text, #fff);\n  border: 1px solid transparent; white-space: nowrap;\n}\n.lp-region-chip:hover { opacity: 0.9; color: var(--btn-primary-text, #fff); }\n.lp-region-chip.is-current {\n  background: var(--surface); color: var(--text);\n  border-color: var(--border); pointer-events: none;\n}\n\n.lp-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }\n.lp-feature-card {\n  background: var(--surface); border: 1px solid var(--border); border-radius: var(--img-radius);\n  overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.05);\n}\n.lp-feature-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }\n.lp-feature-body { padding: 1.25rem 1.35rem 1.5rem; }\n.lp-feature-num {\n  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 0.5rem;\n}\n.lp-feature-body h3 { font-size: 1.05rem; margin: 0; font-weight: 600; }\n\n.lp-gallery-grid {\n  display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;\n}\n.lp-gallery-item {\n  aspect-ratio: 1; overflow: hidden; border-radius: var(--img-radius);\n  border: 1px solid var(--border); background: var(--surface);\n}\n.lp-gallery-item img {\n  width: 100%; height: 100%; object-fit: cover; display: block;\n}\n\n.lp-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }\n.lp-review-card {\n  background: var(--surface); border: 1px solid var(--border); border-radius: var(--img-radius);\n  padding: 1.5rem 1.4rem; position: relative;\n}\n.lp-review-card::before {\n  content: '\"'; font-family: var(--font-serif); font-size: 3rem; line-height: 1;\n  color: var(--accent); opacity: 0.35; position: absolute; top: 0.5rem; left: 1rem;\n}\n.lp-review-card p { margin: 1.5rem 0 1rem; font-size: 0.95rem; line-height: 1.75; color: var(--text); }\n.lp-review-card footer { font-size: 0.82rem; color: var(--muted); }\n.lp-review-card footer span { display: block; color: var(--accent); margin-top: 0.2rem; font-weight: 500; }\n\n.lp-faq-list { max-width: 820px; }\n.lp-faq-item { border-bottom: 1px solid var(--border); padding: 1.25rem 0; }\n.lp-faq-item:first-child { border-top: 1px solid var(--border); }\n.lp-faq-item h3 { font-size: 1rem; margin: 0 0 0.45rem; font-weight: 600; }\n.lp-faq-item p { margin: 0; color: var(--muted); line-height: 1.75; font-size: 0.94rem; }\n\n.lp-footer {\n  background: var(--dark); color: rgba(255,255,255,0.55); text-align: center;\n  padding: 2.5rem 1.5rem; font-size: 0.85rem;\n}\n.lp-root.has-sticky-bar { padding-bottom: calc(84px + env(safe-area-inset-bottom)); }\n\n@media (max-width: 900px) {\n  .lp-header-inner {\n    flex-wrap: wrap; align-items: center; gap: 0.5rem 0.65rem;\n    padding: 0.65rem 1rem;\n  }\n  .lp-brand { max-width: calc(100% - 7.5rem); min-width: 0; }\n  .lp-brand-main { font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  .lp-nav-toggle { display: inline-flex; margin-left: auto; order: 2; }\n  .lp-top-cta { order: 3; font-size: 0.72rem; padding: 0.48rem 0.75rem; max-width: 6.5rem; overflow: hidden; text-overflow: ellipsis; }\n  .lp-nav {\n    order: 4; flex: 1 0 100%; width: 100%;\n    display: none; flex-direction: column; align-items: stretch; gap: 0;\n    max-height: 0; overflow: hidden; padding: 0;\n    border-top: 0 solid var(--border); transition: max-height 0.25s ease, padding 0.25s ease;\n  }\n  .lp-nav a {\n    padding: 0.75rem 0.15rem; border-bottom: 1px solid var(--border);\n    font-size: 0.88rem; white-space: normal;\n  }\n  .lp-header-inner:has(.lp-nav-check:checked) .lp-nav {\n    display: flex; max-height: 320px; padding: 0.35rem 0 0.15rem;\n    border-top-width: 1px;\n  }\n  .lp-header-inner:has(.lp-nav-check:checked) .lp-nav-toggle { border-color: var(--accent); }\n  .lp-about-grid, .lp-features, .lp-reviews-grid { grid-template-columns: 1fr; }\n  .lp-gallery-grid { grid-template-columns: repeat(2, 1fr); }\n  .lp-section { scroll-margin-top: 72px; }\n}\n@media (max-width: 520px) {\n  .lp-gallery-grid { grid-template-columns: 1fr; }\n}\n\n.sticky-action-bar {\n  position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;\n  display: flex; gap: 8px; padding: 10px 12px;\n  padding-bottom: max(10px, env(safe-area-inset-bottom));\n  background: rgba(255,255,255,0.97);\n  border-top: 1px solid #ddd;\n  box-shadow: 0 -4px 24px rgba(0,0,0,0.12);\n}\n.sticky-action-bar a {\n  flex: 1; text-align: center; padding: 13px 10px; border-radius: 8px;\n  text-decoration: none; font-weight: 700; font-size: 0.92rem;\n  font-family: \"Noto Sans KR\", \"Segoe UI\", sans-serif;\n}\n.sticky-action-bar .btn-call { background: var(--btn-call-bg, #2563eb); color: var(--btn-call-text, #fff); }\n.sticky-action-bar .btn-cta { background: var(--btn-sticky-cta-bg, #0f172a); color: var(--btn-sticky-cta-text, #fff); }\n.lp-hero-bg { background-image: url(\"/images/landing/\ubaa9\ub3d9\uac15\uc544\uc9c0\ud30c\uc591/\uc544\uac00\ud3ab\uac15\uc544\uc9c0\ubcf4\ud638\uc18c (18).png\"); }";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="landing-gimpo lp-root has-sticky-bar">
        <header className="lp-header">
          <div className="lp-header-inner">
            <a href="https://agapetstory.co.kr" className="lp-brand">
              <span className="lp-brand-sub">"아가펫스토리"</span>
              <span className="lp-brand-main">"목동강아지파양"</span>
            </a>
            <input type="checkbox" id="lp-nav-open" className="lp-nav-check" aria-hidden="true" tabIndex={-1} />
            <label htmlFor="lp-nav-open" className="lp-nav-toggle" aria-label="메뉴 열기"><span className="lp-nav-toggle-bar"></span></label>
            <nav className="lp-nav" aria-label="페이지 메뉴"><a href="#lp-about">"안내"</a><a href="#lp-points">"서비스 절차"</a><a href="#lp-gallery">"희망 사례"</a><a href="#lp-reviews">"솔직한 후기"</a><a href="#lp-faq">"질의응답"</a></nav>
            <a href="https://agapetstory.co.kr" className="lp-top-cta">"아가펫스토리 문의하기"</a>
          </div>
        </header>

        <section className="lp-hero" id="lp-hero">
          <div className="lp-hero-bg" />
          <div className="lp-hero-content">
            <span className="lp-hero-badge">"목동강아지파양"</span>
            <p className="lp-hero-area">"서울특별시 양천구"</p>
            <h1>"목동강아지파양, 아가펫스토리와 함께하는 책임 있는 선택"</h1>
            <p className="lp-hero-lead">"홀로 감당하기 어려운 결정을 내리셔야 한다면, 아가펫스토리가 따뜻한 마음으로 함께하겠습니다. 소중한 반려견이 행복할 수 있는 새로운 내일을 함께 만들어가요."</p>
            <div className="lp-hero-actions"><a href="tel:05057070401" className="lp-btn lp-btn-primary">전화 상담하기</a><a href="https://agapetstory.co.kr" className="lp-btn lp-btn-outline">"아가펫스토리 문의하기"</a></div>
          </div>
        </section>

        <section className="lp-regions-bar" id="lp-regions">
          <div className="lp-container">
            <p className="lp-regions-label">다른 지역 <span>"강아지파양"</span> 페이지</p>
            <div className="lp-regions-scroll"><span className="lp-region-chip is-current">"목동강아지파양"</span></div>
          </div>
        </section>
        <section className="lp-section" id="lp-about">
          <div className="lp-container lp-about-grid">
            <div>
              <p className="lp-section-label">"Guide"</p>
              <h2 className="lp-section-title">"목동강아지파양, 현명한 결정을 위한 안내"</h2>
              <p className="lp-section-desc">"아가펫스토리는 목동 지역 반려인들의 깊은 고민을 이해하며, 강아지 파양이라는 어려운 결정을 존중합니다. 단순히 헤어짐이 아닌, 소중한 생명의 더 나은 미래를 위한 책임감 있는 과정이 될 수 있도록 전문적인 상담과 체계적인 절차를 제공합니다. 반려견의 특성과 건강 상태를 면밀히 파악하여 가장 적합한 새로운 가정을 연결하는 데 집중합니다."</p>
              <div className="lp-nearby"><strong>인근 지역</strong><div className="lp-nearby-tags"><span className="lp-nearby-tag">"신정동"</span><span className="lp-nearby-tag">"오목교"</span><span className="lp-nearby-tag">"양천구청"</span><span className="lp-nearby-tag">"염창동"</span><span className="lp-nearby-tag">"화곡동"</span></div></div>
            </div>
            <div><img className="lp-about-image" src="/images/landing/목동강아지파양/아가펫강아지보호소 (28).png" alt="목동강아지파양" loading="lazy" /></div>
          </div>
        </section>

        <section className="lp-section lp-section-alt" id="lp-points">
          <div className="lp-container">
            <p className="lp-section-label">"Service"</p>
            <h2 className="lp-section-title">"목동강아지파양, 아가펫스토리의 책임감 있는 과정"</h2>
            <div className="lp-features">
          <article className="lp-feature-card">
            <img className="lp-feature-img" src="/images/landing/목동강아지파양/아가펫강아지보호소 (56).jpg" alt="목동강아지파양 1" loading="lazy" />
            <div className="lp-feature-body">
              <p className="lp-feature-num">01</p>
              <h3>"반려견의 특성을 고려한 맞춤형 상담"</h3>
            </div>
          </article>
          <article className="lp-feature-card">
            <img className="lp-feature-img" src="/images/landing/목동강아지파양/아가펫강아지보호소 (23).png" alt="목동강아지파양 2" loading="lazy" />
            <div className="lp-feature-body">
              <p className="lp-feature-num">02</p>
              <h3>"안전하고 검증된 새 가족 연결 시스템"</h3>
            </div>
          </article>
          <article className="lp-feature-card">
            <img className="lp-feature-img" src="/images/landing/목동강아지파양/아가펫강아지보호소 (48).jpg" alt="목동강아지파양 3" loading="lazy" />
            <div className="lp-feature-body">
              <p className="lp-feature-num">03</p>
              <h3>"마지막까지 책임지는 세심한 사후 관리"</h3>
            </div>
          </article>
            </div>
          </div>
        </section>

        <section className="lp-section" id="lp-gallery">
          <div className="lp-container">
            <p className="lp-section-label">"Gallery"</p>
            <h2 className="lp-section-title">"목동강아지파양 후 반려견의 행복한 새출발"</h2>
            <div className="lp-gallery-grid">
            <div className="lp-gallery-item"><img src="/images/landing/목동강아지파양/아가펫강아지보호소 (8).png" alt="목동강아지파양" loading="lazy" /></div>
            <div className="lp-gallery-item"><img src="/images/landing/목동강아지파양/아가펫강아지보호소 (44).jpg" alt="목동강아지파양" loading="lazy" /></div>
            <div className="lp-gallery-item"><img src="/images/landing/목동강아지파양/아가펫강아지보호소 (46).jpg" alt="목동강아지파양" loading="lazy" /></div>
            <div className="lp-gallery-item"><img src="/images/landing/목동강아지파양/아가펫강아지보호소 (51).jpg" alt="목동강아지파양" loading="lazy" /></div>
            <div className="lp-gallery-item"><img src="/images/landing/목동강아지파양/아가펫강아지보호소 (10).png" alt="목동강아지파양" loading="lazy" /></div>
            </div>
          </div>
        </section>

        <section className="lp-section lp-section-alt" id="lp-reviews">
          <div className="lp-container">
            <p className="lp-section-label">"Review"</p>
            <h2 className="lp-section-title">"목동강아지파양 이용자들의 따뜻한 후기"</h2>
            <div className="lp-reviews-grid">
          <blockquote className="lp-review-card">
            <p>"갑작스러운 해외 발령으로 목동에서 키우던 강아지 파양을 고민했어요. 죄책감에 시달렸는데, 아가펫스토리 덕분에 저희 아롱이가 정말 좋은 가족을 만나 행복하게 지내고 있다는 소식을 들으니 마음이 놓입니다. 처음부터 끝까지 정말 감사했습니다."</p>
            <footer>"김OO"<span>"목동강아지파양"</span></footer>
          </blockquote>
          <blockquote className="lp-review-card">
            <p>"양천구 오목교 근처에 살면서 피치 못할 사정으로 강아지를 보낼 수밖에 없었습니다. 아가펫스토리는 반려견의 건강 상태부터 성격까지 세심하게 파악해주셨고, 덕분에 아이에게 꼭 맞는 새 가정을 찾아주셨어요. 전문가의 도움이 정말 필요했습니다."</p>
            <footer>"박OO"<span>"목동강아지파양"</span></footer>
          </blockquote>
          <blockquote className="lp-review-card">
            <p>"목동에서 오랫동안 함께했던 반려견 파양은 정말 힘든 결정이었어요. 아가펫스토리 덕분에 저희 아이가 다시 사랑받는 모습을 보면서 큰 위안을 얻었습니다. 모든 과정이 투명하고 진심으로 느껴져서 더욱 신뢰할 수 있었어요."</p>
            <footer>"이OO"<span>"목동강아지파양"</span></footer>
          </blockquote>
            </div>
          </div>
        </section>

        <section className="lp-section" id="lp-faq">
          <div className="lp-container">
            <p className="lp-section-label">"FAQ"</p>
            <h2 className="lp-section-title">"목동강아지파양, 자주 묻는 질문"</h2>
            <div className="lp-faq-list">
          <div className="lp-faq-item">
            <h3>"목동 지역 강아지 파양 절차는 어떻게 되나요?"</h3>
            <p>"아가펫스토리에서는 먼저 전문 상담을 통해 반려견의 상태와 보호자님의 상황을 파악합니다. 이후 새로운 입양 가정 매칭, 입양 전 만남, 최종 입양 확정 및 사후 관리까지 체계적인 절차로 진행됩니다."</p>
          </div>
          <div className="lp-faq-item">
            <h3>"파양 시 비용이 발생하나요?"</h3>
            <p>"네, 책임감 있는 파양 및 재입양 과정을 위한 소정의 상담 및 위탁 관리 비용이 발생할 수 있습니다. 자세한 내용은 상담 시 투명하게 안내해 드립니다."</p>
          </div>
          <div className="lp-faq-item">
            <h3>"파양 후 강아지의 근황을 알 수 있나요?"</h3>
            <p>"아가펫스토리는 반려견의 새 가족 적응을 중요하게 생각하며, 일정 기간 동안 새로운 가정과 소통하며 반려견의 안정적인 정착을 돕습니다. 원하실 경우 제한적으로 근황 공유가 가능합니다."</p>
          </div>
            </div>
          </div>
        </section>

        <footer className="lp-footer">
          <p>&copy; "아가펫스토리". All rights reserved.</p>
        </footer>
        <div className="sticky-action-bar">
          <a href="tel:05057070401" className="btn-call">📞 전화하기 "0505-707-0401"</a>
          <a href="https://agapetstory.co.kr" className="btn-cta">"아가펫스토리 문의하기"</a>
        </div>
      </div>
    </>
  );
}
