import styles from "./HoverFontColor.module.css";

export const HoverFontColor = ({
  hoverColor,
  onHoverColorChange,
}: {
  hoverColor: string;
  onHoverColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
          value={hoverColor}
          onChange={onHoverColorChange}
        />
        <input type="text" className={styles["hover-font-color__input-text"]} value={hoverColor} onChange={onHoverColorChange} />
      </div>
    </div>
  );
};
