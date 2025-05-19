// import React, { useState } from "react";
// import html2pdf from "html2pdf.js";

// const ResumePreview = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     linkedin: "",
//     github: "",
//     twitter: "",
//     projects: "",
//     summary: "",
//     skills: "",
//     education: "",
//     experience: "",
//     certifications: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const downloadResume = () => {
//     const element = document.getElementById("resume-preview");
//     html2pdf()
//       .from(element)
//       .set({
//         margin: 0.5,
//         filename: `${formData.name || "resume"}.pdf`,
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//       })
//       .save();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-6">
//       <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
//         <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400">
//           📝 Build & Preview Your Resume
//         </h2>

//         {/* Input Form */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           {Object.entries(formData).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <label className="capitalize font-semibold text-gray-300 mb-2">
//                 {key.replace("_", " ")}
//               </label>
//               <textarea
//                 name={key}
//                 value={value}
//                 onChange={handleChange}
//                 className="p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white resize-none"
//                 rows={["summary", "experience", "projects"].includes(key) ? 2 : 2}
//                 placeholder={`Enter your ${key.replace("_", " ")}`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Download Button */}
//         <div className="flex justify-center mb-8">
//           <button
//             onClick={downloadResume}
//             className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-6 py-3 rounded-xl text-lg font-semibold text-black shadow-md"
//           >
//             Download PDF
//           </button>
//         </div>

//         {/* Resume Preview */}
//         <div
//           id="resume-preview"
//           className="bg-gray-800 border border-gray-600 rounded-xl p-8 text-white shadow-md"
//         >
//           <h1 className="text-3xl font-bold text-center mb-2 text-yellow-300">
//             {formData.name}
//           </h1>
//           <p className="text-sm text-center text-gray-400 mb-4">
//             {formData.email} | {formData.phone} | {formData.address}
//             <br />
//             {formData.linkedin} | {formData.github} | {formData.twitter}
//           </p>
//           <hr className="my-4 border-gray-600" />

//           {[
//             { title: "Projects", content: formData.projects },
//             { title: "Professional Summary", content: formData.summary },
//             { title: "Skills", content: formData.skills },
//             { title: "Education", content: formData.education },
//             { title: "Experience", content: formData.experience },
//             { title: "Certificates", content: formData.certifications },
//           ].map(
//             (section) =>
//               section.content && (
//                 <section className="mb-6" key={section.title}>
//                   <h2 className="text-xl font-semibold text-yellow-400 mb-1">
//                     {section.title}
//                   </h2>
//                   <p className="text-gray-200 whitespace-pre-line">{section.content}</p>
//                 </section>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumePreview;


import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import TemplateFour from "./templates/TemplateFour";
import TemplateFive from "./templates/TemplateFive";

const ResumePreview = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    twitter: "",
    projects: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    certifications: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
     console.log("Element to print:", element);
  if (!element) {
    alert("Resume content not found.");
    return;
  }
    html2pdf()
      .from(element)
      .set({
        margin: 0.5,
        filename: `${formData.name || "resume"}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 mt-12">
          🧾 Build Your Resume
        </h1>

        {/* Template Selector */}
        <div className="mb-6 text-center">
          <label className="mr-3 font-semibold">Select Template:</label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="px-4 py-1 bg-gray-800 border border-gray-600 rounded text-white"
          >
            <option value="template1"> Classic</option>
            <option value="template2"> Clean</option>
            <option value="template3"> Boxed</option>
            <option value="template4"> Modern</option>
            <option value="template5"> Minimal</option>
          </select>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="capitalize text-sm mb-1">{key.replace("_", " ")}</label>
              <textarea
                name={key}
                value={value}
                onChange={handleChange}
                rows={["summary", "experience", "projects"].includes(key) ? 4 : 2}
                className="p-3 bg-gray-800 border border-gray-700 rounded resize-none"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={downloadResume}
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500"
          >
            Download PDF
          </button>
        </div>

        {/* Resume Output */}
        <div id="resume-preview" className="p-4 bg-gray-800 rounded border border-gray-600">
          {selectedTemplate === "template1" && <TemplateOne data={formData} />}
          {selectedTemplate === "template2" && <TemplateTwo data={formData} />}
          {selectedTemplate === "template3" && <TemplateThree data={formData} />}
          {selectedTemplate === "template4" && <TemplateFour data={formData} />}
          {selectedTemplate === "template5" && <TemplateFive data={formData} />}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
