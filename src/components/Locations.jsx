import React from 'react';
import { LOCATIONS } from '../data/content';
import { Icon, Tag } from './ui';

export default function Locations() {
  return (
    <section id="locations" aria-labelledby="loc-h" className="section-y">
      <div className="container-x">
        <div className="mb-[clamp(32px,5vw,56px)] flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Tag>Visit our offices</Tag>
            <h2 id="loc-h">Close to <span className="text-gold-ink">where you live</span></h2>
          </div>
          <p className="m-0 max-w-[380px] text-muted">Jeffcoat Injury &amp; Car Accident Lawyers has offices across South Carolina — and one in Wisconsin.</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LOCATIONS.map((l) => (
            <li key={l.name} className={`flex flex-col gap-2 rounded-panel border border-line p-6 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-gold ${l.main ? 'bg-tint sm:col-span-2 lg:col-span-3 xl:col-span-2' : 'bg-white'}`}>
              {l.main && <span className="chip chip-line self-start">Main location</span>}
              <h3 className={l.main ? 'text-[1.6rem]' : 'text-[1.25rem]'}>{l.name}</h3>
              <address className="text-[15px] not-italic leading-[1.5] text-muted">{l.lines[0]}<br />{l.lines[1]}</address>
              {l.phone && <a href={l.phone.tel} className="text-[15px] font-semibold text-ink no-underline hover:text-gold-ink">{l.phone.display}</a>}
              <a className="link-arrow mt-auto self-start text-sm" href={l.link[1]}>{l.link[0]} <Icon name="arrow" /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
