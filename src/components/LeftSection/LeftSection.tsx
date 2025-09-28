import styles from "./LeftSection.module.css";

export const LeftSection = () => {
  return (
    <div className={styles["left-section"]}>
      <button className={styles["left-section__button"]}>Click me!</button>
      <button className={styles["left-section__button--two"]}>Click me!</button>
      <button className={styles["left-section__button--three"]}>Click me!</button>
      <button className={styles["left-section__button--four"]}>Click me!</button>
    </div>
  );
};
