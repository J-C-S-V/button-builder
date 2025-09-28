import { ChangeFontColor } from "../../ChangeFontColor";
import { ChangeFontSize } from "../../ChangeFontSize";
import styles from "./Font.module.css";
import { useState } from "react";

export const Font = ({
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
  const [showFont, setShowFont] = useState(false);

  return (
    <div className={`${styles["font"]}`}>
      <h2 onClick={() => setShowFont(!showFont)} className={styles["font__title"]}>
        <span className={styles["font__title-text"]}>Font</span>
        {showFont ? <span className={styles["font__title-text"]}>–</span> : <span className={styles["font__title-text"]}>+</span>}
      </h2>
      <div className={`${showFont ? styles["show"] : styles["font__content"]}`}>
        <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
        <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
      </div>
      <hr />
    </div>
  );
};
