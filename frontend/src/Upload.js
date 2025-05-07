import axios from 'axios';
import { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSkills(res.data.extractedSkills);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Failed to upload');
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Upload</button>

      {message && <p className="mt-4 text-green-600">{message}</p>}

      {skills.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Extracted Skills:</h3>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Upload;
