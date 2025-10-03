import { useState } from "react";
import { HoverBrightness } from "./components/HoverBrightness";
import { HoverScale } from "./components/HoverScale";
import { HoverFontColor } from "./components/HoverFontColor";
import { HoverBackgroundColor } from "./components/HoverBackgroundColor";
import { HoverTransition } from "./components/HoverTransition";
import styles from "./State.module.css";

export const State = ({
  transition,
  onTransitionChange,
  isHoverBrightness,
  onHoverBrightnessChange,
  isHoverColor,
  onHoverColorChange,
  isHoverBackgroundColor,
  onHoverBackgroundColorChange,
  isHoverScale,
  onHoverScaleChange,
}: {
  transition: number;
  onTransitionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverBrightness: string;
  onHoverBrightnessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverScale: string;
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
        <HoverScale isHoverScale={isHoverScale} onHoverScaleChange={onHoverScaleChange} />
        <HoverBrightness isHoverBrightness={isHoverBrightness} onHoverBrightnessChange={onHoverBrightnessChange} />
        <HoverFontColor isHoverColor={isHoverColor} onHoverColorChange={onHoverColorChange} />
        <HoverBackgroundColor
          isHoverBackgroundColor={isHoverBackgroundColor}
          onHoverBackgroundColorChange={onHoverBackgroundColorChange}
        />
        <HoverTransition transition={transition} onTransitionChange={onTransitionChange} />
      </div>
      <hr />
    </div>
  );
};
