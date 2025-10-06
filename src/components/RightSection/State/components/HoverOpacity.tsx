import styles from "./HoverOpacity.module.css";

export const HoverOpacity = ({
  hoverOpacity,
  onHoverOpacityChange,
}: {
  hoverOpacity: number;
  onHoverOpacityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["opacity"]}>
      <label htmlFor="opacity" className={styles["opacity__label"]}>
        Opacity:
      </label>
      <div className={styles["opacity__input-container"]}>
        <input
          className={styles["opacity__input"]}
          id="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={hoverOpacity}
          onChange={onHoverOpacityChange}
        />
        <div className={styles["opacity__span-container"]}>
          <span className={styles["opacity__span"]}>{hoverOpacity}</span>
        </div>
      </div>
    </div>
  );
};
