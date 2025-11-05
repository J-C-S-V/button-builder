import { useAuth } from "../../../context/AuthContext";
import styles from "./Profile.module.css";

export const Profile = ({
  onSignInClick,
  onSignUpClick,
}: {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}) => {
  const { user, logout } = useAuth();
  console.log("user", user);
  return (
    <div className={styles["profile"]}>
      {!user && (
        <>
          <button onClick={onSignUpClick} className={styles["profile__button"]}>
            Sign Up
          </button>
          <button onClick={onSignInClick} className={styles["profile__button"]}>
            Sign In
          </button>
        </>
      )}

      {user && (
        <div className={styles["profile__logout-container"]}>
          <button className={styles["profile__button"]} onClick={logout}>
            Logout
          </button>
          <span className={styles["profile__user"]}>Welcome! {user.email}</span>
        </div>
      )}
    </div>
  );
};
