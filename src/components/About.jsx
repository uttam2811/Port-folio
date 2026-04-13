import { useEffect, useRef } from 'react';
import './About.css';

const skillGroups = [
  { cat: 'Programming', tags: ['Python', 'Java', 'MATLAB'] },
  { cat: 'Simulation & Design', tags: ['MATLAB / Simulink', 'ETAP', 'ANSYS', 'Tableau'] },
  { cat: 'Domain Knowledge', tags: ['Power Systems', 'Transmission Lines', 'Railway Ops', 'Embedded Systems', 'EV Technology'] },
  { cat: 'Tools & Productivity', tags: ['Excel', 'PowerPoint', 'Word', 'Gen AI Tools'] },
  { cat: 'Interests', tags: ['CyberSecurity', 'Data Analytics', 'Project Management'] },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">About</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>I'm <strong>Uttam M</strong>, a final-year B.Tech student specializing in <strong>Electrical and Electronics Engineering</strong> at ASE, Coimbatore (Amrita Vishwa Vidyapeetham). Graduating in 2026, I've built hands-on experience across India's leading industrial players — BOSCH, Eaton, and L&T.</p>
          <blockquote className="about-highlight">
            Bridging the gap between power systems theory and real-world engineering practice.
          </blockquote>
          <p>My work spans <strong>MATLAB-based simulation</strong> of battery systems and wireless power transfer, to shop-floor exposure with relay manufacturing and FCM training. I'm equally curious about <strong>cybersecurity</strong>, <strong>data analytics</strong>, and the future of railway transmission systems.</p>
          <p>Native Tamil speaker, professionally fluent in English, with working knowledge of Hindi. Based in Tirunelveli, Tamil Nadu.</p>
        </div>
        <div className="skills-panel reveal">
          {skillGroups.map(g => (
            <div className="skill-group" key={g.cat}>
              <div className="skill-cat">{g.cat}</div>
              <div className="skill-tags">
                {g.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
