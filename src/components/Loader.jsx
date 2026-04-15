import { useState, useEffect } from 'react'
import './Loader.css'

const lines = [
  'INITIALIZING SYSTEM...',
  'SAT_LINK: SEARCHING...',
  'SIGNAL TRACING...',
  'IDENTITY VERIFIED: UTTAM_M',
  'CLEARANCE: LEVEL 5',
  'LOADING CASE FILES...',
  'SYSTEM READY.',
]

export default function Loader({ onDone }) {
  const [progress, setProgress]   = useState(0)
  const [lineIdx, setLineIdx]     = useState(0)
  const [visible, setVisible]     = useState(true)
  const [typed, setTyped]         = useState('')
  const [charIdx, setCharIdx]     = useState(0)

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); return 100 }
        return p + 1
      })
    }, 28)
    return () => clearInterval(prog)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setVisible(false)
        setTimeout(onDone, 600)
      }, 600)
    }
  }, [progress, onDone])

  // Typing effect for current line
  useEffect(() => {
    if (lineIdx >= lines.length) return
    const cur = lines[lineIdx]
    if (charIdx < cur.length) {
      const t = setTimeout(() => {
        setTyped(cur.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 40)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1)
        setCharIdx(0)
        setTyped('')
      }, 300)
      return () => clearTimeout(t)
    }
  }, [lineIdx, charIdx])

  if (!visible) return null

  return (
    <div className={`loader ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="loader-corner tl">CAM_04 [REC]</div>
      <div className="loader-corner tr"><span className="blink">●</span> SIGNAL_STRONG</div>
      <div className="loader-corner bl">00:00:00:00</div>
      <div className="loader-corner br">ISO 800</div>

      <div className="loader-center">
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" width="90" height="90">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none" stroke="#00ff41" strokeWidth="1.5"
              strokeDasharray="300" strokeDashoffset="300">
              <animate attributeName="strokeDashoffset" from="300" to="0" dur="1.2s" fill="freeze" begin="0.2s"/>
            </polygon>
            <text x="50" y="58" textAnchor="middle"
              fill="#00ff41" fontFamily="Orbitron,monospace" fontSize="22" fontWeight="700"
              opacity="0">
              UM
              <animate attributeName="opacity" from="0" to="1" dur="0.4s" fill="freeze" begin="1.1s"/>
            </text>
          </svg>
        </div>

        <div className="loader-terminal">
          {lines.slice(0, lineIdx).map((l, i) => (
            <div key={i} className="terminal-line done">
              <span className="prompt">{'> '}</span>{l}
            </div>
          ))}
          {lineIdx < lines.length && (
            <div className="terminal-line">
              <span className="prompt">{'> '}</span>{typed}<span className="blink">_</span>
            </div>
          )}
        </div>

        <div className="loader-bar-wrap">
          <div className="loader-bar">
            <div className="loader-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-pct">{String(progress).padStart(2,'0')}%</div>
        </div>
      </div>

      <div className="loader-freq">FREQ: 12.4 Hz</div>
      <div className="loader-encrypted">ENCRYPTED</div>
    </div>
  )
}
