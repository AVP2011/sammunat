"use client";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">
          Sammunat
        </h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
