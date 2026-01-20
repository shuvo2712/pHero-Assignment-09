import React from "react";
import Banner from "../Components/Home/Banner";
import PopularSkills from "../Components/Home/PopularSkills";
import SkillCard from "../Components/Home/SkillCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularSkills></PopularSkills>
      <SkillCard></SkillCard>
    </div>
  );
};

export default Home;
