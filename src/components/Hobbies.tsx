import React from "react";
import type { HumanMoment } from "../types";
import "../theme/styles.css";

interface HobbiesProps {
  currentTheme: "professional" | "personal";
}

const humanMoments: HumanMoment[] = [
  {
    title: "Playing sports",
    description:
      "So far I just played kickball with my coworkers and competitive flip cup and ping pong.",
  },
  {
    title: "Going to happy hours",
    description: "Bottoms up (could be non-alcoholic).",
  },
  {
    title: "Chatting about their day",
    description: "Sometimes that's all we need.",
  },
];

const Hobbies: React.FC<HobbiesProps> = ({ currentTheme }) => {
  return (
    <div className="human-grid">
      {humanMoments.map((item, index) => (
        <div key={index} className={`card card-${currentTheme} human-card`}>
          <h4 className={`text-${currentTheme}`}>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
