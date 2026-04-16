import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    const f=e.target
    window.location.href=`mailto:uttamkrishnan3578@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${f.name.value}\n\nMessage:\n${f.message.value}`)}`
    setSent(true); setTimeout(()=>setSent(false),6000)
  }
  return (
    <section id="contact" className="contact section-pad">
      <span className="sec-eyebrow">INITIATE PROTOCOL // START TRANSMISSION //</span>
      <h2 className="sec-title">CHANNEL OPEN</h2>
      <div className="sec-rule"/>

      <div className="con-grid">
        <div className="con-left">
          <p className="con-tagline">Et si on collaborait ensemble ?</p>
          <p className="con-sub">Open to full-time roles, internships, and engineering collaborations across power systems, sustainable energy, and simulation.</p>
          <div className="con-details">
            {[
              ['SIGNAL',   '● ONLINE',                         true],
              ['EMAIL',    'uttamkrishnan3578@gmail.com',       false],
              ['PHONE',    '+91 63833 33434',                   false],
              ['LOCATION', 'Tirunelveli, Tamil Nadu',           false],
              ['GITHUB',   'github.com/uttam2811',              false],
              ['LINKEDIN', 'linkedin.com/in/uttam2811',         false],
            ].map(([k,v,hi])=>(
              <div className="con-row" key={k}>
                <span className="con-k">{k}</span>
                <span className={`con-v${hi?' con-hi':''}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="con-right">
          <div className="con-form-wrap">
            <div className="cf-hdr">
              <span><span className="blink" style={{color:'var(--green)'}}>●</span> SECURE_TRANSMISSION</span>
              <span>AES-256 ENCRYPTED</span>
            </div>
            {sent ? (
              <div className="cf-sent">
                <p>&gt; TRANSMISSION_SENT</p>
                <p className="blink">&gt; AWAITING RESPONSE...</p>
              </div>
            ):(
              <form className="cf-form" onSubmit={submit}>
                <div className="cf-field">
                  <label>&gt; CALLSIGN (NAME):</label>
                  <input type="text" name="name" required placeholder="YOUR_NAME" autoComplete="off"/>
                </div>
                <div className="cf-field">
                  <label>&gt; MESSAGE_BODY:</label>
                  <textarea name="message" rows={5} required placeholder="ENTER_MESSAGE..."/>
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%',textAlign:'center'}}>
                  ▷ INITIATE CONTACT →
                </button>
              </form>
            )}
            <div className="cf-ftr">LIGNE SÉCURISÉE ÉTABLIE · © 2026 UTTAM M</div>
          </div>
        </div>
      </div>
    </section>
  )
}
