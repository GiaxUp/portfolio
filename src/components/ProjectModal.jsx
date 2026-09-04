import { useEffect } from "react";
import "../styles/project-modal.css";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ProjectModal({ openModal, setOpenModal }) {
  const project = openModal?.project;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenModal({ state: false, project: null });
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpenModal]);

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal({ state: false, project: null });
    }
  };

  const getButtonLabel = () => {
    if (!project.webapp) return null;
    return project.webapp.startsWith("https://www.youtube.com/")
      ? "Riproduci Video Presentazione"
      : "Visualizza Live App";
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button
          className="modal__close"
          onClick={() => setOpenModal({ state: false, project: null })}
          aria-label="Chiudi"
        >
          ✕
        </button>

        <img src={project.image} alt={project.title} className="modal__image" />
        <h2 className="modal__title">{project.title}</h2>
        <div className="modal__date">{project.date}</div>

        <div className="modal__tags">
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

        <p className="modal__desc">{project.description}</p>

        {project.member && (
          <>
            <h3 className="modal__members-title">Membri</h3>
            <div className="modal__members">
              {project.member.map((m) => (
                <div key={m.name} className="modal__member">
                  <img src={m.img} alt={m.name} className="modal__member-img" />
                  <span className="modal__member-name">{m.name}</span>
                  <div className="modal__member-links">
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal__member-link"
                      aria-label={`${m.name} GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal__member-link"
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="modal__buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="modal__btn modal__btn--secondary"
          >
            Visualizza Codice
          </a>
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__btn modal__btn--primary"
            >
              {getButtonLabel()}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
