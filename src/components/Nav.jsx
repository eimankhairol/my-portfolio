import { useEffect, useRef, useState } from 'react';
import { me } from '../data.js';
import { ScrollTrigger, scrollTo } from '../motion.js';

const links = [
  { id: 'ch-1', label: 'Story', covers: ['ch-1', 'ch-2', 'ch-3', 'ch-4', 'ch-5', 'ch-6'] },
  { id: 'tape', label: 'On the tape' },
  { id: 'shelf', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'hello', label: 'Say hi' },
];

// Slides away while you read down the page, comes back as soon as you scroll up.
export default function Nav() {
  const ref = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = ref.current;
    const hide = ScrollTrigger.create({
      start: 120, end: 'max',
      onUpdate: (self) => el.classList.toggle('is-hidden', self.direction === 1 && !el.contains(document.activeElement)),
      onLeaveBack: () => el.classList.remove('is-hidden'),
    });
    const triggers = links.flatMap((l) =>
      (l.covers ?? [l.id]).map((id) =>
        ScrollTrigger.create({
          trigger: `#${id}`, start: 'top 50%', end: 'bottom 50%',
          onToggle: (self) => self.isActive && setActive(l.id),
        })
      )
    );
    const top = ScrollTrigger.create({ trigger: '#ch-1', start: 'top 50%', onLeaveBack: () => setActive(null) });
    return () => [hide, top, ...triggers].forEach((t) => t.kill());
  }, []);

  const go = (id) => (e) => { e.preventDefault(); scrollTo(`#${id}`); };

  return (
    <header className="nav" ref={ref}>
      <a className="wordmark" href="#top" onClick={(e) => { e.preventDefault(); scrollTo(0); }}>{me.name}</a>
      <nav aria-label="Sections">
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={go(l.id)} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
