import styles from "./BorderColor.module.css";

export const BorderColor = ({
  onBorderColorChange,
  borderColor,
}: {
  onBorderColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor: string;
}) => {
  return (
    <div className={styles["border-color"]}>
      <label htmlFor="borderColor" className={styles["border-color__label"]}>
        Border Color:
      </label>
      <div className={styles["border-color__input-container"]}>
        <input
          className={styles["border-color__input-color"]}
          type="color"
          id="borderColor"
          value={borderColor}
          onChange={onBorderColorChange}
        />
        <input type="text" className={styles["border-color__input-text"]} value={borderColor} onChange={onBorderColorChange} />
      </div>
    </div>
  );
};
