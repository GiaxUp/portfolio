import { useState } from "react";
import { projects } from "../data/constants";
import "../styles/projects.css";

const FILTERS = [
  { value: "all", label: "Migliori Progetti" },
  { value: "web app", label: "Web Apps" },
  { value: "machine learning", label: "Machine Learning" },
];

export default function Projects({ openModal, setOpenModal }) {
  const [toggle, setToggle] = useState("all");

  const filtered =
    toggle === "all"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === toggle);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Progetti</h2>
        <p className="section-subtitle reveal">
          Ho lavorato a diverse web app nell'ultimo periodo, ecco le mie
          preferite. Alcune hanno anche un video demo di presentazione, dagli
          un'occhiata!
        </p>

        <div className="projects__filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`projects__filter ${
                toggle === f.value ? "projects__filter--active" : ""
              }`}
              onClick={() => setToggle(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card reveal"
              onClick={() => setOpenModal({ state: true, project })}
            >
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__overlay" />
              </div>
              <div className="project-card__body">
                <div className="project-card__tags">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className={`tag ${
                        tag === "Demo Video" || tag === "Live App"
                          ? "tag--highlight"
                          : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__date">{project.date}</div>
                <p className="project-card__desc">{project.description}</p>
                {project.member && (
                  <div className="project-card__members">
                    {project.member.map((m) => (
                      <img
                        key={m.name}
                        src={m.img}
                        alt={m.name}
                        className="project-card__avatar"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
