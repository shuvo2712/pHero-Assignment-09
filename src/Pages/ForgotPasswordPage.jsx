import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-hot-toast";

const ForgotPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill email
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        // Redirect to Gmail after 2 seconds
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
          navigate("/login");
        }, 2000);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleResetPassword}
        className="w-full max-w-md p-8 shadow rounded bg-base-100 space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Reset Password
        </button>

        <p className="text-center text-sm mt-2">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
