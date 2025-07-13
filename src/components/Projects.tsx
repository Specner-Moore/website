"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/400x200.png?text=Project+Image',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'A personal portfolio website to showcase my work, skills, and experience. Built with Next.js and styled using Tailwind CSS.',
    github: 'https://github.com/your-github/portfolio',
    link: 'https://your-portfolio.com',
  },
  {
    title: 'Data Visualization Dashboard',
    image: 'https://via.placeholder.com/400x200.png?text=Project+Image',
    tags: ['React', 'D3.js', 'TypeScript'],
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs. Built with React and D3.js.',
    github: 'https://github.com/your-github/data-viz',
    link: 'https://your-dataviz.com',
  },
  {
    title: 'Data Visualization Dashboard',
    image: 'https://via.placeholder.com/400x200.png?text=Project+Image',
    tags: ['React', 'D3.js', 'TypeScript'],
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs. Built with React and D3.js.',
    github: 'https://github.com/your-github/data-viz',
    link: 'https://your-dataviz.com',
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section id="projects-section" className="mt-16 px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">Personal Projects</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow p-8 flex flex-col md:flex-row w-full gap-8">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full md:w-2/5 flex items-center justify-center">
              <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Content on the right */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-auto mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xl"
                  aria-label="Live Project"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold text-xl"
                  aria-label="Previous Project"
                >
                  <FaArrowLeft />
                </button>
                
                {/* Project Indicators */}
                <div className="flex flex-col items-center gap-2">
                  {/* Project Counter */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {current + 1} of {projects.length}
                  </div>
                  
                  {/* Project Indicator Dots */}
                  <div className="flex justify-center items-center gap-3">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === current
                            ? 'bg-blue-600 dark:bg-blue-400 scale-110'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold text-xl"
                  aria-label="Next Project"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 