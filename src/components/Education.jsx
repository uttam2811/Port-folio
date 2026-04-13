import './Education.css';

const edu = [
  { year: '2026 · Expected', degree: 'B.Tech — Electrical & Electronics Engineering', school: 'ASE, Coimbatore · Amrita Vishwa Vidyapeetham', grade: 'CGPA 6.39 / 10' },
  { year: '2022', degree: 'Class XII · CBSE', school: 'Pushpalata Vidya Mandir, Tirunelveli', grade: '76.8%' },
  { year: '2020', degree: 'Class X · CBSE', school: "St. Antony's Public School, Tirunelveli", grade: '77.6%' },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>
      <div className="edu-timeline">
        {edu.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-year">{e.year}</div>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <span className="edu-grade">{e.grade}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
