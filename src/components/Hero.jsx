import React, { useEffect, useState } from 'react';
import { NAV, PHONE, SITE, STATS } from '../data/content';
import { Button, Icon, Stars } from './ui';

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 981px)');
    const onMq = (m) => { if (m.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => { document.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, []);

  return (
    <header className="relative z-20 flex items-center justify-between gap-5 px-[clamp(20px,3.2vw,44px)] py-[clamp(18px,2.2vw,28px)]">
      <a href={`${SITE}/`} aria-label="Jeffcoat Injury & Car Accident Lawyers — home">
        <img src="/img/jeffcoat-PI-logo-white.svg" width="169" height="55" alt="Jeffcoat Injury & Car Accident Lawyers" className="w-[clamp(130px,13vw,169px)]" />
      </a>

      <nav
        id="site-nav"
        aria-label="Primary"
        onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}
        className={`${open ? 'block' : 'hidden'} absolute inset-x-3 top-[calc(100%-4px)] rounded-panel border border-white/15 bg-[rgba(8,18,31,.97)] p-3.5 backdrop-blur-xl lg:left-1/2 lg:right-auto lg:top-auto lg:block lg:-translate-x-1/2 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}
      >
        <ul className="flex flex-col gap-1 lg:flex-row lg:rounded-full lg:border lg:border-white/10 lg:bg-[rgba(8,18,31,.62)] lg:p-1.5 lg:backdrop-blur-xl">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="block whitespace-nowrap rounded-full px-4 py-[15px] text-[17px] font-medium text-ondark no-underline transition-colors hover:bg-white/10 hover:text-white lg:px-3 lg:py-2.5 lg:text-sm xl:px-4">{n.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-ghost mt-2.5 flex w-full lg:hidden" href={PHONE.tel}><Icon name="phone" />{PHONE.display}</a>
      </nav>

      <div className="flex items-center gap-3.5">
        <Button href="#consultation" small className="hidden !w-auto xl:inline-flex">Free case evaluation</Button>
        <button
          type="button"
          className="relative h-[46px] w-[46px] cursor-pointer rounded-full border border-white/30 bg-white/[.08] p-0 lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute left-3.5 right-3.5 h-0.5 rounded-sm bg-white transition-transform duration-200 ${open ? 'top-[22px] rotate-45' : 'top-4'}`} />
          <span className={`absolute left-3.5 right-3.5 top-[22px] h-0.5 rounded-sm bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-3.5 right-3.5 h-0.5 rounded-sm bg-white transition-transform duration-200 ${open ? 'top-[22px] -rotate-45' : 'top-7'}`} />
        </button>
      </div>
    </header>
  );
}

export default function Hero() {
  return (
    <div className="shell" id="top">
      <div className="hero">
        <Header />

        <div className="flex flex-1 flex-col items-start justify-between gap-8 px-[clamp(20px,3.2vw,44px)] pb-[clamp(24px,4vw,56px)] pt-[clamp(150px,34vw,280px)] lg:flex-row lg:items-center lg:pt-[clamp(24px,4vw,56px)]">
          <div className="max-w-[700px]">
            <p className="chip chip-glass">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#5fd38d] shadow-[0_0_0_4px_rgba(95,211,141,.25)]" aria-hidden="true" />
              South Carolina personal injury lawyers · Free consultations 24/7
            </p>
            <h1 className="my-[22px] text-[clamp(2.1rem,9.6vw,2.8rem)] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[clamp(2.4rem,5vw,4.4rem)]">
              You don’t pay us a dime <span className="text-gold">unless we win.</span>
            </h1>
            <p className="mb-8 max-w-[34em] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.6] text-ondark">
              Tens of millions recovered for injured South Carolinians. We’re paid a percentage of what we recover, and case expenses are deducted from the recovery — so you never pay attorney fees out of pocket.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#consultation">Get a free case evaluation</Button>
              <a className="btn btn-ghost w-full sm:w-auto" href={PHONE.tel}><Icon name="phone" />{PHONE.display}</a>
            </div>
          </div>

          <aside aria-label="Client rating" className="w-full max-w-[420px] rounded-panel border border-white/15 bg-[rgba(12,28,46,.55)] p-5 backdrop-blur-[14px] lg:mb-2 lg:w-[300px] lg:self-end">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[22px] font-bold text-[#4285f4]" aria-hidden="true">G</span>
              <div>
                <Stars />
                <strong className="block text-lg text-white">Excellent</strong>
              </div>
            </div>
            <p className="mb-4 text-sm leading-[1.5] text-ondark-muted">Based on 2,621 Google reviews from injured South Carolinians.</p>
            <Button href="#reviews" small>Read client reviews</Button>
          </aside>
        </div>

        <dl className="mx-[clamp(20px,3.2vw,44px)] grid grid-cols-2 gap-x-3 gap-y-[22px] border-t border-white/20 pb-[clamp(24px,3vw,36px)] pt-[26px] lg:grid-cols-4 lg:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-ondark-muted">{s.label}</dt>
              <dd className="m-0 text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-none tracking-[-0.03em] text-white [font-variant-numeric:tabular-nums]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
