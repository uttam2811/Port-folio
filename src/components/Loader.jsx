import { useState, useEffect, useRef } from 'react'
import './Loader.css'

// 20 languages → end with Hello
const GREETINGS = [
  { word:'வணக்கம்',   lang:'Tamil'       },
  { word:'नमस्ते',    lang:'Hindi'       },
  { word:'Hola',      lang:'Spanish'     },
  { word:'Bonjour',   lang:'French'      },
  { word:'Ciao',      lang:'Italian'     },
  { word:'Hallo',     lang:'German'      },
  { word:'Olá',       lang:'Portuguese'  },
  { word:'مرحبا',     lang:'Arabic'      },
  { word:'你好',       lang:'Chinese'     },
  { word:'こんにちは',  lang:'Japanese'    },
  { word:'안녕하세요',  lang:'Korean'      },
  { word:'Привет',    lang:'Russian'     },
  { word:'مرحبا',     lang:'Farsi'       },
  { word:'Merhaba',   lang:'Turkish'     },
  { word:'Γεια σου',  lang:'Greek'       },
  { word:'Sawubona',  lang:'Zulu'        },
  { word:'Halito',    lang:'Choctaw'     },
  { word:'Selam',     lang:'Amharic'     },
  { word:'Kumusta',   lang:'Filipino'    },
  { word:'Hej',       lang:'Swedish'     },
  { word:'Hello',     lang:'English'     }, // always last
]

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState('loading') // loading | greeting | out
  const [gIdx, setGIdx]         = useState(0)
  const [gState, setGState]     = useState('in')      // in | hold | out
  const rafRef  = useRef(null)
  const startRef = useRef(Date.now())

  // ── Phase 1: smooth easeOutExpo progress bar ──────────────────────────────
  useEffect(() => {
    if (phase !== 'loading') return
    const DURATION = 2600
    const tick = () => {
      const t = Math.min((Date.now() - startRef.current) / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 5)
      setProgress(Math.floor(eased * 100))
      if (t < 1) { rafRef.current = requestAnimationFrame(tick) }
      else { setProgress(100); setTimeout(() => setPhase('greeting'), 400) }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase])

  // ── Phase 2: greeting cycle (slower — 700ms visible, 300ms transition) ───
  useEffect(() => {
    if (phase !== 'greeting') return
    let idx = 0
    let cancelled = false

    const next = () => {
      if (cancelled) return
      setGIdx(idx)
      setGState('in')

      // hold
      setTimeout(() => {
        if (cancelled) return
        setGState('out')

        // after fade-out, advance
        setTimeout(() => {
          if (cancelled) return
          idx++
          if (idx < GREETINGS.length) {
            next()
          } else {
            setTimeout(() => { if (!cancelled) setPhase('out') }, 200)
          }
        }, 320)
      }, idx === GREETINGS.length - 1 ? 1400 : 700) // hold "Hello" longer
    }

    next()
    return () => { cancelled = true }
  }, [phase])

  // ── Phase 3: fade out ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === 'out') setTimeout(onDone, 650)
  }, [phase, onDone])

  return (
    <div className={`loader gpu ${phase === 'out' ? 'loader-out' : ''}`}>
      {/* HUD corners */}
      <div className="lc lc-tl"><span className="blink">●</span> CAM_04 [REC]</div>
      <div className="lc lc-tr">SIGNAL_STRONG</div>
      <div className="lc lc-bl">LAT: 8.7139 N · LON: 77.7567 E</div>
      <div className="lc lc-br">ISO 800 · ENCRYPTED</div>

      {/* Corner brackets */}
      <div className="cb cb-tl"/><div className="cb cb-tr"/>
      <div className="cb cb-bl"/><div className="cb cb-br"/>

      {/* ── LOADING PHASE ── */}
      <div className={`l-loading ${phase !== 'loading' ? 'l-hide' : ''}`}>
        <div className="l-logo">
          <svg viewBox="0 0 120 120" width="96" height="96">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <polygon points="60,4 116,32 116,88 60,116 4,88 4,32"
              fill="none" stroke="#00ff41" strokeWidth="1.5" filter="url(#glow)"
              strokeDasharray="330" strokeDashoffset="330"
              style={{animation:'drawHex 1.6s cubic-bezier(0.16,1,0.3,1) forwards 0.3s'}}
            />
            <text x="60" y="72" textAnchor="middle"
              fill="#00ff41" fontFamily="Orbitron,monospace"
              fontSize="28" fontWeight="700" letterSpacing="3"
              style={{animation:'fadeUp 0.5s ease forwards 1.6s', opacity:0}}>
              UM
            </text>
          </svg>
        </div>

        <div className="l-terminal">
          <div className="lt-line"><span className="lt-prompt">&gt; </span>INITIALIZING SYSTEM...</div>
          <div className="lt-line"><span className="lt-prompt">&gt; </span>SAT_LINK: SEARCHING...</div>
          <div className="lt-line"><span className="lt-prompt">&gt; </span>IDENTITY VERIFIED: UTTAM_M</div>
          <div className="lt-line"><span className="lt-prompt">&gt; </span>CLEARANCE: <span style={{color:'var(--amber)'}}>LEVEL_5</span></div>
          <div className="lt-line"><span className="lt-prompt">&gt; </span>LOADING CASE FILES... <span className="blink">_</span></div>
        </div>

        <div className="l-bar-wrap">
          <div className="l-bar-track">
            <div className="l-bar-fill gpu" style={{transform:`scaleX(${progress/100})`}}/>
            <div className="l-bar-glow gpu"  style={{left:`${progress}%`}}/>
          </div>
          <div className="l-pct">{String(progress).padStart(3,'0')}%</div>
        </div>

        <div className="l-status">
          <span className="l-label">FREQ: 12.4 Hz</span>
          <span className="l-label blink">SIGNAL TRACING...</span>
        </div>
      </div>

      {/* ── GREETING PHASE ── */}
      <div className={`l-greeting ${phase === 'greeting' ? 'l-show' : ''}`}>
        <div className={`g-word gpu g-${gState}`} key={gIdx}>
          {GREETINGS[gIdx]?.word}
        </div>
        <div className={`g-lang gpu g-${gState}`}>
          — {GREETINGS[gIdx]?.lang}
        </div>
        <div className="g-progress">
          <div className="g-bar" style={{width:`${((gIdx+1)/GREETINGS.length)*100}%`}}/>
        </div>
      </div>
    </div>
  )
}
