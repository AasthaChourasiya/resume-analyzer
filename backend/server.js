const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
// const fs = require('fs');



const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (optional if storing users or resumes)
mongoose.connect('mongodb://localhost:27017/resume-analyzer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Create 'uploads' folder if not exists
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer config for resume uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// ========== ROUTES ========== //

// ✅ Resume Upload Endpoint
app.post('/upload', upload.single('resume'), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    const filePath = req.file.path;
    const ext = path.extname(filePath).toLowerCase();
  
    try {
      let resumeText = '';
  
      if (ext === '.pdf') {
        const dataBuffer = fs.readFileSync(filePath);
        const pdfData = await pdfParse(dataBuffer);
        resumeText = pdfData.text;
      } else if (ext === '.docx') {
        const docxBuffer = fs.readFileSync(filePath);
        const result = await mammoth.extractRawText({ buffer: docxBuffer });
        resumeText = result.value;
      } else {
        return res.status(400).json({ message: 'Unsupported file format. Please upload PDF or DOCX only.' });
      }
  
      const allSkills = ['react', 'node', 'javascript', 'html', 'css', 'mongodb', 'express', 'python', 'c++', 'java'];
      const extractedSkills = allSkills.filter(skill =>
        resumeText.toLowerCase().includes(skill)
      );
  
      res.status(200).json({
        message: 'Resume processed successfully!',
        extractedSkills,
        resumeTextSnippet: resumeText.substring(0, 500) + '...',
      });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error parsing resume' });
    }
  });
  

// ✅ Job Recommendations Endpoint
app.post('/recommendations', (req, res) => {
  const { skills } = req.body;

  if (!skills || !skills.length) {
    return res.status(400).json({ message: 'Skills are required' });
  }

  // Replace with your own logic / database
  const recommendations = getRecommendationsBasedOnSkills(skills);

  res.json(recommendations);
});

// ✅ Mock job recommendation function
function getRecommendationsBasedOnSkills(skills) {
  // In real scenario, match skills with jobs from DB
  return [
    { jobTitle: 'Software Developer', company: 'ABC Corp', location: 'Remote' },
    { jobTitle: 'Frontend Developer', company: 'XYZ Inc', location: 'New York' },
    { jobTitle: 'React Intern', company: 'Startup Hub', location: 'Bangalore' },
  ];
}

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
