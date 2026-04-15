import { useRef, useState } from 'react'
import './Projects.css'

const projects = [
  {
    num: '#01',
    type: 'MATLAB SIMULATION',
    title: 'Temperature Characteristics of a Lithium-Ion Battery',
    year: 2024,
    context: 'Academic',
    duration: '3 months',
    stack: ['MATLAB','Li-ion','Thermal Analysis'],
    desc: 'Characterized battery performance and safety across working temperatures. Studied how heat affects capacity, lifespan, and internal resistance — critical for EV battery design.',
    status: 'DECLASSIFIED',
  },
  {
    num: '#02',
    type: 'POWER SYSTEMS',
    title: 'Harmonic State Space Modelling of Wireless Power Transfer',
    year: 2024,
    context: 'Academic',
    duration: '2 months',
    stack: ['MATLAB','WPT Systems','HSS Model'],
    desc: 'Validated the HSS model accuracy in analyzing WPT system dynamics and harmonic interactions. Demonstrated superiority over traditional modelling methods.',
    status: 'DECLASSIFIED',
  },
  {
    num: '#03',
    type: 'GRID ANALYSIS',
    title: 'Load Flow Analysis of IEEE–9 BUS System Using NR Method',
    year: 2024,
    context: 'Academic',
    duration: '2 months',
    stack: ['MATLAB','Simulink','Newton-Raphson'],
    desc: 'Validated Newton-Raphson load flow for a 9-bus power system. Cross-compared MATLAB code and Simulink results to evaluate grid stability under varying load conditions.',
    status: 'DECLASSIFIED',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)
  const sliderRef = useRef(null)

  const drag = useRef({ down:false, startX:0, scrollLeft:0 })
  const onMouseDown  = e => { drag.current = {down:true, startX:e.pageX - sliderRef.current.offsetLeft, scrollLeft:sliderRef.current.scrollLeft}; sliderRef.current.style.cursor='grabbing' }
  const onMouseUp    = () => { drag.current.down=false; sliderRef.current.style.cursor='grab' }
  const onMouseMove  = e => {
    if (!drag.current.down) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    sliderRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.5
  }

  return (
    <section id="projects" className="projects section-pad">
      <div className="projects-header">
        <div>
          <p className="section-tag">SECTOR: ENGINEERING_PROJECTS</p>
          <h2 className="section-title">EVIDENCE BOARD</h2>
        </div>
        <div className="proj-meta">
          <span>SCANNING: ACTIVE</span>
          <span className="blink">●</span>
        </div>
      </div>

      <p className="proj-drag-hint">← DRAG TO INVESTIGATE →</p>

      {/* Horizontal scroll slider */}
      <div
        className="evidence-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="evidence-item"
            onClick={() => setActive(p)}
            data-hover
          >
            <div className="ev-item-header">
              <span className="ev-num">PREUVE {p.num}</span>
              <span className="ev-type">{p.type}</span>
            </div>
            <div className="ev-item-img">
              <div className="ev-img-placeholder">
                <span>{p.num}</span>
                <div className="scan-line-anim" />
              </div>
            </div>
            <div className="ev-item-body">
              <h3>{p.title}</h3>
              <div className="ev-tags">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <p className="ev-decrypt">[ CLICK TO DECRYPT ]</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ev-count">{projects.length.toString().padStart(2,'0')} FILES</div>

      {/* Modal */}
      {active && (
        <div className="ev-modal-bg" onClick={() => setActive(null)}>
          <div className="ev-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span>TOP SECRET // DECRYPTED</span>
              <button onClick={() => setActive(null)}>CLOSE [ESC]</button>
            </div>
            <div className="modal-meta">
              <span>PREUVE {active.num}</span>
              <span>{active.type}</span>
              <span>YEAR {active.year}</span>
              <span className="blink" style={{color:'var(--green)'}}>● {active.status}</span>
            </div>
            <h2 className="modal-title">{active.title}</h2>
            <div className="modal-details">
              <div className="modal-row"><span>CONTEXT:</span>{active.context}</div>
              <div className="modal-row"><span>DURATION:</span>{active.duration}</div>
              <div className="modal-row"><span>STACK:</span>{active.stack.join(' · ')}</div>
            </div>
            <p className="modal-desc">{active.desc}</p>
            <div className="modal-footer">SECURE_GRID_99 // CASE CLOSED</div>
          </div>
        </div>
      )}
    </section>
  )
}
