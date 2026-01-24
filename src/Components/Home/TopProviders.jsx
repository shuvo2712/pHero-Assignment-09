import React from "react";
import image from "../../assets/bannerImage.png"; 

const topProviders = [
  {
    name: "Rakib",
    skill: "JavaScript for Beginners",
    rating: 4.9,
  },
  {
    name: "Hasan",
    skill: "Beginner Guitar Lessons",
    rating: 4.8,
  },
  {
    name: "Shuvo",
    skill: "Photography Basics Workshop",
    rating: 4.7,
  },
];

const TopRatedProviders = () => {
  return (
    <div className="p-10 text-center">
      <h2 className="text-5xl font-semibold mb-10">Top Rated Providers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
        {topProviders.map((provider, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition-shadow"
          >
            <img
              src={image}
              alt={provider.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{provider.name}</h3>
            <p className="text-sm text-gray-500">{provider.skill}</p>
            <p className="mt-2 font-medium">⭐ {provider.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
