"use client";

import { INQUIRY_URL, PHONE_DISPLAY, PHONE_TEL, landingCss, landingPath } from "@/lib/new-landings/catalog";
import type { LandingPageEntry, LandingTemplate } from "@/lib/new-landings/catalog";

type Props = {
  region: string;
  keyword: string;
  content: LandingTemplate;
  images: string[];
  siblings: LandingPageEntry[];
};

function RichText({ value }: { value: string }) {
  const clean = value.replace(/<(?!\/?em\b)[^>]*>/g, "");
  const parts = clean.split(/(<em>[\s\S]*?<\/em>)/g);
  return (
    <>
      {parts.map((part, index) => {
        const emphasized = part.match(/^<em>([\s\S]*)<\/em>$/);
        if (emphasized) return <em key={index}>{emphasized[1]}</em>;
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function closeNav() {
  const toggle = document.getElementById("lp-nav-open") as HTMLInputElement | null;
  if (toggle) toggle.checked = false;
}

export default function KeywordLanding({ region, keyword, content, images, siblings }: Props) {
  const label = `${region} ${keyword}`;
  const [hero, about, ...rest] = images;
  const features = rest.slice(0, 3);
  const gallery = rest.slice(3, 8);

  return (
    <div className="landing-gimpo lp-root has-sticky-bar">
      <style dangerouslySetInnerHTML={{ __html: landingCss }} />
      <header className="lp-header">
        <div className="lp-header-inner">
          <a href={INQUIRY_URL} className="lp-brand">
            <span className="lp-brand-sub">아가펫보호소</span>
            <span className="lp-brand-main">{label}</span>
          </a>
          <input id="lp-nav-open" className="lp-nav-check" type="checkbox" aria-hidden tabIndex={-1} />
          <label htmlFor="lp-nav-open" className="lp-nav-toggle" aria-label="메뉴 열기">
            <span className="lp-nav-toggle-bar" />
          </label>
          <nav className="lp-nav" aria-label="페이지 메뉴">
            <a href="#lp-about" onClick={closeNav}>안내</a>
            <a href="#lp-points" onClick={closeNav}>주요 내용</a>
            <a href="#lp-gallery" onClick={closeNav}>사진</a>
            <a href="#lp-reviews" onClick={closeNav}>후기</a>
            <a href="#lp-faq" onClick={closeNav}>질문</a>
          </nav>
          <a href={INQUIRY_URL} className="lp-top-cta">문의하기</a>
        </div>
      </header>

      <section className="lp-hero" id="lp-hero">
        <div className="lp-hero-bg" style={{ backgroundImage: `url("${hero}")` }} />
        <div className="lp-hero-content">
          <span className="lp-hero-badge">{label}</span>
          <p className="lp-hero-area">{region}</p>
          <h1>
            <RichText value={content.h1Html} />
          </h1>
          <p className="lp-hero-lead">{content.heroLead}</p>
          <div className="lp-hero-actions">
            <a href={`tel:${PHONE_TEL}`} className="lp-btn lp-btn-primary">전화 상담하기</a>
            <a href={INQUIRY_URL} className="lp-btn lp-btn-outline">아가펫보호소 문의하기</a>
          </div>
        </div>
      </section>

      <section className="lp-regions-bar" id="lp-regions">
        <div className="lp-container">
          <p className="lp-regions-label">
            다른 지역 <span>{keyword}</span> 페이지
          </p>
          <div className="lp-regions-scroll">
            {siblings.map((page) =>
              page.region === region ? (
                <span key={page.slug} className="lp-region-chip is-current">
                  {page.region} {keyword}
                </span>
              ) : (
                <a key={page.slug} href={landingPath(page.slug)} className="lp-region-chip">
                  {page.region} {keyword}
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="lp-section" id="lp-about">
        <div className="lp-container lp-about-grid">
          <div>
            <p className="lp-section-label">안내</p>
            <h2 className="lp-section-title">
              <RichText value={content.aboutTitleHtml} />
            </h2>
            <p className="lp-section-desc">{content.aboutBody}</p>
            <div className="lp-nearby">
              <strong>상담 지역</strong>
              <div className="lp-nearby-tags">
                <span className="lp-nearby-tag">{region}</span>
                <span className="lp-nearby-tag">{region} 인근</span>
              </div>
            </div>
          </div>
          <div>
            <img className="lp-about-image" src={about} alt={label} />
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt" id="lp-points">
        <div className="lp-container">
          <p className="lp-section-label">강점</p>
          <h2 className="lp-section-title">
            <RichText value={content.featureTitleHtml} />
          </h2>
          <div className="lp-features">
            {content.features.map((feature, index) => (
              <article key={feature.title} className="lp-feature-card">
                <img className="lp-feature-img" src={features[index]} alt={`${label} ${index + 1}`} />
                <div className="lp-feature-body">
                  <p className="lp-feature-num">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{feature.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section" id="lp-gallery">
        <div className="lp-container">
          <p className="lp-section-label">사진</p>
          <h2 className="lp-section-title">
            <RichText value={content.galleryTitleHtml} />
          </h2>
          <div className="lp-gallery-grid">
            {gallery.map((src, index) => (
              <div key={src + index} className="lp-gallery-item">
                <img src={src} alt={label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt" id="lp-reviews">
        <div className="lp-container">
          <p className="lp-section-label">이야기</p>
          <h2 className="lp-section-title">
            상담 <em>이야기</em>
          </h2>
          <div className="lp-reviews-grid">
            {content.reviews.map((review) => (
              <blockquote key={review.author + review.text.slice(0, 12)} className="lp-review-card">
                <p>{review.text}</p>
                <footer>
                  {review.author}
                  <span>{review.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section" id="lp-faq">
        <div className="lp-container">
          <p className="lp-section-label">질문</p>
          <h2 className="lp-section-title">
            자주 묻는 <em>질문</em>
          </h2>
          <div className="lp-faq-list">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="lp-faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <p>© 아가펫보호소. All rights reserved.</p>
      </footer>
      <div className="sticky-action-bar">
        <a href={`tel:${PHONE_TEL}`} className="btn-call">전화하기 {PHONE_DISPLAY}</a>
        <a href={INQUIRY_URL} className="btn-cta">아가펫보호소 문의하기</a>
      </div>
    </div>
  );
}
