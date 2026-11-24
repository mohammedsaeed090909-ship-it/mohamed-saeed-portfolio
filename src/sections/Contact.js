
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">GET IN TOUCH</p>

      <h2>Let's Work Together</h2>

      <p className="contact-description">
        I'm currently open to Front-End Developer
        opportunities, internships, and freelance projects.
        Feel free to get in touch.
      </p>

      <a
        href="mailto:mohammedsaeed090909@gmail.com"
        className="contact-email"
      >
        mohammedsaeed090909@gmail.com ↗
      </a>

      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/mohamed-saeed-085735410"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/mohammedsaeed090909-ship-it"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
