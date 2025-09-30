import styles from "./Padding.module.css";

export const Padding = ({
  onPaddingYChange,
  onPaddingXChange,
  paddingY,
  paddingX,
}: {
  onPaddingYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paddingY: number;
  paddingX: number;
}) => {
  return (
    <div className={styles["padding"]}>
      <label title="Enter padding" htmlFor="padding" className={styles["padding__label"]}>
        Padding:
      </label>
      <div className={styles["padding__input-container"]}>
        <div className={styles["padding__text-padding-y"]}>
          <input
            type="range"
            className={styles["padding__input-padding-y"]}
            id="padding"
            placeholder={paddingY.toString()}
            min={0}
            max={50}
            step={1}
            value={paddingY}
            onChange={onPaddingYChange}
          />{" "}
          <span className={styles["padding__span"]}>Y&nbsp;&nbsp;{paddingY}px</span>
        </div>
        <div className={styles["padding__text-padding-x"]}>
          <input
            type="range"
            className={styles["padding__input-padding-x"]}
            id="padding"
            placeholder={paddingX.toString()}
            min={0}
            max={100}
            step={1}
            value={paddingX}
            onChange={onPaddingXChange}
          />
          <span className={styles["padding__span"]}>X&nbsp;&nbsp;{paddingX}px</span>
        </div>
      </div>
    </div>
  );
};
