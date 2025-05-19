import React from 'react';

const steps = [
  {
    number: 1,
    title: "Upload Resume",
    description: "Upload your resume through our simple form or Google integration.",
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "Our AI extracts key skills and analyzes your resume for optimization.",
  },
  {
    number: 3,
    title: "Job Matching",
    description: "Your profile is matched against our job database or API integrations.",
  },
  {
    number: 4,
    title: "Receive Matches",
    description: "Get personalized job matches and recommendations via email.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0B1120] text-white py-16">
      <div className="text-center mb-10">
        <span className="text-sm bg-gray-700 text-white px-3 py-1 rounded-full">Process</span>
        <h2 className="text-3xl font-bold mt-4">How It Works</h2>
        <p className="text-gray-400 mt-2">Our platform makes job matching simple with just a few easy steps.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4">
        {steps.map((step) => (
          <div key={step.number} className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <div className="text-blue-400 text-2xl w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

