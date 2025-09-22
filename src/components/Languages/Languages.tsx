import styles from "./Languages.module.css";

export const Languages = () => {
  return (
    <div className={styles.languages}>
      <button className="css">CSS</button>
      <button className="html">HTML</button>
    </div>
  );
};
