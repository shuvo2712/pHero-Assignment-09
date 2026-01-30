import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import SkillCard from "../Components/Home/SkillCard";

const SkillPage = () => {
  const skills = useLoaderData() || [];
  // console.log(skills);

  return (
    <div className="p-10 w-full text-center">
      <h1 className="text-5xl font-semibold text-center">Explore All Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 mt-10">
        {/* Skill Items */}
        {skills?.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
