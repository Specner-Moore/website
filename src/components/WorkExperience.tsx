"use client";
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const workData = [
  {
    position: 'Junior Software Developer',
    company: 'Populus Global Solutions Inc.',
    companyUrl: 'https://populusplus.com/',
    date: 'Sep 2024 - Dec 2024',
    details: [
      'Worked on an Agile development team, making use of an Atlassian suite and following principles of Agile methodologies',
      'Added and updated a variety of features for a web based EMR software',
      'Wrote SQL scripts to migrate old data in a PostgreSQL database',
      'Updated application logging to separate logs by topic using Log4J2',
      'Create unit tests for new features using JUnit',
    ],
  },
  {
    position: 'Research Assistant',
    company: 'University of Waterloo',
    companyUrl: 'https://cs.uwaterloo.ca/contacts/joanne-atlee',
    date: 'May 2026 - Aug 2026',
    details: [
      'Worked with Dr. Joanne Atlee on her research',
      'Analyzed codebases based on client specification',
      'Updated workflow to improve accuracy and efficiency',
    ],
  },
];

export default function WorkExperience() {
  const [current, setCurrent] = useState(0);
  const job = workData[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? workData.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === workData.length - 1 ? 0 : prev + 1));

  return (
    <section id="work-experience-section" className="mt-16 px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow p-6 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white py-2">{job.position}</h3>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-400 underline py-6 hover:text-blue-900 dark:hover:text-blue-200 transition"
                >
                  {job.company}
                </a>
              </div>
              <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">{job.date}</span>
            </div>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mt-2 space-y-1 text-lg py-6">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold text-xl cursor-pointer"
                aria-label="Previous Job"
              >
                <FaArrowLeft />
              </button>

              <div className="flex flex-col items-center gap-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {current + 1} of {workData.length}
                </div>
                <div className="flex justify-center items-center gap-3">
                  {workData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                        index === current
                          ? 'bg-blue-600 dark:bg-blue-400 scale-110'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      aria-label={`Go to job ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold text-xl cursor-pointer"
                aria-label="Next Job"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
