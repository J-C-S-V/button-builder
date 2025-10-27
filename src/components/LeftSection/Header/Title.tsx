import styles from "./Title.module.css";

export const Title = () => {
  return (
    <h1 className={styles["languages__title"]}>
      <span className={styles["languages__title-span"]}>F</span>ree{" "}
      <span className={styles["languages__title-span"]}>B</span>
      utton <span className={styles["languages__title-span"]}>B</span>uilder
    </h1>
  );
};
