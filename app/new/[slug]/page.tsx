import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KeywordLanding from "@/components/KeywordLanding";
import { PUBLIC_SITE, getLanding, landingPath } from "@/lib/new-landings/catalog";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLanding(decodeURIComponent(slug));
  if (!page) return {};
  const url = `${PUBLIC_SITE}${landingPath(page.slug)}`;
  return {
    title: { absolute: page.content.title },
    description: page.content.description,
    keywords: page.content.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "아가펫보호소",
      title: page.content.title,
      description: page.content.description,
      url,
      images: [{ url: page.images[0] }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.content.title,
      description: page.content.description,
      images: [page.images[0]],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getLanding(decodeURIComponent(slug));
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.content.title,
    description: page.content.description,
    url: `${PUBLIC_SITE}${landingPath(page.slug)}`,
    inLanguage: "ko-KR",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: page.content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KeywordLanding
        region={page.region}
        keyword={page.keyword}
        content={page.content}
        images={page.images}
        siblings={page.siblings}
      />
    </>
  );
}
