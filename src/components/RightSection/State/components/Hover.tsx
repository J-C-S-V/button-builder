import styles from "./Hover.module.css";

export const Hover = ({
  isHoverBrightness,
  onHoverBrightnessChange,
  isHoverScale,
  onHoverScaleChange,
  isHoverColor,
  onHoverColorChange,
  isHoverBackgroundColor,
  onHoverBackgroundColorChange,
}: {
  isHoverBrightness: string;
  onHoverBrightnessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverScale: string;
  onHoverScaleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverColor: string;
  onHoverColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHoverBackgroundColor: string;
  onHoverBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["hover"]}>
      <h2>Hover</h2>
      <div>
        <input type="range" min="0" max="200" value={isHoverBrightness} onChange={onHoverBrightnessChange} />
        <input type="range" min="0.5" max="2" value={isHoverScale} onChange={onHoverScaleChange} />
        {/* <div className={styles["font-color"]}>
          <label htmlFor="fontColor" className={styles["font-color__label"]}>
            Hover Font Color:
          </label>
          <div className={styles["font-color__input-container"]}>
            <input
              className={styles["font-color__input-color"]}
              type="color"
              id="fontColor"
              value={isHoverColor}
              onChange={onHoverColorChange}
            />
            <input type="text" className={styles["font-color__input-text"]} value={isHoverColor} onChange={onHoverColorChange} />
          </div>
          <div className={styles["background-color"]}>
            <label htmlFor="background" className={styles["background-color__label"]}>
              Hover Background Color:
            </label>
            <div className={styles["background-color__input-container"]}>
              <input
                className={styles["background-color__input-color"]}
                type="color"
                id="background"
                onChange={onHoverBackgroundColorChange}
              />
              <input
                type="text"
                className={styles["background-color__input-text"]}
                value={isHoverBackgroundColor}
                onChange={onHoverBackgroundColorChange}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
