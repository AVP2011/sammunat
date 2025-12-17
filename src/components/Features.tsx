"use client";

import { motion } from "motion/react";

const features = [
  { title: "Internships", desc: "Hands-on experience with real-world projects." },
  { title: "Skill Development", desc: "Industry-aligned learning paths." },
  { title: "Mentorship", desc: "Guidance from experienced professionals." },
  { title: "Global Exposure", desc: "Work with international teams." },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          text-3xl sm:text-4xl font-semibold text-center
          text-[var(--text-primary)]
        "
      >
        What We Offer
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.04 }}
            viewport={{ once: true }}
            className="
              group relative p-6 rounded-2xl
              bg-[var(--card)]
              border border-[var(--border)]
              transition-all duration-300

              /* LIGHT MODE HOVER */
              hover:shadow-xl

              /* DARK MODE HOVER */
              dark:hover:border-violet-500/50
              dark:hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]
            "
          >
            {/* Accent bar */}
            <div
              className="
                absolute inset-x-0 top-0 h-[3px] rounded-t-2xl
                bg-gradient-to-r from-violet-500 to-blue-500
                opacity-0 group-hover:opacity-100
                transition
              "
            />

            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
