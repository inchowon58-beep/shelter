import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { getFirstShelterImagePath } from "@/lib/images";
import { getRegionPageUrl, getStructuredDataForRegion } from "@/lib/regions/seo";
import { getSubRegionBySlug, subRegionSlugs } from "@/lib/regions/subregions";

type PageProps = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return subRegionSlugs.map((region) => ({ region }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region: slug } = await params;
  const subRegion = getSubRegionBySlug(slug);

  if (!subRegion) {
    return {};
  }

  const { seo } = subRegion;
  const ogImagePath =
    getFirstShelterImagePath(subRegion.content.imageFolder) ??
    `/images/${slug}/shelter-01.png`;

  return {
    title: seo.siteTitle,
    description: seo.siteDescription,
    keywords: [...seo.targetKeywords, ...seo.metadataKeywords],
    alternates: {
      canonical: getRegionPageUrl(seo),
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: getRegionPageUrl(seo),
      siteName: seo.ogSiteName,
      title: seo.siteTitle,
      description: seo.siteDescription,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.siteTitle,
      description: seo.siteDescription,
      images: [ogImagePath],
    },
  };
}

export default async function SubRegionPage({ params }: PageProps) {
  const { region: slug } = await params;
  const subRegion = getSubRegionBySlug(slug);

  if (!subRegion) {
    notFound();
  }

  const structuredData = getStructuredDataForRegion(
    subRegion.seo,
    subRegion.content.faqItems,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LandingPage content={subRegion.content} />
    </>
  );
}
