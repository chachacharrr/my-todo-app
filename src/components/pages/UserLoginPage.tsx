"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase.config";

const UserLoginPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in (e.g., redirect to a protected page)
      console.log(result.user); // Access user information
    } catch (error) {
      // Handle sign-in errors
      console.error(error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default UserLoginPage;
