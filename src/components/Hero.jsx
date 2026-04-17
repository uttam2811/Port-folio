import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const [vis, setVis] = useState(false)
  useEffect(() => { const id = setTimeout(() => setVis(true), 80); return () => clearTimeout(id) }, [])

  return (
    <section id="hero" className={`hero section-pad ${vis ? 'hero-vis' : ''}`}>
      <div className="hero-noise" />
      <div className="hero-top-bar">
        <span>{t.hero_sector}</span>
        <span><span className="blink" style={{color:'var(--red)'}}>●</span> {t.hero_scanning}</span>
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-case">{t.hero_case}</p>
          <h1 className="hero-name">
            <span className="hn-uttam">UTTAM</span>
            <span className="hn-m">M.</span>
          </h1>
          <div className="hero-roles">
            {t.hero_roles.map((r, i) => (
              <span key={i}>
                {i > 0 && <span className="role-sep"> · </span>}
                <span className="role-tag">{r}</span>
              </span>
            ))}
          </div>
          <p className="hero-desc">
            {t.hero_desc.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br/>}</span>
            ))}
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">{t.hero_cta1}</a>
            <a href="#contact"  className="btn-ghost">{t.hero_cta2}</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="dossier">
            <div className="dos-header">
              <span><span className="blink" style={{color:'var(--red)'}}>●</span> {t.dos_header_l}</span>
              <span>{t.dos_header_r}</span>
            </div>
            <div className="dos-rows">
              {t.dos_rows.map(([k, v, hi]) => (
                <div className="dos-row" key={k}>
                  <span className="dos-key">{k}</span>
                  <span className={`dos-val${hi ? ' dos-hi' : ''}`}>{v}</span>
                </div>
              ))}
            </div>
            <div className="dos-footer">
              <span>{t.dos_footer_l}</span>
              <span style={{color:'var(--gold2)'}}>{t.dos_footer_r}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-ind">
        <div className="hsi-line"/><span>{t.hero_scroll}</span><div className="hsi-line"/>
      </div>
    </section>
  )
}
