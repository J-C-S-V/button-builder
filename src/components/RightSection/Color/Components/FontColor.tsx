import styles from "./FontColor.module.css";

export const FontColor = ({
  fontColor,
  onFontColorChange,
}: {
  fontColor: string;
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  // const newFontColor = fontColor.slice(1, fontColor.length);

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
