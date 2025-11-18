import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { InnerText } from "./Components/InnerText";
import { FontWeight } from "./Components/FontWeight";
import styles from "./Cursor.module.css";

export const Cursor = () => {
  const [showFont, setShowFont] = useState(false);
  const { user } = useAuth();

  return (
    <div className={`${styles["cursor"]}`}>
      <h2
        onClick={() => setShowFont(!showFont)}
        className={styles["cursor__title"]}
      >
        <span className={styles["cursor__title-text"]}>
          Cursor {user ? "" : "👑"}
        </span>
        {showFont ? (
          <span className={styles["cursor__title-text"]}>-</span>
        ) : (
          <span className={styles["cursor__title-text"]}>+</span>
        )}
      </h2>
      <div
        className={`${styles["cursor__content"]} ${
          showFont ? styles["show"] : ""
        }`}
      >
        {user ? (
          <>
            <InnerText />
            <FontWeight />
          </>
        ) : (
          <p className={styles["cursor__content--locked"]}>
            🔒 Unlock this feature by signing in!
          </p>
        )}
      </div>
      <hr />
    </div>
  );
};
