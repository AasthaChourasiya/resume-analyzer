


import React from "react";
const TemplateOne = ({ data }) => (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
      <p className="text-sm text-gray-400 mb-4">
        {data.email} | {data.phone} | {data.address} <br />
        {data.linkedin} | {data.github} | {data.twitter}
      </p>
      <hr className="border-gray-500 mb-4" />
      <h3 className="text-xl font-semibold mb-1">Summary</h3>
      <p className="mb-3">{data.summary}</p>
      <h3 className="text-xl font-semibold mb-1">Skills</h3>
      <p className="mb-3">{data.skills}</p>
      <h3 className="text-xl font-semibold mb-1">Projects</h3>
      <p className="mb-3">{data.projects}</p>
      <h3 className="text-xl font-semibold mb-1">Experience</h3>
      <p className="mb-3">{data.experience}</p>
      <h3 className="text-xl font-semibold mb-1">Education</h3>
      <p className="mb-3">{data.education}</p>
      <h3 className="text-xl font-semibold mb-1">Certifications</h3>
      <p>{data.certifications}</p>
    </div>
  );
  export default TemplateOne;
  