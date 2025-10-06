import styles from "./HoverTransition.module.css";

export const HoverTransition = ({
  transition,
  onTransitionChange,
}: {
  transition: number;
  onTransitionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles["transition"]}>
      <label htmlFor="transition" className={styles["transition__label"]}>
        Transition time:
      </label>
      <div className={styles["transition__input-container"]}>
        <input
          className={styles["transition__input"]}
          type="range"
          id="transition"
          min="0.01"
          max="2"
          step="0.01"
          value={transition}
          onChange={onTransitionChange}
        />
        <div className={styles["transition__span-container"]}>
          <span className={styles["transition__span"]}>{transition}</span>
        </div>
      </div>
    </div>
  );
};
