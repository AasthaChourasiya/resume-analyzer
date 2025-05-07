import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Send skills to backend to get job recommendations
export const getRecommendations = (skills) => {
  return axios.post(`${API_URL}/recommendations`, { skills });
};

// Upload resume to backend (if you add this feature later)
export const uploadResume = (file) => {
  const formData = new FormData();
  formData.append('resume', file);

  return axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
