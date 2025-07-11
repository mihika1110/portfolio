import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const positions = [
  { title: "Web Dev Coordinator", org: "HoSCA, IIT Patna", year: "2025-Present", desc: "Led a team of 10+ to build club website and manage events." },
  { title: "Media & Public Relations Coordinator", org: "Anwesha, IIT Patna", year: "2025-Present", desc: "Coordinated national-level hackathon with 500+ participants." },
  { title: "Hospitality & Logistics Coordinator", org: "TedxIIT Patna", year: "2025-Present", desc: "Coordinated national-level hackathon with 500+ participants." },
];

const PositionOfResponsibilities = () => (
  <section id="positions" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Positions of Responsibility" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
      {positions.map((pos, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 32px #a78bfa" }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 border border-purple-500/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-400/60 transition-all duration-300 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-purple-300 mb-1">{pos.title}</h3>
          <div className="text-gray-400 mb-1">{pos.org} &bull; {pos.year}</div>
          <p className="text-gray-300 text-sm">{pos.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PositionOfResponsibilities; 