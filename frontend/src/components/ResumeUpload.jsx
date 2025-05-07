import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [skills, setSkills] = useState([]);
  const [snippet, setSnippet] = useState('');
  const [jobs, setJobs] = useState([]); // 🔹 Added: to store recommended jobs

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setMessage(response.data.message);
      setSkills(response.data.extractedSkills);
      setSnippet(response.data.resumeTextSnippet);

      // Fetch jobs after extracting skills
      const jobsResult = await fetchJobsFromRemotive(response.data.extractedSkills);
      setJobs(jobsResult);

    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Error uploading resume');
    }
  };

  const fetchJobsFromRemotive = async (skills) => {
    try {
      const allJobs = [];

      for (const skill of skills) {
        // const response = await axios.get(`https://remotive.io/api/remote-jobs?search=${skill}`);
        console.log('👉 Jobs for', skill, response.data.jobs);
        const jobs = response.data.jobs.slice(0, 3); // 3 jobs per skill
        allJobs.push(...jobs);
      }

      return allJobs;
    } catch (err) {
      console.error('API Error:', err);
      return [];
    }
  };

  return (
    <div className="p-4 border mt-6 max-w-md mx-auto">
      <form onSubmit={handleUpload}>
        <input type="file" accept=".pdf, .docx" onChange={handleFileChange} className="mb-2" />
        <br />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 mt-2">Upload Resume</button>
      </form>

      {message && <p className="mt-4 text-blue-700">{message}</p>}

      {skills.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Extracted Skills:</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {snippet && (
        <div className="mt-4">
          <h3 className="font-bold">Resume Snippet:</h3>
          <p className="text-sm text-gray-600">{snippet}</p>
        </div>
      )}

      {/* Jobs Display */}
      {jobs.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold">Live Job Recommendations:</h3>
          <ul className="list-disc list-inside">
            {jobs.map((job, index) => (
              <li key={index}>
                <a
                  href={job.url || '#'} // Ensure URL exists
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {job.title} — {job.company_name} ({job.candidate_required_location})
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;


