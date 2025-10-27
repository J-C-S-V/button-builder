import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles["profile"]}>
      <button className={styles["profile__button"]}>Sign Up</button>
      <button className={styles["profile__button"]}>Sign In</button>
    </div>
  );
};
