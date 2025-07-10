import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaPaperPlane } from "react-icons/fa6";

const CollabBox = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  };

  return (
    <section id="collab" className="w-full py-16 flex flex-col items-center justify-center scroll-mt-24">
      <TextGenerateEffect words="Let's Connect & Innovate" className="text-4xl md:text-5xl text-center mb-8" />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/60 border border-blue-400/40 rounded-2xl p-8 shadow-lg backdrop-blur-md flex flex-col gap-6 w-full max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 text-white focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 text-white focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 text-white focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <MagicButton
          title={submitted ? "Thank you!" : "Send Message"}
          icon={<FaPaperPlane />}
          position="right"
          otherClasses="w-full mt-2"
        />
      </motion.form>
    </section>
  );
};

export default CollabBox; 