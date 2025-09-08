import React from "react";
import type { Project } from "../types";
import "../theme/styles.css";

interface ProjectsProps {
  currentTheme: "quincy" | "ichigo";
}

const quincyProjects: Project[] = [
  {
    title: 'Reishi Management System',
    description: 'A comprehensive data visualization platform that tracks and analyzes spiritual energy patterns with the precision of Quincy techniques.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  {
    title: 'Wandenreich Dashboard',
    description: 'An elegant administrative interface built with modern web technologies, featuring real-time updates and intuitive controls.',
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    title: 'Heilig Pfeil Tracker',
    description: 'A mobile-first application for tracking project progress with gamification elements and team collaboration features.',
    technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  }
];

const ichigoProjects: Project[] = [
  {
    title: 'Zangetsu Analytics',
    description: 'A powerful data analysis platform that cuts through complex datasets like a blade through spiritual pressure.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  {
    title: 'Hollow Mask Interface',
    description: 'A dark-themed administrative dashboard with real-time monitoring capabilities and intuitive user experience.',
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    title: 'Soul Reaper Mobile',
    description: 'A mobile application for task management with progressive features and offline capabilities.',
    technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  }
];

const Projects: React.FC<ProjectsProps> = ({ currentTheme }) => {
  const projects = currentTheme === "quincy" ? quincyProjects : ichigoProjects;

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className={`project-card project-card-${currentTheme}`}>
          <div className={`bubble project-bubble bubble-${currentTheme}`}>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="bubble-icon">🚀</div>
            )}
          </div>
          <div className="project-content">
            <h4 className={`text-${currentTheme} project-title`}>{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={`tech-tag tech-tag-${currentTheme}`}>{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.liveDemo} className={`btn btn-${currentTheme}`}>Live Demo</a>
              <a href={project.github} className={`btn btn-${currentTheme}`}>GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
