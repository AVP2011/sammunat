"use client";

import { motion } from "framer-motion";

const logos = [
  "css",
  "docker",
  "dotenv",
  "fastapi",
  "firebase",
  "github",
  "html5",
  "javascript",
  "nextdotjs",
  "nodedotjs",
  "postgresql",
  "python",
  "react",
  "springboot",
  "supabase",
  "tailwindcss",
];

export default function LogoSnakeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* TOP SNAKE */}
      <motion.div
        className="absolute top-[20%] left-0 flex gap-16"
        animate={{ x: ["-30%", "100%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((name, i) => (
          <motion.img
            key={`top-${i}`}
            src={`/logos/${name}.svg`}
            alt={name}
            className="
              h-10 sm:h-12
              opacity-25 dark:opacity-20
              grayscale
            "
            animate={{ y: [0, -14, 0, 14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* BOTTOM SNAKE */}
      <motion.div
        className="absolute bottom-[20%] left-0 flex gap-16"
        animate={{ x: ["100%", "-30%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((name, i) => (
          <motion.img
  key={`top-${i}`}
  src={`/logos/${name}.svg`}
  alt={name}
  className="
    h-14 sm:h-16 md:h-20        /* bigger logos */
    opacity-30 dark:opacity-60  /* stronger in dark mode */
    grayscale dark:invert       /* invert for visibility at night */
    transition-all
  "
  animate={{ y: [0, -14, 0, 14, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.3,
  }}
/>
        ))}
      </motion.div>
    </div>
  );
}
