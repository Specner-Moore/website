"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/website.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Cursor AI'],
    description: (
      <>
        <p>
          When creating my portfolio website, I decided to take this opportunity to learn about how AI can be used as a tool to make coding easier.
        </p>
        <br />
        <p>
          To maximize my learning, I decided to design the website from scratch instead of using a website template. With the help of Cursor AI, I built the website using React and Tailwind CSS. 
        </p>
        <br />
        <p>
        This project gave me a great chance to learn about both web development and how AI can be used as a tool. These two skills will be very useful for my future career.
      </p>
      </>
    ),
    github: 'https://github.com/Specner-Moore/website',
    link: 'https://spencer-moore.ca',
  },
  {
  title: 'InfoDrft',
    image: '/infodrft.png',
    tags: ['Next.js', 'Supabase', 'NewsAPI.org', 'Vercel', 'Cursor AI', 'OpenAI API', 'TypeScript'],
    description: (
      <>
        <p>
        InfoDrft is a web-app designed to pool together a variety of news articles based on the user's interests. NewsApi.org is first used to fetch recent articles matching the user's interests. These articles are then passed to the OpenAi api where they are summarized and displayed to the user. If the user is interested, they can then be brought to the full article where they can learn more.
        </p>
        <br />
        <p>
        This is a full stack application built with the Next.js framework. This works alongside a PostgresSQL database hosted on Supabase and makes use of NewsApi.org and OpenAI API for providing articles to the user.
        </p>
      </>
    ),
    github: 'https://github.com/Specner-Moore/InfoDrft',
    link: 'https://infodrft.com',
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
          <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow p-8 flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">
              {/* Image on the left */}
              <div className="flex-shrink-0 w-full md:w-2/5 flex flex-col">
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <div className="flex items-center justify-center">
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
              {/* Project Links */}
              <div className="flex gap-4 mt-4">
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
            </div>
            {/* Content on the right */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  {project.description}
                </div>
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
      </div>
    </section>
  );
} 