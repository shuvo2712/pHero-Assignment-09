import React from "react";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";

const PopularSkills = ({ skills = [] }) => {
  // console.log(skills);
  return (
    <div className="p-10 w-full text-center mt-10">
      <h1 className="text-5xl font-semibold text-center">Popular Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-5 mt-10">
        {/* Skill Items */}
        {skills?.slice(0, 6).map((skill) => (
          <SkillCard key={skill.skillId} skill={skill}></SkillCard>
        ))}
      </div>
      {/* show all */}
      <div>
        <Link to="/skills" className="btn btn-primary text-white rounded-lg mt-10 px-15 py-5">
          Show All Skills
        </Link>
      </div>
    </div>
  );
};

export default PopularSkills;
