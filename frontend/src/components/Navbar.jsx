import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0B1120] text-zinc-100 p-4 fixed top-0 w-full z-50 shadow-lg shadow-zinc-300/50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">CVAnalyzer</div>

        {/* Hamburger Icon */}
        <button
          className="text-zinc-100 text-2xl md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex justify-center gap-6 flex-grow">
          <Link
            to="/"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            Upload Resume
          </Link>
          <Link
            to="/build-resume"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            Build Resume
          </Link>
          <Link
            to="/how-it-works"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            Pricing
          </Link>
          <Link
            to="/share-resume"
            className="hover:underline hover:shadow-lg hover:shadow-yellow-300/30 transition-colors duration-300 hover:text-yellow-500 text-sm md:text-base text-white"
          >
            Share-Resume
          </Link>
        </div>
      </div>

      {/* Links for Mobile */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden bg-white text-[#0B1120] p-4 rounded shadow-lg">
          <Link
            to="/"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            Upload Resume
          </Link>
          <Link
            to="/build-resume"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            Build Resume
          </Link>
          <Link
            to="/how-it-works"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/share-resume"
            className="hover:underline hover:text-yellow-500 transition-colors duration-300 text-sm"
            onClick={toggleMenu}
          >
            Share-Resume
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

