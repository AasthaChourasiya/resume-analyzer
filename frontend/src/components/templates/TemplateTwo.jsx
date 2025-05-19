import React from "react";
const TemplateTwo = ({ data }) => (
    <div className="bg-white text-black p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold border-b pb-1">{data.name}</h2>
      <p className="text-sm mt-1 text-gray-700">
        {data.email} • {data.phone} • {data.address} <br />
        {data.linkedin} • {data.github} • {data.twitter}
      </p>
      <div className="mt-4 space-y-3">
        <section>
          <h3 className="font-semibold">Summary</h3>
          <p>{data.summary}</p>
        </section>
        <section>
          <h3 className="font-semibold">Skills</h3>
          <p>{data.skills}</p>
        </section>
        <section>
          <h3 className="font-semibold">Projects</h3>
          <p>{data.projects}</p>
        </section>
        <section>
          <h3 className="font-semibold">Experience</h3>
          <p>{data.experience}</p>
        </section>
        <section>
          <h3 className="font-semibold">Education</h3>
          <p>{data.education}</p>
        </section>
        <section>
          <h3 className="font-semibold">Certifications</h3>
          <p>{data.certifications}</p>
        </section>
      </div>
    </div>
  );
  export default TemplateTwo;
  