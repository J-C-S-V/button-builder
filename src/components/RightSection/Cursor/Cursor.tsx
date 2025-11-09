import { useState } from "react";
import styles from "./Cursor.module.css";

export const Cursor = () => {
  const [showFont, setShowFont] = useState(false);

  return (
    <div className={`${styles["cursor"]}`}>
      <h2
        onClick={() => setShowFont(!showFont)}
        className={styles["cursor__title"]}
      >
        <span className={styles["cursor__title-text"]}>Cursor</span>
        {showFont ? (
          <span className={styles["cursor__title-text"]}>–</span>
        ) : (
          <span className={styles["cursor__title-text"]}>+</span>
        )}
      </h2>
      <div
        className={`${styles["cursor__content"]} ${
          showFont ? styles["show"] : ""
        }`}
      >
        {/* <div>Component here</div> */}
      </div>
      <hr />
    </div>
  );
};
