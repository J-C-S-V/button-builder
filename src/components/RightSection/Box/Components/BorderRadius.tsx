import styles from "./BorderRadius.module.css";

export const BorderRadius = ({
  onBorderRadiusChange,
  borderRadius,
}: {
  onBorderRadiusChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius: number;
}) => {
  return (
    <div className={styles["border-radius"]}>
      <label title="Enter border radius" htmlFor="borderRadius" className={styles["border-radius__label"]}>
        Border Radius:
      </label>
      <div className={styles["border-radius__input-container"]}>
        <input
          className={styles["border-radius__input"]}
          type="range"
          id="borderRadius"
          onChange={onBorderRadiusChange}
          placeholder={borderRadius.toString()}
          min={0}
          max={50}
          step={1}
          value={borderRadius}
        />
        <div className={styles["border-radius__span-container"]}>
          <span className={styles["border-radius__span"]}>{borderRadius}px</span>
        </div>
      </div>
    </div>
  );
};
