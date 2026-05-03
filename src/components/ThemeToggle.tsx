import React from "react";
import "../theme/styles.css";

interface ThemeToggleProps {
  currentTheme: "professional" | "personal";
  setCurrentTheme: React.Dispatch<React.SetStateAction<"professional" | "personal">>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, setCurrentTheme }) => {
  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === "professional" ? "personal" : "professional");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className={`theme-switch theme-switch-${currentTheme}`}
    >
      {currentTheme === "professional" ? "Professional" : "Personal"}
    </button>
  );
};

export default ThemeToggle;
