"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070a12]">
      {/* Square grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148, 163, 184, 0.13) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.13) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "74px 74px",
          maskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 85%)",
        }}
      />

      {/* Hero-style blue glow */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -20, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 -top-40 h-[560px] w-[560px] rounded-full bg-indigo-500/20 blur-[140px]"
      />

      {/* Purple glow */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -30, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 top-[15%] h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[150px]"
      />

      {/* Subtle center spotlight */}
      <div className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[100px]" />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,10,18,0.8)_100%)]" />
    </div>
  );
}