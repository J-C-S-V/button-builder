import styles from "./Profile.module.css";

export const Profile = ({
  onSignInClick,
  onSignUpClick,
}: {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}) => {
  return (
    <div className={styles["profile"]}>
      <button onClick={onSignUpClick} className={styles["profile__button"]}>
        Sign Up
      </button>
      <button onClick={onSignInClick} className={styles["profile__button"]}>
        Sign In
      </button>
    </div>
  );
};
