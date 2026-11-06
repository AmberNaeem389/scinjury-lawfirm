import React from 'react';
import { CREDENTIALS, SITE } from '../data/content';
import { Button, Icon, Tag } from './ui';

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-h" className="pt-[clamp(40px,6vw,72px)]">
      <div className="container-x">
        <h2 id="trust-h" className="mb-7 text-center !text-[13px] font-semibold uppercase leading-[1.2] tracking-[.16em] !text-muted">We’re known and trusted</h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-[clamp(22px,4vw,52px)] gap-y-[18px]">
          {CREDENTIALS.map((c) => (
            <li key={c.alt}><img src={c.src} width={c.w} height={c.h} loading="lazy" alt={c.alt} className="h-[clamp(52px,6vw,76px)] w-auto object-contain" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="section-y">
      <div className="reveal container-x grid items-start gap-[clamp(32px,6vw,96px)] lg:grid-cols-[5fr_7fr]">
        <div>
          <Tag>About the firm</Tag>
          <h2 id="about-h">Jeffcoat Wins™: <br />Every Dollar Counts™</h2>
        </div>
        <div className="text-muted">
          <p className="text-[clamp(1.1rem,1.6vw,1.3rem)] font-semibold leading-[1.45] text-ink">Personal injury lawyers serving Columbia and all of North and South Carolina.</p>
          <p>Have you recently been injured in an accident in South Carolina? Was another party’s negligence to blame? You could be entitled to substantial compensation for your medical bills, lost wages, and other damages. The personal injury lawyers at Jeffcoat Injury and Car Accident Lawyers can help you maximize the value of your injury claim.</p>
          <p>Our legal team has over a century of combined experience representing accident victims. We’ve recovered over $90 million for injured clients like you.</p>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <Button href="#consultation">Get a free consultation</Button>
            <a className="link-arrow" href={`${SITE}/about-us/our-team/`}>Meet our team <Icon name="arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
