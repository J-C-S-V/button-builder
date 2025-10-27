import styles from "./Profile.module.css";

export const Profile = ({ onSignClick }: { onSignClick: () => void }) => {
  return (
    <div className={styles["profile"]}>
      <button onClick={onSignClick} className={styles["profile__button"]}>
        Sign Up
      </button>
      <button className={styles["profile__button"]}>Sign In</button>
    </div>
  );
};
