import React from "react";

const experienceData = [
  {
    title: "Frontend Engineer Intern",
    company: "Tech Company",
    year: "May 2023 - July 2023",
    description: "Worked on building interactive UI components using React and Tailwind CSS."
  },
  {
    title: "Mobile App Developer",
    company: "Startup Inc.",
    year: "Jan 2023 - Apr 2023",
    description: "Developed cross-platform mobile apps with React Native."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
      <h2 className="heading mb-10">Experience</h2>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="bg-black/60 border border-gray-700 rounded-xl p-6 shadow-lg">
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
