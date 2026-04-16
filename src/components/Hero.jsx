import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [vis, setVis] = useState(false)
  useEffect(()=>{ const t=setTimeout(()=>setVis(true),80); return()=>clearTimeout(t) },[])

  return (
    <section id="hero" className={`hero section-pad ${vis?'hero-vis':''}`}>
      {/* Full-width scanline overlay specific to hero */}
      <div className="hero-noise" />

      <div className="hero-top-bar">
        <span>SECTOR: EEE_ENGINEERING</span>
        <span><span className="blink" style={{color:'var(--red)'}}>●</span> SCANNING: ACTIVE</span>
      </div>

      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-case">TOP SECRET // CASE #2026</p>

          <h1 className="hero-name">
            <span className="hn-uttam">UTTAM</span>
            <span className="hn-m">M.</span>
          </h1>

          <div className="hero-roles">
            <span className="role-tag">Electrical Engineer</span>
            <span className="role-sep">·</span>
            <span className="role-tag">Power Systems</span>
            <span className="role-sep">·</span>
            <span className="role-tag">MATLAB Specialist</span>
          </div>

          <p className="hero-desc">
            B.Tech EEE · Amrita Vishwa Vidyapeetham, Coimbatore<br/>
            Interned @ BOSCH · Eaton Power Quality · L&amp;T EduTech<br/>
            Graduating 2026 — Open to full-time &amp; internship roles.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">▷ View Evidence</a>
            <a href="#contact"  className="btn-ghost">Initiate Contact</a>
          </div>
        </div>

        {/* RIGHT — dossier */}
        <div className="hero-right">
          <div className="dossier">
            <div className="dos-header">
              <span><span className="blink" style={{color:'var(--red)'}}>●</span> LIVE FEED</span>
              <span>ANALYSER_ACTIVE</span>
            </div>
            <div className="dos-rows">
              {[
                ['NAME',      'Uttam M'],
                ['STATUS',    'GRADUATING 2026',true],
                ['CGPA',      '6.39 / 10'],
                ['MISSIONS',  '3 Internships'],
                ['CERTS',     '7+ Certifications'],
                ['FIELD',     'EEE · Power Systems'],
                ['LOCATION',  'Tirunelveli, TN'],
                ['CLEARANCE', 'OPEN TO WORK',true],
              ].map(([k,v,hi])=>(
                <div className="dos-row" key={k}>
                  <span className="dos-key">{k}</span>
                  <span className={`dos-val${hi?' dos-hi':''}`}>{v}</span>
                </div>
              ))}
            </div>
            <div className="dos-footer">
              <span>SYS. DIAGNOSTIC</span>
              <span style={{color:'var(--green)'}}>STABLE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-ind">
        <div className="hsi-line"/><span>SCROLL</span><div className="hsi-line"/>
      </div>
    </section>
  )
}
