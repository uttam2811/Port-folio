import './Hero.css';

const stats = [
  { num: '3', label: 'Internships' },
  { num: '7+', label: 'Certifications' },
  { num: '3', label: 'MATLAB Projects' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-eyebrow fade-up">B.Tech EEE · 2026 · Amrita Vishwa Vidyapeetham</div>
        <h1 className="hero-name fade-up delay-1">
          Uttam<br /><span>M.</span>
        </h1>
        <p className="hero-tagline fade-up delay-2">
          Electrical &amp; Electronics Engineer with a passion for power systems,
          embedded hardware, and sustainable energy solutions.
        </p>
        <div className="hero-cta fade-up delay-3">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-stats fade-up delay-4">
        {stats.map(s => (
          <div className="stat-pill" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
