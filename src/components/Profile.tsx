import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Profile = () => {
  const [user, setUser] = useState<string | null>(null);

  const handleClickSignUp = () => {
    createUserWithEmailAndPassword(auth, "testProfile@test.com", "test123**//lksjdkfj")
      .then((response) => {
        const user = response.user;
        console.log(user);
        setUser(user.email);
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      });
  };

  const handleClickSignIn = () => {
    signInWithEmailAndPassword(auth, "testProfile@test.com", "test123**//lksjdkfj")
      .then((response) => {
        const user = response.user;
        console.log(user);
        setUser(user.email);
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  };

  const handleClickSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div className="profile-pending">
      {user && (
        <>
          <p>Hello {user}</p>
          <button onClick={handleClickSignOut}>Sign Out</button>
        </>
      )}
      {!user && (
        <>
          <button onClick={handleClickSignIn}>Sign In</button>
          <button onClick={handleClickSignUp}>Sign Up</button>
        </>
      )}
    </div>
  );
};
