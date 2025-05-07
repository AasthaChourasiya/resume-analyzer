import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ResumeUpload from "./components/ResumeUpload";
import JobRecommendations from "./components/JobRecommendations";
import ResumePreview from "./components/ResumePreview";

function HomeLayout() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </>
  );
}

function UploadPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Analyzer</h1>
      <ResumeUpload />
      <JobRecommendations />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/build-resume" element={<ResumePreview />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
