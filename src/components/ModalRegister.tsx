import { useState } from "react";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { FormData } from "../types/form";
import styles from "./ModalRegister.module.css";

export const ModalRegister = () => {
  const [user, setUser] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  // const newItem = register('registerName');
  // console.log(newItem)
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleClickSignUp = () => {
    createUserWithEmailAndPassword(auth, "new@test.com", "test12*//lksjdkfj")
      .then((response) => {
        const user = response.user;
        console.log(user);
        setUser(user.email);
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      });
  };

  // const handleClickSignIn = () => {
  //   signInWithEmailAndPassword(auth, "jota@test.com", "test123**//lksjdkfj")
  //     .then((response) => {
  //       const user = response.user;
  //       console.log(user);
  //       setUser(user.email);
  //     })
  //     .catch((error) => {
  //       console.error("Error signing in: ", error);
  //     });
  // };

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
      <form onSubmit={onSubmit} className={styles["form"]}>
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

        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </form>

      <button className={styles["form__signup"]} onClick={handleClickSignUp}>
        Sign Up
      </button>
      <button className={styles["form__signup"]} onClick={handleClickSignUp}>
        Sign In
      </button>
    </>
  );
};
