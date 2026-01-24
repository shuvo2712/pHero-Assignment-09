import React from "react";
import { FaChalkboardTeacher, FaUsers, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaChalkboardTeacher size={40} className="text-blue-600 mb-3" />,
    title: "Learn New Skills",
    desc: "Choose from a variety of courses and start learning at your own pace.",
  },
  {
    icon: <FaUsers size={40} className="text-green-600 mb-3" />,
    title: "Connect With Experts",
    desc: "Interact with top providers and get personalized guidance.",
  },
  {
    icon: <FaRocket size={40} className="text-purple-600 mb-3" />,
    title: "Grow Together",
    desc: "Apply your skills, teach others, and grow your network.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
