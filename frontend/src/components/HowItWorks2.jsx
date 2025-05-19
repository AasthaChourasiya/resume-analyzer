import { Upload, Sparkles, Workflow, FileDown, Briefcase, BarChart2,Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import React from "react";

const steps = [
  {
    title: "Upload Resume",
    description: "Upload your resume in PDF/DOC format for smart parsing.",
    icon: <Upload size={32} />, 
    link: "/upload",
    button: "Try Now",
  },
  {
    title: "Skill Extraction",
    description: "Our backend uses NLP to extract skills, summary, and info.",
    icon: <Sparkles size={32} />,
  },
  {
    title: "Choose Template",
    description: "Pick from 5 clean, professional templates to build your resume.",
    icon: <Workflow size={32} />,
    link: "/build-resume",
    button: "Build Resume",
  },
  {
    title: "Download PDF",
    description: "Preview and download your resume instantly in PDF format.",
    icon: <FileDown size={32} />,
  },
  {
    title: "ATS Score Check",
    description: "Get a smart score showing how ATS-friendly your resume is.",
    icon: <BarChart2 size={32} />,
    // link: "/ats-check",
    button: "Check Score",
  },
  {
    title: "Job Recommendations",
    description: "We suggest jobs based on extracted skills and top listings.",
    icon: <Briefcase size={32} />,
    // link: "/recommended-jobs",
    button: "View Jobs",
  },
  {
    title: "Share Resume",
    description: "Generate a public link to share your resume with recruiters securely.",
    icon: <Share2 size={32} />,
    link: "/share-resume",
    button: "Share Now",
  },

];

const HowItWorks2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white py-12 px-4 md:px-10" ref={ref}>
      <h1 className="text-4xl font-bold text-center mb-16 mt-12 text-yellow-500">🚀 How It Works</h1>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Progress Line */}
        <motion.div
          style={{ scaleY }}
          className="origin-top absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500 z-0"
        />

        {steps.map((step, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            key={idx}
            className={`relative z-10 mb-20 flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 px-6">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-500 hover:scale-[1.02] transition-all">
                <div className="text-yellow-500 mb-3">{step.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                <p className="text-gray-300">{step.description}</p>
                {step.link && (
                  <Link
                    to={step.link}
                    className="inline-block mt-4 text-sm bg-yellow-500 hover:bg-yellow-500 text-black px-4 py-2 rounded font-medium"
                  >
                    {step.button}
                  </Link>
                )}
              </div>
            </div>

            {/* <div className="md:w-1/2 text-center my-6 md:my-0">
              <div className="w-6 h-6 rounded-full bg-yellow-500 border-4 border-gray-900 mx-auto shadow-md relative z-10" />
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-full left-1/2 w-1 h-20 bg-yellow-500 transform -translate-x-1/2 z-0"></div>
              )}
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks2;



