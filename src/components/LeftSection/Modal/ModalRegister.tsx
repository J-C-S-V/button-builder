import { useState } from "react";
import { auth } from "../../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { FormData } from "../../../types/form";
import styles from "./ModalRegister.module.css";

export const ModalRegister = ({
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isModalSignUp) {
        const response = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User created:", response.user);
      } else if (isModalSignIn) {
        const response = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User signed in:", response.user);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  });

  // const handleClickSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser(null);
  //     })
  //     .catch((error) => {
  //       console.error("Error signing out: ", error);
  //     });
  // };

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
