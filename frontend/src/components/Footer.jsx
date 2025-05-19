import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white text-center py-8">
      {/* Connect Now Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Connect Now</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover: transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/30 duration-300"
          >
            <FaFacebook className="text-2xl bg-gradient-to-r from-white-500 to-yellow-300 p-1 rounded-full" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover: transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/30 duration-300"
          >
            <FaTwitter className="text-2xl bg-gradient-to-r from-white-500 to-yellow-300 p-1 rounded-full" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/30 duration-300"
          >
            <FaLinkedin className="text-2xl bg-gradient-to-r from-white-500 to-yellow-300 p-1 rounded-full" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover: transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/30 duration-300"
          >
            <FaInstagram className="text-2xl bg-gradient-to-r from-white-500 to-yellow-300 p-1 rounded-full" />
          </a>
        </div>
      </div>

      {/* Project Title */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Minor Project 2 (Session 2024-2025)</h3>
      </div>

      {/* Group Members */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Group Members:</h4>
        <ul className="text-sm space-y-1 text-gray-500">
          <li>Aastha Chourasiya (Roll No: 0126CS221003)</li>
          <li>Aditya Mishra (Roll No: 0126CS221020)</li>
          <li>Akshay Dwivedi (Roll No: 0126CS221023)</li>
          <li>Divyanshu Sinha (Roll No: 0126CS221077)</li>
          <li>Fatima Ali (Roll No: 0126CS221078)</li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-sm">&copy; 2025 Job Match. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
