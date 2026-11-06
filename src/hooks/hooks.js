import { useCallback, useEffect, useRef } from 'react';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades `.reveal` elements in as they enter the viewport. Content stays visible if IO is unavailable or motion is reduced. */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      items.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }),
      { threshold: 0, rootMargin: '0px 0px -4% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Native scroll-snap carousel controller: attach `ref` to the track and call `scroll(±1)` from arrow buttons. */
export function useScroller() {
  const ref = useRef(null);
  const scroll = useCallback((dir) => {
    const track = ref.current;
    if (!track) return;
    const first = track.firstElementChild;
    const step = first ? first.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * dir, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);
  return { ref, scroll };
}
