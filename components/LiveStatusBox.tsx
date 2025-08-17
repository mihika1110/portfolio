import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const statuses = [
  { label: "Currently Learning", value: "Operating System and Computer Network" },
  { label: "Looking For", value: "6 Months Internship Opportunities", hasBlinkingDot: true },
];

const LiveStatusBox = () => (
  <section id="live-status" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Live Status" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="flex flex-wrap gap-8 justify-center max-w-4xl">
      {statuses.map((status, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 24px #60a5fa" }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="px-8 py-6 rounded-2xl bg-transparent text-white font-medium shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300 border border-blue-400/30 text-center relative"
        >
          <div className="text-base text-blue-200 mb-1">{status.label}</div>
          <div className="text-lg font-bold text-white">{status.value}</div>
          {status.hasBlinkingDot && (
            <div className="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/90 ring-2 ring-green-300/70 ring-4 ring-green-200/40 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default LiveStatusBox; 