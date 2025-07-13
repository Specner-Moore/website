import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <NavBar />
      <div className="flex flex-col">
        <div className="mb-56">
          <HomeSection />
        </div>
        <div className="mb-24">
          <AboutMe />
        </div>
        <div className="mb-24">
          <WorkExperience />
        </div>
        <div>
          <Projects />
        </div>
        <div className="mb-32" />
      </div>
    </div>
  );
}
