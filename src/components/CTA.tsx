"use client";

import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="relative py-28 px-6 text-center">
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
        Ready to Build Your Career?
      </h2>

      <p className="mt-4 text-lg text-[var(--text-secondary)]">
        Join Sammunat and unlock real-world learning opportunities.
      </p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          mt-10 px-10 py-4 rounded-xl
          bg-gradient-to-r from-violet-500 to-blue-500
          text-white font-medium
          hover:shadow-xl
          transition
        "
      >
        Apply Now
      </motion.button>
    </section>
  );
}

