import { useEffect, useRef } from 'react';
import './Certifications.css';

const certs = [
  { icon: '🐍', name: 'Programming for Everybody (Python)', issuer: 'University of Michigan', date: 'Dec 2024 · 0QIHOR4F4925' },
  { icon: '⚙️', name: 'Cyber Physical Systems for Industrial Applications', issuer: 'L&T EduTech', date: 'Apr 2025' },
  { icon: '📋', name: 'Project Management Certification', issuer: 'LinkedIn Learning Community', date: 'Apr 2025' },
  { icon: '🤖', name: 'Generative AI: Prompt Engineering Basics', issuer: 'IBM', date: 'May 2025 · 48LJI52EEOW3' },
  { icon: '💬', name: 'ChatGPT: Master Free AI Tools Specialization', issuer: 'Vanderbilt University', date: 'Jun 2025 · AT23TVR2VNQ9' },
  { icon: '📊', name: 'Excel Essential Training (Microsoft 365)', issuer: 'Microsoft', date: 'Jul 2025' },
];

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.cert-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Certifications</h2>
        <div className="section-line" />
      </div>
      <div className="cert-grid">
        {certs.map((c, i) => (
          <div className="cert-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="cert-icon">{c.icon}</div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-date">{c.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
