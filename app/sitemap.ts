import type { MetadataRoute } from "next";
import { getRegionPageUrl, incheonSeo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getRegionPageUrl(incheonSeo),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
