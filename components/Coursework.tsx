import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const courses = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Database Management Systems",
  "Optimization Techniques",
  "Machine Learning",
  "Web Development",
];

const Coursework = () => (
  <section id="coursework" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Relevant Coursework" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
      {courses.map((course, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 32px #60a5fa" }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/60 border border-blue-400/40 rounded-2xl p-6 shadow-lg hover:shadow-blue-400/60 transition-all duration-300 backdrop-blur-md text-center"
        >
          <span className="text-lg font-semibold text-blue-300">{course}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Coursework; 