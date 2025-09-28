import { ChangeFontColor } from "../ChangeFontColor";
import { ChangeFontSize } from "../ChangeFontSize";
import styles from "./State.module.css";
import { useState } from "react";

export const State = ({
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
  const [showState, setShowState] = useState(false);

  return (
    <div className={`${styles["state"]}`}>
      <h2 onClick={() => setShowState(!showState)} className={styles["state__title"]}>
        <span className={styles["state__title-text"]}>State</span>
        {showState ? <span>–</span> : <span>+</span>}
      </h2>
      <div className={`${showState ? styles["show"] : styles["state__content"]}`}>
        <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
      </div>
      <hr />
    </div>
  );
};
