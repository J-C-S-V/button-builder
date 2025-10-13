import { useState } from "react";
import { HoverOpacity } from "./components/HoverOpacity";
import { HoverScale } from "./components/HoverScale";
import { HoverFontColor } from "./components/HoverFontColor";
import { HoverBackgroundColor } from "./components/HoverBackgroundColor";
import { HoverTransition } from "./components/HoverTransition";
import styles from "./State.module.css";

export const State = ({
  transition,
  onTransitionChange,
  hoverOpacity,
  onHoverOpacityChange,
  hoverColor,
  onHoverColorChange,
  hoverBackgroundColor,
  onHoverBackgroundColorChange,
  hoverScale,
  onHoverScaleChange,
}: {
  transition: number;
  onTransitionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hoverOpacity: number;
  onHoverOpacityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hoverScale: number;
  onHoverScaleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hoverColor: string;
  onHoverColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hoverBackgroundColor: string;
  onHoverBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showState, setShowState] = useState(false);

  return (
    <div className={`${styles["state"]}`}>
      <h2 onClick={() => setShowState(!showState)} className={styles["state__title"]}>
        <span className={styles["state__title-text"]}>State on hover</span>
        {showState ? (
          <span className={styles["state__title-text"]}>–</span>
        ) : (
          <span className={styles["state__title-text"]}>+</span>
        )}
      </h2>
      <div className={`${styles["state__content"]} ${showState ? styles["show"] : ""}`}>
        <HoverScale hoverScale={hoverScale} onHoverScaleChange={onHoverScaleChange} />
        <HoverOpacity hoverOpacity={hoverOpacity} onHoverOpacityChange={onHoverOpacityChange} />
        <HoverFontColor hoverColor={hoverColor} onHoverColorChange={onHoverColorChange} />
        <HoverBackgroundColor
          hoverBackgroundColor={hoverBackgroundColor}
          onHoverBackgroundColorChange={onHoverBackgroundColorChange}
        />
        <HoverTransition transition={transition} onTransitionChange={onTransitionChange} />
      </div>
      <hr />
    </div>
  );
};
