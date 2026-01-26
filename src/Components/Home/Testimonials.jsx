import React from "react";
import image from "../../assets/bannerImage.png";

const testimonials = [
  {
    name: "Alex Martin",
    skill: "Guitar",
    photo: "https://i.postimg.cc/example1.png",
    review: "Amazing teacher! Learned guitar basics in just a few weeks.",
    rating: 5,
  },
  {
    name: "Sara Hossain",
    skill: "English",
    photo: "https://i.postimg.cc/example2.png",
    review: "Improved my speaking confidence a lot. Highly recommended!",
    rating: 4.8,
  },
  {
    name: "Michael Lee",
    skill: "Photography",
    photo: "https://i.postimg.cc/example3.png",
    review: "Learned photography fundamentals in a fun way!",
    rating: 4.9,
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Learners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
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
