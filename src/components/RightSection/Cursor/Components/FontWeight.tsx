import styles from "./FontWeight.module.css";

export const FontWeight = () => {
  return (
    <div className={styles["font-weight"]}>
      <label htmlFor="fontWeight" className={styles["font-weight__label"]}>
        Font Weight:
      </label>
      <div className={styles["font-weight__input-container"]}>
        <input
          className={styles["font-weight__input"]}
          type="range"
          id="fontWeight"
          min={100}
          max={900}
          step={100}
        />
      </div>
    </div>
  );
};
