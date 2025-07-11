import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaPaperPlane } from "react-icons/fa6";

const CollabBox = ({ onClose }: { onClose?: () => void }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // handle form submission logic here
  };

  return (
    <section
      id="collab"
      className="relative w-full py-20 flex flex-col items-center justify-center scroll-mt-24"
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Move content slightly upward */}
      <div className="-mt-20 w-full flex flex-col items-center">
        <TextGenerateEffect
          words="Let's Connect & Innovate"
          className="text-4xl md:text-5xl text-center mb-20"
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/60 
                     border border-blue-400/40 rounded-2xl px-8 py-8 shadow-2xl 
                     backdrop-blur-md flex flex-col gap-2 w-full max-w-xl -mt-20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 
                       text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 
                       text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="px-4 py-3 rounded-lg bg-black/40 border border-blue-400/30 
                       text-white focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          />

          <div className="flex justify-center mt-2">
            <MagicButton
              title={submitted ? "Thank you!" : "Send Message"}
              icon={<FaPaperPlane />}
              position="right"
              otherClasses="w-full max-w-xs"
            />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default CollabBox;
