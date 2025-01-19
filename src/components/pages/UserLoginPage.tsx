"use client";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
} from "firebase/auth";
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

  const handleGuestSignIn = async () => {
    try {
      const result = await signInAnonymously(auth);
      console.log(`ゲストログイン成功：${result.user}`);
      router.push("/");
    } catch (error) {
      console.error(`ゲストログイン失敗：${error}`);
    }
  };

  return (
    <div className="flex-col border rounded-md border-white w-2/3 justify-self-center mt-40">
      <button
        className="flex m-auto pt-5 border-b-2"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>

      <button
        className="flex m-auto mb-5 pt-5 border-b-2"
        onClick={handleGuestSignIn}
      >
        ゲストログイン
      </button>
    </div>
  );
};

export default UserLoginPage;
