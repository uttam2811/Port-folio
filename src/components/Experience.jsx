import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    period: 'Jun – Jul 2024',
    location: 'Gangaikondan, TN',
    company: 'BOSCH Power Solutions',
    role: 'FCM Trainee · Internship',
    desc: 'Gained hands-on exposure to BOSCH\'s Factory Control and Monitoring (FCM) systems. Observed industrial automation workflows and power-solution architectures at one of India\'s foremost technology manufacturing facilities.',
  },
  {
    period: 'May 2025',
    location: 'Pondicherry',
    company: 'Eaton Power Quality Pvt Ltd',
    role: 'Relay & Data Server Manufacturing · Internship',
    desc: 'Worked within the relay and data server manufacturing division, gaining in-depth understanding of power quality components, assembly processes, and quality assurance protocols at a global power management leader.',
  },
  {
    period: 'Jun 2025',
    location: 'Chennai',
    company: 'L&T EduTech',
    role: 'Training Program · Internship',
    desc: 'Participated in an advanced training program covering Cyber Physical Systems for Industrial Applications — bridging theoretical electrical engineering with next-generation industrial IoT and automation frameworks.',
  },
  {
    period: 'Apr 2023',
    location: 'Amrita Coimbatore',
    company: 'BOSCH × Amrita',
    role: 'Electric Vehicles Workshop · Conference',
    desc: 'Attended a specialized workshop on Electric Vehicle technology in collaboration with BOSCH, covering EV drivetrain architecture, battery management systems, and the future of sustainable mobility in India.',
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.exp-item').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>
      <div className="exp-list">
        {experiences.map((e, i) => (
          <div className="exp-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="exp-meta">
              <div className="exp-period">{e.period}</div>
              <div className="exp-location">{e.location}</div>
            </div>
            <div className="exp-body">
              <div className="exp-company">{e.company}</div>
              <div className="exp-role">{e.role}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
