import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 px-50 flex flex-col bg-violet-900 text-center">
      <h2 className="inline-block rounded-lg  px-3 py-1 mb-8 text-sm">Our Features</h2>
      <h1 className="text-3xl font-bold mb-6 text-white rounded-xl" >All-in-One Resume Solution</h1>
      <p className=" mb-6 text-zinc-400 rounded-xl">Our AI-powered platform streamlines your job search with automated tools and intelligent matching.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Resume Builder</h3>
          <p className="text-zinc-400">Build your resume quickly and effectively using our customizable templates.</p>
        </div>
        <div className="p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Job Matching</h3>
          <p className="text-zinc-400">Get personalized job recommendations based on your skills and experience.</p>
        </div>
        <div className="p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Resume Upload</h3>
          <p className="text-zinc-400">Upload your existing resume to get optimized recommendations for your career.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Resume Builder</h3>
          <p className="text-zinc-400">Build your resume quickly and effectively using our customizable templates.</p>
        </div>
        <div className="p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Job Matching</h3>
          <p className="text-zinc-400">Get personalized job recommendations based on your skills and experience.</p>
        </div>
        <div className="p-6 rounded shadow-lg bg-violet-900 border-white border-1">
          <h3 className="font-bold text-white mb-4 rounded-xl">Resume Upload</h3>
          <p className="text-zinc-400">Upload your existing resume to get optimized recommendations for your career.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
