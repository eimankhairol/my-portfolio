import { useState } from 'react';
import { me, projects, resume } from '../data.js';
import Pencil from './Pencil.jsx';

function Edition() {
  return (
    <article className="cv">
      <header className="cv-head">
        <h3>{me.name}</h3>
        <p>
          <a href={`mailto:${me.email}`}>{me.email}</a>
          <a href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={me.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </header>

      <h4>Education</h4>
      {resume.education.map((e) => (
        <div className="cv-row" key={e.what}>
          <div><strong>{e.what}</strong><span>{e.where}</span></div>
          <time>{e.when}</time>
        </div>
      ))}

      <h4>Experience</h4>
      {resume.experience.map((e) => (
        <div className="cv-row" key={e.role}>
          <div>
            <strong>{e.role}</strong>
            <span>{e.place}</span>
            {e.note && <span>{e.note}</span>}
            {e.points.map((pt) => <p key={pt}><Pencil>{pt}</Pencil></p>)}
          </div>
          <time>{e.when}</time>
        </div>
      ))}

      <h4>Projects</h4>
      {projects.map((p) => (
        <div className="cv-row" key={p.id}>
          <div><strong>{p.title}</strong><span>{p.tagline}</span><p>{p.stack.join(', ')}</p></div>
          <time>{p.year}</time>
        </div>
      ))}

      <h4>Skills</h4>
      <dl className="cv-skills">
        {resume.skills.map((s) => (
          <div key={s.group}><dt>{s.group}</dt><dd>{s.items.join(', ')}</dd></div>
        ))}
      </dl>

      <h4>Interests</h4>
      <p>{resume.interests}</p>
    </article>
  );
}

export default function Resume() {
  const [view, setView] = useState('edition');

  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p className="lede">The same facts as above, on one page. Read it here, or open the original PDF.</p>
      <div className="resume-bar">
        <div className="toggle" role="group" aria-label="Resume view">
          <button aria-pressed={view === 'edition'} onClick={() => setView('edition')}>Read it here</button>
          <button aria-pressed={view === 'pdf'} onClick={() => setView('pdf')}>Original PDF</button>
        </div>
        <a className="btn btn-quiet" href={me.resume} download="Eiman-Khairol-Resume.pdf">Download PDF</a>
      </div>
      {view === 'edition' ? (
        <Edition />
      ) : (
        <object className="cv-pdf" data={me.resume} type="application/pdf" aria-label="Resume PDF">
          <p className="cv-pdf-fallback">
            Your browser can’t show the PDF here. <a href={me.resume} target="_blank" rel="noreferrer">Open it in a new tab</a>.
          </p>
        </object>
      )}
    </section>
  );
}
