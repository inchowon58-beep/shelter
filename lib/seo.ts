import { incheonContent } from "@/lib/regions/incheon";
import {
  getRegionPageUrl,
  getStructuredDataForRegion,
  incheonSeo,
  siteUrl,
} from "@/lib/regions/seo";

export { siteUrl };

export const targetKeywords = incheonSeo.targetKeywords;
export const siteTitle = incheonSeo.siteTitle;
export const siteDescription = incheonSeo.siteDescription;

export function getStructuredData() {
  return getStructuredDataForRegion(incheonSeo, incheonContent.faqItems);
}

export { getRegionPageUrl, getStructuredDataForRegion, incheonSeo };
