import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-logo" href="#hero">UM</a>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
