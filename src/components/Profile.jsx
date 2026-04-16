import { useEffect, useRef } from 'react'
import './Profile.css'

const exp  = [
  {org:'BOSCH Power Solutions',      period:'Jun–Jul 2024', role:'FCM Trainee · Internship',                   loc:'Gangaikondan, TN'},
  {org:'Eaton Power Quality Pvt Ltd',period:'May 2025',     role:'Relay & Data Server Manufacturing · Intern', loc:'Pondicherry'},
  {org:'L&T EduTech',                period:'Jun 2025',     role:'Training Program · Internship',              loc:'Chennai'},
]
const edu  = [
  {org:'ASE, Coimbatore',             period:'2022–2026', degree:'B.Tech · EEE',     grade:'CGPA 6.39/10'},
  {org:'Pushpalata Vidya Mandir',     period:'2020–2022', degree:'Class XII · CBSE', grade:'76.8%'},
  {org:"St. Antony's Public School",  period:'2018–2020', degree:'Class X · CBSE',   grade:'77.6%'},
]
const hard = ['Python','Java','MATLAB','Simulink','ETAP','ANSYS','Tableau','Embedded Systems']
const soft = ['Problem Solving','Critical Thinking','Curiosity','Collaboration','Adaptability','Autonomy']
const certs = [
  {name:'Programming for Everybody (Python)',      issuer:'University of Michigan', date:'Dec 2024'},
  {name:'Cyber Physical Systems for Industry',     issuer:'L&T EduTech',           date:'Apr 2025'},
  {name:'Project Management Certification',        issuer:'LinkedIn Learning',      date:'Apr 2025'},
  {name:'Generative AI: Prompt Engineering',       issuer:'IBM',                   date:'May 2025'},
  {name:'ChatGPT: Master AI Tools Specialization', issuer:'Vanderbilt University',  date:'Jun 2025'},
  {name:'Excel Essential Training (M365)',          issuer:'Microsoft',             date:'Jul 2025'},
]

export default function Profile() {
  const ref = useRef(null)
  useEffect(()=>{
    const els = ref.current?.querySelectorAll('.reveal')
    if(!els) return
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target)} })
    },{threshold:0.1})
    els.forEach(el=>obs.observe(el))
    return()=>obs.disconnect()
  },[])

  return (
    <section id="profile" className="profile section-pad" ref={ref}>
      <span className="sec-eyebrow reveal">CASE FILE: UM-2026 · STATUS: GRADUATING</span>
      <h2 className="sec-title reveal">SUBJECT PROFILE</h2>
      <div className="sec-rule reveal"/>

      <div className="prof-grid">
        {/* ── IDENTITY CARD ── */}
        <div className="id-card reveal">
          <div className="id-tape">RESTRICTED_ACCESS</div>
          <div className="id-avatar-wrap">
            <div className="id-hex"><span>UM</span></div>
            <div className="id-rec-tag"><span className="blink" style={{color:'var(--red)'}}>●</span> REC_ACTIVE</div>
          </div>
          <div className="id-face-line">ISO_FACE_ID: 99.9%</div>
          {[
            ['CLASS',    'DEV_EEE'],
            ['XP_LEVEL', 'B.TECH_DEGREE'],
            ['LANG_1',   'Tamil [Native]'],
            ['LANG_2',   'English [Pro]'],
            ['LANG_3',   'Hindi [Limited]'],
          ].map(([k,v])=>(
            <div className="id-row" key={k}>
              <span className="id-k">{k}</span>
              <span className="id-v">{v}</span>
            </div>
          ))}
          <div className="id-alert">
            <span className="blink" style={{color:'var(--green)'}}>●</span>
            SYSTEM_ALERT — OPEN TO WORK
          </div>
          <p className="id-bio">
            Electrical engineer obsessed with power systems and real-world simulation.
            I build MATLAB models, analyze power grids, and bridge theory with practice.
          </p>
        </div>

        {/* ── FIELD LOGS ── */}
        <div className="field-logs">
          <div className="reveal">
            <div className="log-heading">// FIELD_OPERATIONS [EXPÉRIENCE]</div>
            {exp.map((e,i)=>(
              <div className="log-item" key={i}>
                <div className="log-period">[{e.period}] · {e.loc}</div>
                <div className="log-org">{e.org}</div>
                <div className="log-role">{e.role}</div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{marginTop:40}}>
            <div className="log-heading">// ACADEMIC_LOG [DIPLÔMES]</div>
            {edu.map((e,i)=>(
              <div className="log-item" key={i}>
                <div className="log-period">[{e.period}]</div>
                <div className="log-org">{e.org}</div>
                <div className="log-role">{e.degree} — <span style={{color:'var(--green)'}}>{e.grade}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div className="skills-wrap reveal">
        <div className="log-heading">EQUIPMENT_INVENTORY</div>
        <div className="skills-grid">
          <div>
            <div className="sk-label">HARD SKILLS</div>
            <div className="sk-tags">{hard.map(s=><span key={s}>{s}</span>)}</div>
          </div>
          <div>
            <div className="sk-label">SOFT SKILLS</div>
            <div className="sk-tags soft">{soft.map(s=><span key={s}>{s}</span>)}</div>
          </div>
        </div>
      </div>

      {/* ── CERTS ── */}
      <div className="certs-wrap reveal">
        <div className="log-heading">// CERTIFICATIONS_LOG</div>
        <div className="certs-grid">
          {certs.map((c,i)=>(
            <div className="cert-item" key={i}>
              <div className="cert-n">{String(i+1).padStart(2,'0')}</div>
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
