import { useState, useEffect, useRef } from 'react'
import './Loader.css'

const GREETINGS = [
  { word: 'Hello',     lang: 'English'  },
  { word: 'Hallo',     lang: 'German'   },
  { word: 'Salut',     lang: 'French'   },
  { word: 'வணக்கம்',  lang: 'Tamil'    },
  { word: 'नमस्ते',   lang: 'Hindi'    },
  { word: 'Ciao',      lang: 'Italian'  },
]

// Phase 1: loading (0→100%), Phase 2: greeting cycle, Phase 3: fade out
export default function Loader({ onDone }) {
  const [phase, setPhase]       = useState('loading') // loading | greeting | out
  const [progress, setProgress] = useState(0)
  const [greetIdx, setGreetIdx] = useState(0)
  const [greetVisible, setGreetVisible] = useState(true)
  const raf = useRef(null)
  const start = useRef(Date.now())

  // Smooth GPU-driven progress bar (easeOutExpo)
  useEffect(() => {
    if (phase !== 'loading') return
    const DURATION = 2200
    const tick = () => {
      const elapsed = Date.now() - start.current
      const t = Math.min(elapsed / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setProgress(Math.floor(eased * 100))
      if (t < 1) { raf.current = requestAnimationFrame(tick) }
      else {
        setProgress(100)
        setTimeout(() => setPhase('greeting'), 300)
      }
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [phase])

  // Greeting cycle
  useEffect(() => {
    if (phase !== 'greeting') return
    let idx = 0
    const SHOW = 420
    const FADE = 220
    const cycle = () => {
      setGreetIdx(idx)
      setGreetVisible(true)
      setTimeout(() => {
        setGreetVisible(false)
        setTimeout(() => {
          idx++
          if (idx < GREETINGS.length) cycle()
          else {
            setTimeout(() => setPhase('out'), 200)
          }
        }, FADE)
      }, SHOW)
    }
    cycle()
  }, [phase])

  // Unmount after fade
  useEffect(() => {
    if (phase === 'out') {
      setTimeout(onDone, 700)
    }
  }, [phase, onDone])

  return (
    <div className={`loader gpu ${phase === 'out' ? 'loader-out' : ''}`}>
      {/* Corner decorations */}
      <div className="ldr-corner ldr-tl" />
      <div className="ldr-corner ldr-tr" />
      <div className="ldr-corner ldr-bl" />
      <div className="ldr-corner ldr-br" />

      {/* Loading phase */}
      <div className={`ldr-loading ${phase !== 'loading' ? 'phase-hide' : ''}`}>
        <div className="ldr-logo">
          <svg viewBox="0 0 100 100" width="72" height="72">
            <polygon points="50,6 94,28 94,72 50,94 6,72 6,28"
              fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"
              strokeDasharray="260" strokeDashoffset="260"
              style={{animation:'drawHex 1.4s var(--ease) forwards 0.2s'}}>
            </polygon>
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8c97a"/>
                <stop offset="100%" stopColor="#a07830"/>
              </linearGradient>
            </defs>
            <text x="50" y="60" textAnchor="middle"
              fill="url(#goldGrad)" fontFamily="Cormorant Garamond,serif"
              fontSize="28" fontWeight="600" letterSpacing="1"
              style={{animation:'fadeIn 0.5s ease forwards 1.2s', opacity:0}}>
              UM
            </text>
          </svg>
        </div>

        <div className="ldr-bar-wrap">
          <div className="ldr-bar">
            <div
              className="ldr-fill gpu"
              style={{ transform:`scaleX(${progress/100})` }}
            />
          </div>
          <div className="ldr-pct">{String(progress).padStart(3,'0')}</div>
        </div>

        <div className="ldr-label">INITIALIZING</div>
      </div>

      {/* Greeting phase */}
      <div className={`ldr-greeting ${phase === 'greeting' ? 'phase-show' : ''}`}>
        <div
          className={`greet-word gpu ${greetVisible ? 'greet-in' : 'greet-out'}`}
        >
          {GREETINGS[greetIdx].word}
        </div>
        <div className={`greet-lang gpu ${greetVisible ? 'greet-in' : 'greet-out'}`}>
          {GREETINGS[greetIdx].lang}
        </div>
      </div>
    </div>
  )
}
