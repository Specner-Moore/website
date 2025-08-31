"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const NAVBAR_HEIGHT = 64; // px, adjust if your navbar height changes

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
    <nav 
      className={`w-full bg-gray-900/40 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/30 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`} 
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Navigation Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
            onClick={() => scrollToSection('home-section')}
          >
            Home
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
            onClick={() => scrollToSection('about-me-section')}
          >
            About Me
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
            onClick={() => scrollToSection('work-experience-section')}
          >
            Work Experience
          </button>
          <button
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
            onClick={() => scrollToSection('projects-section')}
          >
            Personal Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-gray-800 rounded transition cursor-pointer"
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
            className="text-white hover:text-gray-300 text-xl cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/spencer-moore-452703367/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-xl cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800/30">
          <div className="flex flex-col items-center py-4">
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full cursor-pointer"
              onClick={() => scrollToSection('home-section')}
            >
              Home
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full cursor-pointer"
              onClick={() => scrollToSection('about-me-section')}
            >
              About Me
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full cursor-pointer"
              onClick={() => scrollToSection('work-experience-section')}
            >
              Work Experience
            </button>
            <button
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full cursor-pointer"
              onClick={() => scrollToSection('projects-section')}
            >
              Personal Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-6 py-3 text-center hover:bg-gray-800 transition w-full flex items-center justify-center gap-2 cursor-pointer"
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