import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

import { auth } from "../Firebase/firebase.config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  /* login handler */
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful ✅");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  /* Google login handler */
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google login successful ✅");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 shadow rounded bg-base-100 space-y-4"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // 🔼 change type dynamically
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // 🔼 toggle password
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Forget password */}
        <p
          onClick={() => navigate("/forgot-password", { state: { email } })}
          className="text-sm text-blue-600 cursor-pointer"
        >
          Forgot Password?
        </p>

        {/* Login button */}
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>

        <div className="divider">OR</div>

        {/* Google login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle />
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-sm mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
