import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="mb-6">Let us help you create the perfect resume and match you with top job opportunities!</p>
      <a href="#features" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400">
        Learn More
      </a>
    </section>
  );
};

export default HeroSection;
