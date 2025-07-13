"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAVBAR_HEIGHT = 64; // px, adjust if your navbar height changes

export default function NavBar() {
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
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur sticky top-0 z-50 shadow-md" style={{ height: NAVBAR_HEIGHT }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Navigation Buttons */}
        <div className="flex items-center gap-4">
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
    </nav>
  );
} 