"use client";

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0f] via-[#0b0b0f] to-[#0e1020]" />

      {/* Moving grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-3xl top-[-150px] left-[-150px]"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl bottom-[-120px] right-[-120px]"
        animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
