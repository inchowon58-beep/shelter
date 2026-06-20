import {
  mainRegionLink,
  regionLinkGroups,
  type RegionLink,
} from "@/lib/regions/region-links";

type RegionLinksProps = {
  currentSlug?: string;
};

function RegionLinkItem({
  link,
  currentSlug,
}: {
  link: RegionLink;
  currentSlug?: string;
}) {
  const isActive = link.slug === (currentSlug ?? "");

  return (
    <a
      href={link.href}
      className={
        isActive
          ? "font-medium text-cream underline decoration-aga-gold underline-offset-2"
          : "text-warm-light/80 transition hover:text-cream hover:underline"
      }
    >
      {link.name}
    </a>
  );
}

export default function RegionLinks({ currentSlug }: RegionLinksProps) {
  return (
    <section
      className="border-t border-charcoal/20 bg-aga-dark py-10"
      aria-labelledby="region-links-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2
          id="region-links-heading"
          className="text-center font-serif text-base text-cream sm:text-lg"
        >
          전국 지역별 강아지·고양이파양 안내
        </h2>
        <p className="mt-2 text-center text-xs text-warm-light/70">
          원하시는 지역을 선택하시면 해당 지역 상담 페이지로 이동합니다.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs sm:text-sm">
          <RegionLinkItem link={mainRegionLink} currentSlug={currentSlug} />
          <span className="text-warm-light/30" aria-hidden="true">
            |
          </span>
          {regionLinkGroups[0].links.map((link, index) => (
            <span key={link.slug} className="inline-flex items-center gap-3">
              <RegionLinkItem link={link} currentSlug={currentSlug} />
              {index < regionLinkGroups[0].links.length - 1 && (
                <span className="text-warm-light/30" aria-hidden="true">
                  |
                </span>
              )}
            </span>
          ))}
        </div>

        {regionLinkGroups.slice(1).map((group) => (
          <div
            key={group.title}
            className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs sm:text-sm"
          >
            {group.links.map((link, index) => (
              <span key={link.slug} className="inline-flex items-center gap-3">
                <RegionLinkItem link={link} currentSlug={currentSlug} />
                {index < group.links.length - 1 && (
                  <span className="text-warm-light/30" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
