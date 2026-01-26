import React from "react";
import image from "../../assets/bannerImage.png"; 
import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  if (!skill) return null;

  const { skillName, rating, price } = skill;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-transform">
      {/* Image */}
      <figure>
        <img src={image} alt={skillName} className="h-48 w-full object-cover" />
      </figure>

      {/* Details */}
      <div className="card-body flex flex-col justify-between flex-1">
        <div>
          <h2 className="card-title text-lg md:text-xl font-semibold mb-2">
            {skillName}
          </h2>
          <p className="text-sm text-gray-500 mb-1">⭐ {rating}</p>
          <p className="text-sm font-medium mb-3">💲{price}</p>
        </div>

        {/* Details Btn */}
        <div>
        <Link
          to={`/skills/${skill.skillId}`}
          className="btn btn-primary w-full mt-3 rounded-lg"
        >
          View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
