import { useAuth } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import type { FormData } from "../../../types/types.d.ts";
import styles from "./Form.module.css";

export const Form = ({
  isModalSignUp,
  isModalSignIn,
  onModalShowSignUp,
  onModalShowSignIn,
}: {
  isModalSignUp: boolean;
  isModalSignIn: boolean;
  onModalShowSignUp: () => void;
  onModalShowSignIn: () => void;
}) => {
  const { user, loading, signUp, signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isModalSignUp) {
        await signUp(data.email, data.password);
      } else if (isModalSignIn) {
        await signIn(data.email, data.password);
      }
    } catch (error) {
      // Handle error in UI (show error message to user)
      console.error("Authentication error:", error);
    }
  });

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (user) {
  //   return <div>Welcome, {user.email}!</div>;
  // }

  return (
    // <div className="profile-pending">
    //   {user && (
    //     <>
    //       <p>Hello {user}</p>
    //       <button onClick={handleClickSignOut}>Sign Out</button>
    //     </>
    //   )}
    //   {!user && (
    //     <>

    //       <button onClick={handleClickSignIn}>Sign In</button>
    //     </>
    //   )}
    // </div>
    <>
      <form
        onSubmit={onSubmit}
        className={`${styles["form"]} ${
          isModalSignIn || isModalSignUp ? styles["show-modal"] : ""
        }`}
      >
        {isModalSignUp && (
          <button
            type="button"
            onClick={() => {
              onModalShowSignUp();
            }}
            className={styles["form__close"]}
          >
            X
          </button>
        )}
        {isModalSignIn && (
          <button
            type="button"
            onClick={() => {
              onModalShowSignIn();
            }}
            className={styles["form__close"]}
          >
            X
          </button>
        )}

        <div className={styles["form__input-wrapper"]}>
          <label htmlFor="email" className={styles["form__label"]}>
            Email:
          </label>
          <input
            className={styles["form__input"]}
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <span
            className={`${styles["error"]} ${
              errors.email ? styles["show"] : ""
            }`}
          >
            {errors.email?.message ? errors.email.message : "I"}
          </span>
        </div>

        <div className={styles["form__input-wrapper"]}>
          <label htmlFor="password" className={styles["form__label"]}>
            Password:
          </label>
          <input
            className={styles["form__input"]}
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 10,
                message: "Minimum length is 10 characters",
              },
              validate: {
                hasNumber: (value) =>
                  /[0-9]/.test(value) ||
                  "Password must contain at least one number",
                // hasSpecialChar: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
                // hasUpperCase: (value) => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter'
              },
            })}
          />
          <span
            className={`${styles["error"]} ${
              errors.password ? styles["show"] : ""
            }`}
          >
            {errors.password?.message ? errors.password.message : "I"}
          </span>
        </div>
        <div className={styles["form__input-wrapper"]}>
          <label htmlFor="confirmPassword" className={styles["form__label"]}>
            Confirm password:{" "}
          </label>
          <input
            className={styles["form__input"]}
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 10,
                message: "Minimum length is 10 characters",
              },
              validate: (value) => {
                if (value === watch("password")) {
                  return true;
                } else {
                  return "Passwords do not match";
                }
              },
            })}
          />
          <span
            className={`${styles["error"]} ${
              errors.confirmPassword ? styles["show"] : ""
            }`}
          >
            {errors.confirmPassword?.message
              ? errors.confirmPassword.message
              : "I"}
          </span>
        </div>
        {isModalSignUp && (
          <button type="submit" className={styles["form__button"]}>
            Sign Up
          </button>
        )}
        {isModalSignIn && (
          <button type="submit" className={styles["form__button"]}>
            Sign In
          </button>
        )}

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </>
  );
};
