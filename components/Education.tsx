import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "IIT Patna",
    year: "2023 - 2027",
    details: "Relevant coursework: Data Structures, Algorithms, Operating Systems, DBMS. CGPA: 8.5/10.",
    icon: <FaUniversity className="text-3xl text-purple-300 mb-2" />,
  },
  {
    degree: "High School",
    institution: "DAV School, Lakheri",
    year: "2019 - 2020",
    details: "Science, Maths, English, Social Science, Hindi. Percentage: 94.5%.",
    icon: <FaSchool className="text-3xl text-blue-300 mb-2" />,
  },
  {
    degree: "Higher Secondary School",
    institution: "DAV School, Lakheri",
    year: "2021 - 2022",
    details: "PCM, English, Physical Education. Percentage: 95.8%.",
    icon: <FaSchool className="text-3xl text-blue-300 mb-2" />,
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
      <TextGenerateEffect words="Education" className="text-4xl md:text-5xl text-center mb-10" />
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 32px #a78bfa" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 border border-purple-500/40 rounded-2xl p-8 shadow-lg hover:shadow-purple-400/60 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center"
          >
            {edu.icon}
            <h3 className="text-xl font-bold text-purple-200 mb-1">{edu.degree}</h3>
            <div className="text-gray-400 mb-1">{edu.institution} &bull; {edu.year}</div>
            <div className="text-gray-300 text-sm">{edu.details}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education; 