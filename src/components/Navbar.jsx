import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'EVIDENCE', href: '#projects' },
  { label: 'SUBJECT', href: '#profile' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-logo" href="#hero">
        <svg viewBox="0 0 100 100" width="36" height="36">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none" stroke="#00ff41" strokeWidth="2"/>
          <text x="50" y="58" textAnchor="middle" fill="#00ff41"
            fontFamily="Orbitron,monospace" fontSize="22" fontWeight="700">UM</text>
        </svg>
      </a>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(o=>!o)}>
        <span/><span/><span/>
      </button>
    </header>
  )
}
