import styles from "./ChangeFontWeight.module.css";

export const ChangeFontWeight = ({
  fontWeight,
  onFontWeightChange,
}: {
  fontWeight: number;
  onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
          value={fontWeight}
          onChange={onFontWeightChange}
        />
        <div className={styles["font-weight__span-container"]}>
          <span className={styles["font-weight__span"]}>{fontWeight}</span>
        </div>
      </div>
    </div>
  );
};
