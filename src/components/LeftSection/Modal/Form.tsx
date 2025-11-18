import { useAuth } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import type { FormData } from "../../../types/types.d.ts";
import styles from "./Form.module.css";
import { useGlobal } from "../../../context/GlobalContext.tsx";

export const Form = () => {
  const { user, loading, signUp, signIn } = useAuth();
  const {
    isModalSignUp,
    isModalSignIn,
    handleShowModalSignUp,
    handleShowModalSignIn,
  } = useGlobal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isModalSignUp) {
        await signUp(data.email, data.password);
        handleShowModalSignUp();
        console.log("Signed up successfully");
        reset();
      } else if (isModalSignIn) {
        await signIn(data.email, data.password);
        handleShowModalSignIn();
        console.log("Signed up successfully");
        reset();
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("root", {
        type: "manual",
        message: "Authentication failed. Please check your credentials.",
      });
    }
  });

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (user) {
  //   return <div>Welcome, {user.email}!</div>;
  // }

  return (
    <form
      onSubmit={onSubmit}
      className={`${styles["form"]} ${
        isModalSignIn || isModalSignUp ? styles["form__show-modal"] : ""
      }`}
    >
      {isModalSignUp && (
        <button
          type="button"
          onClick={() => {
            handleShowModalSignUp();
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
            handleShowModalSignIn();
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
          className={`${styles["form__error"]} ${
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
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must contain at least one special character",
              hasUpperCase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
            },
          })}
        />
        <span
          className={`${styles["form__error"]} ${
            errors.password ? styles["show"] : ""
          }`}
        >
          {errors.password?.message ? errors.password.message : "I"}
        </span>
      </div>
      {isModalSignUp && (
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
            className={`${styles["form__error"]} ${
              errors.confirmPassword ? styles["show"] : ""
            }`}
          >
            {errors.confirmPassword?.message
              ? errors.confirmPassword.message
              : "I"}
          </span>
        </div>
      )}
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
      {errors.root ? errors.root.message : "I"}

      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};
