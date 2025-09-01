import React from "react";
import "../theme/styles.css";

interface AboutProps {
  currentTheme: "quincy" | "ichigo";
}

const About: React.FC<AboutProps> = ({ currentTheme }) => {
  const quincyContent = {
    title: "Quincy Developer",
    icon: "✦",
    paragraphs: [
      "Welcome to my domain! Like the Quincy who harness reishi with precision and power, I craft digital experiences with meticulous attention to detail and unwavering dedication.",
      "My journey in development mirrors the Quincy philosophy - combining traditional techniques with innovative approaches to create something truly extraordinary. Every line of code is written with the precision of a Heilig Pfeil.",
      "Whether it's front-end architecture or back-end systems, I bring the same level of mastery that the Wandenreich demands of its warriors."
    ]
  };

  const ichigoContent = {
    title: "Soul Reaper Developer",
    icon: "⚔️",
    paragraphs: [
      "Like Ichigo who bridges the world of the living and the dead, I connect ideas with reality through code. My development journey is driven by the same determination that fuels a Soul Reaper's blade.",
      "Every project is a battle against complexity, and I wield my skills like Zangetsu - with unwavering resolve and the power to cut through any challenge. Whether it's front-end or back-end, I protect the user experience with the dedication of a guardian.",
      "In the world of development, I am both student and protector, constantly evolving and growing stronger with each line of code."
    ]
  };

  const content = currentTheme === "quincy" ? quincyContent : ichigoContent;

  return (
    <div className="about-grid">
      <div className={`bubble profile-bubble bubble-${currentTheme}`}>
        <div className="bubble-icon">{content.icon}</div>
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