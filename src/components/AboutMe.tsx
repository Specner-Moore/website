import Image from 'next/image';

const techTags = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Python',
  'SQL',
  'JavaScript',
  'C',
  'Java',
];

export default function AboutMe() {
  return (
    <section id="about-me-section" className="mt-16 px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center bg-white/90 dark:bg-black/80 rounded-xl shadow-lg p-8 md:p-12 gap-8">
          {/* Profile Image and Tech Tags */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div className="w-80 h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src="https://via.placeholder.com/320x256.png?text=Profile+Image"
                alt="Profile Placeholder"
                width={320}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies I Work With:</h3>
              <div className="grid grid-cols-2 gap-2 w-80">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600 text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                I have always loved computers, but what really got me hooked was my first computer science co-op term. After my first two terms of school at the University of New Brunswick, I worked for a local Fredericton start up company. This experience working in the field reinforced my passion for programming. I then returned to studies and after another two terms, decided to push myself further.
              </p>
              
              <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                I transferred to the University of Waterloo starting fall of 2025 to continue my career at a larger university that offers a greater challenge. I'm so excited for what the next chapter of both my life and career will bring.
              </p>
              
              <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                While transferring will certainly push me, I decided to start investing time to independently improve my skills as well. I did this through online courses to learn new things and personal projects to practice my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 