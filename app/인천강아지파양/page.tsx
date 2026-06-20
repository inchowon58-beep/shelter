import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인천강아지파양 | 아가펫 - 완벽 가이드",
  description: "인천강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 인천강아지파양 관련 최신 내용을 확인하세요.",
  keywords: ["인천강아지파양", "인천강아지파양 가이드", "인천강아지파양 추천", "인천강아지파양 정보", "아가펫"],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://shelter.agapet.co.kr/%EC%9D%B8%EC%B2%9C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "아가펫",
    title: "인천강아지파양 | 아가펫 - 완벽 가이드",
    description: "인천강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 인천강아지파양 관련 최신 내용을 확인하세요.",
    url: "https://shelter.agapet.co.kr/%EC%9D%B8%EC%B2%9C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
    images: [{ url: "https://shelter.agapet.co.kr/images/shelter-01.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "인천강아지파양 | 아가펫 - 완벽 가이드",
    description: "인천강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 인천강아지파양 관련 최신 내용을 확인하세요.",
    images: ["https://shelter.agapet.co.kr/images/shelter-01.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "인천강아지파양 | 아가펫 - 완벽 가이드",
  "description": "인천강아지파양에 대한 핵심 정보, 선택 기준, 활용 팁을 한곳에 정리했습니다. 아가펫에서 인천강아지파양 관련 최신 내용을 확인하세요.",
  "url": "https://shelter.agapet.co.kr/%EC%9D%B8%EC%B2%9C%EA%B0%95%EC%95%84%EC%A7%80%ED%8C%8C%EC%96%91",
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
        "name": "인천강아지파양은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "인천강아지파양는 많은 사용자가 관심을 갖는 주제로, 목적과 상황에 맞게 이해하고 활용하는 것이 중요합니다."
        }
      },
      {
        "@type": "Question",
        "name": "인천강아지파양를 시작하려면 어떻게 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "먼저 인천강아지파양의 기본 개념을 파악한 뒤, 본 페이지의 핵심 포인트와 FAQ를 참고해 단계별로 진행하세요."
        }
      },
      {
        "@type": "Question",
        "name": "인천강아지파양 관련 정보는 어디서 확인할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "이 페이지와 아가펫의 관련 콘텐츠를 통해 인천강아지파양에 대한 신뢰할 수 있는 정보를 확인할 수 있습니다."
        }
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <h1>"인천강아지파양 완벽 가이드"</h1>
        <p>"인천강아지파양에 대해 꼭 알아야 할 정보를 SEO에 최적화된 형태로 제공합니다."</p>
      </header>
      <main>
        <section>
          <h2>"인천강아지파양란?"</h2>
          <p>"인천강아지파양는 검색 사용자들이 가장 많이 찾는 주제 중 하나입니다. 본 가이드는 인천강아지파양의 개념부터 실전 활용까지 체계적으로 설명하여 검색 의도에 맞는 정보를 빠르게 전달합니다."</p>
        </section>
        <section>
          <h2>"인천강아지파양의 핵심 포인트"</h2>
          <ul>
            <li>"인천강아지파양의 정의와 활용 분야를 쉽게 이해할 수 있습니다."</li>
            <li>"인천강아지파양 선택 시 반드시 확인해야 할 핵심 체크리스트를 제공합니다."</li>
            <li>"인천강아지파양 관련 자주 묻는 질문과 실용적인 답변을 정리했습니다."</li>
            <li>"인천강아지파양 트렌드와 최신 정보를 지속적으로 업데이트합니다."</li>
          </ul>
        </section>
        <section>
          <h2>자주 묻는 질문</h2>
          <article>
            <h3>"인천강아지파양은 무엇인가요?"</h3>
            <p>"인천강아지파양는 많은 사용자가 관심을 갖는 주제로, 목적과 상황에 맞게 이해하고 활용하는 것이 중요합니다."</p>
          </article>
          <article>
            <h3>"인천강아지파양를 시작하려면 어떻게 해야 하나요?"</h3>
            <p>"먼저 인천강아지파양의 기본 개념을 파악한 뒤, 본 페이지의 핵심 포인트와 FAQ를 참고해 단계별로 진행하세요."</p>
          </article>
          <article>
            <h3>"인천강아지파양 관련 정보는 어디서 확인할 수 있나요?"</h3>
            <p>"이 페이지와 아가펫의 관련 콘텐츠를 통해 인천강아지파양에 대한 신뢰할 수 있는 정보를 확인할 수 있습니다."</p>
          </article>
        </section>
      </main>
      <footer>
        <p>&copy; "아가펫". All rights reserved.</p>
      </footer>
    </>
  );
}
