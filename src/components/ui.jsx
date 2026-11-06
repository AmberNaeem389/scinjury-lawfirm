import React from 'react';

const S = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };
const ICONS = {
  arrow: [{ ...S, strokeWidth: 2 }, <path key="a" d="M7 17 17 7M8 7h9v9" />],
  left: [{ ...S, strokeWidth: 2 }, <path key="a" d="m15 18-6-6 6-6" />],
  right: [{ ...S, strokeWidth: 2 }, <path key="a" d="m9 18 6-6-6-6" />],
  phone: [{ ...S, strokeWidth: 2 }, <path key="a" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />],
  check: [{ ...S, strokeWidth: 2.4 }, <path key="a" d="M20 6 9 17l-5-5" />],
  star: [{ fill: 'currentColor' }, <path key="a" d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z" />],
  car: [{ ...S, strokeWidth: 1.6 }, <g key="a"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></g>],
  moto: [{ ...S, strokeWidth: 1.6 }, <g key="a"><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6h-3l-3 6 3.5 5.5M12 12h6.5M15 6l3.5 11.5M8.5 17.5H15" /></g>],
  heart: [{ ...S, strokeWidth: 1.6 }, <g key="a"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" /><path d="M3.2 12h4l2-3 3 6 2-3h6.6" /></g>],
  users: [{ ...S, strokeWidth: 1.6 }, <g key="a"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></g>],
  truck: [{ ...S, strokeWidth: 1.6 }, <g key="a"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.3H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></g>],
  hat: [{ ...S, strokeWidth: 1.6 }, <path key="a" d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3" />],
  walk: [{ ...S, strokeWidth: 1.6 }, <g key="a"><circle cx="13" cy="4" r="2" /><path d="m9 21 3-7 3 3v4M6 9l6-1.5 3 3.5 3 1M12 14l-1-6" /></g>],
  alert: [{ ...S, strokeWidth: 1.6 }, <path key="a" d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3zM12 9v4M12 17h.01" />],
  steth: [{ ...S, strokeWidth: 1.6 }, <g key="a"><path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3" /><circle cx="20" cy="10" r="2" /></g>],
};

export function Icon({ name, className = '' }) {
  const [attrs, ...shapes] = ICONS[name];
  return <svg className={`ico ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...attrs}>{shapes}</svg>;
}

/** Pill button/link with the circular arrow used by every primary CTA. */
export function Button({ href, variant = 'gold', small = false, arrow = true, className = '', children, ...rest }) {
  const cls = `btn ${variant === 'gold' ? 'btn-gold w-full justify-between sm:w-auto sm:justify-center' : 'btn-ghost'} ${small ? 'btn-sm' : ''} ${className}`;
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={cls} {...(href ? { href } : {})} {...rest}>
      {children}
      {arrow && <span className="btn-ico"><Icon name="arrow" /></span>}
    </Tag>
  );
}

export function Tag({ light = false, children }) {
  return <p className={`tag ${light ? 'tag-light' : ''}`}>{children}</p>;
}

export function Stars({ className = '' }) {
  return (
    <span className={`flex gap-0.5 text-[15px] text-gold ${className}`} role="img" aria-label="Rated Excellent on Google">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" />)}
    </span>
  );
}

export function ArrowButtons({ onPrev, onNext, controls, label, dark = false }) {
  const base = dark ? 'arrow-btn arrow-btn-dark' : 'arrow-btn';
  return (
    <div className="flex gap-2.5" role="group" aria-label={label}>
      <button type="button" className={base} aria-controls={controls} aria-label={`Previous ${label.toLowerCase()}`} onClick={onPrev}><Icon name="left" /></button>
      <button type="button" className={`${base} arrow-btn-solid`} aria-controls={controls} aria-label={`Next ${label.toLowerCase()}`} onClick={onNext}><Icon name="right" /></button>
    </div>
  );
}
