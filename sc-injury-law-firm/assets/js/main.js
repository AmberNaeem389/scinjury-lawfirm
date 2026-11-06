(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  var header = document.querySelector('.site-header');

  function setMenu(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('no-scroll', open);
  }
  if (toggle) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 981px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* ---------- Scroll carousels (native scroll-snap + buttons) ---------- */
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('aria-controls'));
      if (!track) return;
      var card = track.firstElementChild;
      var step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollBy({ left: step * Number(btn.dataset.scroll), behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Reveal on scroll (content stays visible without JS / reduced motion) ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -4% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Consultation form ---------- */
  var form = document.getElementById('consult-form');
  if (form) {
    var status = document.getElementById('form-status');
    var rules = {
      name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.'; },
      phone: function (v) { return v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a valid phone number.'; }
    };
    function check(input) {
      var rule = rules[input.name];
      if (!rule) return true;
      var msg = rule(input.value);
      var out = document.getElementById('e-' + input.name);
      out.textContent = msg;
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }
    form.querySelectorAll('input[required]').forEach(function (i) {
      i.addEventListener('blur', function () { check(i); });
      i.addEventListener('input', function () { if (i.getAttribute('aria-invalid') === 'true') check(i); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form__status';
      var firstBad = null;
      form.querySelectorAll('input[required]').forEach(function (i) { if (!check(i) && !firstBad) firstBad = i; });
      if (firstBad) { firstBad.focus(); status.textContent = 'Please fix the highlighted fields.'; status.classList.add('is-error'); return; }
      if (form.website && form.website.value) return; // honeypot

      var endpoint = form.dataset.endpoint;
      if (!endpoint) {
        // No backend connected in this prototype — be honest instead of faking success.
        status.textContent = 'This prototype form isn’t connected to the firm’s intake system yet. Please call (803) 200-2000 or use the contact page.';
        status.classList.add('is-error');
        return;
      }
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); status.textContent = 'Thank you — we received your message and will be in touch shortly.'; status.classList.add('is-ok'); })
        .catch(function () { status.textContent = 'Something went wrong. Please call (803) 200-2000.'; status.classList.add('is-error'); })
        .finally(function () { btn.disabled = false; });
    });
  }
})();
