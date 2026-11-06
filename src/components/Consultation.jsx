import React, { useRef, useState } from 'react';
import { PHONE } from '../data/content';
import { Button, Icon, Tag } from './ui';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

const RULES = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
  phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a valid phone number.'),
};

function Field({ id, label, required, error, full, children }) {
  return (
    <div className={`flex flex-col gap-2 ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label} {required && <span className="text-gold-2" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p id={`e-${id}`} role="alert" className="m-0 text-[13px] text-[#ffb4ab]">{error}</p>}
    </div>
  );
}

export default function Consultation() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: '', text: '' });
  const [busy, setBusy] = useState(false);

  const validate = (name, value) => {
    const msg = RULES[name] ? RULES[name](value) : '';
    setErrors((e) => ({ ...e, [name]: msg }));
    return !msg;
  };
  const inputProps = (name) => ({
    id: name,
    name,
    className: 'field-input',
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
    onBlur: (e) => RULES[name] && validate(name, e.target.value),
    onChange: (e) => errors[name] && validate(name, e.target.value),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    setStatus({ kind: '', text: '' });

    let firstBad = null;
    Object.keys(RULES).forEach((n) => { if (!validate(n, form.elements[n].value) && !firstBad) firstBad = form.elements[n]; });
    if (firstBad) { firstBad.focus(); setStatus({ kind: 'error', text: 'Please fix the highlighted fields.' }); return; }
    if (form.elements.website.value) return; // honeypot

    if (!ENDPOINT) {
      // No backend connected yet — be honest instead of faking success.
      setStatus({ kind: 'error', text: `This prototype form isn’t connected to the firm’s intake system yet. Please call ${PHONE.display} or use the contact page.` });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      setStatus({ kind: 'ok', text: 'Thank you — we received your message and will be in touch shortly.' });
    } catch {
      setStatus({ kind: 'error', text: `Something went wrong. Please call ${PHONE.display}.` });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="shell">
      <section id="consultation" aria-labelledby="consult-h" className="dark-panel bg-[radial-gradient(800px_500px_at_100%_0%,#1d4468_0%,transparent_70%)] px-[clamp(20px,5vw,72px)] py-[clamp(36px,6vw,80px)]">
        <div className="grid items-start gap-[clamp(28px,5vw,80px)] lg:grid-cols-[5fr_7fr]">
          <div>
            <Tag light>Available 24/7</Tag>
            <h2 id="consult-h" className="mb-5">Get a free <span className="text-gold">consultation</span></h2>
            <p className="max-w-[28em] text-ondark-muted">Tell us what happened. You owe nothing unless we recover compensation for you — and a member of our team will respond as soon as possible.</p>
            <p className="mt-7 flex items-center gap-3 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-none tracking-[-0.02em]">
              <Icon name="phone" className="text-gold" />
              <a href={PHONE.tel} className="text-white no-underline hover:text-gold-2">{PHONE.display}</a>
            </p>
          </div>

          <form ref={formRef} onSubmit={onSubmit} noValidate method="post" action="https://scinjurylawfirm.com/contact-us/"
            className="grid gap-x-4 gap-y-[18px] rounded-panel border border-white/15 bg-white/[.06] p-[18px] sm:grid-cols-2 sm:p-[clamp(20px,3vw,32px)]">
            <Field id="name" label="Name" required error={errors.name}><input type="text" autoComplete="name" required {...inputProps('name')} /></Field>
            <Field id="email" label="Email" required error={errors.email}><input type="email" autoComplete="email" required {...inputProps('email')} /></Field>
            <Field id="phone" label="Phone" required error={errors.phone}><input type="tel" autoComplete="tel" inputMode="tel" required {...inputProps('phone')} /></Field>
            <Field id="zip" label="ZIP code"><input type="text" autoComplete="postal-code" inputMode="numeric" maxLength={10} {...inputProps('zip')} /></Field>
            <Field id="message" label="Describe your case" full><textarea rows={4} {...inputProps('message')} className="field-input min-h-[120px] resize-y" /></Field>

            {/* honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true"><label>Leave blank<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>

            <div className="flex flex-wrap items-center justify-between gap-[18px] sm:col-span-2">
              <Button type="submit" disabled={busy} className="w-full sm:w-auto">Submit case</Button>
              <p className="m-0 max-w-[26em] text-[13px] text-ondark-muted">Submitting this form does not create an attorney-client relationship.</p>
            </div>
            <p role="status" aria-live="polite" className={`m-0 text-[15px] sm:col-span-2 ${status.kind === 'error' ? 'text-[#ffb4ab]' : 'text-[#9be7b4]'} ${status.text ? '' : 'hidden'}`}>{status.text}</p>
          </form>
        </div>
      </section>
    </div>
  );
}
