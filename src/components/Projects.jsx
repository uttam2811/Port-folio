import { useRef, useState, useEffect } from 'react'
import './Projects.css'

const projects = [
  {
    num:'01', type:'MATLAB · THERMAL ANALYSIS',
    title:'Temperature Characteristics of a Lithium-Ion Battery',
    year:2024, duration:'3 months',
    stack:['MATLAB','Li-ion Batteries','Thermal Analysis','EV Systems'],
    desc:'Characterized lithium-ion battery performance and safety across working temperatures. Investigated how thermal conditions affect capacity, lifespan, and internal resistance — foundational for EV battery management system design.',
  },
  {
    num:'02', type:'MATLAB · POWER SYSTEMS',
    title:'Harmonic State Space Modelling of Wireless Power Transfer',
    year:2024, duration:'2 months',
    stack:['MATLAB','WPT Systems','HSS Modelling','Harmonic Analysis'],
    desc:'Validated the Harmonic State-Space model accuracy in analyzing WPT system dynamics and harmonic interactions. Demonstrated clear advantages over traditional modelling methods for dynamic power systems.',
  },
  {
    num:'03', type:'MATLAB · GRID ANALYSIS',
    title:'Load Flow Analysis of IEEE–9 BUS System Using NR Method',
    year:2024, duration:'2 months',
    stack:['MATLAB','Simulink','Newton-Raphson','Power Flow'],
    desc:'Validated Newton-Raphson load flow for a 9-bus power system. Cross-compared MATLAB code with Simulink results to rigorously evaluate grid stability and performance under varying load conditions.',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)
  const sliderRef = useRef(null)
  const drag = useRef({down:false,startX:0,sl:0})

  const onDown = e => {
    drag.current = {down:true, startX:e.pageX - sliderRef.current.offsetLeft, sl:sliderRef.current.scrollLeft}
    sliderRef.current.style.cursor='grabbing'
  }
  const onUp   = () => { drag.current.down=false; if(sliderRef.current) sliderRef.current.style.cursor='grab' }
  const onMove = e => {
    if(!drag.current.down) return; e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    sliderRef.current.scrollLeft = drag.current.sl - (x - drag.current.startX)*1.4
  }

  // Close on Escape
  useEffect(()=>{
    const fn = e => { if(e.key==='Escape') setActive(null) }
    window.addEventListener('keydown',fn)
    return ()=>window.removeEventListener('keydown',fn)
  },[])

  return (
    <section id="projects" className="projects section-pad">
      <div className="sec-header">
        <span className="sec-tag">SECTOR: ENGINEERING_PROJECTS</span>
        <h2 className="sec-title">Evidence Board</h2>
        <div className="sec-line" />
      </div>

      <p className="drag-hint">← drag to explore →</p>

      <div className="ev-slider gpu"
        ref={sliderRef}
        onMouseDown={onDown} onMouseLeave={onUp}
        onMouseUp={onUp}    onMouseMove={onMove}
      >
        {projects.map((p,i)=>(
          <div className="ev-card" key={i} onClick={()=>setActive(p)} data-hover>
            <div className="ev-card-header">
              <span className="ev-num">{p.num}</span>
              <span className="ev-type">{p.type}</span>
            </div>
            <div className="ev-card-vis">
              <div className="ev-vis-inner">
                <span className="ev-vis-num">{p.num}</span>
                <div className="ev-scan" />
              </div>
            </div>
            <div className="ev-card-body">
              <h3>{p.title}</h3>
              <div className="ev-stack">
                {p.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}
              </div>
              <p className="ev-cta">Click to decrypt →</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ev-total">{String(projects.length).padStart(2,'0')} files classified</div>

      {/* Modal */}
      {active && (
        <div className="modal-bg" onClick={()=>setActive(null)}>
          <div className="modal-card" onClick={e=>e.stopPropagation()}>
            <div className="modal-top">
              <span className="modal-classified">DECLASSIFIED · CASE #{active.num}</span>
              <button className="modal-close" onClick={()=>setActive(null)}>✕ Close</button>
            </div>
            <div className="modal-type">{active.type}</div>
            <h2 className="modal-title">{active.title}</h2>
            <div className="modal-meta">
              <span><span>Year</span>{active.year}</span>
              <span><span>Duration</span>{active.duration}</span>
            </div>
            <p className="modal-desc">{active.desc}</p>
            <div className="modal-stack">
              {active.stack.map(s=><span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
