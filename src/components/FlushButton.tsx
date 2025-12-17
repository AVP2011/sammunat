"use client";

import { motion } from "motion/react";

type FlushButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FlushButton({
  children,
  className = "",
}: FlushButtonProps) {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className={`
        relative overflow-hidden
        px-8 py-3 rounded-xl
        font-medium text-white
        bg-gradient-to-r from-violet-500 to-blue-500
        focus:outline-none
        ${className}
      `}
    >
      {/* FLUSH LAYER */}
      <motion.span
        variants={{
          rest: { x: "-130%" },
          hover: { x: "130%" },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="
          absolute inset-[-20%]
          rotate-12
          bg-gradient-to-r from-blue-500/90 to-violet-500/90
          blur-sm
        "
      />

      {/* TEXT */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
