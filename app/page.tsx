"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Coursework from "@/components/Coursework";
import Skills from "@/components/Skills";
import DownloadResume from "@/components/DownloadResume";
import ProfileSection from "@/components/ProfileSection";
import PositionOfResponsibilities from "@/components/PositionOfResponsibilities";
import CollabBox from "@/components/CollabBox";
import LiveStatusBox from "@/components/LiveStatusBox";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <Education />
        <Experience />
        <Achievements />
        <Coursework />
        <Skills />
        <DownloadResume />
        <ProfileSection />
        <PositionOfResponsibilities />
        <CollabBox />
        <LiveStatusBox />
        <RecentProjects />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
