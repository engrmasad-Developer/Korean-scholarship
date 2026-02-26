// Navbar Component - Figma Match
// Dark sticky nav, logo left, links center, Apply Now button right

import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Student Services', id: 'benefits' },
  { label: 'Accommodation', id: 'accommodation' },
  { label: 'Eligibility', id: 'eligibility' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="BKES Home"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div className="navbar__logo-text">
              {/* BKES */}
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="navbar__menu" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button className="navbar__link" onClick={() => scrollTo(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
            {/* Download Form Button (Desktop) */}
            <li>
              <a
                href="/src/assets/Global-Korea-Scholarship-2026-Application-Form.pdf"
                download="Global-Korea-Scholarship-2026-Application-Form.pdf"
                className="navbar__download-btn"
              >
                DOWNLOAD FORM
              </a>
            </li>
          </ul>

          {/* Apply Now Button -> TALK TO US */}
          <div className="navbar__actions">
            <button className="navbar__apply-btn" onClick={() => scrollTo('contact')}>
              TALK TO US
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog">
          {NAV_LINKS.map(link => (
            <button key={link.id} className="navbar__mobile-link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
          {/* Download Form Button (Mobile) */}
          <a
            href="/src/assets/Global-Korea-Scholarship-2026-Application-Form.pdf"
            download="Global-Korea-Scholarship-2026-Application-Form.pdf"
            className="navbar__download-btn-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Download Form
          </a>
          <button className="navbar__apply-btn" onClick={() => scrollTo('contact')}>
            Apply Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
