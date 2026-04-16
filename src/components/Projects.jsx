import { useRef, useState, useEffect } from 'react'
import './Projects.css'

const projects = [
  {
    num:'01', type:'MATLAB · THERMAL ANALYSIS',
    title:'Temperature Characteristics of a Li-Ion Battery',
    year:2024, duration:'3 months',
    stack:['MATLAB','Li-ion','Thermal Analysis','EV Systems'],
    desc:'Characterized lithium-ion battery performance across working temperatures. Studied how heat affects capacity, lifespan, and internal resistance — critical for EV battery management system design.',
  },
  {
    num:'02', type:'MATLAB · POWER SYSTEMS',
    title:'Harmonic State Space Modelling of Wireless Power Transfer',
    year:2024, duration:'2 months',
    stack:['MATLAB','WPT Systems','HSS Modelling','Harmonics'],
    desc:'Validated the Harmonic State-Space model accuracy in analyzing WPT system dynamics. Demonstrated clear advantages over traditional modelling for dynamic power systems.',
  },
  {
    num:'03', type:'MATLAB · GRID ANALYSIS',
    title:'Load Flow Analysis of IEEE–9 BUS System (NR Method)',
    year:2024, duration:'2 months',
    stack:['MATLAB','Simulink','Newton-Raphson','Power Flow'],
    desc:'Validated NR load flow for a 9-bus power system. Cross-compared MATLAB code with Simulink to evaluate grid stability and performance under varying load conditions.',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)
  const sliderRef = useRef(null)
  const drag = useRef({down:false,startX:0,sl:0})

  const onDown = e=>{drag.current={down:true,startX:e.pageX-sliderRef.current.offsetLeft,sl:sliderRef.current.scrollLeft};sliderRef.current.style.cursor='grabbing'}
  const onUp   = ()=>{drag.current.down=false;if(sliderRef.current)sliderRef.current.style.cursor='grab'}
  const onMove = e=>{if(!drag.current.down)return;e.preventDefault();const x=e.pageX-sliderRef.current.offsetLeft;sliderRef.current.scrollLeft=drag.current.sl-(x-drag.current.startX)*1.4}

  useEffect(()=>{
    const fn=e=>{if(e.key==='Escape')setActive(null)}
    window.addEventListener('keydown',fn); return()=>window.removeEventListener('keydown',fn)
  },[])

  return (
    <section id="projects" className="projects section-pad">
      <span className="sec-eyebrow">SECTOR: EEE_PROJECTS · SCANNING: ACTIVE</span>
      <h2 className="sec-title">EVIDENCE BOARD</h2>
      <div className="sec-rule"/>

      <p className="drag-hint">← DRAG TO INVESTIGATE →</p>

      <div className="ev-slider gpu" ref={sliderRef}
        onMouseDown={onDown} onMouseLeave={onUp} onMouseUp={onUp} onMouseMove={onMove}>
        {projects.map((p,i)=>(
          <div className="ev-card" key={i} onClick={()=>setActive(p)} data-hover>
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
                {p.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}
              </div>
              <p className="ev-cta">[ CLIQUER POUR DÉCRYPTER ]</p>
            </div>
          </div>
        ))}
      </div>
      <div className="ev-count">EVIDENCE ARCHIVE — {String(projects.length).padStart(2,'0')} FILES</div>

      {active && (
        <div className="modal-bg" onClick={()=>setActive(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <div className="modal-top">
              <span className="modal-classified">TOP SECRET // DECRYPTED · PREUVE #{active.num}</span>
              <button className="modal-close-btn" onClick={()=>setActive(null)}>FERMER [ESC]</button>
            </div>
            <div className="modal-type">{active.type}</div>
            <h2 className="modal-title">{active.title}</h2>
            <div className="modal-meta">
              <span>ANNÉE <strong>{active.year}</strong></span>
              <span>DURÉE <strong>{active.duration}</strong></span>
            </div>
            <p className="modal-desc">{active.desc}</p>
            <div className="modal-stacks">
              {active.stack.map(s=><span key={s}>{s}</span>)}
            </div>
            <div className="modal-foot">SECURE_GRID_99 // CASE CLOSED</div>
          </div>
        </div>
      )}
    </section>
  )
}
