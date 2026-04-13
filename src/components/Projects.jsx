import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    num: '001 · Featured',
    title: 'Temperature Characteristics of a Lithium-Ion Battery',
    desc: 'Characterized a lithium-ion battery\'s performance and safety across different working temperatures — investigating how thermal conditions affect capacity, lifespan, and internal resistance. This research contributes to safer battery design for EVs and stationary storage.',
    stack: ['MATLAB', 'Li-ion Batteries', 'Thermal Analysis', 'Sep – Nov 2024'],
    featured: true,
  },
  {
    num: '002',
    title: 'Harmonic State Space Modelling of Wireless Power Transfer System',
    desc: 'Validated the Harmonic State-Space (HSS) model\'s accuracy in analyzing WPT system dynamics and harmonic interactions, demonstrating key advantages over traditional modelling approaches.',
    stack: ['MATLAB', 'WPT Systems', 'HSS Modelling', 'Sep – Oct 2024'],
  },
  {
    num: '003',
    title: 'Load Flow Analysis of IEEE–9 BUS System Using NR Method',
    desc: 'Analyzed and validated the Newton-Raphson load flow method for a 9-bus power system by cross-comparing MATLAB code with Simulink simulations — evaluating grid stability and performance under varying load conditions.',
    stack: ['MATLAB', 'Simulink', 'Power Flow', 'Newton-Raphson'],
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.project-card');
    cards?.forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
        card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }, []);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`project-card ${p.featured ? 'featured' : ''}`} key={i}>
            <div className="project-num">{p.num}</div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
