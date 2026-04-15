import { useEffect, useState } from 'react'
import './Hero.css'

function TypeWriter({ text, speed = 50 }) {
  const [out, setOut] = useState('')
  const [i, setI] = useState(0)
  useEffect(() => {
    if (i >= text.length) return
    const t = setTimeout(() => { setOut(text.slice(0,i+1)); setI(i+1) }, speed)
    return () => clearTimeout(t)
  }, [i, text, speed])
  return <span>{out}<span className="blink">_</span></span>
}

export default function Hero() {
  return (
    <section id="hero" className="hero section-pad">
      <div className="hero-top-label">
        <span>SECTOR: EEE_ENGINEERING</span>
        <span className="blink">SCANNING: ACTIVE</span>
      </div>

      <div className="hero-main">
        <div className="hero-left">
          <p className="hero-case">TOP SECRET // CASE #2026</p>
          <h1 className="hero-name glitch" data-text="UTTAM M">UTTAM M</h1>
          <div className="hero-sub">
            <TypeWriter text="Electrical Engineer. Power Systems." speed={55} />
          </div>
          <p className="hero-desc">
            B.Tech EEE · Amrita Vishwa Vidyapeetham · Coimbatore<br/>
            Internship veteran · BOSCH · Eaton · L&T EduTech<br/>
            MATLAB Simulation specialist · Energy systems researcher.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="hud-btn">▷ VIEW EVIDENCE</a>
            <a href="#contact" className="hud-btn outline">INITIATE CONTACT</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="evidence-card">
            <div className="ev-header">
              <span className="ev-label">LIVE FEED</span>
              <span className="blink" style={{color:'var(--red)'}}>● REC</span>
            </div>
            <div className="ev-terminal">
              <div className="ev-line"><span className="ev-key">NAME:</span> UTTAM M</div>
              <div className="ev-line"><span className="ev-key">STATUS:</span> <span style={{color:'var(--green)'}}>GRADUATING 2026</span></div>
              <div className="ev-line"><span className="ev-key">CGPA:</span> 6.39/10</div>
              <div className="ev-line"><span className="ev-key">INTERNSHIPS:</span> 3</div>
              <div className="ev-line"><span className="ev-key">CERTS:</span> 7+</div>
              <div className="ev-line"><span className="ev-key">PROJECTS:</span> 3 [MATLAB]</div>
              <div className="ev-line"><span className="ev-key">LANG_1:</span> Tamil [Native]</div>
              <div className="ev-line"><span className="ev-key">LANG_2:</span> English [Pro]</div>
              <div className="ev-line"><span className="ev-key">CLEARANCE:</span> <span style={{color:'var(--amber)'}}>LEVEL_5</span></div>
            </div>
            <div className="ev-footer">
              <span>ANALYSER_ACTIVE...</span>
              <span>SYS. DIAGNOSTIC <span style={{color:'var(--green)'}}>STABLE</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL TO INVESTIGATE</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
