import styles from "./ChangeBackgroundColor.module.css";

export const ChangeBackgroundColor = ({
  onBackgroundColorChange,
  backgroundColor,
}: {
  onBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor: string;
}) => {
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
          value={backgroundColor}
          onChange={onBackgroundColorChange}
        />
      </div>
    </div>
  );
};
