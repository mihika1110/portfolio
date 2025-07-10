import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const profiles = [
  { name: "Codeforces", url: "https://codeforces.com/profile/yourprofile", icon: "/cf.svg" },
  { name: "GitHub", url: "https://github.com/yourprofile", icon: "/git.svg" },
  { name: "LeetCode", url: "https://leetcode.com/yourprofile", icon: "/leetcode.svg" },
];

const ProfileSection = () => (
  <section id="profiles" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
    <TextGenerateEffect words="Online Profiles" className="text-4xl md:text-5xl text-center mb-10" />
    <div className="flex flex-wrap gap-8 justify-center max-w-4xl">
      {profiles.map((profile, idx) => (
        <motion.a
          key={idx}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 24px #60a5fa" }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="flex flex-col items-center gap-2 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/60 border border-blue-400/40 rounded-2xl p-6 shadow-lg hover:shadow-blue-400/40 transition-shadow duration-300 backdrop-blur-md w-40 hover:scale-105"
        >
          <img src={profile.icon} alt={profile.name} className="w-12 h-12 mb-2" />
          <span className="text-lg font-semibold text-blue-300">{profile.name}</span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default ProfileSection; 