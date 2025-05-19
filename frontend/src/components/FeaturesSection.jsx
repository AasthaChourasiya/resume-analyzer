import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-12 lg:px-20 bg-[#0B1120] text-center">
      <span className="text-sm bg-gray-700 text-white px-3 py-1 rounded-full">Our Features</span><h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        All-in-One Resume Solution
      </h1>
      <p className="mb-10 text-zinc-400 max-w-2xl mx-auto">
        Our AI-powered platform streamlines your job search with automated tools and intelligent matching.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded shadow-lg bg-[#1A202C] border border-gray-700">
          <h3 className="font-bold text-white mb-4">Resume Builder</h3>
          <p className="text-zinc-400">
            Build your resume quickly and effectively using our customizable templates.
          </p>
        </div>
        <div className="p-6 rounded shadow-lg bg-[#1A202C] border border-gray-700">
          <h3 className="font-bold text-white mb-4">Job Matching</h3>
          <p className="text-zinc-400">
            Get personalized job recommendations based on your skills and experience.
          </p>
        </div>
        <div className="p-6 rounded shadow-lg bg-[#1A202C] border border-gray-700">
          <h3 className="font-bold text-white mb-4">Resume Upload</h3>
          <p className="text-zinc-400">
            Upload your existing resume to get optimized recommendations for your career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
