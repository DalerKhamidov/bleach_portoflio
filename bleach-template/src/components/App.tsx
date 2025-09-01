import React, { useState } from "react";
import "../theme/styles.css";
import ThemeToggle from "./ThemeToggle";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"quincy" | "ichigo">("quincy");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${currentTheme}-theme`}>
      <div className={`${currentTheme}-bg`}></div>
      
      <header className={`header-fixed header-${currentTheme}`}>
        <nav className="nav-container">
          <div className={`logo-${currentTheme}`}>
            {currentTheme === "quincy" ? "⭐ Quincy Portfolio" : "⚔️ Soul Society Portfolio"}
          </div>
          <div className="nav-items">
            <ul className="nav-links">
              <li><button onClick={() => scrollToSection('about')} className={`nav-link ${currentTheme === 'ichigo' ? 'nav-link-ichigo' : ''}`}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${currentTheme === 'ichigo' ? 'nav-link-ichigo' : ''}`}>Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')} className={`nav-link ${currentTheme === 'ichigo' ? 'nav-link-ichigo' : ''}`}>Projects</button></li>
              <li><button onClick={() => scrollToSection('hobbies')} className={`nav-link ${currentTheme === 'ichigo' ? 'nav-link-ichigo' : ''}`}>Hobbies</button></li>
              <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${currentTheme === 'ichigo' ? 'nav-link-ichigo' : ''}`}>Contact</button></li>
            </ul>
            <ThemeToggle currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>About</h1>
            <About currentTheme={currentTheme} />
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>Skills</h1>
            <Skills currentTheme={currentTheme} />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>Projects</h1>
            <Projects currentTheme={currentTheme} />
          </div>
        </section>

        <section id="hobbies" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>Hobbies</h1>
            <Hobbies currentTheme={currentTheme} />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>Contact</h1>
            <Contact currentTheme={currentTheme} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
