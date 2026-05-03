import React, { useState } from "react";
import "../theme/styles.css";
import ThemeToggle from "./ThemeToggle";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Misc from "./Misc";
import Contact from "./Contact";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"professional" | "personal">("professional");

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
          <div className={`logo-slot logo-${currentTheme}`}>
            {currentTheme === "professional" ? "⭐ Professional" : "⚔️ Personal"}
          </div>
          <div className="nav-center">
            <ul className="nav-links">
              <li><button onClick={() => scrollToSection('about')} className={`nav-link ${currentTheme === 'personal' ? 'nav-link-personal' : ''}`}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${currentTheme === 'personal' ? 'nav-link-personal' : ''}`}>Skills</button></li>
              <li><button onClick={() => scrollToSection('work')} className={`nav-link ${currentTheme === 'personal' ? 'nav-link-personal' : ''}`}>Work</button></li>
              {currentTheme === "professional" && (
                <li><button onClick={() => scrollToSection('human')} className="nav-link">Human</button></li>
              )}
              {currentTheme === "personal" && (
                <li><button onClick={() => scrollToSection('misc')} className="nav-link nav-link-personal">Misc</button></li>
              )}
              <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${currentTheme === 'personal' ? 'nav-link-personal' : ''}`}>Contact</button></li>
            </ul>
          </div>
          <div className="theme-toggle-slot">
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

        <section id="work" className="section">
          <div className="container">
            <h1 className={`section-title section-title-${currentTheme}`}>
              {currentTheme === "professional" ? "Tomfoolery at Work" : "Pet projects"}
            </h1>
            <Projects currentTheme={currentTheme} />
          </div>
        </section>

        {currentTheme === "professional" && (
          <section id="human" className="section">
            <div className="container">
              <h1 className={`section-title section-title-${currentTheme}`}>Being a human with coworkers</h1>
              <Hobbies currentTheme={currentTheme} />
            </div>
          </section>
        )}

        {currentTheme === "personal" && (
          <section id="misc" className="section">
            <div className="container">
              <h1 className={`section-title section-title-${currentTheme}`}>MISC</h1>
              <Misc currentTheme={currentTheme} />
            </div>
          </section>
        )}

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
