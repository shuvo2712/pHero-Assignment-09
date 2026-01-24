import React from "react";
import Banner from "../Components/Home/Banner";
import PopularSkills from "../Components/Home/PopularSkills";
import { useLoaderData } from "react-router-dom";
import HowItWorks from "../Components/Home/HowItWorks";
import TopProviders from "../Components/Home/TopProviders";

const Home = () => {
  const skills = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <PopularSkills skills={skills}></PopularSkills>
      <TopProviders></TopProviders>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
