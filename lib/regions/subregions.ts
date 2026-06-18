export type ContentVariant = {
  heroTitleLines: [string, string];
  heroHighlight: string;
  missionTitleLines: [string, string, string];
  storyTitleLines: [string, string, string];
  promiseTitles: [string, string, string];
  stats: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];
  processStep2Title: string;
};

export const contentVariants: ContentVariant[] = [
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "사랑은 멈추지 않고"],
    heroHighlight: "새 길을 찾습니다.",
    missionTitleLines: ["판단하지 않고,", "끝까지", "함께 있겠습니다."],
    storyTitleLines: ["작은 사랑들이 모여", "한 아이의", "평생이 됩니다."],
    promiseTitles: ["따뜻하게", "오래", "솔직하게"],
    stats: [
      { value: "365일", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "98%", label: "입양 성공률" },
    ],
    processStep2Title: "상담 및 맞춤 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "작은 발걸음에"],
    heroHighlight: "큰 사랑을 담습니다.",
    missionTitleLines: ["두려움 대신,", "희망을", "남기겠습니다."],
    storyTitleLines: ["한 번의 선택이", "한 생명의", "내일이 됩니다."],
    promiseTitles: ["먼저 귀 기울입니다", "끝까지 함께합니다", "정직하게 안내합니다"],
    stats: [
      { value: "24시간", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "99%", label: "입양 성공률" },
    ],
    processStep2Title: "맞춤 절차 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "모든 생명은"],
    heroHighlight: "소중합니다.",
    missionTitleLines: ["버리지 않고,", "끝까지", "돌봅니다."],
    storyTitleLines: ["작은 손길 하나가", "큰 변화를", "만듭니다."],
    promiseTitles: ["정성껏 돌봅니다", "끝까지 책임집니다", "편하게 물어보세요"],
    stats: [
      { value: "365일", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "97%", label: "입양 성공률" },
    ],
    processStep2Title: "상담 및 맞춤 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "함께 걷는"],
    heroHighlight: "따뜻한 길.",
    missionTitleLines: ["외로운 길이", "아니도록", "함께합니다."],
    storyTitleLines: ["사랑은 멈추지 않고", "새로운 인연을", "찾아갑니다."],
    promiseTitles: ["따뜻하게", "오래", "솔직하게"],
    stats: [
      { value: "24시간", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "98%", label: "입양 성공률" },
    ],
    processStep2Title: "맞춤 절차 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "끝까지 함께하는"],
    heroHighlight: "보호의 약속.",
    missionTitleLines: ["안락사 없이,", "끝까지", "곁을 지킵니다."],
    storyTitleLines: ["작은 사랑들이 모여", "한 아이의", "평생이 됩니다."],
    promiseTitles: ["먼저 귀 기울입니다", "끝까지 함께합니다", "정직하게 안내합니다"],
    stats: [
      { value: "365일", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "99%", label: "입양 성공률" },
    ],
    processStep2Title: "상담 및 맞춤 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "사랑은 다시"],
    heroHighlight: "이어질 수 있습니다.",
    missionTitleLines: ["두려움 대신,", "희망을", "남기겠습니다."],
    storyTitleLines: ["한 번의 선택이", "한 생명의", "내일이 됩니다."],
    promiseTitles: ["정성껏 돌봅니다", "끝까지 책임집니다", "편하게 물어보세요"],
    stats: [
      { value: "24시간", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "98%", label: "입양 성공률" },
    ],
    processStep2Title: "맞춤 절차 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "따뜻한 보호,"],
    heroHighlight: "새로운 시작.",
    missionTitleLines: ["판단하지 않고,", "끝까지", "함께 있겠습니다."],
    storyTitleLines: ["작은 손길 하나가", "큰 변화를", "만듭니다."],
    promiseTitles: ["따뜻하게", "오래", "솔직하게"],
    stats: [
      { value: "365일", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "97%", label: "입양 성공률" },
    ],
    processStep2Title: "상담 및 맞춤 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "작은 발걸음에"],
    heroHighlight: "큰 사랑을 담습니다.",
    missionTitleLines: ["외로운 길이", "아니도록", "함께합니다."],
    storyTitleLines: ["사랑은 멈추지 않고", "새로운 인연을", "찾아갑니다."],
    promiseTitles: ["먼저 귀 기울입니다", "끝까지 함께합니다", "정직하게 안내합니다"],
    stats: [
      { value: "24시간", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "99%", label: "입양 성공률" },
    ],
    processStep2Title: "맞춤 절차 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "모든 생명은"],
    heroHighlight: "소중합니다.",
    missionTitleLines: ["안락사 없이,", "끝까지", "곁을 지킵니다."],
    storyTitleLines: ["작은 사랑들이 모여", "한 아이의", "평생이 됩니다."],
    promiseTitles: ["정성껏 돌봅니다", "끝까지 책임집니다", "편하게 물어보세요"],
    stats: [
      { value: "365일", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "98%", label: "입양 성공률" },
    ],
    processStep2Title: "상담 및 맞춤 안내",
  },
  {
    heroTitleLines: ["{name}강아지·고양이파양,", "함께 걷는"],
    heroHighlight: "따뜻한 길.",
    missionTitleLines: ["두려움 대신,", "희망을", "남기겠습니다."],
    storyTitleLines: ["한 번의 선택이", "한 생명의", "내일이 됩니다."],
    promiseTitles: ["따뜻하게", "오래", "솔직하게"],
    stats: [
      { value: "24시간", label: "상담 가능" },
      { value: "10년+", label: "케어 경험" },
      { value: "0", label: "안락사" },
      { value: "97%", label: "입양 성공률" },
    ],
    processStep2Title: "맞춤 절차 안내",
  },
];

export type SubRegionDefinition = {
  slug: string;
  name: string;
  englishName: string;
  areaServed: string;
  nearbyArea: string;
  variantIndex: number;
};

export const subRegionDefinitions: SubRegionDefinition[] = [
  {
    slug: "bucheon",
    name: "부천",
    englishName: "Bucheon",
    areaServed: "경기도 부천시",
    nearbyArea: "부천 및 수도권 인근",
    variantIndex: 0,
  },
  {
    slug: "busan",
    name: "부산",
    englishName: "Busan",
    areaServed: "부산광역시",
    nearbyArea: "부산 및 경남 인근",
    variantIndex: 1,
  },
  {
    slug: "ulsan",
    name: "울산",
    englishName: "Ulsan",
    areaServed: "울산광역시",
    nearbyArea: "울산 및 경남 동부 인근",
    variantIndex: 2,
  },
  {
    slug: "gumi",
    name: "구미",
    englishName: "Gumi",
    areaServed: "경상북도 구미시",
    nearbyArea: "구미 및 경북 인근",
    variantIndex: 3,
  },
  {
    slug: "jeonju",
    name: "전주",
    englishName: "Jeonju",
    areaServed: "전라북도 전주시",
    nearbyArea: "전주 및 전북 인근",
    variantIndex: 4,
  },
  {
    slug: "daegu",
    name: "대구",
    englishName: "Daegu",
    areaServed: "대구광역시",
    nearbyArea: "대구 및 경북 인근",
    variantIndex: 5,
  },
  {
    slug: "siheung",
    name: "시흥",
    englishName: "Siheung",
    areaServed: "경기도 시흥시",
    nearbyArea: "시흥 및 수도권 인근",
    variantIndex: 6,
  },
  {
    slug: "gwangmyeong",
    name: "광명",
    englishName: "Gwangmyeong",
    areaServed: "경기도 광명시",
    nearbyArea: "광명 및 수도권 인근",
    variantIndex: 7,
  },
  {
    slug: "suwon",
    name: "수원",
    englishName: "Suwon",
    areaServed: "경기도 수원시",
    nearbyArea: "수원 및 경기 남부 인근",
    variantIndex: 8,
  },
  {
    slug: "uijeongbu",
    name: "의정부",
    englishName: "Uijeongbu",
    areaServed: "경기도 의정부시",
    nearbyArea: "의정부 및 경기 북부 인근",
    variantIndex: 9,
  },
];

function fill(template: string, name: string): string {
  return template.replaceAll("{name}", name);
}

function fillLines(lines: string[], name: string): string[] {
  return lines.map((line) => fill(line, name));
}

export function createSubRegionContent(def: SubRegionDefinition) {
  const { name, slug, englishName, nearbyArea, variantIndex } = def;
  const variant = contentVariants[variantIndex];

  const heroTitleLines = fillLines(variant.heroTitleLines, name);
  const missionTitleLines = fillLines(variant.missionTitleLines, name);
  const storyTitleLines = fillLines(variant.storyTitleLines, name);

  const processStep2Descriptions = [
    `${name}유기견보호소·${name}유기묘보호소·${name}유기견보호센터 연계 방법을 보호자님 상황에 맞게 설명합니다. 서두르지 않고 반려동물에게 가장 나은 길을 함께 고릅니다.`,
    `${name}유기견보호소·${name}유기묘보호소·${name}유기견보호센터 연계 방법을 보호자님 상황에 맞게 설명합니다. 급하지 않게 반려동물에게 가장 나은 길을 함께 고릅니다.`,
  ];

  return {
    slug,
    imageFolder: slug,
    brandName: `${name}강아지·고양이파양`,
    brandSubtitle: `${englishName} Pet Shelter Guide`,
    heroBadge: `안락사 없는 보호공간 · ${name}유기견·유기묘보호소 · 아가펫`,
    heroTitleLines,
    heroHighlight: variant.heroHighlight,
    heroSubtitle: `${name}유기견보호소 · ${name}유기묘보호소 · 반려동물을 위한 진심 어린 안내`,
    heroIntro: `${name}강아지파양·${name}고양이파양·${name}강아지보호소·${name}고양이보호소·${name}유기견보호소·${name}유기묘보호소 전문 상담센터입니다. ${name}유기견센터·${name}유기견보호센터와 연계하여 반려견·반려묘 파양, 유기동물보호소 위탁, 강아지무료분양·고양이무료분양 입양까지 신중하고 따뜻한 절차로 안내해 드립니다.`,
    missionTitleLines,
    missionText: `${name}강아지파양·${name}고양이파양은 반려견·반려묘 입양뿐 아니라 불가피한 파양을 고민하는 보호자에게도 문을 엽니다. ${name}유기견보호소·${name}유기묘보호소·유기동물보호소와 연계하여 반려동물과 사람, 양쪽 모두가 덜 아픈 길을 함께 찾는 것이 저희의 일입니다.`,
    stats: variant.stats,
    storyTitleLines,
    storyText: `${name}강아지파양·${name}고양이파양부터 ${name}유기견센터·${name}유기견보호센터·${name}유기묘보호소 연계, 강아지무료분양·고양이무료분양·유기동물보호소 입양까지 ${name} 지역 반려견·반려묘 보호 전 과정을 안내합니다.`,
    shelterTitleLines: [`${name}강아지·고양이보호소·`, `${name}유기견·유기묘보호센터 시설`],
    shelterText: `${name}유기견보호소·${name}유기묘보호소·유기동물보호소 기준에 맞춰 반려견·반려묘가 안전하고 편안하게 지낼 수 있도록 깨끗한 보호 공간, 따뜻한 일상 케어, 꾸준한 건강 관리를 제공합니다.`,
    processIntro: `${name}강아지파양·${name}고양이파양·${name}유기견·유기묘보호소 이용은 신중하고 투명한 4단계 절차로 진행됩니다. 단계별로 천천히 함께 걷겠습니다.`,
    contactText: `${name}강아지파양·${name}고양이파양, ${name}유기견센터·${name}유기견보호센터·${name}유기묘보호소 이용, 강아지무료분양·고양이무료분양·유기동물보호소 입양에 관한 모든 궁금한 점은 전화 한 통으로 해결하실 수 있습니다.`,
    footerBrand: `${name}강아지·고양이파양`,
    footerSubtitle: `AGAPET · ${englishName} Pet Shelter Guide`,
    footerKeywords: `${name}강아지파양 · ${name}고양이파양 · ${name}강아지보호소 · ${name}고양이보호소 · ${name}유기견보호소 · ${name}유기묘보호소 · ${name}유기견센터 · ${name}유기견보호센터 · 강아지무료분양 · 고양이무료분양 · 고양이파양 · 고양이보호소 · 유기묘보호소 · 유기동물보호소`,
    footerCopyright: `${name}강아지·고양이파양 안내`,
    altPrefixes: [
      `${name}강아지파양·${name}강아지보호소 전경`,
      `${name}고양이파양·${name}고양이보호소 케어`,
      `${name}유기견보호소 위탁견`,
      `${name}유기묘보호소 입양 대기묘`,
      "강아지무료분양 대기 반려견",
      "고양이무료분양 대기 반려묘",
    ],
    processSteps: [
      {
        step: "1",
        title: "전화 상담",
        description: `${name}강아지파양·${name}고양이파양·${name}강아지보호소·${name}고양이보호소 상담 전화(0505-707-0401)로 연락 주세요. 반려견·반려묘의 나이, 성격, 파양 사유를 비밀 보장 하에 편안하게 상담해 드립니다.`,
      },
      {
        step: "2",
        title: variant.processStep2Title,
        description: processStep2Descriptions[variantIndex % 2],
      },
      {
        step: "3",
        title: "보호소 입소",
        description: `${name}유기견센터·유기묘보호소 연계 보호소에 입소하면 정서 안정과 일상 케어가 시작됩니다. 유기동물보호소 기준에 맞는 편안한 공간에서 반려견·반려묘를 보호합니다.`,
      },
      {
        step: "4",
        title: "입양·무료분양 연계",
        description: `준비가 되면 책임 있는 가정에 강아지무료분양·고양이무료분양을 연계합니다. ${name}강아지파양·${name}고양이파양 이후에도 입양 가정과의 안부 확인을 이어갑니다.`,
      },
    ],
    serviceItems: [
      {
        title: `${name}강아지파양 상담`,
        text: `갑작스러운 상황으로 반려견을 맡기셔야 할 때, ${name}강아지파양 전문 상담으로 차분하고 따뜻한 절차를 안내해 드립니다.`,
      },
      {
        title: `${name}고양이파양·${name}고양이보호소 상담`,
        text: `반려묘를 돌보기 어려운 상황에서 ${name}고양이파양·${name}고양이보호소·${name}유기묘보호소 상담을 통해 신중한 파양 절차를 안내합니다.`,
      },
      {
        title: `${name}강아지보호소·${name}유기견보호소 연계`,
        text: `${name}강아지보호소 및 ${name}유기견보호소와 협력하여 반려견이 보호소에서도 안심할 수 있는 환경을 마련합니다.`,
      },
      {
        title: `${name}고양이보호소·유기묘보호소 연계`,
        text: `${name}고양이보호소·${name}유기묘보호소와 연계하여 반려묘가 스트레스 없이 지낼 수 있는 보호 환경을 준비합니다.`,
      },
      {
        title: `${name}유기견센터·${name}유기견보호센터 안내`,
        text: `${name}유기견센터 등록부터 ${name}유기견보호센터 입소, 필요한 관리까지 단계별로 상세하게 안내합니다.`,
      },
      {
        title: "강아지무료분양·고양이무료분양 입양",
        text: "유기동물보호소에서 보호 중인 반려견·반려묘를 좋은 가정에 연결합니다. 강아지무료분양·고양이무료분양 입양 전 상담과 이후 관리까지 지원합니다.",
      },
    ],
    promises: [
      {
        num: "01",
        title: variant.promiseTitles[0],
        text: `${name}강아지파양·${name}고양이파양 상담은 보호자님의 마음을 먼저 헤아립니다. 반려견·반려묘와 사람 모두를 위한 방법을 함께 찾습니다.`,
      },
      {
        num: "02",
        title: variant.promiseTitles[1],
        text: `${name}유기견보호센터·${name}유기묘보호소 입소 이후에도 일상 케어, 강아지무료분양·고양이무료분양 입양 연계, 사후 안부 확인까지 꾸준히 지원합니다.`,
      },
      {
        num: "03",
        title: variant.promiseTitles[2],
        text: `${name}유기견보호소·${name}유기묘보호소 보호 과정과 비용을 명확히 알려 드립니다. 유기동물보호소 기준에 맞는 투명한 운영이 신뢰의 시작입니다.`,
      },
    ],
    faqItems: [
      {
        question: `${name}강아지파양은 어떤 경우에 이용하나요?`,
        answer: `이사, 알레르기, 경제적 사정, 가족 구성 변화 등 부득이한 사유로 직접 돌보기 어려울 때 이용하실 수 있습니다. ${name}강아지보호소·${name}유기견보호소 상담을 통해 임시 보호, 가족 위탁 등 다른 선택지도 함께 안내해 드립니다.`,
      },
      {
        question: `${name}고양이파양·고양이보호소 이용은 어떻게 하나요?`,
        answer: `반려묘를 직접 돌보기 어려운 경우 ${name}고양이파양·${name}고양이보호소·${name}유기묘보호소 상담을 통해 파양 절차를 안내합니다. 고양이파양·고양이보호소·유기묘보호소 관련 궁금한 점도 전화로 문의하실 수 있습니다.`,
      },
      {
        question: "강아지무료분양·고양이무료분양은 어떻게 신청하나요?",
        answer:
          "유기동물보호소에서 보호 중인 반려견·반려묘를 대상으로 책임 있는 입양 가정에 강아지무료분양·고양이무료분양을 연계합니다. 전화 상담(0505-707-0401) 후 입양 전 가정 상담과 서약서 작성을 진행합니다.",
      },
      {
        question: `${name}유기견센터와 ${name}유기견보호센터는 어떻게 다른가요?`,
        answer: `${name}유기견센터는 유기견 행정·관리 기관이며, ${name}유기견보호센터는 실제 보호와 케어가 이루어지는 시설입니다. 본 상담센터는 두 기관과 연계해 파양·보호·입양 절차를 안내합니다.`,
      },
      {
        question: `${name} 지역 외에서도 파양이 가능한가요?`,
        answer: `주로 ${nearbyArea} 지역을 대상으로 운영하고 있으나, 상황에 따라 방문 상담이 가능합니다. ${name}유기견보호소·${name}유기묘보호소 입소 전 먼저 전화 상담을 통해 거주 지역과 반려동물 정보를 알려 주세요.`,
      },
      {
        question: "유기동물보호소 이용 시 비용이 발생하나요?",
        answer: `보호소 운영비, 건강 관리비, 사료·의료비 등 실비가 발생할 수 있습니다. ${name}강아지파양·${name}고양이파양·${name}강아지보호소·${name}고양이보호소 상담 시 투명하게 안내해 드리며, 어려우신 경우에도 최대한 도움을 드리고 있습니다.`,
      },
      {
        question: "입양 후에도 연락이 가능한가요?",
        answer: `네, 입양 가정과의 사후 관리를 위해 정기적인 안부 확인을 진행합니다. ${name}강아지파양·${name}고양이파양·강아지무료분양·고양이무료분양을 통해 보호된 반려동물이 새 가정에서 잘 지낼 수 있도록 지속적으로 지원합니다.`,
      },
    ],
  };
}

export function createSubRegionSeo(def: SubRegionDefinition) {
  const { name, slug, areaServed } = def;

  return {
    path: slug,
    targetKeywords: [
      `${name}강아지파양`,
      `${name}강아지보호소`,
      `${name}유기견보호소`,
      `${name}유기견센터`,
      `${name}유기견보호센터`,
      `${name}고양이파양`,
      `${name}고양이보호소`,
      `${name}유기묘보호소`,
      "강아지무료분양",
      "고양이무료분양",
      "고양이파양",
      "고양이보호소",
      "유기묘보호소",
      "유기동물보호소",
    ],
    siteTitle: `${name}강아지파양·${name}고양이파양·${name}강아지보호소·${name}고양이보호소·${name}유기견·유기묘보호소 전문 안내`,
    siteDescription: `${name}강아지파양·${name}고양이파양·${name}강아지보호소·${name}고양이보호소·${name}유기견보호소·${name}유기묘보호소 전문 상담센터입니다. 강아지무료분양·고양이무료분양·유기동물보호소 입양 안내. 전화 0505-707-0401`,
    metadataTemplate: `%s | ${name}강아지·고양이파양`,
    metadataKeywords: [
      `${name} 강아지 파양`,
      `${name} 고양이 파양`,
      `${name} 유기견`,
      `${name} 유기묘`,
      "아가펫",
    ],
    ogSiteName: `${name}강아지파양 · ${name}고양이파양 · ${name}유기견·유기묘보호소 안내`,
    ogImageAlt: `${name}강아지파양·${name}고양이파양·${name}유기견·유기묘보호소 전경`,
    areaServed,
    organizationName: `${name}강아지파양 · ${name}고양이파양 · ${name}유기견·유기묘보호센터`,
    organizationDescription: `${name}강아지보호소·${name}고양이보호소·${name}유기견보호소·${name}유기묘보호소 전문 상담. 강아지무료분양·고양이무료분양·유기동물보호소 안내.`,
    websiteName: `${name}강아지파양·${name}고양이파양 안내`,
  };
}

import type { RegionPageContent, RegionSeo } from "./types";

export type SubRegion = {
  definition: SubRegionDefinition;
  content: RegionPageContent;
  seo: RegionSeo;
};

export const subRegions: SubRegion[] = subRegionDefinitions.map((definition) => ({
  definition,
  content: createSubRegionContent(definition) as RegionPageContent,
  seo: createSubRegionSeo(definition),
}));

export function getSubRegionBySlug(slug: string): SubRegion | undefined {
  return subRegions.find((region) => region.definition.slug === slug);
}

export const subRegionSlugs = subRegionDefinitions.map((def) => def.slug);
