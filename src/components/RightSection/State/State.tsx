import styles from "./State.module.css";
import { useState } from "react";
import { Hover } from "./components/Hover";

export const State = ({
  isHoverBrightness,
  onHoverBrightnessChange,
  isHoverScale,
  onHoverScaleChange,
  isHoverColor,
  onHoverColorChange,
  isHoverBackgroundColor,
  onHoverBackgroundColorChange,
}: {
  isHoverBrightness: number;
  onHoverBrightnessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverScale: number;
  onHoverScaleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverColor: string;
  onHoverColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverBackgroundColor: string;
  onHoverBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showState, setShowState] = useState(false);

  return (
    <div className={`${styles["state"]}`}>
      <h2 onClick={() => setShowState(!showState)} className={styles["state__title"]}>
        <span className={styles["state__title-text"]}>State</span>
        {showState ? (
          <span className={styles["state__title-text"]}>–</span>
        ) : (
          <span className={styles["state__title-text"]}>+</span>
        )}
      </h2>
      <div className={`${showState ? styles["show"] : styles["state__content"]}`}>
        <Hover
          isHoverScale={isHoverScale}
          onHoverScaleChange={onHoverScaleChange}
          isHoverBrightness={isHoverBrightness}
          onHoverBrightnessChange={onHoverBrightnessChange}
          isHoverColor={isHoverColor}
          onHoverColorChange={onHoverColorChange}
          isHoverBackgroundColor={isHoverBackgroundColor}
          onHoverBackgroundColorChange={onHoverBackgroundColorChange}
        />
      </div>
      <hr />
    </div>
  );
};
