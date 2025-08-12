import { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "C++",
  "C",
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "SQL",
  "Kotlin",
  "MATLAB",
  "Verilog",
  "Android Studio",
  "Adobe Photoshop",
  "Canva",
  "Figma",
  "FLaTeX",
  "Overleaf",
  "Node.js",
  "Microsoft Teams",
  "Zoom",
  "Linux",
  "Windows",
  "Git",
];

const Grid = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="tech-stack" className="relative w-full py-20 flex flex-col items-center justify-center scroll-mt-24">
      <TextGenerateEffect words="My Tech Stack" className="text-4xl md:text-5xl text-center mb-10" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: main message/image, animates down */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 p-8 flex flex-col justify-center shadow-lg min-h-[22rem] backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-white mb-4">I constantly try to improve</h3>
          <p className="text-lg text-gray-300 mb-6">My tech stack is always evolving. Click the card to see all the technologies I use!</p>
          <img src="/b1.svg" alt="Tech" className="w-full max-w-xs mx-auto rounded-2xl" />
        </motion.div>
        {/* Right column: marquee skills, animates up, clickable */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/60 p-8 flex flex-col justify-center shadow-lg min-h-[22rem] cursor-pointer overflow-hidden"
          onClick={() => setModalOpen(true)}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h3>
          {/* Marquee effect */}
          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap"
            >
              {skills.concat(skills).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700/70 to-blue-700/70 text-white font-medium shadow-lg border border-purple-400/30 text-base mx-2 backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
          <p className="text-sm text-blue-200 mt-6">Click to expand and see the full stack</p>
        </motion.div>
      </div>
      {/* Modal for full tech stack */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/80 rounded-3xl p-10 shadow-2xl max-w-2xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Full Tech Stack</h3>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700/70 to-blue-700/70 text-white font-medium shadow-lg border border-purple-400/30 text-base backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg border border-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300 text-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Grid;
