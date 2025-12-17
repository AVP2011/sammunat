"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center py-28 px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Empowering Careers <br /> Through Real-World Opportunities
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
        Sammunat helps students and professionals gain practical experience,
        industry exposure, and global opportunities.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Join Now
        </button>
        <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </motion.section>
  );
}
