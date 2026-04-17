import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import './Profile.css'

export default function Profile() {
  const { t } = useLang()
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    // reset then re-observe when language changes
    els.forEach(el => el.classList.remove('revealed'))
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [t])

  return (
    <section id="profile" className="profile section-pad" ref={ref}>
      <span className="sec-eyebrow reveal">{t.prof_eyebrow}</span>
      <h2 className="sec-title reveal">{t.prof_title}</h2>
      <div className="sec-rule reveal"/>

      <div className="prof-grid">
        <div className="id-card reveal">
          <div className="id-tape">{t.id_tape}</div>
          <div className="id-avatar-wrap">
            <div className="id-hex"><span>UM</span></div>
            <div className="id-rec-tag"><span className="blink" style={{color:'var(--red)'}}>●</span> REC_ACTIVE</div>
          </div>
          <div className="id-face-line">{t.id_face}</div>
          {t.id_rows.map(([k, v]) => (
            <div className="id-row" key={k}>
              <span className="id-k">{k}</span>
              <span className="id-v">{v}</span>
            </div>
          ))}
          <div className="id-alert">
            <span className="blink" style={{color:'var(--gold2)'}}>●</span>
            {t.id_alert}
          </div>
          <p className="id-bio">{t.id_bio}</p>
        </div>

        <div className="field-logs">
          <div className="reveal">
            <div className="log-heading">{t.exp_heading}</div>
            {t.experience.map((e, i) => (
              <div className="log-item" key={i}>
                <div className="log-period">[{e.period}] · {e.loc}</div>
                <div className="log-org">{e.org}</div>
                <div className="log-role">{e.role}</div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{marginTop:40}}>
            <div className="log-heading">{t.edu_heading}</div>
            {t.education.map((e, i) => (
              <div className="log-item" key={i}>
                <div className="log-period">[{e.period}]</div>
                <div className="log-org">{e.org}</div>
                <div className="log-role">{e.degree} — <span style={{color:'var(--gold2)'}}>{e.grade}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-wrap reveal">
        <div className="log-heading">{t.skills_heading}</div>
        <div className="skills-grid">
          <div>
            <div className="sk-label">{t.hard_label}</div>
            <div className="sk-tags">{t.hard_skills.map(s => <span key={s}>{s}</span>)}</div>
          </div>
          <div>
            <div className="sk-label">{t.soft_label}</div>
            <div className="sk-tags soft">{t.soft_skills.map(s => <span key={s}>{s}</span>)}</div>
          </div>
        </div>
      </div>

      <div className="certs-wrap reveal">
        <div className="log-heading">{t.certs_heading}</div>
        <div className="certs-grid">
          {t.certifications.map((c, i) => (
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
