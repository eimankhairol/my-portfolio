import { useEffect, useState } from 'react';
import { tracks } from '../data.js';
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

export default function Cassette() {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTrack((n) => (n + 1) % tracks.length), 2600);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <div className="cassette-wrap">
      <div className={`cassette${playing ? ' is-playing' : ''}`}>
        <div className="cassette-label">
          <p className="hand cassette-title">Songs to read to</p>
          <div className="cassette-window">
            <Reel />
            <div className="cassette-tape" />
            <Reel />
          </div>
          <ol className="hand cassette-tracks">
            {tracks.map((t, i) => (
              <li key={t} className={playing && i === track ? 'is-on' : ''}>
                <Pencil>{t}</Pencil>
              </li>
            ))}
          </ol>
        </div>
        <div className="cassette-foot" />
      </div>
      <button className="btn" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
        {playing ? 'Pause' : 'Play side A'}
      </button>
      <p className="now-playing" aria-live="polite">
        {playing ? <>Now playing: <Pencil>{tracks[track]}</Pencil></> : ' '}
      </p>
    </div>
  );
}
