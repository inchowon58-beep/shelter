"use client";

import { useRef, useState } from "react";
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
          ? "rounded-sm bg-cream/10 px-3 py-2 text-center text-xs font-medium text-cream ring-1 ring-aga-gold/60 sm:text-sm"
          : "rounded-sm border border-charcoal/30 bg-aga-dark/50 px-3 py-2 text-center text-xs text-warm-light transition hover:border-warm-light/40 hover:bg-cream/5 hover:text-cream sm:text-sm"
      }
    >
      {link.label}
    </a>
  );
}

export default function RegionLinks({ currentSlug }: RegionLinksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);

    if (next) {
      requestAnimationFrame(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };

  return (
    <section
      className="border-t border-charcoal/20 bg-aga-dark py-8"
      aria-labelledby="region-links-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="region-links-panel"
          className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-sm border border-charcoal/40 bg-aga-dark px-5 py-4 text-left transition hover:border-warm-light/30"
        >
          <div>
            <p
              id="region-links-heading"
              className="font-serif text-base text-cream sm:text-lg"
            >
              전국 지역별 강아지파양 안내
            </p>
            <p className="mt-1 text-xs text-warm-light/70">
              클릭하여 지역 목록을 펼치고 원하시는 지역을 선택하세요.
            </p>
          </div>
          <span
            className="shrink-0 text-sm text-aga-gold"
            aria-hidden="true"
          >
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div
            id="region-links-panel"
            ref={panelRef}
            className="mx-auto mt-4 max-w-4xl rounded-sm border border-charcoal/30 bg-aga-dark/80"
          >
            <div className="max-h-72 overflow-y-auto overscroll-contain px-4 py-5 sm:max-h-80 sm:px-6">
              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <RegionLinkItem
                  link={mainRegionLink}
                  currentSlug={currentSlug}
                />
              </div>

              {regionLinkGroups.map((group) => (
                <div key={group.title} className="mb-5 last:mb-0">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-warm-light/60">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {group.links.map((link) => (
                      <RegionLinkItem
                        key={link.slug}
                        link={link}
                        currentSlug={currentSlug}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
