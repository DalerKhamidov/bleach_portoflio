import React from "react";
import "../theme/styles.css";
import capybaraImage from "../../public/capybara.jpg";

interface MiscProps {
  currentTheme: "professional" | "personal";
}

/** Capybara — photo*/
const capybaraImageSrc =
  capybaraImage;

const Misc: React.FC<MiscProps> = ({ currentTheme }) => {
  if (currentTheme !== "personal") {
    return null;
  }

  return (
    <div className={`misc-panel misc-panel-${currentTheme}`}>
      <p className="misc-fun-fact">
        Fun fact: my fav/spirit animal is capybara.
      </p>
      <figure className="misc-capybara-figure">
        <img
          src={capybaraImageSrc}
          alt="Capybara resting near water"
          className="misc-capybara-img"
          loading="lazy"
        />
      </figure>
    </div>
  );
};

export default Misc;
