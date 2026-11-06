import React from 'react';
import { FOOTER_LINKS, PHONE, SITE } from '../data/content';
import { Icon } from './ui';

function LinkColumn({ title, label, links, external }) {
  return (
    <nav aria-label={label || title}>
      <h3 className="mb-[18px] text-[13px] font-semibold uppercase leading-none tracking-[.12em] !text-gold-2">{title}</h3>
      <ul className="grid gap-1">
        {links.map(([text, href]) => (
          <li key={text}><a href={href} {...(external ? { rel: 'noopener' } : {})} className="inline-block py-1.5 text-[15px] text-ondark no-underline hover:text-gold-2 hover:underline">{text}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <div className="shell !pt-0">
      <footer className="dark-panel px-[clamp(20px,5vw,72px)] pb-7 pt-[clamp(36px,6vw,72px)]">
        <div className="mb-10 border-b border-white/15 pb-10">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)]">Take a Stand™. <span className="text-gold">Call today.</span></h2>
          <p className="mb-5 mt-3.5 text-ondark-muted">Free consultation — you don’t pay unless we win.</p>
          <a href={PHONE.tel} className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.03em] text-gold no-underline hover:text-gold-2">{PHONE.display}</a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <img src="/img/jeffcoat-PI-logo-white.svg" width="169" height="55" loading="lazy" alt="Jeffcoat Injury & Car Accident Lawyers" />
            <p className="mb-0 mt-[18px] max-w-[26em] text-sm text-ondark-muted">Jeffcoat Injury and Car Accident Lawyers is a South Carolina personal injury law firm serving Columbia, Lexington, Orangeburg, Blythewood, and their surrounding areas.</p>
          </div>
          <LinkColumn title="The firm" label="Firm" links={FOOTER_LINKS.firm} />
          <LinkColumn title="Areas we serve" links={FOOTER_LINKS.areas} />
          <LinkColumn title="Follow us" label="Social media" links={FOOTER_LINKS.social} external />
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-[13px] text-ondark-muted">
          <p className="mb-2">We handle cases in South Carolina, North Carolina, Georgia, Iowa, Wisconsin, Minnesota, Illinois, Colorado, Virginia and Washington, DC.</p>
          <p className="mb-2">
            © 2026 Jeffcoat Injury And Car Accident Lawyers. All rights reserved.{' '}
            <a className="text-ondark" href={`${SITE}/privacy-policy/`}>Privacy Policy</a> · <a className="text-ondark" href={`${SITE}/sitemap/`}>Sitemap</a> · <a className="text-ondark" href={`${SITE}/disclaimer/`}>Disclaimer</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/** Mobile-only sticky call bar. */
export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-white/15 bg-[rgba(11,26,43,.96)] px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-[10px] sm:hidden">
      <a className="btn btn-ghost min-h-[52px] flex-1 !px-3" href={PHONE.tel}><Icon name="phone" />Call now</a>
      <a className="btn btn-gold min-h-[52px] flex-1 justify-center !px-3" href="#consultation">Free evaluation</a>
    </div>
  );
}
