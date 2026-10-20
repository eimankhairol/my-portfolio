import { useEffect, useRef, useState } from 'react';
import { projects } from '../data.js';
import Pencil from './Pencil.jsx';
import { gsap, useGSAP, reduced } from '../motion.js';

function Spread({ p, onClose }) {
  const [shot, setShot] = useState(0);
  const n = p.images.length;

  return (
    <div className="book-spread">
      <div className="book-left">
        <figure className="book-shot">
          <img src={p.images[shot].src} alt={p.images[shot].alt} />
          <figcaption>{p.images[shot].alt}</figcaption>
        </figure>
        {n > 1 && (
          <div className="book-shot-nav">
            <button className="link-btn" onClick={() => setShot((shot - 1 + n) % n)}>Previous</button>
            <span>{shot + 1} of {n}</span>
            <button className="link-btn" onClick={() => setShot((shot + 1) % n)}>Next</button>
          </div>
        )}
      </div>
      <div className="book-right">
        <button className="book-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <p className="book-year">{p.year}{p.award && <span className="sticker sticker-inline">{p.award}</span>}</p>
        <h3 id="book-title">{p.title}</h3>
        <p className="book-tagline">{p.tagline}</p>
        <p><Pencil>{p.story}</Pencil></p>
        <h4>What I built</h4>
        <ul className="book-built">
          {p.built.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <h4>Made with</h4>
        <ul className="chips">
          {p.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        {p.links.length > 0 && (
          <div className="book-links">
            {p.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Book({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
const d = ref.current;
if (project && !d.open) d.showModal();
if (!project && d.open) d.close();
  }, [project]);

  return (
<dialog
  ref={ref}
  className={`book spine-${project?.spine ?? 'cream'}`}
  onClose={onClose}
  onClick={(e) => e.target === ref.current && onClose()}
  aria-labelledby="book-title"
>
      {project && <Spread key={project.id} p={project} onClose={onClose} />}
    </dialog>
  );
}

export default function Shelf({ openId, setOpenId }) {
  const open = projects.find((p) => p.id === openId) ?? null;
  const root = useRef(null);

  useGSAP(() => {
    if (reduced) return;
    // Books drop onto the shelf one at a time, with a little bounce.
    gsap.from('.spines li', {
      y: -420, rotate: (i) => (i % 2 ? 14 : -10), opacity: 0,
      stagger: 0.14, duration: 0.9, ease: 'bounce.out',
      scrollTrigger: { trigger: '.shelf', start: 'top 75%' },
    });
  }, { scope: root });

  return (
    <section id="shelf" className="section" ref={root}>
      <h2>The shelf</h2>
      <p className="lede">Everything from the story, in one place. Pull a book out to read it.</p>
      <div className="shelf">
        <ul className="spines">
          {projects.map((p) => (
            <li key={p.id} style={{ '--tall': p.tall }}>
              <button className={`spine spine-${p.spine}`} onClick={() => setOpenId(p.id)}>
                {p.award && <span className="sticker">{p.award}</span>}
                <span className="spine-title">{p.title}</span>
                <span className="spine-year">{p.year}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="plank" aria-hidden="true" />
      </div>
      <Book project={open} onClose={() => setOpenId(null)} />
    </section>
  );
}
