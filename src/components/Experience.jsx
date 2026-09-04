import { experiences } from "../data/constants";
import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title reveal">Esperienze</h2>
        <p className="section-subtitle reveal">
          Anche se sono ancora alla ricerca della mia prima esperienza lavorativa
          come web developer, ecco alcune tappe del mio percorso!
        </p>
        <div className="experience__timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__item reveal">
              <div className="experience__dot" />
              <div className="experience__card">
                <div className="experience__header">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="experience__logo"
                    loading="lazy"
                  />
                  <div className="experience__info">
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__company">{exp.company}</div>
                    <div className="experience__date">{exp.date}</div>
                  </div>
                </div>
                {exp.desc && (
                  <p className="experience__desc">{exp.desc}</p>
                )}
                {exp.skills && (
                  <div className="experience__skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="experience__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {exp.doc && (
                  <a
                    href={exp.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__doc-btn"
                  >
                    Certificato Rilasciato
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
