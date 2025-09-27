import { ChangeFontColor } from "../ChangeFontColor";
import { ChangeFontSize } from "../ChangeFontSize";
import styles from "./Controls.module.css";
import { useState } from "react";

export const Controls = ({
  onFontColorChange,
  fontColor,
  onFontSizeChange,
  fontSize,
}: {
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontColor: string;
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
}) => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className={`${styles["controls__font"]}`}>
      <h2 onClick={() => setShowControls(!showControls)} className={styles["controls__title"]}>
        <span>Controls</span>
        {showControls ? <span>–</span> : <span>+</span>}
      </h2>
      <div className={`${showControls ? styles["show"] : styles["controls__content"]}`}>
        <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
      </div>
      <hr />
    </div>
  );
};
