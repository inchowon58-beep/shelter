import type { MetadataRoute } from "next";
import { getRegionPageUrl, incheonSeo } from "@/lib/seo";
import { subRegions } from "@/lib/regions/subregions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getRegionPageUrl(incheonSeo),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...subRegions.map((region) => ({
      url: getRegionPageUrl(region.seo),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
