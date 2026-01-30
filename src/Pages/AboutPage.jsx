import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      {/* Title */}
      <div data-aos="zoom-in" className="text-center space-y-3">
        <h1 className="text-4xl font-bold">About SkillSwap</h1>
        <p className="text-gray-500">Who we are and why SkillSwap exists</p>
      </div>

      {/* About SkillSwap */}
      <div data-aos="fade-left" className="bg-base-100 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-3">What is SkillSwap?</h2>
        <p className="text-gray-600 leading-relaxed">
          SkillSwap is a local skill exchange platform where people can teach,
          learn, and grow together. Whether it’s music, language, coding, or
          fitness — SkillSwap helps connect learners with real people who have
          real skills.
        </p>
      </div>

      {/* Vision */}
      <div data-aos="fade-right" className="bg-base-100 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          We believe knowledge should be shared, not locked behind expensive
          systems. Our goal is to build a friendly, community-driven platform
          where learning feels personal and accessible.
        </p>
      </div>

      {/* Why Choose Us */}
      <div data-aos="fade-left" className="bg-base-100 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-3">Why Choose SkillSwap?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Local and trusted skill providers</li>
          <li>Affordable learning sessions</li>
          <li>Simple and user-friendly interface</li>
          <li>Secure authentication system</li>
        </ul>
      </div>

      {/* Closing */}
      <div data-aos="fade-up" className="text-center">
        <p className="text-lg font-medium">
          Learn together. Teach proudly. Grow locally.
        </p>
      </div>
    </div>
  );
};

export default About;
