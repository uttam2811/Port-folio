import { useState, useEffect } from 'react'
import './HUD.css'

function useCounter(target, interval = 40) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let v = 0
    const t = setInterval(() => {
      v += Math.ceil(target / 60)
      if (v >= target) { setVal(target); clearInterval(t) }
      else setVal(v)
    }, interval)
    return () => clearInterval(t)
  }, [target, interval])
  return val
}

export default function HUD() {
  const [time, setTime] = useState('')
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime([
        String(now.getHours()).padStart(2,'0'),
        String(now.getMinutes()).padStart(2,'0'),
        String(now.getSeconds()).padStart(2,'0'),
      ].join(':'))
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="hud" aria-hidden="true">
      {/* Top-left */}
      <div className="hud-tl">
        <div className="hud-tag"><span className="blink red-dot">●</span> CAM_01 [REC]</div>
        <div className="hud-tag">SIGNAL_STRONG</div>
        <div className="hud-tag">{time || '00:00:00'}</div>
      </div>

      {/* Top-right */}
      <div className="hud-tr">
        <div className="hud-tag">ISO 800</div>
        <div className="hud-tag">FREQ: 12.4 Hz</div>
        <div className="hud-tag">ENCRYPTED</div>
      </div>

      {/* Bottom-left */}
      <div className="hud-bl">
        <div className="hud-tag">LAT: 8.7139 N</div>
        <div className="hud-tag">LON: 77.7567 E</div>
        <div className="hud-tag">TIRUNELVELI_TN</div>
      </div>

      {/* Bottom-right */}
      <div className="hud-br">
        <div className="hud-tag">X: {pos.x} Y: {pos.y}</div>
        <div className="hud-tag">SYS. DIAGNOSTIC</div>
        <div className="hud-tag" style={{color:'var(--green)'}}>STABLE</div>
      </div>

      {/* Corner brackets */}
      <div className="corner-bracket top-left" />
      <div className="corner-bracket top-right" />
      <div className="corner-bracket bottom-left" />
      <div className="corner-bracket bottom-right" />
    </div>
  )
}
