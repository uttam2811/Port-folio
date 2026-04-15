import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const subject = encodeURIComponent('Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${form.name.value}\n\nMessage:\n${form.message.value}`
    )
    window.location.href = `mailto:uttamkrishnan3578@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-header">
        <p className="section-tag">INITIATE PROTOCOL // START TRANSMISSION //</p>
        <h2 className="section-title">CHANNEL OPEN</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-heading">Et si on collaborait ensemble ?</p>
          <p className="contact-sub">
            Open to internship opportunities, full-time roles, and engineering
            collaborations across power systems, energy, and simulation.
          </p>

          <div className="contact-meta">
            <div className="cm-row"><span>SIGNAL:</span> <span className="blink" style={{color:'var(--green)'}}>● ONLINE</span></div>
            <div className="cm-row"><span>STATUS:</span> Open to Work</div>
            <div className="cm-row"><span>LOCATION:</span> Tirunelveli, Tamil Nadu, IN</div>
            <div className="cm-row"><span>TIMEZONE:</span> IST (UTC+5:30)</div>
          </div>

          <div className="contact-links">
            <a href="mailto:uttamkrishnan3578@gmail.com" className="c-link">
              <span className="c-link-label">EMAIL</span>
              uttamkrishnan3578@gmail.com
            </a>
            <a href="tel:+916383333434" className="c-link">
              <span className="c-link-label">PHONE</span>
              +91 63833 33434
            </a>
            <a href="https://github.com/uttam2811" target="_blank" rel="noreferrer" className="c-link">
              <span className="c-link-label">GITHUB</span>
              github.com/uttam2811
            </a>
            <a href="https://linkedin.com/in/uttam2811" target="_blank" rel="noreferrer" className="c-link">
              <span className="c-link-label">LINKEDIN</span>
              linkedin.com/in/uttam2811
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="terminal-form-wrap">
            <div className="tf-header">
              <span><span className="blink">●</span> SECURE_TRANSMISSION</span>
              <span>AES-256 ENCRYPTED</span>
            </div>

            {sent ? (
              <div className="tf-sent">
                <p>{'> TRANSMISSION_SENT'}</p>
                <p className="blink">{'> AWAITING RESPONSE...'}</p>
              </div>
            ) : (
              <form className="terminal-form" onSubmit={handleSubmit}>
                <div className="tf-field">
                  <label>{'> CALLSIGN (NAME):'}</label>
                  <input type="text" name="name" required placeholder="YOUR_NAME" autoComplete="off"/>
                </div>
                <div className="tf-field">
                  <label>{'> MESSAGE_BODY:'}</label>
                  <textarea name="message" rows={5} required placeholder="ENTER_MESSAGE..." />
                </div>
                <button type="submit" className="hud-btn">
                  ▷ INITIATE CONTACT →
                </button>
              </form>
            )}

            <div className="tf-footer">LIGNE SÉCURISÉE ÉTABLIE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
