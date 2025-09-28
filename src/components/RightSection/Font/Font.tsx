import { ChangeFontSize } from "./Components/ChangeFontSize";
import { ChangeFontWeight } from "./Components/ChangeFontWeight";
import styles from "./Font.module.css";
import { useState } from "react";

export const Font = ({
  onFontSizeChange,
  fontSize,
  fontWeight,
  onFontWeightChange,
}: {
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
  fontWeight: number;
  onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        <ChangeFontWeight fontWeight={fontWeight} onFontWeightChange={onFontWeightChange} />
      </div>
      <hr />
    </div>
  );
};
