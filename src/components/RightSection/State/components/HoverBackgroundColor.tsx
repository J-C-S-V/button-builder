import styles from "./HoverBackgroundColor.module.css";

export const HoverBackgroundColor = ({
  hoverBackgroundColor,
  onHoverBackgroundColorChange,
}: {
  hoverBackgroundColor: string;
  onHoverBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  // const newHoverBackgroundColor = hoverBackgroundColor.slice(1, hoverBackgroundColor.length);

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
          value={hoverBackgroundColor}
          onChange={onHoverBackgroundColorChange}
        />
        <input
          type="text"
          className={styles["hover-background-color__input-text"]}
          value={hoverBackgroundColor}
          onChange={onHoverBackgroundColorChange}
        />
      </div>
    </div>
  );
};
