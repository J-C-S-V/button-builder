import styles from "./ChangeBorder.module.css";

export const ChangeBorder = ({
  border,
  onBorderChange,
}: {
  border: number;
  onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          onChange={onBorderChange}
          value={border}
          min={0}
          max={50}
        />
        <div className={styles["border__span-container"]}>
          <span className={styles["border__span"]}>{border}px</span>
        </div>
      </div>
    </div>
  );
};
