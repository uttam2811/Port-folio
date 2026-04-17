import { useRef, useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './Projects.css'

export default function Projects() {
  const { t } = useLang()
  const [active, setActive] = useState(null)
  const sliderRef = useRef(null)
  const drag = useRef({down:false,startX:0,sl:0})

  const onDown = e => { drag.current={down:true,startX:e.pageX-sliderRef.current.offsetLeft,sl:sliderRef.current.scrollLeft}; sliderRef.current.style.cursor='grabbing' }
  const onUp   = () => { drag.current.down=false; if(sliderRef.current) sliderRef.current.style.cursor='grab' }
  const onMove = e => { if(!drag.current.down) return; e.preventDefault(); const x=e.pageX-sliderRef.current.offsetLeft; sliderRef.current.scrollLeft=drag.current.sl-(x-drag.current.startX)*1.4 }

  useEffect(() => {
    const fn = e => { if(e.key==='Escape') setActive(null) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  // Close modal when language switches (avoids stale data)
  useEffect(() => { setActive(null) }, [t])

  return (
    <section id="projects" className="projects section-pad">
      <span className="sec-eyebrow">{t.proj_eyebrow}</span>
      <h2 className="sec-title">{t.proj_title}</h2>
      <div className="sec-rule"/>

      <p className="drag-hint">{t.proj_drag}</p>

      <div className="ev-slider gpu" ref={sliderRef}
        onMouseDown={onDown} onMouseLeave={onUp} onMouseUp={onUp} onMouseMove={onMove}>
        {t.projects.map((p, i) => (
          <div className="ev-card" key={i} onClick={() => setActive(p)} data-hover>
            <div className="ev-card-top">
              <span className="ev-num">PREUVE #{p.num}</span>
              <span className="ev-type">{p.type}</span>
            </div>
            <div className="ev-vis">
              <span className="ev-vis-num">{p.num}</span>
              <div className="ev-scan-beam"/>
            </div>
            <div className="ev-body">
              <h3 className="ev-title">{p.title}</h3>
              <div className="ev-stack">
                {p.stack.slice(0,3).map(s => <span key={s}>{s}</span>)}
              </div>
              <p className="ev-cta">{t.proj_decrypt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ev-count">
        {t.proj_archive} — {String(t.projects.length).padStart(2,'0')} {t.proj_files}
      </div>

      {active && (
        <div className="modal-bg" onClick={() => setActive(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-top">
              <span className="modal-classified">{t.proj_modal_classified}{active.num}</span>
              <button className="modal-close-btn" onClick={() => setActive(null)}>
                {t.proj_modal_close}
              </button>
            </div>
            <div className="modal-type">{active.type}</div>
            <h2 className="modal-title">{active.title}</h2>
            <div className="modal-meta">
              <span>{t.proj_modal_year} <strong>{active.year}</strong></span>
              <span>{t.proj_modal_duration} <strong>{active.duration}</strong></span>
            </div>
            <p className="modal-desc">{active.desc}</p>
            <div className="modal-stacks">
              {active.stack.map(s => <span key={s}>{s}</span>)}
            </div>
            <div className="modal-foot">{t.proj_modal_foot}</div>
          </div>
        </div>
      )}
    </section>
  )
}
