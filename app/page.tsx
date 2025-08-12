"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button as MovingGlow } from "@/components/ui/MovingBorders";
import { Spotlight } from "@/components/ui/Spotlight";

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
        <RecentProjects />
        <ProfileSection />
        <PositionOfResponsibilities />
        <LiveStatusBox />
        <Approach />
        <Footer onContactClick={() => setContactOpen(true)} />
      </div>
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/80 rounded-[2.5rem] p-0 shadow-[0_8px_40px_0_rgba(80,40,180,0.25)] max-w-3xl w-full min-h-[340px] max-h-[520px] flex flex-col items-center overflow-visible border border-purple-400/30"
              onClick={e => e.stopPropagation()}
            >
              {/* Soft glow at top */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <Spotlight className="opacity-80 w-[400px] h-[120px]" fill="#CBACF9" />
              </div>
              {/* Glow border */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <MovingGlow borderRadius="1.5rem" duration={6000} containerClassName="w-full h-full">{null}</MovingGlow>
              </div>
              <div className="relative z-20 w-full">
                <CollabBox onClose={() => setContactOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
