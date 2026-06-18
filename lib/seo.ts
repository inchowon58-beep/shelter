export const siteUrl = "https://mokpo.vercel.app";

export const targetKeywords = [
  "목포강아지파양",
  "목포강아지보호소",
  "목포유기견보호소",
  "목포유기견센터",
  "목포유기견보호센터",
  "목포고양이파양",
  "목포고양이보호소",
  "목포유기묘보호소",
  "강아지무료분양",
  "고양이무료분양",
  "고양이파양",
  "고양이보호소",
  "유기묘보호소",
  "유기동물보호소",
] as const;

export const siteTitle =
  "목포강아지파양·목포고양이파양·목포강아지보호소·목포고양이보호소·목포유기견·유기묘보호소 전문 안내";

export const siteDescription =
  "목포강아지파양·목포고양이파양·목포강아지보호소·목포고양이보호소·목포유기견보호소·목포유기묘보호소 전문 상담센터입니다. 강아지무료분양·고양이무료분양·유기동물보호소 입양 안내. 전화 0505-707-0401";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "목포강아지파양·목포고양이파양 안내",
        description: siteDescription,
        inLanguage: "ko-KR",
      },
      {
        "@type": "AnimalShelter",
        "@id": `${siteUrl}/#organization`,
        name: "목포강아지파양 · 목포고양이파양 · 목포유기견·유기묘보호센터",
        url: siteUrl,
        description:
          "목포강아지보호소·목포고양이보호소·목포유기견보호소·목포유기묘보호소 전문 상담. 강아지무료분양·고양이무료분양·유기동물보호소 안내.",
        telephone: "0505-707-0401",
        areaServed: {
          "@type": "City",
          name: "전라남도 목포시",
        },
        knowsAbout: [...targetKeywords],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "목포강아지파양은 어떤 경우에 이용하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "이사, 알레르기, 경제적 사정 등 부득이한 사유로 직접 돌보기 어려울 때 목포유기견보호소·목포강아지보호소 상담을 통해 이용하실 수 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "목포고양이파양·고양이보호소 이용은 어떻게 하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "목포고양이파양·목포고양이보호소·목포유기묘보호소 상담을 통해 반려묘 파양 절차를 안내합니다. 고양이무료분양 입양 연계도 지원합니다.",
            },
          },
          {
            "@type": "Question",
            name: "강아지무료분양·고양이무료분양은 어떻게 진행되나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "유기동물보호소에서 보호 중인 반려견·반려묘를 책임 있는 가정에 강아지무료분양·고양이무료분양 형태로 연결합니다. 입양 전 상담과 사후 관리를 제공합니다.",
            },
          },
        ],
      },
    ],
  };
}
