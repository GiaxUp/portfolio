import { useState, useEffect, useCallback } from "react";
import { Bio } from "../data/constants";
import HeroImg from "../assets/images/hero.jpg";
import "../styles/hero.css";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = isDeleting ? 40 : 80;

  const tick = useCallback(() => {
    const currentRole = Bio.roles[roleIndex];
    const updatedText = isDeleting
      ? currentRole.substring(0, text.length - 1)
      : currentRole.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }

    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % Bio.roles.length);
    }
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [tick, typeSpeed]);

  return (
    <section className="hero" id="about">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="hero__particle" />
          ))}
        </div>
      </div>

      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__greeting">
            Ciao, sono {Bio.name}!
          </h1>
          <div className="hero__role">
            Sono un{" "}
            <span className="hero__role-text typewriter">{text}</span>
          </div>
          <p className="hero__description">{Bio.description}</p>
          <div className="hero__cta">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Curriculum Vitae
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-glow" />
          <img
            src={HeroImg}
            alt="Giacomo Della Peruta"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
