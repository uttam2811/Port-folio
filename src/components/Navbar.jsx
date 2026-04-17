import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: t.nav_evidence, href: '#projects' },
    { label: t.nav_profile,  href: '#profile'  },
    { label: t.nav_contact,  href: '#contact'  },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <a className="nav-logo" href="#hero">
        <svg viewBox="0 0 120 120" width="40" height="40">
          <defs>
            <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a84c"/>
              <stop offset="100%" stopColor="#f5e0a0"/>
            </linearGradient>
          </defs>
          <polygon points="60,4 116,32 116,88 60,116 4,88 4,32"
            fill="none" stroke="url(#ng)" strokeWidth="1.5"/>
          <text x="60" y="72" textAnchor="middle" fill="url(#ng)"
            fontFamily="Orbitron,monospace" fontSize="24" fontWeight="700"
            letterSpacing="2">UM</text>
        </svg>
      </a>

      {/* Desktop nav */}
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      {/* Right side: lang switcher + hamburger */}
      <div className="nav-right">
        {/* Language toggle — Killian style: EN DE */}
        <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
          <span className={lang === 'en' ? 'lang-active' : 'lang-dim'}>EN</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'de' ? 'lang-active' : 'lang-dim'}>DE</span>
        </button>

        <button
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
