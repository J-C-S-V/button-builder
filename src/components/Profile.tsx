import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import styles from './Profile.module.css';


export const Profile = () => {
  const [user, setUser] = useState<string | null>(null);

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
      <form className={styles['form']}>
        <label htmlFor="email" className={styles['form__label']}>Email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password" className={styles['form__label']}>Password: </label>
        <input type="password" name="password" id="password" />
        <button className={styles['form__signup']} onClick={handleClickSignUp}>Sign Up</button>
      </form>
    </>
  );
};
