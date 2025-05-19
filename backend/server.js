// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const pdfParse = require('pdf-parse');
// const mammoth = require('mammoth');
// const fs = require('fs');
// const natural = require('natural');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection (optional)
// mongoose.connect('mongodb://localhost:27017/resume-analyzer', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.log("❌ MongoDB connection error:", err));

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Multer setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, './uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // ========== ROUTES ========== //

// // ✅ Upload Resume Route
// app.post('/upload', upload.single('resume'), async (req, res) => {
//   if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

//   const ext = path.extname(req.file.path).toLowerCase();
//   let resumeText = '';

//   try {
//     if (ext === '.pdf') {
//       const dataBuffer = fs.readFileSync(req.file.path);
//       const pdfData = await pdfParse(dataBuffer);
//       resumeText = pdfData.text;
//     } else if (ext === '.docx') {
//       const docxBuffer = fs.readFileSync(req.file.path);
//       const result = await mammoth.extractRawText({ buffer: docxBuffer });
//       resumeText = result.value;
//     } else {
//       return res.status(400).json({ message: 'Unsupported file format. Please upload PDF or DOCX only.' });
//     }

//     // Skill extraction (basic keyword matching)
//     const allSkills = ['react', 'node', 'javascript', 'html', 'css', 'mongodb', 'express', 'python', 'c++', 'java'];
//     const extractedSkills = allSkills.filter(skill => resumeText.toLowerCase().includes(skill));

//     return res.status(200).json({
//       message: 'Resume processed successfully!',
//       extractedSkills,
//       resumeTextSnippet: resumeText.slice(0, 500) + '...',
//       resumeFullText: resumeText,
//     });

//   } catch (err) {
//     console.error('Resume Parse Error:', err);
//     return res.status(500).json({ message: 'Error parsing resume' });
//   }
// });

// // ✅ ATS Score Route
// app.post('/ats-score', (req, res) => {
//   const { resume, job_description } = req.body;

//   if (!resume || !job_description) {
//     return res.status(400).json({ message: 'Missing resume or job description' });
//   }

//   try {
//     const score = computeATSMatchScore(resume, job_description);
//     res.json({ score: Math.round(score * 100) / 100 });
//   } catch (err) {
//     console.error('ATS Score Error:', err);
//     res.status(500).json({ message: 'Error calculating ATS score' });
//   }
// });

// // 🔍 Function to compute ATS match using cosine similarity (TF-IDF)
// function computeATSMatchScore(resumeText, jobDescText) {
//   const tfidf = new natural.TfIdf();
//   tfidf.addDocument(resumeText);
//   tfidf.addDocument(jobDescText);

//   const vector1 = [];
//   const vector2 = [];

//   tfidf.listTerms(0).forEach(term => {
//     vector1.push(term.tfidf);
//     vector2.push(tfidf.tfidf(term.term, 1));
//   });

//   const dot = vector1.reduce((sum, v, i) => sum + v * vector2[i], 0);
//   const mag1 = Math.sqrt(vector1.reduce((sum, v) => sum + v * v, 0));
//   const mag2 = Math.sqrt(vector2.reduce((sum, v) => sum + v * v, 0));

//   if (mag1 === 0 || mag2 === 0) return 0;

//   return (dot / (mag1 * mag2)) * 100;
// }

// // ✅ Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });




const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdfParse = require('pdf-parse'); // to extract text from PDF

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- Storage Config for Resume Upload ---
const upload = multer({ dest: 'uploads/' });

// --- Helper to Extract Dummy Skills ---
const extractSkills = (text) => {
  const skillSet = ['javascript', 'html', 'css', 'python', 'java', 'nodejs', 'react'];
  const found = skillSet.filter(skill => text.toLowerCase().includes(skill));
  return [...new Set(found)];
};

// --- Upload Resume and Extract Skills ---
app.post('/upload', upload.single('resume'), async (req, res) => {
  try {
    const resumeFile = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(resumeFile);
    const text = pdfData.text;

    const extractedSkills = extractSkills(text);
    const snippet = text.slice(0, 500); // preview snippet

    fs.unlinkSync(req.file.path); // cleanup uploaded file

    res.json({
      message: 'Resume uploaded and processed successfully',
      extractedSkills,
      resumeTextSnippet: snippet,
      resumeFullText: text
    });
  } catch (error) {
    console.error('Error processing resume:', error);
    res.status(500).json({ message: 'Failed to process resume' });
  }
});

// --- ATS Score (Dummy % based on skills matched) ---
app.post('/ats-score', (req, res) => {
  const resumeText = req.body.resume;
  const requiredSkills = ['javascript', 'html', 'css', 'python', 'java']; // Example job JD
  const matchedSkills = extractSkills(resumeText);
  const score = Math.round((matchedSkills.length / requiredSkills.length) * 100);
  res.json({ score });
});

// --- Job Recommendation Route ---
app.post('/recommend', (req, res) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills)) {
    return res.status(400).json({ error: 'Invalid skills format' });
  }

  const jobs = [
    { title: 'Frontend Developer', requiredSkills: ['html', 'css', 'javascript'] },
    { title: 'Backend Developer', requiredSkills: ['nodejs', 'express', 'mongodb'] },
    { title: 'Python Developer', requiredSkills: ['python', 'django'] },
    { title: 'Full Stack Developer', requiredSkills: ['javascript', 'react', 'nodejs'] },
    { title: 'Java Developer', requiredSkills: ['java', 'spring'] },
  ];

  const recommendedJobs = jobs.filter(job =>
    job.requiredSkills.some(skill => skills.includes(skill.toLowerCase()))
  );

  res.json({ jobs: recommendedJobs });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
