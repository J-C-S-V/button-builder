import { useAuth } from "../../../context/AuthContext";
import { useGlobal } from "../../../context/GlobalContext";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, logout } = useAuth();
  const { handleShowModalSignUp, handleShowModalSignIn } = useGlobal();
  return (
    <div className={styles["profile"]}>
      {!user && (
        <>
          <button
            onClick={handleShowModalSignUp}
            className={styles["profile__button"]}
          >
            Sign Up
          </button>
          <button
            onClick={handleShowModalSignIn}
            className={styles["profile__button"]}
          >
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
