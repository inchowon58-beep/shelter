export const siteUrl = "https://shelter.vercel.app";

import type { RegionSeo } from "./types";

export const incheonSeo: RegionSeo = {
  path: "",
  targetKeywords: [
    "인천강아지파양",
    "인천강아지보호소",
    "인천유기견보호소",
    "인천유기견센터",
    "인천유기견보호센터",
    "인천고양이파양",
    "인천고양이보호소",
    "인천유기묘보호소",
    "강아지무료분양",
    "고양이무료분양",
    "고양이파양",
    "고양이보호소",
    "유기묘보호소",
    "유기동물보호소",
  ],
  siteTitle:
    "인천강아지파양·인천고양이파양·인천강아지보호소·인천고양이보호소·인천유기견·유기묘보호소 전문 안내",
  siteDescription:
    "인천강아지파양·인천고양이파양·인천강아지보호소·인천고양이보호소·인천유기견보호소·인천유기묘보호소 전문 상담센터입니다. 강아지무료분양·고양이무료분양·유기동물보호소 입양 안내. 전화 0505-707-0401",
  metadataTemplate: "%s | 인천강아지·고양이파양",
  metadataKeywords: [
    "인천 강아지 파양",
    "인천 고양이 파양",
    "인천 유기견",
    "인천 유기묘",
    "아가펫",
  ],
  ogSiteName: "인천강아지파양 · 인천고양이파양 · 인천유기견·유기묘보호소 안내",
  ogImageAlt: "인천강아지파양·인천고양이파양·인천유기견·유기묘보호소 전경",
  areaServed: "인천광역시",
  organizationName: "인천강아지파양 · 인천고양이파양 · 인천유기견·유기묘보호센터",
  organizationDescription:
    "인천강아지보호소·인천고양이보호소·인천유기견보호소·인천유기묘보호소 전문 상담. 강아지무료분양·고양이무료분양·유기동물보호소 안내.",
  websiteName: "인천강아지파양·인천고양이파양 안내",
};

export function getRegionPageUrl(seo: RegionSeo): string {
  return seo.path ? `${siteUrl}/${seo.path}` : siteUrl;
}

export function getStructuredDataForRegion(
  seo: RegionSeo,
  faqItems: { question: string; answer: string }[],
) {
  const pageUrl = getRegionPageUrl(seo);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        url: pageUrl,
        name: seo.websiteName,
        description: seo.siteDescription,
        inLanguage: "ko-KR",
      },
      {
        "@type": "AnimalShelter",
        "@id": `${pageUrl}/#organization`,
        name: seo.organizationName,
        url: pageUrl,
        description: seo.organizationDescription,
        telephone: "0505-707-0401",
        areaServed: {
          "@type": "City",
          name: seo.areaServed,
        },
        knowsAbout: [...seo.targetKeywords],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: faqItems.slice(0, 3).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
