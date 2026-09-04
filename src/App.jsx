import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Scroll reveal: observe all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openModal.state ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openModal.state]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Contact />
      </main>
      <Footer />
      {openModal.state && (
        <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}

export default App;
