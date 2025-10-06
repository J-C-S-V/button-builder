import { FontSize } from "./Components/FontSize";
import { FontWeight } from "./Components/FontWeight";
import { InnerText } from "./Components/InnerText";
import styles from "./Font.module.css";
import { useState } from "react";

export const Font = ({
  onFontSizeChange,
  fontSize,
  fontWeight,
  onFontWeightChange,
  onInnerTextChange,
  innerText,
}: {
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
  fontWeight: number;
  onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInnerTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
}) => {
  const [showFont, setShowFont] = useState(false);

  return (
    <div className={`${styles["font"]}`}>
      <h2 onClick={() => setShowFont(!showFont)} className={styles["font__title"]}>
        <span className={styles["font__title-text"]}>Font</span>
        {showFont ? <span className={styles["font__title-text"]}>–</span> : <span className={styles["font__title-text"]}>+</span>}
      </h2>
      <div className={`${showFont ? styles["show"] : styles["font__content"]}`}>
        <FontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
        <FontWeight fontWeight={fontWeight} onFontWeightChange={onFontWeightChange} />
        <InnerText innerText={innerText} onTextChange={onInnerTextChange} />
      </div>
      <hr />
    </div>
  );
};
