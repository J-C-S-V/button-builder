import styles from "./InnerText.module.css";

export const InnerText = () => {
  return (
    <div className={styles["inner-text"]}>
      <label htmlFor="innerText" className={styles["inner-text__label"]}>
        Button Text:
      </label>
      <input
        type="text"
        className={styles["inner-text__input"]}
        id="innerText"
        placeholder="Change text..."
      />
    </div>
  );
};
