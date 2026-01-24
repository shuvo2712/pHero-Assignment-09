import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";


const NavLinks = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/skills">Skills</NavLink>
    </li>
    <li>
      <NavLink to="/myprofile">My Profile</NavLink>
    </li>
    <li>
      <NavLink to="/about">About Us</NavLink>
    </li>
  </>
);

const NavBar = () => {
  const [user, setUser] = useState(null);

  // State listener for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google sign in Btn
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(console.error);
  };

  // Logout Btn
  const handleLogout = () => {
    signOut(auth).catch(console.error);
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-5">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl text-blue-600">
          SkillSwap
        </NavLink>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">
        {/* LOGGED OUT */}
        {!user && (
          <>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              <FcGoogle />
              Login
            </button>
            <h1>/</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              <FcGoogle />
              SignUp
            </button>
          </>
        )}

        {/* LOGGED IN */}
        {user && (
          <>
            {/* Avatar */}
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>

            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
