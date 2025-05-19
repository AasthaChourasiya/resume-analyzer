import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/HowItWorks";
import Footer from "./components/Footer";
import ResumeUpload from "./components/ResumeUpload";
import JobRecommendations from "./components/JobRecommendations";
import ResumePreview from "./components/ResumePreview";
import "./App.css";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import HowItWorks2 from "./components/HowItWorks2";
import ShareResume from "./components/ShareResume"; 

function HomeLayout() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
     <HowItWorks/>
     <PricingSection/>
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
        <Route path="/how-it-works" element={<HowItWorks2 />} />
        <Route path="/share-resume" element={<ShareResume />} />

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
