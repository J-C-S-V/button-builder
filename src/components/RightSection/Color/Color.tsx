import { FontColor } from "./Components/FontColor";
import { BorderColor } from "./Components/BorderColor";
import { BackgroundColor } from "./Components/BackgroundColor";
import styles from "./Color.module.css";
import { useState } from "react";

export const Color = ({
  onFontColorChange,
  onBorderColorChange,
  onBackgroundColorChange,
  fontColor,
  borderColor,
  backgroundColor,
}: {
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBorderColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontColor: string;
  borderColor: string;
  backgroundColor: string;
}) => {
  const [showColor, setShowColor] = useState(false);

  return (
    <div className={`${styles["color"]}`}>
      <h2 onClick={() => setShowColor(!showColor)} className={styles["color__title"]}>
        <span className={styles["color__title-text"]}>Color</span>
        {showColor ? (
          <span className={styles["color__title-text"]}>–</span>
        ) : (
          <span className={styles["color__title-text"]}>+</span>
        )}
      </h2>
      <div className={`${styles["color__content"]} ${showColor ? styles["show"] : ""}`}>
        <FontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <BorderColor borderColor={borderColor} onBorderColorChange={onBorderColorChange} />
        <BackgroundColor backgroundColor={backgroundColor} onBackgroundColorChange={onBackgroundColorChange} />
      </div>
      <hr />
    </div>
  );
};
