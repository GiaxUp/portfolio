import { useState, useEffect } from "react";
import { Bio } from "../data/constants";
import "../styles/navbar.css";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "#about", label: "Su di me" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Esperienze" },
    { href: "#projects", label: "Progetti" },
    { href: "#contacts", label: "Contattami" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#about" className="navbar__logo">
          <span className="navbar__logo-icon">&lt;/&gt;</span>
          giaxup.dev
        </a>

        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__github navbar__github-desktop"
        >
          <GitHubIcon /> Profilo Github
        </a>

        <button
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar__mobile-overlay ${isOpen ? "navbar__mobile-overlay--visible" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__github"
          onClick={closeMenu}
        >
          <GitHubIcon /> Profilo Github
        </a>
      </div>
    </nav>
  );
}
