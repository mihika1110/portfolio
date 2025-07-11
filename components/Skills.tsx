import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "C++",
  "Framer Motion",
  "Three.js",
  "Git",
];

const Skills = () => (
  <section id="skills" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Skills & Technologies" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 24px #a78bfa" }}
          transition={{ duration: 0.3, delay: idx * 0.07 }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700/70 to-blue-700/70 text-white font-medium shadow-lg hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-md"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills; 