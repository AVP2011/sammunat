"use client";

import { motion } from "motion/react";
import AnimatedBackground from "./AnimatedBackground";
import FlushButton from "./FlushButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
            text-[var(--text-primary)]
          "
        >
          Empowering Careers <br />
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Through Real-World Opportunities
          </span>
        </h1>

        <p
          className="
            mt-6 text-base sm:text-lg
            text-[var(--text-secondary)]
            max-w-2xl mx-auto
          "
        >
          Sammunat connects students and professionals with internships,
          mentorship, and global exposure through practical learning.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <FlushButton
            className="
              px-8 py-3 rounded-xl font-medium
              bg-gradient-to-r from-violet-500 to-blue-500
              text-white
              hover:scale-105 hover:shadow-lg
              transition
            "
          >
            Join Now
          </FlushButton>

          <FlushButton
            className="
              px-8 py-3 rounded-xl
              border border-[var(--border)]
              text-[var(--text-primary)]
              hover:bg-black/5 dark:hover:bg-white/5
              transition
            "
          >
            Learn More
          </FlushButton>
        </div>
      </motion.div>
    </section>
  );
}
