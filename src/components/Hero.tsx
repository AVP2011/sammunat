"use client";

import { motion } from "framer-motion";
import LogoSnakeBackground from "./LogoSnakeBackground";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen px-6
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* LOGO BACKGROUND (VISIBLE) */}
      <div className="absolute inset-0 z-0">
        <LogoSnakeBackground />
      </div>

      {/* FOREGROUND CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]">
          Empowering Careers <br />
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Through Real-World Opportunities
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Sammunat connects students and professionals with internships,
          mentorship, and industry-grade technologies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium hover:scale-105 hover:shadow-lg transition">
            Join Now
          </button>

          <button className="px-8 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}
