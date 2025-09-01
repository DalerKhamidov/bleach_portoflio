import React from "react";
import type { Skill } from "../types";
import "../theme/styles.css";

interface SkillsProps {
  currentTheme: "quincy" | "ichigo";
}

const quincySkills: Skill[] = [
  {
    icon: '⚡',
    title: 'Frontend Development',
    description: 'React, Vue.js, HTML5, CSS3, JavaScript - Crafting user interfaces with Quincy precision',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop'
  },
  {
    icon: '🏗️',
    title: 'Backend Architecture',
    description: 'Node.js, Python, Databases - Building robust systems like the Wandenreich infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Figma, Adobe Creative Suite - Designing with the elegance of Quincy aesthetics',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD - Deploying solutions with strategic precision',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  }
];

const ichigoSkills: Skill[] = [
  {
    icon: '⚔️',
    title: 'Frontend Development',
    description: 'React, Vue.js, HTML5, CSS3, JavaScript - Cutting through complexity with Zangetsu\'s edge',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop'
  },
  {
    icon: '🔥',
    title: 'Backend Architecture',
    description: 'Node.js, Python, Databases - Building systems with the power of Getsuga Tensho',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
  },
  {
    icon: '💀',
    title: 'UI/UX Design',
    description: 'Figma, Adobe Creative Suite - Designing with the intensity of Hollow mask',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    icon: '⚡',
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD - Deploying with the speed of Flash Step',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  }
];

const Skills: React.FC<SkillsProps> = ({ currentTheme }) => {
  const skills = currentTheme === "quincy" ? quincySkills : ichigoSkills;

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className={`card card-${currentTheme}`}>
          <div className={`bubble skill-bubble bubble-${currentTheme}`}>
            {skill.image ? (
              <img src={skill.image} alt={skill.title} />
            ) : (
              <div className="bubble-icon">{skill.icon}</div>
            )}
          </div>
          <h4 className={`text-${currentTheme}`}>{skill.title}</h4>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
