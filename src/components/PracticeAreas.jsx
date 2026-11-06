import React from 'react';
import { PRACTICE_AREAS, SITE } from '../data/content';
import { useScroller } from '../hooks/hooks';
import { ArrowButtons, Button, Icon, Tag } from './ui';

export default function PracticeAreas() {
  const { ref, scroll } = useScroller();
  return (
    <div className="shell">
      <section id="practice-areas" aria-labelledby="services-h" className="dark-panel py-[clamp(32px,5vw,64px)]">
        <div className="services-bg absolute inset-0 -z-10" aria-hidden="true" />
        <div className="px-[clamp(20px,5vw,72px)]">
          <div className="mb-10 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Tag light>Practice areas</Tag>
              <h2 id="services-h">Injury cases we <span className="text-gold">fight for</span></h2>
            </div>
            <div className="max-w-[340px]">
              <p className="mb-4 text-[15px] text-ondark-muted">If you’ve been hurt because of someone else’s negligence, we’re ready to put our experience behind your case.</p>
              <ArrowButtons label="Practice areas" controls="areas-track" onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
            </div>
          </div>

          <ul id="areas-track" ref={ref} tabIndex={0} aria-label="Practice areas" className="scroller scroller-dark">
            {PRACTICE_AREAS.map((a) => (
              <li key={a.title} className="flex-[0_0_78vw] sm:flex-[0_0_clamp(240px,24vw,285px)]">
                <a href={a.href} className="card-link">
                  <span className="chip self-start">{a.chip}</span>
                  <span className="card-icon"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <span className="card-go" aria-hidden="true"><Icon name="arrow" /></span>
                  <span className="sr-only">View practice area</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-center">
            <Button href={`${SITE}/columbia-practice-areas/`}>See all practice areas</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
