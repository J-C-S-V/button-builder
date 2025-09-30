import styles from "./LeftSection.module.css";

export const LeftSection = () => {
  return (
    <div className={styles["left-section"]}>
      <button className={styles["left-section__button"]}>Click me!</button>
      <button className={styles["left-section__button--two"]}>Click me!</button>
      <button className={styles["left-section__button--three"]}>Click me!</button>
      <button className={styles["left-section__button--four"]}>Click me!</button>
      <button className={styles["left-section__button--five"]}>Click me!</button>
      <button className={styles["left-section__button--six"]}>Click me!</button>
      <button className={styles["left-section__button--seven"]}>Click me!</button>
      <button className={styles["left-section__button--eight"]}>Click me!</button>
      <button className={styles["left-section__button--nine"]}>Click me!</button>
      <button className={styles["left-section__button--ten"]}>Click me!</button>
    </div>
  );
};
