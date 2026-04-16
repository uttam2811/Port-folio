import { useEffect, useRef } from 'react'
import './Profile.css'

const experience = [
  {org:'BOSCH Power Solutions',    period:'Jun – Jul 2024', role:'FCM Trainee · Internship',                   loc:'Gangaikondan'},
  {org:'Eaton Power Quality',      period:'May 2025',       role:'Relay & Data Server Manufacturing · Intern', loc:'Pondicherry'},
  {org:'L&T EduTech',              period:'Jun 2025',       role:'Training Program · Internship',              loc:'Chennai'},
]
const education = [
  {org:'ASE, Coimbatore',          period:'2022 – 2026', degree:'B.Tech · EEE',       grade:'CGPA 6.39/10'},
  {org:'Pushpalata Vidya Mandir',  period:'2020 – 2022', degree:'Class XII · CBSE',   grade:'76.8%'},
  {org:"St. Antony's Public School",period:'2018 – 2020',degree:'Class X · CBSE',    grade:'77.6%'},
]
const hard  = ['Python','Java','MATLAB','Simulink','ETAP','ANSYS','Tableau','Embedded Systems']
const soft  = ['Problem Solving','Critical Thinking','Curiosity','Collaboration','Adaptability']
const certs = [
  {name:'Programming for Everybody (Python)',     issuer:'University of Michigan', date:'Dec 2024'},
  {name:'Cyber Physical Systems for Industry',    issuer:'L&T EduTech',           date:'Apr 2025'},
  {name:'Project Management Certification',       issuer:'LinkedIn Learning',      date:'Apr 2025'},
  {name:'Generative AI: Prompt Engineering',      issuer:'IBM',                    date:'May 2025'},
  {name:'ChatGPT: Master AI Tools Specialization',issuer:'Vanderbilt University',  date:'Jun 2025'},
  {name:'Excel Essential Training (M365)',         issuer:'Microsoft',              date:'Jul 2025'},
]

function useReveal(ref) {
  useEffect(()=>{
    const els = ref.current?.querySelectorAll('.reveal')
    if(!els) return
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('revealed'); obs.unobserve(e.target) } })
    },{threshold:0.12})
    els.forEach(el=>obs.observe(el))
    return ()=>obs.disconnect()
  },[ref])
}

export default function Profile() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="profile" className="profile section-pad" ref={ref}>
      <div className="sec-header reveal">
        <span className="sec-tag">CASE FILE: UM-2026 · OPEN TO WORK</span>
        <h2 className="sec-title">Subject Profile</h2>
        <div className="sec-line" />
      </div>

      <div className="profile-grid">
        {/* Identity */}
        <div className="id-card reveal">
          <div className="id-top">
            <div className="id-hex">
              <span>UM</span>
            </div>
            <div className="id-badge">OPEN TO WORK</div>
          </div>
          {[
            ['CLASS',    'EEE Engineer'],
            ['LEVEL',    'B.Tech 2026'],
            ['LANG 1',   'Tamil — Native'],
            ['LANG 2',   'English — Professional'],
            ['LANG 3',   'Hindi — Limited'],
            ['LOCATION', 'Tirunelveli, TN'],
          ].map(([k,v])=>(
            <div className="id-row" key={k}>
              <span className="id-key">{k}</span>
              <span className="id-val">{v}</span>
            </div>
          ))}
          <p className="id-bio">
            Electrical engineer obsessed with power systems simulation and real-world
            energy solutions. I translate complex MATLAB models into actionable insights.
          </p>
        </div>

        {/* Experience + Education */}
        <div className="right-col">
          <div className="reveal">
            <div className="dp-label">Field Operations — Experience</div>
            {experience.map((e,i)=>(
              <div className="timeline-item" key={i}>
                <div className="ti-dot" />
                <div className="ti-content">
                  <div className="ti-org">{e.org}</div>
                  <div className="ti-role">{e.role}</div>
                  <div className="ti-meta">{e.period} · {e.loc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{marginTop:'40px'}}>
            <div className="dp-label">Academic Log — Education</div>
            {education.map((e,i)=>(
              <div className="timeline-item" key={i}>
                <div className="ti-dot" />
                <div className="ti-content">
                  <div className="ti-org">{e.org}</div>
                  <div className="ti-role">{e.degree}</div>
                  <div className="ti-meta">{e.period} · <span style={{color:'var(--gold3)'}}>{e.grade}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills-row reveal">
        <div className="skills-col">
          <div className="dp-label">Technical Skills</div>
          <div className="tags">{hard.map(s=><span key={s}>{s}</span>)}</div>
        </div>
        <div className="skills-col">
          <div className="dp-label">Soft Skills</div>
          <div className="tags soft">{soft.map(s=><span key={s}>{s}</span>)}</div>
        </div>
      </div>

      {/* Certifications */}
      <div className="certs-section reveal">
        <div className="dp-label">Certifications</div>
        <div className="certs-grid">
          {certs.map((c,i)=>(
            <div className="cert-row" key={i}>
              <span className="cert-n">{String(i+1).padStart(2,'0')}</span>
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
