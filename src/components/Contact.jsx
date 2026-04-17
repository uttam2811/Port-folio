import { useState } from 'react'
import { useLang } from '../context/LangContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const submit = e => {
    e.preventDefault()
    const f = e.target
    window.location.href = `mailto:uttamkrishnan3578@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${f.name.value}\n\nMessage:\n${f.message.value}`)}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact" className="contact section-pad">
      <span className="sec-eyebrow">{t.con_eyebrow}</span>
      <h2 className="sec-title">{t.con_title}</h2>
      <div className="sec-rule"/>

      <div className="con-grid">
        <div className="con-left">
          <p className="con-tagline">{t.con_tagline}</p>
          <p className="con-sub">{t.con_sub}</p>
          <div className="con-details">
            {t.con_details.map(([k, v, hi]) => (
              <div className="con-row" key={k}>
                <span className="con-k">{k}</span>
                <span className={`con-v${hi ? ' con-hi' : ''}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="con-right">
          <div className="con-form-wrap">
            <div className="cf-hdr">
              <span><span className="blink" style={{color:'var(--gold)'}}>●</span> {t.con_form_header}</span>
              <span>{t.con_form_enc}</span>
            </div>
            {sent ? (
              <div className="cf-sent">
                <p>{t.con_sent_1}</p>
                <p className="blink">{t.con_sent_2}</p>
              </div>
            ) : (
              <form className="cf-form" onSubmit={submit}>
                <div className="cf-field">
                  <label>{t.con_label_name}</label>
                  <input type="text" name="name" required placeholder={t.con_placeholder_name} autoComplete="off"/>
                </div>
                <div className="cf-field">
                  <label>{t.con_label_msg}</label>
                  <textarea name="message" rows={5} required placeholder={t.con_placeholder_msg}/>
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%',textAlign:'center'}}>
                  {t.con_btn}
                </button>
              </form>
            )}
            <div className="cf-ftr">{t.con_footer}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
