import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const positions = [
  { title: "Web Dev Coordinator", org: "HoSCA, IIT Patna", year: "2025-Present", desc: "Contributed to the development of a centralized website that serves as a hub for all IIT Patna clubs, showcasing their activities, events, and members for better user engagement." },
  { title: "Media & Public Relations Coordinator", org: "Anwesha, IIT Patna", year: "2025-Present", desc: "Oversee media coverage and public relations for Anwesha, IIT Patna’s annual cultural festival. Responsible for drafting press releases, building relationships with media outlets, promoting events via social media, and ensuring maximum visibility through interviews, coverage, and strategic campaigns." },
  { title: "Hospitality & Logistics Coordinator", org: "TedxIIT Patna", year: "2025-Present", desc: "CEnsured a safe and seamless experience for guest speakers at TEDx IIT Patna by managing travel arrangements, accommodation, and on-site logistics, ensuring that all requirements were met for a smooth event experience." },
];

const PositionOfResponsibilities = () => (
  <section id="positions" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Positions of Responsibility" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
      {positions.map((pos, idx) => (
        idx === 2 ? (
          <div className="md:col-span-2 flex justify-center w-full" key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px #a78bfa" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 border border-purple-500/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-400/60 transition-all duration-300 backdrop-blur-md w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-1">{pos.title}</h3>
              <div className="text-gray-400 mb-1">{pos.org} &bull; {pos.year}</div>
              <p className="text-gray-300 text-sm">{pos.desc}</p>
            </motion.div>
          </div>
        ) : (
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
        )
      ))}
    </div>
  </section>
);

export default PositionOfResponsibilities; 