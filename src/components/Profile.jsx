import './Profile.css'

const experience = [
  { org:'BOSCH POWER SOLUTIONS', period:'Jun–Jul 2024', role:'FCM Trainee · Internship', loc:'Gangaikondan' },
  { org:'EATON POWER QUALITY PVT LTD', period:'May 2025', role:'Relay & Data Server Mfg · Internship', loc:'Pondicherry' },
  { org:'L&T EDUTECH', period:'Jun 2025', role:'Training Program · Internship', loc:'Chennai' },
]

const education = [
  { org:'ASE, COIMBATORE', period:'2022–2026', degree:'B.Tech · Electrical & Electronics Engineering', grade:'CGPA 6.39/10' },
  { org:'PUSHPALATA VIDYA MANDIR', period:'2020–2022', degree:'Class XII · CBSE', grade:'76.8%' },
  { org:"ST. ANTONY'S PUBLIC SCHOOL", period:'2018–2020', degree:'Class X · CBSE', grade:'77.6%' },
]

const hardSkills = ['Python','Java','MATLAB','Simulink','ETAP','ANSYS','Tableau','Embedded Systems']
const softSkills = ['Problem Solving','Critical Thinking','Curiosity','Collaboration','Adaptability']

const certs = [
  { name:"Programming for Everybody (Python)", issuer:"University of Michigan", date:"Dec 2024" },
  { name:"Cyber Physical Systems for Industrial Applications", issuer:"L&T EduTech", date:"Apr 2025" },
  { name:"Project Management Certification", issuer:"LinkedIn Learning", date:"Apr 2025" },
  { name:"Generative AI: Prompt Engineering", issuer:"IBM", date:"May 2025" },
  { name:"ChatGPT: Master AI Tools Specialization", issuer:"Vanderbilt University", date:"Jun 2025" },
  { name:"Excel Essential Training (Microsoft 365)", issuer:"Microsoft", date:"Jul 2025" },
]

export default function Profile() {
  return (
    <section id="profile" className="profile section-pad">
      <div className="profile-header">
        <div>
          <p className="section-tag">CASE FILE: UM-2026 · STATUS: GRADUATING</p>
          <h2 className="section-title">SUBJECT PROFILE</h2>
        </div>
        <div className="profile-alert">
          <span className="blink" style={{color:'var(--green)'}}>●</span>
          OPEN TO WORK
        </div>
      </div>

      <div className="profile-grid">
        {/* Left: Identity */}
        <div className="identity-card">
          <div className="id-tape">RESTRICTED_ACCESS</div>
          <div className="id-avatar">
            <div className="avatar-hex">
              <span>UM</span>
              <div className="id-rec"><span className="blink">●</span> REC_ACTIVE</div>
            </div>
          </div>
          <div className="id-fields">
            <div className="id-row"><span>ISO_FACE_ID:</span>99.9%</div>
            <div className="id-row"><span>CLASS:</span>DEV_EEE</div>
            <div className="id-row"><span>XP_LEVEL:</span>B.TECH_DEGREE</div>
            <div className="id-row"><span>LANG_1:</span>Tamil [Natif]</div>
            <div className="id-row"><span>LANG_2:</span>English [Pro]</div>
            <div className="id-row"><span>LANG_3:</span>Hindi [Limited]</div>
          </div>
          <p className="id-bio">
            Electrical engineer obsessed with the fusion between rigorous power systems
            theory and real-world simulation. I build MATLAB models, analyze power
            grids, and bring clarity to complex energy systems.
          </p>
        </div>

        {/* Right: Details */}
        <div className="detail-panel">
          {/* Experience */}
          <div className="dp-block">
            <div className="dp-heading">// FIELD_OPERATIONS [EXPERIENCE]</div>
            {experience.map((e,i) => (
              <div className="dp-item" key={i}>
                <div className="dp-period">[{e.period}] {e.loc}</div>
                <div className="dp-org">{e.org}</div>
                <div className="dp-role">{e.role}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="dp-block">
            <div className="dp-heading">// ACADEMIC_LOG [DIPLÔMES]</div>
            {education.map((e,i) => (
              <div className="dp-item" key={i}>
                <div className="dp-period">[{e.period}]</div>
                <div className="dp-org">{e.org}</div>
                <div className="dp-role">{e.degree} · <span style={{color:'var(--green)'}}>{e.grade}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills-block">
        <div className="dp-heading">EQUIPMENT_INVENTORY</div>
        <div className="skills-cols">
          <div>
            <div className="sk-label">HARD SKILLS</div>
            <div className="sk-tags">
              {hardSkills.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
          <div>
            <div className="sk-label">SOFT SKILLS</div>
            <div className="sk-tags soft">
              {softSkills.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="certs-block">
        <div className="dp-heading">// CERTIFICATIONS_LOG</div>
        <div className="certs-grid">
          {certs.map((c,i) => (
            <div className="cert-item" key={i}>
              <div className="cert-num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-meta">{c.issuer} · {c.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
