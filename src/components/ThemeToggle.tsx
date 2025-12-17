"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      className="
        p-2 rounded-full
        border border-black/20 dark:border-white/20
        bg-white/80 dark:bg-black/60
        backdrop-blur
        hover:scale-110
        transition
      "
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
