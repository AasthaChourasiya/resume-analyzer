import React from "react";

const HeroSection = () => {
  return (

    <section className="bg-[#0B1120] h-full text-white text-center py-20">
  
      <h1 className="text-6xl font-bold mt-40">Match Your Resume to the Perfect Job</h1>
      <p className="mb-6 mt-6 text-xl">Upload your resume, extract key skills with AI, and find matching jobs automatically.</p>
      <a
        href="#features"
        className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-[#0B1120] border-1 hover:text-white hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300"
      >
        Learn More
      </a>
    </section>
  );
};

export default HeroSection;
