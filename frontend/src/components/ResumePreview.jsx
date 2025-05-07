import React, { useState } from "react";
import html2pdf from "html2pdf.js";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).set({
      margin: 0.5,
      filename: `${formData.name || "resume"}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).save();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Build Your Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="capitalize font-semibold mb-1">{key}</label>
            <textarea
              name={key}
              value={value}
              onChange={handleChange}
              className="p-2 border rounded resize-none"
              rows={key === "summary" || key === "experience" ? 4 : 2}
            />
          </div>
        ))}
      </div>

      <button
        onClick={downloadResume}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Download PDF
      </button>

      {/* Resume Preview */}
      <div
        id="resume-preview"
        className="p-6 border rounded bg-white text-black shadow-md"
      >
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p className="text-sm text-gray-700">
          {formData.email} | {formData.phone} | {formData.address} |{" "}
          {formData.linkedin} | {formData.github} | {formData.twitter} 
        </p>
        <hr className="my-4" />

        <section>
          <h2 className="text-xl font-semibold">Projects:</h2>
          <p>{formData.projects}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Professional Summary:</h2>
          <p>{formData.summary}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Skills:</h2>
          <p>{formData.skills}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Education:</h2>
          <p>{formData.education}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Experience:</h2>
          <p>{formData.experience}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Certificates:</h2>
          <p>{formData.certifications}</p>
        </section>
      </div>
    </div>
  );
};

export default ResumePreview;

