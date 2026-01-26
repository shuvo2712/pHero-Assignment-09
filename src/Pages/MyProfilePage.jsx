import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/firebase.config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfilePage = () => {
  const [user, setUser] = useState(undefined); // 🔼 start as undefined
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setDisplayName(currentUser?.displayName || "");
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <p className="p-10 text-center">Loading...</p>; // 🔼 safe

  if (!user)
    return (
      <p className="p-10 text-center">You must log in to view this page.</p>
    ); // 🔼 safe

  const handleUpdateProfile = () => {
    updateProfile(user, { displayName })
      .then(() => toast.success("Profile updated!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>
      <div className="flex flex-col items-center gap-5 bg-base-200 p-8 rounded-lg shadow-md">
        <img
          src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="avatar"
          className="w-32 h-32 rounded-full"
        />
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="input input-bordered w-full max-w-xs text-center"
        />
        <p>Email: {user.email}</p>
        <button
          onClick={handleUpdateProfile}
          className="btn btn-primary mt-3 w-full max-w-xs"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfilePage;
