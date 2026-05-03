import React from "react";
import "../theme/styles.css";

interface AboutProps {
  currentTheme: "professional" | "personal";
}

const About: React.FC<AboutProps> = ({ currentTheme }) => {
  const professionalContent = {
    title: "What Got Me Working",
    icon: "https://media.tenor.com/Vbj1XFyPRlMAAAAM/bleach-thousand-year-blood-war.gif",
    paragraphs: [
      "Hello World! You discovered a page about me and I'll be sure to tell you since you cared to ask. With great creativity and prompting, I bring meticulous attention and know-how of an engineer that worked in high stakes jobs in finance and aerospace.",
    ]
  };

  const personalContent = {
    title: "My Chill Side",
    icon: "https://c.tenor.com/_ZPyxwiTC90AAAAC/tenor.gif",
    paragraphs: [
      "I'm Daler, a Software Engineer in Washington D .C. area. Currently working at finance, integrating data pipelines.",
      "When the clock hits five I try to go out and explore the area more, kick some ball or go for a run. Sometimes I learn a new dish, I want to create my full course menu (that can change the world). My aspiration is to be like Anthony Bourdain and build a full course that can tell a story."
    ]
  };

  const content = currentTheme === "professional" ? professionalContent : personalContent;

  return (
    <div className="about-grid">
      <div className={`bubble profile-bubble bubble-${currentTheme}`}>
        <div className="bubble-icon"><img src={content.icon} alt="icon" /></div>
      </div>
      <div className="text-content">
        <h3 className={`text-${currentTheme}`}>{content.title}</h3>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About; 