
import "../styles/Skills.css";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Redux Toolkit", "React Router", "Bootstrap"],
  },
  {
    category: "Tools & APIs",
    items: ["Git", "GitHub", "REST APIs", "JSON Server"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-group" key={skill.category}>
            <h3>{skill.category}</h3>

            <div className="skill-list">
              {skill.items.map((item) => (
                <span className="skill-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
