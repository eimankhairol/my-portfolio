import { useRef } from 'react';
import { me } from '../data.js';
import { gsap, useGSAP, DESKTOP, MOBILE, reduced, scrollTo } from '../motion.js';

export default function Cover() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: '+=140%', pin: true, scrub: 0.6 },
      });
      tl.to('.cover-front', { rotateY: -178, ease: 'power2.inOut', duration: 1 }, 0)
        .to('.book3d', { xPercent: 50, ease: 'power2.inOut', duration: 1 }, 0)
        .to('.scroll-hint', { opacity: 0, duration: 0.2 }, 0)
        .from('.first-page > *', { opacity: 0, y: 24, stagger: 0.08, duration: 0.4 }, 0.55);
    });

    mm.add(MOBILE, () => {
      gsap.from('.first-page > *', {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.first-page', start: 'top 80%' },
      });
    });

    // The cover title settles in once on load.
    if (!reduced) gsap.from('.cover-title > span > span', { yPercent: 110, stagger: 0.12, duration: 0.9, ease: 'power3.out', delay: 0.15 });
  }, { scope: root });

  return (
    <section className="cover-stage" ref={root} aria-label="Introduction">
      <div className="book3d">
        <div className="first-page">
          <h1>{me.hello}</h1>
          <p>{me.intro}</p>
          <p className="first-page-links">
            <a className="btn" href="#ch-1" onClick={(e) => { e.preventDefault(); scrollTo('#ch-1'); }}>Start reading</a>
            <a className="btn btn-quiet" href="#resume" onClick={(e) => { e.preventDefault(); scrollTo('#resume'); }}>Skip to the resume</a>
          </p>
        </div>
        <div className="cover-front">
          <div className="cover-face cover-outside">
            <div className="cover-photo">
              {me.photo ? <img src={me.photo} alt={me.name} /> : <span className="pencil">your photo</span>}
            </div>
            <h2 className="cover-title" aria-label={me.name}>
              {me.name.split(' ').map((w) => <span key={w} aria-hidden="true"><span>{w}</span></span>)}
            </h2>
            <p className="cover-sub">The story so far</p>
          </div>
          <div className="cover-face cover-inside" aria-hidden="true">
            <p className="hand">This book belongs to</p>
            <p className="hand cover-inside-name">Eiman</p>
            <p className="hand cover-inside-note">if found, please return (or hire)</p>
          </div>
        </div>
      </div>
      <p className="scroll-hint hand" aria-hidden="true">scroll to open</p>
    </section>
  );
}
