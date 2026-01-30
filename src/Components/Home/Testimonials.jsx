import React from "react";
import image from "../../assets/bannerImage.png";

const testimonials = [
  {
    name: "Rakib",
    skill: "Guitar",
    photo: "https://i.postimg.cc/example1.png",
    review: "Amazing teacher! Learned guitar basics in just a few weeks.",
    rating: 5,
  },
  {
    name: "Hasan",
    skill: "English",
    photo: "https://i.postimg.cc/example2.png",
    review: "Improved my speaking confidence a lot. Highly recommended!",
    rating: 4.8,
  },
  {
    name: "Shuvo",
    skill: "Photography",
    photo: "https://i.postimg.cc/example3.png",
    review: "Learned photography fundamentals in a fun way!",
    rating: 4.9,
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 text-center mb-10">
      <h2 className="text-5xl font-semibold mb-10">What Our Learners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src={image}
              alt={t.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.skill}</p>
            <p className="mt-4 text-gray-700 italic">"{t.review}"</p>
            <p className="mt-2 font-semibold">⭐ {t.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
