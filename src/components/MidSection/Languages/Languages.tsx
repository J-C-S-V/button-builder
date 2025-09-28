import styles from "./Languages.module.css";

export const Languages = () => {
  return (
    <div className={styles.languages}>
      <button className={`${styles.languages__css} ${styles.languages__button}`}>CSS</button>
      <button className={`${styles.languages__html} ${styles.languages__button}`}>HTML</button>
    </div>
  );
};
