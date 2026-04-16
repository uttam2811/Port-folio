import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const f = e.target
    const s = encodeURIComponent('Portfolio Inquiry')
    const b = encodeURIComponent(`Name: ${f.name.value}\n\nMessage:\n${f.message.value}`)
    window.location.href = `mailto:uttamkrishnan3578@gmail.com?subject=${s}&body=${b}`
    setSent(true); setTimeout(()=>setSent(false),5000)
  }

  return (
    <section id="contact" className="contact section-pad">
      <div className="sec-header">
        <span className="sec-tag">INITIATE PROTOCOL · START TRANSMISSION</span>
        <h2 className="sec-title">Let's Collaborate</h2>
        <div className="sec-line" />
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            Open to internship opportunities, full-time engineering roles, and
            research collaborations in power systems, sustainable energy, and
            simulation-driven design.
          </p>
          <div className="contact-details">
            {[
              ['Signal',   '● Online',                    true],
              ['Email',    'uttamkrishnan3578@gmail.com', false],
              ['Phone',    '+91 63833 33434',             false],
              ['Location', 'Tirunelveli, Tamil Nadu',     false],
              ['GitHub',   'github.com/uttam2811',        false],
            ].map(([k,v,gold])=>(
              <div className="cd-row" key={k}>
                <span className="cd-key">{k}</span>
                <span className={`cd-val ${gold?'cd-gold':''}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="cf-header">
            <span>Secure Transmission</span>
            <span style={{color:'var(--gold3)'}}>AES-256</span>
          </div>
          {sent ? (
            <div className="cf-sent">
              <p>Transmission sent.</p>
              <p className="cf-sub">Awaiting response...</p>
            </div>
          ) : (
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-field">
                <label>Name</label>
                <input type="text" name="name" required placeholder="Your full name" autoComplete="off" />
              </div>
              <div className="cf-field">
                <label>Message</label>
                <textarea name="message" rows={5} required placeholder="Describe your opportunity or collaboration idea..." />
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%',textAlign:'center'}}>
                Initiate Contact →
              </button>
            </form>
          )}
          <div className="cf-footer">Ligne sécurisée établie · © 2026 Uttam M</div>
        </div>
      </div>
    </section>
  )
}
