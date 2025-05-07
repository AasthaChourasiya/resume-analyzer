import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/upload" className="hover:underline">Upload Resume</Link>
      <Link to="/build-resume" className="hover:underline">Build Resume</Link>
    </nav>
  );
}

export default Navbar;

