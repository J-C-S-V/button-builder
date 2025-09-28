import styles from "./LeftSection.module.css";

export const LeftSection = () => {
  return (
    <div className={styles["left-section"]}>
      <button className={styles["left-section__button"]}>Click me!</button>
      <button className={styles["left-section__button"]}>Click me!</button>
      <button className={styles["left-section__button"]}>Click me!</button>
      <button className={styles["left-section__button"]}>Click me!</button>
    </div>
  );
};
