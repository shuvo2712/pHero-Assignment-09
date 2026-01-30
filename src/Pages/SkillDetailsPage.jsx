import React from "react";
import image from "../assets/bannerImage.png";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";

const SkillDetailsPage = () => {
  const skill = useLoaderData();

  // check if skill data is available
  if (!skill) {
    return (
      <div className="text-center my-20 text-red-500">Skill not found ❌</div>
    );
  }

    // Submit Btn
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Session booked successfully");
      e.target.reset();
    };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <img
        src={image}
        alt={skill.skillName}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{skill.skillName}</h1>

      <p className="text-sm text-gray-500 mb-4">Category: {skill.category}</p>

      <p className="mb-6 text-lg">{skill.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <p>⭐ Rating: {skill.rating}</p>
        <p>💰 Price: ${skill.price}</p>
        <p>🪑 Slots Available: {skill.slotsAvailable}</p>
        <p>👨‍🏫 Provider: {skill.providerName}</p>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Contact: {skill.providerEmail}
      </p>

      {/* Btn */}
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-6 space-y-4 bg-base-100 shadow"
      >
        <h2 className="text-2xl font-semibold text-center">Book Session</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SkillDetailsPage;
