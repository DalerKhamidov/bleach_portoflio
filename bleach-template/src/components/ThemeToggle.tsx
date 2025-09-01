import React from "react";
import "../theme/styles.css";

interface ThemeToggleProps {
  currentTheme: "quincy" | "ichigo";
  setCurrentTheme: React.Dispatch<React.SetStateAction<"quincy" | "ichigo">>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, setCurrentTheme }) => {
  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === "quincy" ? "ichigo" : "quincy");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className={`theme-switch theme-switch-${currentTheme}`}
    >
      {currentTheme === "quincy" ? "Ichigo Mode" : "Quincy Mode"}
    </button>
  );
};

export default ThemeToggle;
