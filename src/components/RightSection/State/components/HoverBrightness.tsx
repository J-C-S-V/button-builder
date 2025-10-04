import styles from "./HoverBrightness.module.css";

export const HoverBrightness = ({
  hoverBrightness,
  onHoverBrightnessChange,
}: {
  hoverBrightness: string;
  onHoverBrightnessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["brightness"]}>
      <label htmlFor="brightness" className={styles["brightness__label"]}>
        Brightness:
      </label>
      <div className={styles["brightness__input-container"]}>
        <input
          className={styles["brightness__input"]}
          id="brightness"
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={hoverBrightness}
          onChange={onHoverBrightnessChange}
        />
        <div className={styles["brightness__span-container"]}>
          <span className={styles["brightness__span"]}>{hoverBrightness}</span>
        </div>
      </div>
    </div>
  );
};
