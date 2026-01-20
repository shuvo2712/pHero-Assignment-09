import React from "react";
import img from '../../assets/bannerImage.png'; 

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col items-center">
      {/* text */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-start space-y-4">
        <h1 className="text-4xl">
          <span className="text-blue-500">Exchange</span> Your Skills
        </h1>
        <h1 className="text-4xl">
          <span className="text-blue-500">Grow</span> Together
        </h1>
      </div>
      {/* image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-lg" src={img} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
