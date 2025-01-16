"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/navigation"; // useRouterを追加

const UserLoginPage = () => {
  const router = useRouter(); // useRouterを初期化

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in (e.g., redirect to a protected page)
      console.log(`ログイン成功：${result.user}`); // Access user information
      router.push("/"); // ログイン後にホームページにリダイレクト
    } catch (error) {
      // Handle sign-in errors
      console.error(`ログイン失敗：${error}`);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default UserLoginPage;
