"use client";

import { useState } from "react";
import { FaLocationArrow, FaGithub, FaPlay } from "react-icons/fa";
import { projects } from "@/data";

const RecentProjects = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  // Find the open project for modal
  const openProject = projects.find((item) => item.id === openId);

  return (
    <div className="py-20 relative">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className={`flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ${openId ? 'pointer-events-none select-none blur-sm' : ''}`}>
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div
              className={
                "relative group bg-gradient-to-br from-black/80 via-purple-900/60 to-blue-900/60 border border-white/[.1] rounded-3xl shadow-lg backdrop-blur-md p-6 w-full h-full flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105"
              }
              onClick={() => setOpenId(item.id)}
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0 max-h-full max-w-full object-contain" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-2">
                {item.des}
              </p>
              <div className="flex items-center mt-2 mb-3">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-2"
                  >
                    <img src={icon} alt="icon" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href={item.githubLink && item.githubLink !== "#" ? item.githubLink : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:text-xl md:text-xs text-sm text-purple px-3 py-1 rounded hover:bg-purple-900/30 transition"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>
                <a
                  href={item.demoVideo && item.demoVideo !== "#" ? item.demoVideo : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:text-xl md:text-xs text-sm text-purple px-3 py-1 rounded hover:bg-purple-900/30 transition"
                  onClick={e => e.stopPropagation()}
                >
                  <FaPlay className="me-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for expanded project */}
      {openProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          {/* Blurred dark overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-all duration-300"
            onClick={() => setOpenId(null)}
          />
          {/* Modal content */}
          <div className="relative z-10 bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/80 rounded-3xl p-10 shadow-2xl max-w-4xl w-[95vw] flex flex-col items-center border border-purple-400/30 animate-fadeIn h-[80vh] overflow-y-auto">
            <img src={openProject.img} alt="cover" className="w-32 h-32 object-contain mb-4 rounded-2xl border border-white/10" />
            <h2 className="text-2xl font-bold text-purple mb-4 text-center">{openProject.title}</h2>
            <p className="text-base text-[#BEC1DD] mb-4 text-center">{openProject.des}</p>
            <p className="text-sm text-blue-200 mb-4 text-center">{openProject.details}</p>
            <div className="flex items-center gap-2 mb-6">
              {openProject.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                >
                  <img src={icon} alt="icon" className="p-2" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 mb-4">
              <a
                href={openProject.githubLink && openProject.githubLink !== "#" ? openProject.githubLink : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition"
                onClick={e => e.stopPropagation()}
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={openProject.demoVideo && openProject.demoVideo !== "#" ? openProject.demoVideo : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                onClick={e => e.stopPropagation()}
              >
                <FaPlay />
                Demo Video
              </a>
            </div>
            <button
              className="mt-2 px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
              onClick={e => { e.stopPropagation(); setOpenId(null); }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
