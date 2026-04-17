import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './HUD.css'

export default function HUD() {
  const { t } = useLang()
  const [time, setTime] = useState('')
  const [pos,  setPos]  = useState({ x:0, y:0 })

  useEffect(() => {
    const tick = () => {
      const n = new Date()
      setTime(`${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`)
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const fn = e => setPos({ x:e.clientX, y:e.clientY })
    window.addEventListener('mousemove', fn, { passive:true })
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <div className="hud" aria-hidden="true">
      <div className="hud-tl">
        <div className="hud-tag live"><span className="blink">●</span> REC</div>
        <div className="hud-tag">{time}</div>
        <div className="hud-tag">ISO 800</div>
      </div>
      <div className="hud-tr">
        <div className="hud-tag">FREQ: 12.4 Hz</div>
        <div className="hud-tag">ENCRYPTED</div>
        <div className="hud-tag">SECURE</div>
      </div>
      <div className="hud-bl">
        <div className="hud-tag">LAT: 8.7139 N</div>
        <div className="hud-tag">LON: 77.7567 E</div>
        <div className="hud-tag">TIRUNELVELI</div>
      </div>
      <div className="hud-br">
        <div className="hud-tag">X:{pos.x} Y:{pos.y}</div>
        <div className="hud-tag">{t.hud_diag}</div>
        <div className="hud-tag live">{t.hud_stable}</div>
      </div>
      <div className="corner-bracket top-left"/>
      <div className="corner-bracket top-right"/>
      <div className="corner-bracket bottom-left"/>
      <div className="corner-bracket bottom-right"/>
    </div>
  )
}
