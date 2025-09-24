import styles from "./ChangeFontColor.module.css";

export const ChangeFontColor = ({
  fontColor,
  onFontColorChange,
}: {
  fontColor: string;
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["controls__font-color"]}>
      <label htmlFor="fontColor" className={styles["controls__label"]}>
        Font Color:
      </label>
      <div className={styles["controls__input-color"]}>
        <input
          className={styles["controls__input-font-color"]}
          type="color"
          id="fontColor"
          value={fontColor}
          onChange={onFontColorChange}
        />
        <input type="text" className={styles["controls__font-color-preview"]} value={fontColor} onChange={onFontColorChange} />
      </div>
    </div>
  );
};
