import { buttonsStyle } from "../../data/buttonsStyle";
import type { CSSProperties } from "react";
import styles from "./LeftSection.module.css";
import { DarkMode } from "./components/DarkMode";

export const LeftSection = ({ onClickButton }: { onClickButton: (style: CSSProperties) => void }) => {
  return (
    <>
      <DarkMode />
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
