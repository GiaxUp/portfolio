import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">Giacomo Della Peruta</span>
        <nav className="footer__nav">
          <a href="#about" className="footer__link">Su di me</a>
          <a href="#skills" className="footer__link">Skills</a>
          <a href="#experience" className="footer__link">Esperienze</a>
          <a href="#projects" className="footer__link">Progetti</a>
          <a href="#contacts" className="footer__link">Contattami</a>
        </nav>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Giacomo Della Peruta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
