import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";

import { auth } from "../Firebase/firebase.config";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  /* register handler */
  const handleSignup = (e) => {
    e.preventDefault();

    // Password validation rules
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        /* set name & photo */
        await updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Signup successful");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };;

  /* Google signup handler */
  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google signup/login successful");
        navigate("/", { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-8 shadow rounded bg-base-100 space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {/* Name input */}
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Photo URL input */}
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        {/* Password input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Register btn */}
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>

        <div className="divider">OR</div>

        {/* Google login/signup */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
