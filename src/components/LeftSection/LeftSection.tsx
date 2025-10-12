import { buttonsStyle } from "../../data/buttonsStyle";
import type { CSSProperties } from "react";
import { DarkMode } from "./components/DarkMode";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./LeftSection.module.css";

export const LeftSection = ({ onClickButton }: { onClickButton: (style: CSSProperties) => void }) => {
  const { handleClickTheme } = useContext(ThemeContext);

  return (
    <>
      <DarkMode />
      <h2 className={styles["languages__title"]}>
        <span className={styles["languages__title-span"]}>F</span>ree <span className={styles["languages__title-span"]}>B</span>
        utton <span className={styles["languages__title-span"]}>M</span>aker
      </h2>
      <h2 onClick={handleClickTheme}>Buttons</h2>
      <div className={styles["left-section"]}>
        {buttonsStyle.map((element) => {
          return (
            <div className={styles["button__container"]}>
              <button key={element.id} onClick={() => onClickButton(element.style)} style={element.style}>
                Click me!
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
