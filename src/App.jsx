import { useState } from 'react';
import { me, currently } from './data.js';
import Cover from './components/Cover.jsx';
import Chapters from './components/Chapters.jsx';
import OnTheTape from './components/OnTheTape.jsx';
import Shelf from './components/Shelf.jsx';
import Resume from './components/Resume.jsx';
import TapeProgress from './components/TapeProgress.jsx';
import Pencil from './components/Pencil.jsx';
import Nav from './components/Nav.jsx';

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <>
      <a className="skip" href="#ch-1">Skip to the story</a>
      <Nav />

      <main>
        <Cover />
        <div className="wrap">
          <Chapters onProject={setOpenProject} />
        </div>
        <OnTheTape />
        <div className="wrap">
          <Shelf openId={openProject} setOpenId={setOpenProject} />
          <Resume />
        </div>

        <section id="hello" className="back-cover">
          <div className="wrap hello">
            <div>
              <h2>Say hi</h2>
              <p className="lede">I’m looking for roles in strategy and data consulting, business analysis, and investment research. Or just tell me what you’re reading.</p>
              <ul className="hello-links">
                <li><a href={`mailto:${me.email}`}>{me.email}</a></li>
                <li><a href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href={me.github} target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
            <aside className="note" aria-labelledby="currently">
              <h3 id="currently" className="hand">Currently</h3>
              <dl>
                {currently.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd className="hand"><Pencil>{c.value}</Pencil></dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
          <footer className="wrap colophon">
            <p>The end (for now). Set in Young Serif and Figtree, with handwriting by Nanum Pen Script. Built with React and GSAP, shelved on GitHub Pages.</p>
          </footer>
        </section>
      </main>

      <TapeProgress />
    </>
  );
}
