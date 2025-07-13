const workData = [
  {
    position: 'Junior Software Developer',
    company: 'Populus Global Solutions Inc.',
    companyUrl: 'https://populusplus.com/',
    date: 'Sep 2023 - Dec 2023',
    details: [
      'Worked on an Agile development team, making use of an Atlassian suite and following principles of Agile methodologies',
      'Added and updated a variety of features for a web based EMR software',
      'Wrote SQL scripts to migrate old data in a PostgreSQL database',
      'Updated application logging to separate logs by topic using Log4J2',
      'Create unit tests for new features using JUnit',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience-section" className="mt-16 px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {workData.map((job, idx) => (
            <div key={idx} className="bg-white/90 dark:bg-black/80 rounded-xl shadow p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 