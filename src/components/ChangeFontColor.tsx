import styles from "./ChangeFontColor.module.css";

export const ChangeFontColor = ({
  fontColor,
  onFontColorChange,
}: {
  fontColor: string;
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["font-color"]}>
      <label htmlFor="fontColor" className={styles["font-color__label"]}>
        Font Color:
      </label>
      <div className={styles["font-color__input-container"]}>
        <input
          className={styles["font-color__input-color"]}
          type="color"
          id="fontColor"
          value={fontColor}
          onChange={onFontColorChange}
        />
        <input type="text" className={styles["font-color__input-text"]} value={fontColor} onChange={onFontColorChange} />
      </div>
    </div>
  );
};
