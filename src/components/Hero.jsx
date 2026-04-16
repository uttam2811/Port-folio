import { useEffect, useState } from 'react'
import './Hero.css'

function TypeWriter({ texts, speed=60, pause=1800 }) {
  const [display, setDisplay] = useState('')
  const [tIdx, setTIdx]       = useState(0)
  const [cIdx, setCIdx]       = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(()=>{
    const cur = texts[tIdx]
    let timeout
    if (!deleting && cIdx <= cur.length) {
      timeout = setTimeout(()=>{ setDisplay(cur.slice(0,cIdx)); setCIdx(c=>c+1) }, speed)
    } else if (!deleting && cIdx > cur.length) {
      timeout = setTimeout(()=>setDeleting(true), pause)
    } else if (deleting && cIdx > 0) {
      timeout = setTimeout(()=>{ setCIdx(c=>c-1); setDisplay(cur.slice(0,cIdx-1)) }, speed/2)
    } else {
      setDeleting(false)
      setTIdx(i=>(i+1)%texts.length)
    }
    return ()=>clearTimeout(timeout)
  },[cIdx,deleting,tIdx,texts,speed,pause])

  return <span>{display}<span className="tw-cursor">|</span></span>
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(()=>{ const t=setTimeout(()=>setVisible(true),100); return ()=>clearTimeout(t) },[])

  return (
    <section id="hero" className="hero section-pad">
      <div className={`hero-inner ${visible?'hero-visible':''}`}>
        <div className="hero-left">
          <p className="hero-case gpu">CASE_FILE: UM-2026</p>

          <h1 className="hero-name gpu">
            <span className="hero-name-line">UTTAM</span>
            <span className="hero-name-line accent">M.</span>
          </h1>

          <div className="hero-sub gpu">
            <TypeWriter
              texts={[
                'Electrical Engineer.',
                'Power Systems Analyst.',
                'MATLAB Simulation Expert.',
                'Sustainable Energy Advocate.',
              ]}
              speed={55}
              pause={2000}
            />
          </div>

          <p className="hero-desc gpu">
            B.Tech EEE · Amrita Vishwa Vidyapeetham, Coimbatore<br/>
            Interned at BOSCH · Eaton · L&T EduTech<br/>
            Graduating 2026 — Open to opportunities.
          </p>

          <div className="hero-actions gpu">
            <a href="#projects" className="btn-primary">View Evidence</a>
            <a href="#contact"  className="btn-ghost">Initiate Contact</a>
          </div>
        </div>

        <div className="hero-right gpu">
          <div className="dossier-card">
            <div className="dc-tape">CLASSIFIED · CASE #2026</div>
            <div className="dc-rows">
              {[
                ['IDENTITY',  'Uttam M'],
                ['STATUS',    'Graduating 2026'],
                ['CGPA',      '6.39 / 10'],
                ['FIELD',     'Electrical & Electronics'],
                ['MISSIONS',  '3 Internships'],
                ['CERTS',     '7+ Certifications'],
                ['ORIGIN',    'Tirunelveli, Tamil Nadu'],
                ['CLEARANCE', 'Open to Work'],
              ].map(([k,v])=>(
                <div className="dc-row" key={k}>
                  <span className="dc-key">{k}</span>
                  <span className="dc-val">{v}</span>
                </div>
              ))}
            </div>
            <div className="dc-footer">
              <span>SYS. DIAGNOSTIC</span>
              <span className="dc-stable">● STABLE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-pill">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}
