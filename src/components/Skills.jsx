import { skills } from "../data/constants";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <p className="section-subtitle reveal">
          Ecco alcune delle competenze che ho acquisito negli ultimi anni.
        </p>
        <div className="skills__grid">
          {skills.map((category, i) => (
            <div
              key={category.title}
              className={`skills__card reveal reveal-delay-${i + 1}`}
            >
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skills__item-icon"
                      loading="lazy"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
