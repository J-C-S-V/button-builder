import styles from "./HoverScale.module.css";

export const HoverScale = ({
  hoverScale,
  onHoverScaleChange,
}: {
  hoverScale: string;
  onHoverScaleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["scale"]}>
      <label htmlFor="scale" className={styles["scale__label"]}>
        Scale:
      </label>
      <div className={styles["scale__input-container"]}>
        <input
          className={styles["scale__input"]}
          type="range"
          id="scale"
          min="0.5"
          max="2"
          step="0.01"
          value={hoverScale}
          onChange={onHoverScaleChange}
        />
        <div className={styles["scale__span-container"]}>
          <span className={styles["scale__span"]}>{hoverScale}</span>
        </div>
      </div>
    </div>
  );
};
