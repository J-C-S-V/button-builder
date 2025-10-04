import styles from "./BackgroundColor.module.css";

export const BackgroundColor = ({
  onBackgroundColorChange,
  backgroundColor,
}: {
  onBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor: string;
}) => {
  const newBackgroundColor = backgroundColor.slice(1, backgroundColor.length);
  return (
    <div className={styles["background-color"]}>
      <label htmlFor="background" className={styles["background-color__label"]}>
        Background Color:
      </label>
      <div className={styles["background-color__input-container"]}>
        <input
          className={styles["background-color__input-color"]}
          type="color"
          id="background"
          onChange={onBackgroundColorChange}
        />
        <input
          type="text"
          className={styles["background-color__input-text"]}
          value={newBackgroundColor}
          onChange={onBackgroundColorChange}
        />
      </div>
    </div>
  );
};
