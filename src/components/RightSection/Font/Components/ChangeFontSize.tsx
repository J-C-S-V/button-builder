import styles from "./ChangeFontSize.module.css";

export const ChangeFontSize = ({
  fontSize,
  onFontSizeChange,
}: {
  fontSize: number;
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["font-size"]}>
      <label htmlFor="fontSize" className={styles["font-size__label"]}>
        Font Size:
      </label>
      <div className={styles["font-size__input-container"]}>
        <input
          className={styles["font-size__input"]}
          type="range"
          id="fontSize"
          min={0}
          max={100}
          step={1}
          value={fontSize}
          onChange={onFontSizeChange}
        />
        <div className={styles["font-size__span-container"]}>
          <span className={styles["font-size__span"]}>{fontSize}px</span>
        </div>
      </div>
    </div>
  );
};
