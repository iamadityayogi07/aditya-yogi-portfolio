"use client";

import { motion } from "framer-motion";

export const tones = {
  violet: "139 92 246",
  cyan: "34 211 238",
  pink: "244 114 182",
  amber: "251 191 36",
  emerald: "52 211 153",
  blue: "96 165 250",
} as const;

export type Tone = keyof typeof tones;

export default function Tile({
  children,
  tone = "violet",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  delay?: number;
}) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      <div
        onMouseMove={onMove}
        className="tile h-full p-5 sm:p-7"
        style={{ "--tone": tones[tone] } as React.CSSProperties}
      >
        {children}
      </div>
    </motion.div>
  );
}
