// import React, { useState } from 'react';
// import axios from 'axios';

// const ResumeUpload = () => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [snippet, setSnippet] = useState('');
//   const [atsScore, setAtsScore] = useState(null);
//   const [jobDescription, setJobDescription] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setMessage('Please select a file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('resume', file);

//     try {
//       // Upload resume to backend
//       const response = await axios.post('http://localhost:5000/upload', formData);
//       setMessage(response.data.message);
//       setSkills(response.data.extractedSkills || []);
//       setSnippet(response.data.resumeTextSnippet || '');

//       // Send full resume + job description to ATS scorer
//       const atsResponse = await axios.post('http://localhost:5000/ats-score', {
//         resume: response.data.resumeFullText,
//         job_description: jobDescription || 'frontend developer react html css javascript',
//       });

//       setAtsScore(atsResponse.data.score);

//     } catch (error) {
//       console.error('Upload error:', error);
//       setMessage('Error uploading resume');
//     }
//   };

//   return (
//     <div className="p-4 border mt-6 max-w-md mx-auto">
//       <form onSubmit={handleUpload}>
//         <input
//           type="file"
//           accept=".pdf, .docx"
//           onChange={handleFileChange}
//           className="mb-2"
//         />
//         <br />
//         <textarea
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//           placeholder="Enter job description..."
//           className="w-full border p-2 mt-2"
//           rows={4}
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 mt-2"
//         >
//           Upload Resume
//         </button>
//       </form>

//       {message && <p className="mt-4 text-blue-700">{message}</p>}

//       {skills.length > 0 && (
//         <div className="mt-4">
//           <h3 className="font-bold">Extracted Skills:</h3>
//           <ul className="list-disc list-inside">
//             {skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {snippet && (
//         <div className="mt-4">
//           <h3 className="font-bold">Resume Snippet:</h3>
//           <p className="text-sm text-gray-600">{snippet}</p>
//         </div>
//       )}

//       {atsScore !== null && (
//         <div className="mt-4">
//           <h3 className="font-bold">ATS Score:</h3>
//           <p className="text-lg text-green-700">{atsScore}% match</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResumeUpload;

import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [skills, setSkills] = useState([]);
  const [snippet, setSnippet] = useState('');
  const [atsScore, setAtsScore] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setRecommendations([]);
    setAtsScore(null);
    setMessage('');

    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setMessage(response.data.message);
      setSkills(response.data.extractedSkills || []);
      setSnippet(response.data.resumeTextSnippet || '');

      const atsResponse = await axios.post('http://localhost:5000/ats-score', {
        resume: response.data.resumeFullText,
        job_description: response.data.resumeFullText,
      });

      setAtsScore(atsResponse.data.score);
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Error uploading resume');
    }
  };

  const handleRecommendations = async () => {
    if (skills.length === 0) return;

    try {
      const response = await axios.post('http://localhost:5000/recommend', {
        skills,
      });
      setRecommendations(response.data.jobs || []);
    } catch (error) {
      console.error('Recommendation error:', error);
      setMessage('Failed to fetch job recommendations');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Upload Your Resume</h2>

        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label className="block text-center mb-2 text-sm text-white">Choose Resume File (PDF/DOCX)</label>
            <input
              type="file"
              accept=".pdf, .docx"
              onChange={handleFileChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 w-full text-black px-6 py-2 rounded hover:bg-[#0B1120] border-1 hover:text-white hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300"
          >
            Upload Resume
          </button>
        </form>

        {message && <p className="mt-4 text-white text-center">{message}</p>}

        {skills.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-500">Extracted Skills:</h3>
            <ul className="list-disc list-inside text-gray-200">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <button
              onClick={handleRecommendations}
              className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-[#0B1120] border-1 hover:text-white hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300"
            >
              Get Job Recommendations
            </button>
          </div>
        )}

        {snippet && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-500">Resume Snippet:</h3>
            <p className="text-sm bg-gray-700 p-3 rounded mt-1">{snippet}</p>
          </div>
        )}

        {atsScore !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold text-yellow-300">ATS Score:</h3>
            <p className="text-2xl font-bold text-white">{atsScore}% match</p>
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-500">Recommended Jobs:</h3>
            <ul className="list-disc list-inside text-gray-200">
              {recommendations.map((job, index) => (
                <li key={index}>{job.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;



