import styles from "./HoverFontColor.module.css";

export const HoverFontColor = ({
  isHoverColor,
  onHoverColorChange,
}: {
  isHoverColor: string;
  onHoverColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const newHoverColor = isHoverColor.slice(1, isHoverColor.length);

  return (
    <div className={styles["hover-font-color"]}>
      <label htmlFor="fontColor" className={styles["hover-font-color__label"]}>
        Hover Font Color:
      </label>
      <div className={styles["hover-font-color__input-container"]}>
        <input
          className={styles["hover-font-color__input-color"]}
          type="color"
          id="fontColor"
          value={isHoverColor}
          onChange={onHoverColorChange}
        />
        <input
          type="text"
          className={styles["hover-font-color__input-text"]}
          value={newHoverColor}
          onChange={onHoverColorChange}
        />
      </div>
    </div>
  );
};
