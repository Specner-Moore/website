"use client";
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const NAVBAR_HEIGHT = 64; // px, adjust if your navbar height changes

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to scroll so the center of the section (including header) is centered in the viewport
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Center the section in the viewport, accounting for navbar
      const sectionCenter = rect.top + scrollTop + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = sectionCenter - viewportCenter - NAVBAR_HEIGHT / 2;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur sticky top-0 z-50 shadow-md" style={{ height: NAVBAR_HEIGHT }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Navigation Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition"
            onClick={() => scrollToSection('home-section')}
          >
            Home
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition"
            onClick={() => scrollToSection('about-me-section')}
          >
            About Me
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition"
            onClick={() => scrollToSection('work-experience-section')}
          >
            Work Experience
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition"
            onClick={() => scrollToSection('projects-section')}
          >
            Personal Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition flex items-center gap-2"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-gray-800 rounded transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Specner-Moore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/spencer-moore-452703367/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur shadow-lg">
          <div className="flex flex-col items-center py-4">
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full"
              onClick={() => scrollToSection('home-section')}
            >
              Home
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full"
              onClick={() => scrollToSection('about-me-section')}
            >
              About Me
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full"
              onClick={() => scrollToSection('work-experience-section')}
            >
              Work Experience
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full"
              onClick={() => scrollToSection('projects-section')}
            >
              Personal Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full flex items-center justify-center gap-2"
            >
              <FaFileAlt />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 