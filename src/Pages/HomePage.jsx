import React from "react";
import HeroSlider from "../Components/Home/HeroSlider";
import Banner from "../Components/Home/Banner";
import PopularSkills from "../Components/Home/PopularSkills";
import { useLoaderData } from "react-router-dom";
import HowItWorks from "../Components/Home/HowItWorks";
import TopProviders from "../Components/Home/TopProviders";
import Testimonials from "../Components/Home/Testimonials";

const Home = () => {
  const skills = useLoaderData();
  return (
    <div>
      <HeroSlider></HeroSlider>
      {/* <Banner></Banner> */}
      <PopularSkills skills={skills}></PopularSkills>
      <TopProviders></TopProviders>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
