import styles from "./Border.module.css";

export const Border = ({
  onBorderWidthChange,
  borderWidth,
}: {
  onBorderWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderWidth: number;
}) => {
  return (
    <div className={styles["border"]}>
      <label className={styles["border__label"]} title="Enter border" htmlFor="border">
        Border width:
      </label>
      <div className={styles["border__input-container"]}>
        <input
          className={styles["border__input"]}
          type="range"
          id="border"
          onChange={onBorderWidthChange}
          value={borderWidth}
          min={0}
          max={50}
        />
        <div className={styles["border__span-container"]}>
          <span className={styles["border__span"]}>{borderWidth}px</span>
        </div>
      </div>
    </div>
  );
};
