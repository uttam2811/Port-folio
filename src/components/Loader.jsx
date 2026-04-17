import { useState, useEffect, useRef } from 'react'
import './Loader.css'

const GREETINGS = [
  { word:'வணக்கம்',    lang:'Tamil'       },
  { word:'नमस्ते',     lang:'Hindi'       },
  { word:'Hola',       lang:'Spanish'     },
  { word:'Bonjour',    lang:'French'      },
  { word:'Ciao',       lang:'Italian'     },
  { word:'Hallo',      lang:'German'      },
  { word:'Olá',        lang:'Portuguese'  },
  { word:'Merhaba',    lang:'Turkish'     },
  { word:'Γεια σου',   lang:'Greek'       },
  { word:'Привет',     lang:'Russian'     },
  { word:'你好',        lang:'Chinese'     },
  { word:'こんにちは',   lang:'Japanese'    },
  { word:'안녕하세요',   lang:'Korean'      },
  { word:'مرحبا',      lang:'Arabic'      },
  { word:'Sawubona',   lang:'Zulu'        },
  { word:'Hej',        lang:'Swedish'     },
  { word:'Selam',      lang:'Amharic'     },
  { word:'Kumusta',    lang:'Filipino'    },
  { word:'Witaj',      lang:'Polish'      },
  { word:'Tere',       lang:'Estonian'    },
  { word:'Hello',      lang:'English'     },
]

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState('loading')
  const [gIdx, setGIdx]         = useState(0)
  const [gState, setGState]     = useState('in')
  const rafRef   = useRef(null)
  const startRef = useRef(Date.now())

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

  useEffect(() => {
    if (phase !== 'greeting') return
    let idx = 0, cancelled = false
    const next = () => {
      if (cancelled) return
      setGIdx(idx); setGState('in')
      const isLast = idx === GREETINGS.length - 1
      setTimeout(() => {
        if (cancelled) return
        setGState('out')
        setTimeout(() => {
          if (cancelled) return
          idx++
          if (idx < GREETINGS.length) next()
          else setTimeout(() => { if (!cancelled) setPhase('out') }, 200)
        }, 300)
      }, isLast ? 1600 : 720)
    }
    next()
    return () => { cancelled = true }
  }, [phase])

  useEffect(() => {
    if (phase === 'out') setTimeout(onDone, 650)
  }, [phase, onDone])

  return (
    <div className={`loader gpu ${phase === 'out' ? 'loader-out' : ''}`}>
      <div className="lc lc-tl"><span className="blink" style={{color:'var(--red)'}}>●</span> CAM_04 [REC]</div>
      <div className="lc lc-tr">SIGNAL_STRONG</div>
      <div className="lc lc-bl">LAT: 8.7139 N · LON: 77.7567 E</div>
      <div className="lc lc-br">ISO 800 · ENCRYPTED</div>
      <div className="cb cb-tl"/><div className="cb cb-tr"/>
      <div className="cb cb-bl"/><div className="cb cb-br"/>

      <div className={`l-loading ${phase !== 'loading' ? 'l-hide' : ''}`}>
        <div className="l-logo">
          <svg viewBox="0 0 120 120" width="96" height="96">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9a84c"/>
                <stop offset="100%" stopColor="#f5e0a0"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <polygon points="60,4 116,32 116,88 60,116 4,88 4,32"
              fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"
              filter="url(#glow)"
              strokeDasharray="330" strokeDashoffset="330"
              style={{animation:'drawHex 1.6s cubic-bezier(0.16,1,0.3,1) forwards 0.3s'}}
            />
            <text x="60" y="72" textAnchor="middle"
              fill="url(#goldGrad)" fontFamily="Orbitron,monospace"
              fontSize="26" fontWeight="700" letterSpacing="3"
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
          <span>FREQ: 12.4 Hz</span>
          <span className="blink">SIGNAL TRACING...</span>
        </div>
      </div>

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
