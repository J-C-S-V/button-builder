import { useState } from "react";
import styles from "./Box.module.css";
import { ChangeBorder } from "./Components/ChangeBorder";
import { ChangePadding } from "./Components/ChangePadding";

export const Box = ({
  onChangeBorder,
  onPaddingYChange,
  onPaddingXChange,
  border,
  paddingY,
  paddingX,
}: {
  onChangeBorder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border: number;
  paddingY: number;
  paddingX: number;
}) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className={`${styles["box"]}`}>
      <h2 onClick={() => setShowBox(!showBox)} className={styles["box__title"]}>
        <span className={styles["box__title-text"]}>Box</span>
        {showBox ? <span className={styles["box__title-text"]}>–</span> : <span className={styles["box__title-text"]}>+</span>}
      </h2>
      <div className={`${showBox ? styles["show"] : styles["box__content"]}`}>
        <ChangePadding
          paddingY={paddingY}
          paddingX={paddingX}
          onPaddingYChange={onPaddingYChange}
          onPaddingXChange={onPaddingXChange}
        />
        <ChangeBorder border={border} onBorderChange={onChangeBorder} />
      </div>
      <hr />
    </div>
  );
};
