import React, { useState } from 'react';
import { uploadResume } from './frontend/src/services/api';

const UploadResume = () => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await uploadResume(formData);
      console.log('Resume uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading resume:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Resume</button>
      </form>
    </div>
  );
};

export default UploadResume;
