import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, scrollTo } from '../motion.js';
import { chapters } from '../data.js';

const stops = [
  ...chapters.map((c, i) => ({ id: `ch-${i + 1}`, name: `Chapter ${i + 1}: ${c.title}` })),
  { id: 'tape', name: 'Interlude: on the tape' },
  { id: 'shelf', name: 'The shelf' },
  { id: 'resume', name: 'Resume' },
  { id: 'hello', name: 'Say hi' },
];

// A small cassette pinned to the corner: tape winds from the left reel to the
// right as you read. Click it for the contents.
export default function TapeProgress() {
  const root = useRef(null);
  const [label, setLabel] = useState('Cover');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = root.current;
    const setP = gsap.quickSetter(el, '--p');
    const all = ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: (self) => setP(self.progress.toFixed(4)),
    });

    const sections = stops.map((s) => document.getElementById(s.id)).filter(Boolean);
    const triggers = sections.map((s) =>
      ScrollTrigger.create({
        trigger: s, start: 'top 50%', end: 'bottom 50%',
        onToggle: (self) => self.isActive && setLabel(stops.find((x) => x.id === s.id).name),
        onLeaveBack: () => s === sections[0] && setLabel('Cover'),
      })
    );
    return () => { all.kill(); triggers.forEach((t) => t.kill()); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <div className="tape-progress" ref={root}>
      {open && (
        <nav className="tape-menu" id="tape-menu" aria-label="Contents">
          <ol>
            {stops.map((s) => (
              <li key={s.id}>
                <button onClick={() => { setOpen(false); scrollTo(`#${s.id}`); }}>{s.name}</button>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <button
        className="tape-btn"
        aria-expanded={open}
        aria-controls="tape-menu"
        aria-label={`Contents. Now reading: ${label}`}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 120 76" aria-hidden="true">
          <rect x="2" y="2" width="116" height="72" rx="10" className="tp-body" />
          <rect x="12" y="12" width="96" height="40" rx="6" className="tp-label" />
          <circle cx="38" cy="32" className="tp-wound tp-left" />
          <circle cx="82" cy="32" className="tp-wound tp-right" />
          <g className="tp-reel tp-reel-l"><circle cx="38" cy="32" r="7" /><path d="M38 25v14M31 32h14" /></g>
          <g className="tp-reel tp-reel-r"><circle cx="82" cy="32" r="7" /><path d="M82 25v14M75 32h14" /></g>
          <rect x="34" y="58" width="52" height="10" rx="3" className="tp-foot" />
        </svg>
        <span className="tape-label">{label}</span>
      </button>
    </div>
  );
}
