
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-label">HELLO, I'M</p>

      <h1>Mohamed Saeed</h1>

      <h2>Junior Front-End Developer</h2>

      <p className="hero-description">
        I build responsive and user-friendly web applications
        using React.js and modern JavaScript.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="hero-primary-btn">
          View My Work
        </a>

        <a href="#contact" className="hero-secondary-btn">
          Contact Me
        </a>
      </div>

      <p className="hero-location">
        Based in Alexandria, Egypt
      </p>
    </section>
  );
}

export default Hero;
