import React from "react";

const experienceData = [
  {
    title: "Completed Student Upskilling Launchpad Program by Google",
    company: "Google",
    year: "May 2025",
    description: "Completed the Google India Student Upskilling Launchpad Program, enhancing technical skills, DSA knowledge, and interview preparation through hands-on learning and mentorship by Googlers."
  },
  {
    title: "Completed Graphs Programming Camp organized by AlgoUniversity",
    company: "AlgoUniversity",
    year: "December 2024",
    description: "Completed a Graphs Programming Camp led by the CEO of AlgoUniversity, focusing on advanced graph algorithms, problem-solving strategies, and shortcuts."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
      <h2 className="heading mb-10">Experience</h2>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="bg-transparent border border-gray-700 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
            <div className="text-gray-400 mb-1">{exp.company} &bull; {exp.year}</div>
            <div className="text-gray-300 text-sm">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
