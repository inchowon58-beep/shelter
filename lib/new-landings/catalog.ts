import landingCssJson from "./landing-css.json";
import pagesJson from "./pages.json";
import templatesJson from "./templates.json";

export const landingCss = landingCssJson.css;
export const PUBLIC_SITE = "https://shelter.cattery.co.kr";
export const PHONE_DISPLAY = "0505-707-0401";
export const PHONE_TEL = "05057070401";
export const INQUIRY_URL = "https://agapetstory.co.kr";

export type LandingTemplate = {
  keyword: string;
  title: string;
  description: string;
  keywords: string[];
  h1Html: string;
  heroLead: string;
  aboutTitleHtml: string;
  aboutBody: string;
  featureTitleHtml: string;
  features: { title: string }[];
  galleryTitleHtml: string;
  reviews: { text: string; author: string; place: string }[];
  faqs: { q: string; a: string }[];
};

export type LandingPageEntry = {
  slug: string;
  region: string;
  keyword: string;
};

const templates = templatesJson as Record<string, LandingTemplate>;
const pages = pagesJson.pages as LandingPageEntry[];
const pageMap = new Map(pages.map((page) => [page.slug, page]));

const DOG_IMAGES = [
  "01", "02", "03", "04", "05", "08", "13", "14", "16", "18", "22", "23", "26", "27", "30", "31", "39", "42", "46", "47",
];
const CAT_IMAGES = ["15", "23", "42", "56", "59"];

function isCatKeyword(keyword: string): boolean {
  return keyword.includes("고양이") || keyword.includes("유기묘");
}

export function imagesFor(region: string, keyword: string): string[] {
  const cat = isCatKeyword(keyword);
  const pool = cat ? CAT_IMAGES : DOG_IMAGES;
  const folder = cat ? "maincoon" : "dogboho";
  let hash = 0;
  const seed = `${region}-${keyword}`;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return Array.from({ length: 10 }, (_, index) => {
    const id = pool[(hash + index) % pool.length];
    return `https://image.cattery.co.kr/${folder}/${id}.webp`;
  });
}

function fill(value: unknown, region: string): unknown {
  if (typeof value === "string") return value.replaceAll("{region}", region);
  if (Array.isArray(value)) return value.map((item) => fill(item, region));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, fill(item, region)]),
    );
  }
  return value;
}

export function getLanding(slug: string) {
  const entry = pageMap.get(slug);
  if (!entry) return null;
  const template = templates[entry.keyword];
  if (!template) return null;
  return {
    ...entry,
    content: fill(template, entry.region) as LandingTemplate,
    images: imagesFor(entry.region, entry.keyword),
    siblings: pages.filter((page) => page.keyword === entry.keyword),
  };
}

export function allLandingSlugs(): string[] {
  return pages.map((page) => page.slug);
}

export function landingPath(slug: string): string {
  return `/new/${slug}`;
}

export function landingSitemapUrls(): string[] {
  return pages.map((page) => `${PUBLIC_SITE}${landingPath(page.slug)}`);
}
