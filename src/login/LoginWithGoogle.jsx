// src/components/GoogleSignIn.js
import React from "react";
import { auth, provider, signInWithPopup} from '../firebase';
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      // You can now use the user info (e.g., user.displayName, user.email)
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="google-logo">
    <FcGoogle/>
    </button>
  );
};

export default LoginWithGoogle;
