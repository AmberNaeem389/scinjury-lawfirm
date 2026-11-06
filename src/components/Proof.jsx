import React from 'react';
import { RESULTS, RESULTS_URL, REVIEWS, SITE } from '../data/content';
import { useScroller } from '../hooks/hooks';
import { ArrowButtons, Button, Icon, Stars, Tag } from './ui';

const headCls = 'mb-[clamp(32px,5vw,56px)] flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between';
const sideCls = 'flex flex-col items-start gap-5';

export function Results() {
  return (
    <section id="results" aria-labelledby="results-h" className="section-y">
      <div className="container-x">
        <div className={`reveal ${headCls}`}>
          <div>
            <Tag>Personal injury awards</Tag>
            <h2 id="results-h">A history of <br />strong results</h2>
          </div>
          <div className={`${sideCls} max-w-[380px]`}>
            <p className="m-0 text-muted">A selection of real cases we’ve handled for injured South Carolinians.</p>
            <Button href={RESULTS_URL}>See more case results</Button>
          </div>
        </div>

        <table className="reveal block w-full border-collapse sm:table">
          <caption className="sr-only">Selected case results</caption>
          <thead className="hidden sm:table-header-group">
            <tr className="text-[15px] text-muted">
              <th scope="col" className="pb-[18px] text-left font-medium">Case</th>
              <th scope="col" className="pb-[18px] text-left font-medium">Category</th>
              <th scope="col" className="pb-[18px] pr-7 text-right font-medium">Result</th>
              <th scope="col"><span className="sr-only">Details</span></th>
            </tr>
          </thead>
          <tbody className="block sm:table-row-group">
            {RESULTS.map((r) => (
              <tr key={r.amount} className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-2 border-t border-line py-5 transition-colors last:border-b hover:bg-tint sm:table-row sm:py-0">
                <th scope="row" className="col-start-1 p-0 text-left text-[clamp(1.05rem,2vw,1.5rem)] font-semibold leading-tight tracking-[-0.02em] text-ink sm:table-cell sm:py-[26px] sm:pr-2">{r.title}</th>
                <td className="col-start-1 row-start-2 p-0 sm:table-cell sm:py-[26px] sm:pr-2"><span className="chip chip-line">{r.category}</span></td>
                <td className="col-start-1 row-start-3 mt-1 p-0 text-left text-[clamp(1.15rem,2vw,1.6rem)] font-bold leading-none tracking-[-0.02em] text-ink [font-variant-numeric:tabular-nums] sm:mt-0 sm:table-cell sm:whitespace-nowrap sm:py-[26px] sm:pr-7 sm:text-right">{r.amount}</td>
                <td className="col-start-2 row-span-3 row-start-1 self-center p-0 text-right sm:table-cell sm:w-16 sm:py-[26px]">
                  <a className="go-link" href={RESULTS_URL} aria-label={`View case results: ${r.title}, ${r.amount}`}><Icon name="arrow" /></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-[22px] text-sm text-muted">These are real cases. Results vary based on the facts of each case. Past success does not guarantee future outcomes.</p>
      </div>
    </section>
  );
}

export function Reviews() {
  const { ref, scroll } = useScroller();
  return (
    <section id="reviews" aria-labelledby="reviews-h" className="section-y bg-tint">
      <div className="container-x">
        <div className={headCls}>
          <div>
            <Tag>Client reviews</Tag>
            <h2 id="reviews-h">In our clients’ <span className="text-gold-ink">own words</span></h2>
          </div>
          <div className={`${sideCls} max-w-[480px]`}>
            <p className="m-0 flex flex-wrap items-center gap-x-2 text-[15px] text-ink">
              <Stars /> <strong>Excellent</strong> — based on 2,621 Google reviews
            </p>
            <ArrowButtons dark label="Reviews" controls="reviews-track" onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
          </div>
        </div>

        <ul id="reviews-track" ref={ref} tabIndex={0} aria-label="Client reviews" className="scroller scroller-light">
          {REVIEWS.map((q) => (
            <li key={q.name} className="flex w-[84vw] flex-none flex-col justify-between gap-6 rounded-panel border border-line bg-white p-6 sm:w-[clamp(290px,34vw,440px)] sm:p-[30px]">
              <blockquote className="m-0">
                <p className="m-0 text-base leading-[1.7] text-copy before:mb-[18px] before:block before:h-[3px] before:w-9 before:rounded-sm before:bg-gold">{q.text}</p>
              </blockquote>
              <p className="m-0 text-base font-semibold leading-[1.2] text-ink">{q.name}</p>
            </li>
          ))}
        </ul>
        <p className="mt-[22px] text-sm"><a className="font-semibold text-ink" href={`${SITE}/about-us/testimonials/`}>Read more testimonials</a></p>
      </div>
    </section>
  );
}
