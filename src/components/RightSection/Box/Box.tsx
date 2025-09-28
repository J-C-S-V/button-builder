import { useState } from "react";
import styles from "./Box.module.css";
import { ChangeBorder } from "./Components/ChangeBorder";

export const Box = ({
  onChangeBorder,
  border,
}: {
  onChangeBorder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border: number;
}) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className={`${styles["box"]}`}>
      <h2 onClick={() => setShowBox(!showBox)} className={styles["box__title"]}>
        <span className={styles["box__title-text"]}>Box</span>
        {showBox ? <span className={styles["box__title-text"]}>–</span> : <span className={styles["box__title-text"]}>+</span>}
      </h2>
      <div className={`${showBox ? styles["show"] : styles["box__content"]}`}>
        <ChangeBorder border={border} onBorderChange={onChangeBorder} />
      </div>
      <hr />
    </div>
  );
};
