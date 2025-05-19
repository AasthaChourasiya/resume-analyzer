import React from "react";
const TemplateFive = ({ data }) => (
    <div className="text-white grid grid-cols-3 gap-4">
      <div className="col-span-1 space-y-2">
        <div>
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-xs">{data.email}</p>
          <p className="text-xs">{data.phone}</p>
        </div>
        <div>
          <h3 className="font-semibold">Links</h3>
          <p className="text-xs">{data.linkedin}</p>
          <p className="text-xs">{data.github}</p>
          <p className="text-xs">{data.twitter}</p>
        </div>
        <div>
          <h3 className="font-semibold">Skills</h3>
          <p className="text-xs">{data.skills}</p>
        </div>
      </div>
      <div className="col-span-2 space-y-3">
        <section>
          <h3 className="font-semibold">Summary</h3>
          <p className="text-sm">{data.summary}</p>
        </section>
        <section>
          <h3 className="font-semibold">Projects</h3>
          <p className="text-sm">{data.projects}</p>
        </section>
        <section>
          <h3 className="font-semibold">Experience</h3>
          <p className="text-sm">{data.experience}</p>
        </section>
        <section>
          <h3 className="font-semibold">Education</h3>
          <p className="text-sm">{data.education}</p>
        </section>
        <section>
          <h3 className="font-semibold">Certifications</h3>
          <p className="text-sm">{data.certifications}</p>
        </section>
      </div>
    </div>
  );
  export default TemplateFive;
  