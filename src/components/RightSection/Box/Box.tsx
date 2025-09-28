import { ChangeFontSize } from "../../ChangeFontSize";
import { useState } from "react";
import styles from "./Box.module.css";

export const Box = ({
  onFontSizeChange,
  fontSize,
}: {
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
}) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className={`${styles["box"]}`}>
      <h2 onClick={() => setShowBox(!showBox)} className={styles["box__title"]}>
        <span className={styles["box__title-text"]}>Box</span>
        {showBox ? <span className={styles["box__title-text"]}>–</span> : <span className={styles["box__title-text"]}>+</span>}
      </h2>
      <div className={`${showBox ? styles["show"] : styles["box__content"]}`}>
        <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
      </div>
      <hr />
    </div>
  );
};
