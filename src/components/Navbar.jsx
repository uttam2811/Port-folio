import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label:'Evidence', href:'#projects' },
  { label:'Profile',  href:'#profile'  },
  { label:'Contact',  href:'#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>60)
    window.addEventListener('scroll',fn,{passive:true})
    return ()=>window.removeEventListener('scroll',fn)
  },[])

  return (
    <header className={`navbar ${scrolled?'scrolled':''}`}>
      <a className="nav-logo" href="#hero">
        <svg viewBox="0 0 100 100" width="38" height="38">
          <defs>
            <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c97a"/>
              <stop offset="100%" stopColor="#a07830"/>
            </linearGradient>
          </defs>
          <polygon points="50,6 94,28 94,72 50,94 6,72 6,28"
            fill="none" stroke="url(#ng)" strokeWidth="1.5"/>
          <text x="50" y="60" textAnchor="middle" fill="url(#ng)"
            fontFamily="Cormorant Garamond,serif" fontSize="26" fontWeight="600">UM</text>
        </svg>
      </a>

      <nav className={`nav-links ${open?'open':''}`}>
        {links.map(l=>(
          <a key={l.label} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>
        ))}
      </nav>

      <button className={`burger ${open?'open':''}`} onClick={()=>setOpen(o=>!o)}>
        <span/><span/><span/>
      </button>
    </header>
  )
}
