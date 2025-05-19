import React, { useState } from "react";
import { Copy, Check } from "lucide-react";


const ShareResume = () => {
  const [copied, setCopied] = useState(false);

  const publicLink = "https://yourdomain.com/resume/unique-id"; // dynamically generate this later

  const handleCopy = () => {
    navigator.clipboard.writeText(publicLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-12">🔗 Share Your Resume</h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-xl border border-yellow-500 shadow-md">
        <p className="text-lg mb-4">This is your public resume link. You can share it with recruiters:</p>

        <div className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-700">
          <span className="truncate">{publicLink}</span>
          <button
            onClick={handleCopy}
            className="ml-4 bg-yellow-500 hover:bg-yellow-500 text-black px-3 py-1 rounded flex items-center gap-1"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-3">
          Recruiters will be able to view your resume via this link.
        </p>
      </div>
    </div>
  );
};

export default ShareResume;
