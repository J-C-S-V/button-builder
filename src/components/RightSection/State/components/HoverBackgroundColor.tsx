import styles from "./HoverBackgroundColor.module.css";

export const HoverBackgroundColor = ({
  isHoverBackgroundColor,
  onHoverBackgroundColorChange,
}: {
  isHoverBackgroundColor: string;
  onHoverBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const newHoverBackgroundColor = isHoverBackgroundColor.slice(1, isHoverBackgroundColor.length);

  return (
    <div className={styles["hover-background-color"]}>
      <label htmlFor="backgroundColor" className={styles["hover-background-color__label"]}>
        Hover Background Color:
      </label>
      <div className={styles["hover-background-color__input-container"]}>
        <input
          className={styles["hover-background-color__input-color"]}
          type="color"
          id="backgroundColor"
          value={isHoverBackgroundColor}
          onChange={onHoverBackgroundColorChange}
        />
        <input
          type="text"
          className={styles["hover-background-color__input-text"]}
          value={isHoverBackgroundColor}
          onChange={onHoverBackgroundColorChange}
        />
      </div>
    </div>
  );
};
