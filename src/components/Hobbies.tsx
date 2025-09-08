import React from "react";
import type { Hobby } from "../types";
import "../theme/styles.css";

interface HobbiesProps {
  currentTheme: "quincy" | "ichigo";
}

const quincyHobbies: Hobby[] = [
  {
    title: 'Anime & Manga',
    description: 'Deep passion for storytelling, character development, and artistic expression in Japanese media',
    icon: '📺',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    title: 'Martial Arts',
    description: 'Practicing discipline and precision in movement, much like Quincy combat techniques',
    icon: '🥋',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop'
  },
  {
    title: 'Photography',
    description: 'Capturing moments with the same attention to detail as spiritual energy manipulation',
    icon: '📸',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop'
  },
  {
    title: 'Gaming',
    description: 'Strategy games and RPGs that require tactical thinking and long-term planning',
    icon: '🎮',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop'
  }
];

const ichigoHobbies: Hobby[] = [
  {
    title: 'Sword Training',
    description: 'Practicing the art of the blade, both physical and mental discipline',
    icon: '⚔️',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop'
  },
  {
    title: 'Anime & Manga',
    description: 'Following the stories that shaped my understanding of determination and growth',
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    title: 'Music Production',
    description: 'Creating beats and melodies that capture the intensity of battle',
    icon: '🎵',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
  },
  {
    title: 'Urban Exploration',
    description: 'Discovering hidden places in the city, like exploring the world of the living',
    icon: '🏙️',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop'
  }
];

const Hobbies: React.FC<HobbiesProps> = ({ currentTheme }) => {
  const hobbies = currentTheme === "quincy" ? quincyHobbies : ichigoHobbies;

  return (
    <div className="hobbies-grid">
      {hobbies.map((hobby, index) => (
        <div key={index} className={`card card-${currentTheme}`}>
          <div className={`bubble hobby-bubble bubble-${currentTheme}`}>
            {hobby.image ? (
              <img src={hobby.image} alt={hobby.title} />
            ) : (
              <div className="bubble-icon">{hobby.icon}</div>
            )}
          </div>
          <h4 className={`text-${currentTheme}`}>{hobby.title}</h4>
          <p>{hobby.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
