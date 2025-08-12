import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaDownload } from "react-icons/fa6";

const DownloadResume = () => (
  <section id="download-resume" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Download Resume" className="text-4xl md:text-5xl text-center mb-8" />
    <a href="https://drive.google.com/file/d/1noLXQbWTjS31hTIBlhzU6vjh4SOypzzo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
      <MagicButton
        title="Download PDF"
        icon={<FaDownload />}
        position="right"
        otherClasses="w-full md:w-72"
      />
    </a>
  </section>
);

export default DownloadResume; 