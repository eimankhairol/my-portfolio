import { useState } from 'react';
import Pencil from './Pencil.jsx';

const sides = [
  { key: 'did', label: 'What I did' },
  { key: 'learned', label: 'What I learned' },
  { key: 'moment', label: 'A moment' },
];

// A library checkout card: three sides instead of bullet points.
export default function RoleCard({ r }) {
  const [side, setSide] = useState('did');

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3>{r.role}</h3>
          <p className="card-place">{r.place}</p>
        </div>
        <div className="stamps" aria-label={`${r.from} to ${r.to}`}>
          <span className="stamp">{r.from}</span>
          <span className="stamp">{r.to}</span>
        </div>
      </div>
      <div className="tabs" role="tablist" aria-label={`${r.role} details`}>
        {sides.map((s) => (
          <button
            key={s.key}
            role="tab"
            id={`tab-${r.key}-${s.key}`}
            aria-selected={side === s.key}
            aria-controls={`panel-${r.key}`}
            className="tab"
            onClick={() => setSide(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="card-body" role="tabpanel" id={`panel-${r.key}`} aria-labelledby={`tab-${r.key}-${side}`}>
        <Pencil>{r[side]}</Pencil>
      </p>
    </div>
  );
}
