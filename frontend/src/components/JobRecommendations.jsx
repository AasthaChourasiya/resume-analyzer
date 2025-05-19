import React, { useState } from 'react';
import { getRecommendations } from '../services/api';

const JobRecommendations = () => {
  const [skills, setSkills] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getRecommendations(skills);
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={skills}
          onChange={handleSkillsChange}
          placeholder="Enter skills"
        />
        <button type="submit">Get Recommendations</button>
      </form> */}

      {recommendations.length > 0 && (
        <ul>
          {recommendations.map((job, index) => (
            <li key={index}>
              {job.jobTitle} at {job.company} ({job.location})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobRecommendations;
