export default function HomeSection() {
  return (
    <section id="home-section" className="min-h-screen flex items-center justify-center px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-light text-blue-600 dark:text-blue-400 mb-4 animate-fade-in-up animate-delay-0">Spencer Moore</h1>
        <h2 className="text-2xl md:text-3xl font-normal text-white mb-4 tracking-wide uppercase animate-fade-in-up animate-delay-200">Software Developer</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl font-light py-6 animate-fade-in-up animate-delay-400">
          Hi, I&apos;m Spencer. I&apos;m a Computer Science student at the University of Waterloo, and this is my portfolio. Continue to learn more about me.
        </p>
      </div>
    </section>
  );
} 