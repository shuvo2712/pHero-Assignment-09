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
  // console.log(skills);

  return (
    <div>
      <HeroSlider></HeroSlider>
      {/* <Banner></Banner> */}

      <div data-aos="fade-up">
        <PopularSkills skills={skills} />
      </div>

      <div data-aos="fade-right">
        <TopProviders />
      </div>

      <div data-aos="fade-left">
        <HowItWorks />
      </div>

      <div data-aos="zoom-in">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
