import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { toast } from "react-hot-toast";

const baseLinkClass = "mx-1";
const activeLinkClass = "bg-primary text-white";

const NavLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass
        }
      >
        Skills
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/myprofile"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass
        }
      >
        My Profile
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass
        }
      >
        About Us
      </NavLink>
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

  // Logout Btn
  const handleLogout = () => {
    signOut(auth)
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-5">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl text-primary font-bold"
        >
          SkillSwap
        </NavLink>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">
        {/* LOGGED OUT */}
        {!user && (
          <>
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
            <h1>/</h1>
            <Link to="/signup" className="btn btn-primary text-white">
              Sign Up
            </Link>
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
