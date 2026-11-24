
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "E-commerce App",
    description:
      "A responsive e-commerce application with product filtering, pagination, shopping cart management, and authentication.",
    technologies: ["React", "Redux Toolkit", "React Router", "Fake Store API"],
    demo: "https://ecommerce-app-three-gray.vercel.app/home",
    github: "https://github.com/mohammedsaeed090909-ship-it/ecommerce-app",
  },
  {
    number: "02",
    title: "Book Store",
    description:
      "A React bookstore application with category filtering, pagination, book details, and Redux-powered shopping cart.",
    technologies: ["React", "Redux Toolkit", "React Router", "JSON Server"],
    demo: null,
    github: "https://github.com/mohammedsaeed090909-ship-it/bookStoreReactProject",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p className="section-label">SELECTED WORK</p>
        <h2>My Projects</h2>
        <p>
          A selection of projects I've built while developing
          my Front-End skills.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">
              PROJECT / {project.number}
            </span>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
