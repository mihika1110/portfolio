import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const achievements = [
  { title: "Winner - Hackathon 2024", description: "Secured 1st place in National Hackathon." },
  { title: "Top 1% on LeetCode", description: "Ranked in the top 1% globally on LeetCode contests." },
  { title: "Google Summer of Code", description: "Contributed to open source as a GSoC student." },
];

const Achievements = () => (
  <section id="achievements" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Achievements & Awards" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
      {achievements.map((ach, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 32px #a78bfa" }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 border border-purple-500/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-400/60 transition-all duration-300 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-purple-300 mb-2">{ach.title}</h3>
          <p className="text-gray-300 text-sm">{ach.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Achievements; 