import React from "react";
const TemplateThree = ({ data }) => (
    <div className="text-white space-y-4">
      <div className="border p-4 rounded bg-gray-800">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-sm">{data.email} | {data.phone} | {data.address}</p>
        <p className="text-sm">{data.linkedin} | {data.github} | {data.twitter}</p>
      </div>
      {["summary", "skills", "projects", "experience", "education", "certifications"].map(section => (
        <div key={section} className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold capitalize">{section}</h3>
          <p>{data[section]}</p>
        </div>
      ))}
    </div>
  );
  export default TemplateThree;
  