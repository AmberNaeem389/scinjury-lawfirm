import React from 'react';
import { STEPS, WE_WILL } from '../data/content';
import { Icon, Tag } from './ui';

export default function HowWeWork() {
  return (
    <section id="how-we-work" aria-labelledby="how-h" className="section-y">
      <div className="container-x">
        <div className="reveal max-w-[760px]">
          <Tag>How we work</Tag>
          <h2 id="how-h">Risk-free from <span className="text-gold-ink">day one</span></h2>
          <p className="mt-[22px] max-w-[36em] text-[1.1rem] text-muted">You don’t pay us a dime unless we win. We are paid a percentage of what we recover for you. Expenses are also deducted from the overall recovery on your behalf.</p>
        </div>

        <ol className="reveal mb-[clamp(56px,8vw,104px)] mt-[clamp(32px,5vw,56px)] grid gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s} className="flex min-h-[200px] flex-col justify-start gap-7 rounded-panel bg-ink p-7 text-ondark lg:min-h-[200px]">
              <span className="text-[2.75rem] font-bold leading-none tracking-[-0.03em] text-gold [font-variant-numeric:tabular-nums]">{String(i + 1).padStart(2, '0')}</span>
              <p className="m-0 text-[1.1rem] leading-[1.5] text-white">{s}</p>
            </li>
          ))}
        </ol>

        <div className="reveal grid items-center gap-[clamp(28px,6vw,88px)] lg:grid-cols-[4fr_7fr]">
          <img src="/img/hallway-e1739554434438.jpg" width="500" height="755" loading="lazy" alt="Two Jeffcoat attorneys talking in the firm’s office hallway" className="max-h-[420px] w-full rounded-shell object-cover object-[50%_30%] lg:max-h-[640px]" />
          <div>
            <Tag>Why Jeffcoat</Tag>
            <h2 className="mb-7 !text-[clamp(1.6rem,3vw,2.4rem)]">When you hire our attorneys, we will:</h2>
            <ul className="grid gap-3.5">
              {WE_WILL.map((t) => (
                <li key={t} className="flex items-start gap-3.5 text-copy">
                  <Icon name="check" className="mt-[3px] !h-[26px] !w-[26px] rounded-full bg-gold p-1 text-ink" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-[26px] text-muted">Our legal team will handle all aspects of your case while you rest and recover from your injuries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
