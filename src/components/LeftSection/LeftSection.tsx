import { buttonsStyle } from "../../data/buttonsStyle";
import type { CSSProperties } from "react";
import { DarkMode } from "./components/DarkMode";
import styles from "./LeftSection.module.css";

export const LeftSection = ({ onClickButton }: { onClickButton: (style: CSSProperties) => void }) => {
  return (
    <>
      <div className={styles["left-section__header"]}>
        <h1 className={styles["languages__title"]}>
          <span className={styles["languages__title-span"]}>F</span>ree <span className={styles["languages__title-span"]}>B</span>
          utton <span className={styles["languages__title-span"]}>B</span>uilder
        </h1>
        <DarkMode />
      </div>
      <h2 className={styles["left-section__subtitle"]}>
        Choose a <span className={styles["languages__title-span"]}>B</span>utton
      </h2>
      <div className={styles["left-section__buttons"]}>
        {buttonsStyle.map((element) => {
          return (
            <div key={element.id} className={styles["button__container"]}>
              <button className={styles["button__item"]} onClick={() => onClickButton(element.style)} style={element.style}>
                Click me!
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
