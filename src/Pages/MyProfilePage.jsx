import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyProfilePage = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(true);


  // State change listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // loading
  if (loading) return <p className="p-10 text-center">Loading user info...</p>;

  // if no user
  if (!user) return <p className="p-10 text-center">No user logged in</p>;

  // Update profile handler
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(user, { displayName: name, photoURL })
      .then(() => {
        toast.success("Profile updated successfully");
        setEditing(false);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-base-100 rounded shadow space-y-4">
      <h1 className="text-2xl font-bold text-center">My Profile</h1>
      <div className="flex flex-col items-center gap-2">
        <img
          src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full"
        />
        <p>
          <strong>Name:</strong> {user.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* update profile Btn */}
      {!editing && (
        <button
          className="btn btn-primary w-full"
          onClick={() => setEditing(true)}
        >
          Update Profile
        </button>
      )}

      {/* edit form */}
      {editing && (
        <form onSubmit={handleUpdateProfile} className="space-y-3">
          <h1>Name: </h1>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h1>Photo URL: </h1>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            {/* update Btn */}
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
            {/* cancel Btn */}
            <button
              type="button"
              className="btn btn-error w-full"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyProfilePage;
