import { useRef } from 'react';
import { chapters, roles, projects } from '../data.js';
import { gsap, useGSAP, reduced } from '../motion.js';
import Pencil from './Pencil.jsx';
import RoleCard from './RoleCard.jsx';

// A small closed book you can pull off the page to read.
function MiniBook({ p, onOpen }) {
  return (
    <button className={`minibook spine-${p.spine}`} onClick={() => onOpen(p.id)}>
      {p.award && <span className="sticker">{p.award}</span>}
      <span className="minibook-title">{p.title}</span>
      <span className="minibook-tag">{p.tagline}</span>
      <span className="minibook-open">Open the book</span>
    </button>
  );
}

function Chapter({ c, n, onProject }) {
  const cRoles = (c.roles ?? []).map((k) => roles.find((r) => r.key === k));
  const cProjects = (c.projects ?? []).map((id) => projects.find((p) => p.id === id));

  return (
    <section className="chapter" id={`ch-${n}`}>
      <div className="chapter-text">
        <p className="chapter-num" aria-hidden="true">{n}</p>
        <p className="chapter-when"><Pencil>{c.when}</Pencil></p>
        <h2>{c.title}</h2>
        {c.body.map((p, i) => <p key={i} className="chapter-p"><Pencil>{p}</Pencil></p>)}
      </div>
      <div className="chapter-things">
        {c.photo && (
          <figure className="polaroid artifact">
            <div className="polaroid-img"><span className="pencil">{c.photo.slice(1, -1)}</span></div>
          </figure>
        )}
        {cRoles.map((r) => <div className="artifact" key={r.key}><RoleCard r={r} /></div>)}
        {cProjects.map((p) => <div className="artifact" key={p.id}><MiniBook p={p} onOpen={onProject} /></div>)}
      </div>
    </section>
  );
}

export default function Chapters({ onProject }) {
  const root = useRef(null);

  useGSAP(() => {
    if (reduced) return;

    gsap.utils.toArray('.chapter').forEach((ch) => {
      // The big chapter number drifts slower than the page.
      gsap.fromTo(ch.querySelector('.chapter-num'), { yPercent: 30 }, {
        yPercent: -30, ease: 'none',
        scrollTrigger: { trigger: ch, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.from(ch.querySelectorAll('.chapter-when, h2, .chapter-p'), {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ch, start: 'top 70%' },
      });
    });

    // Cards and books get tossed onto the page as they scroll in, landing slightly askew.
    // Played once rather than scrubbed: rotating text on every scroll frame is what makes Safari stutter.
    gsap.utils.toArray('.artifact').forEach((el, i) => {
      const tilt = i % 2 ? 2.5 : -2;
      gsap.set(el, { rotate: tilt });
      gsap.from(el, {
        opacity: 0, x: 90, rotate: tilt * 5, duration: 0.9, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
  }, { scope: root });

  return (
    <div ref={root} className="chapters">
      {chapters.map((c, i) => <Chapter key={c.title} c={c} n={i + 1} onProject={onProject} />)}
    </div>
  );
}
