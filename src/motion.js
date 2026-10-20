import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One smooth-scroll instance for the whole page, driven by GSAP's ticker so
// ScrollTrigger and Lenis never disagree about where the page is.
export const lenis = reduced ? null : new Lenis({ lerp: 0.16 });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function scrollTo(target) {
  if (lenis) lenis.scrollTo(target, { offset: -16, duration: 1.4 });
  else if (typeof target === 'number') window.scrollTo(0, target);
  else document.querySelector(target)?.scrollIntoView();
}

// Desktop gets the pinned, scrubbed version; phones and reduced motion get simple reveals.
export const DESKTOP = '(min-width: 861px) and (prefers-reduced-motion: no-preference)';
export const MOBILE = '(max-width: 860px) and (prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, useGSAP };
