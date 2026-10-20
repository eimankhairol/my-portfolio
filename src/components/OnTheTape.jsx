import { useRef, useState } from 'react';
import { onRepeat } from '../data.js';
import { gsap, useGSAP, reduced } from '../motion.js';
import Pencil from './Pencil.jsx';

function Reel() {
  return (
    <svg className="reel" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="var(--cream)" />
      <circle cx="32" cy="32" r="9" fill="var(--green)" />
      <rect x="29" y="6" width="6" height="14" rx="3" fill="var(--green)" />
      <rect x="29" y="44" width="6" height="14" rx="3" fill="var(--green)" />
      <rect x="6" y="29" width="14" height="6" rx="3" fill="var(--green)" />
      <rect x="44" y="29" width="14" height="6" rx="3" fill="var(--green)" />
    </svg>
  );
}

export default function OnTheTape() {
  const root = useRef(null);
  const [playing, setPlaying] = useState(false);

  useGSAP(() => {
    if (reduced) return;
    // Scrolling winds the reels; the tape slides in from the side.
    gsap.to('.big-cassette .reel', {
      rotate: 720, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
    });
    gsap.from('.big-cassette', {
      x: -120, rotate: -8, opacity: 0, duration: 1, ease: 'back.out(1.2)',
      scrollTrigger: { trigger: root.current, start: 'top 70%' },
    });
    gsap.from('.tracklist li', {
      opacity: 0, x: 40, stagger: 0.08, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.tracklist', start: 'top 75%' },
    });
  }, { scope: root });

  return (
    <section id="tape" className="tape-section" ref={root}>
      <div className="tape-inner">
        <div className="big-cassette-wrap">
          <div className={`big-cassette${playing ? ' is-playing' : ''}`}>
            <div className="cassette-label">
              <p className="hand cassette-title">On repeat lately</p>
              <div className="cassette-window">
                <Reel />
                <div className="cassette-tape" />
                <Reel />
              </div>
              <p className="hand cassette-side">Side A, Eiman’s mix</p>
            </div>
            <div className="cassette-foot" />
          </div>
          <button className="btn btn-cream" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? 'Pause' : 'Play side A'}
          </button>
        </div>
        <div>
          <h2>Interlude: what’s on the tape</h2>
          <p className="lede">What I’ve had on repeat lately. Updates from my Spotify once it’s hooked up.</p>
          <ol className="tracklist">
            {onRepeat.map((t, i) => (
              <li key={i}>
                <span className="track-n">{i + 1}</span>
                <span className="track-song"><Pencil>{t.song}</Pencil></span>
                <span className="track-artist"><Pencil>{t.artist}</Pencil></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
