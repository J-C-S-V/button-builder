import styles from "./State.module.css";
import { useState } from "react";
// import { Hover } from "./components/Hover";
import { Scale } from "./components/Scale";

export const State = ({
  isHoverBrightness,
  onHoverBrightnessChange,
  isHoverColor,
  onHoverColorChange,
  isHoverBackgroundColor,
  onHoverBackgroundColorChange,
  isHoverScale,
  onHoverScaleChange,
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
        {/* <Hover
          isHoverBrightness={isHoverBrightness}
          onHoverBrightnessChange={onHoverBrightnessChange}
          isHoverColor={isHoverColor}
          onHoverColorChange={onHoverColorChange}
          isHoverBackgroundColor={isHoverBackgroundColor}
          onHoverBackgroundColorChange={onHoverBackgroundColorChange}
        /> */}
        <Scale isHoverScale={isHoverScale} onHoverScaleChange={onHoverScaleChange} />
      </div>
      <hr />
    </div>
  );
};
