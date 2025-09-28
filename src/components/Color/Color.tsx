import { ChangeFontColor } from "../ChangeFontColor";
import { ChangeFontSize } from "../ChangeFontSize";
import styles from "./Color.module.css";
import { useState } from "react";

export const Color = ({
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
  const [showColor, setShowColor] = useState(false);

  return (
    <div className={`${styles["color"]}`}>
      <h2 onClick={() => setShowColor(!showColor)} className={styles["color__title"]}>
        <span>Color</span>
        {showColor ? <span>–</span> : <span>+</span>}
      </h2>
      <div className={`${showColor ? styles["show"] : styles["color__content"]}`}>
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
