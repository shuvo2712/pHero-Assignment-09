import React from "react";
import image from "../../assets/bannerImage.png"; 

const SkillCard = ({ skill }) => {
  if (!skill) return null;

  const { skillName, rating, price } = skill;

  return (
    <div className="card bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-xl overflow-hidden flex flex-col">
      {/* Image */}
      <figure>
        <img
          src={image}
          alt={skillName}
          className="h-48 w-full object-cover hover:scale-105 transition-transform"
        />
      </figure>

      {/* Details */}
      <div className="card-body flex flex-col justify-between flex-1">
        <div>
          <h2 className="card-title text-lg md:text-xl font-semibold mb-2">
            {skillName}
          </h2>
          <p className="text-sm text-gray-500 mb-1">⭐ {rating}</p>
          <p className="text-sm font-medium mb-3">💲 {price}</p>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
