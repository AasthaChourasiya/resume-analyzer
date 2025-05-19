import React from "react";
const TemplateFour = ({ data }) => (
    <div className="bg-white text-black p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold text-center mb-2">{data.name}</h1>
      <p className="text-center text-sm text-gray-600 mb-4">
        {data.email} | {data.phone} | {data.linkedin}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-1">Summary</h3>
          <p>{data.summary}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Skills</h3>
          <p>{data.skills}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Projects</h3>
          <p>{data.projects}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Experience</h3>
          <p>{data.experience}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Education</h3>
          <p>{data.education}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Certifications</h3>
          <p>{data.certifications}</p>
        </div>
      </div>
    </div>
  );
  export default TemplateFour;
  