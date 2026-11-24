
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          MS.
        </a>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mohamed Saeed. All rights reserved.</p>
        <p>Designed & Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
