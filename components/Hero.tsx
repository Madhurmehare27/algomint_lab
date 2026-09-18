
"use client";

import { useState } from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import FlowNetwork from "./FlowNetwork";

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ─────────────────────────────────────────────
// Hero Component
// ─────────────────────────────────────────────

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMouseInside, setIsMouseInside] = useState(false);

  function handleMouseMove(
    event: React.MouseEvent<HTMLElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      className="group relative isolate min-h-screen overflow-hidden bg-[#080b14] text-white"
    >

      {/* ───────── Mouse Spotlight ───────── */}

      <motion.div
        className="pointer-events-none absolute z-0 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isMouseInside ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
          mass: 0.4,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.08) 30%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ───────── Mouse Shadow Ring ───────── */}

      <motion.div
        className="pointer-events-none absolute z-0 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20 md:block"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isMouseInside ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
        }}
        style={{
          boxShadow:
            "0 0 50px rgba(99,102,241,0.18), inset 0 0 20px rgba(99,102,241,0.06)",
        }}
      />

      {/* ───────── Background ───────── */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Main Glow */}

        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />

        {/* Cyan Glow */}

        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* ───────── Navigation ───────── */}

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-indigo-500/20">
            A
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.18em]">
              ALGOMINT
            </p>

            <p className="text-[10px] tracking-[0.3em] text-gray-500">
              LABS
            </p>
          </div>

        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">

          <a
            href="#products"
            className="transition-colors hover:text-white"
          >
            Products
          </a>

          <a
            href="#services"
            className="transition-colors hover:text-white"
          >
            Services
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>
            <a
            href="/blog"
            className="transition-colors hover:text-white"
          >
            Blog
          </a>


        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium transition-all hover:border-indigo-400 hover:bg-indigo-500/10"
        >
          Let's Talk

          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

        </a>

      </header>

      {/* ───────── Hero Content ───────── */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pt-24"
      >

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          {/* ───────── Left Content ───────── */}

          <div>

            <motion.div
              variants={itemVariants}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-200"
            >

              <Sparkles size={13} />

              Engineering the future of software

            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >

              We build

              <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                intelligent
              </span>

              software.

            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-lg text-base leading-7 text-gray-400 sm:text-lg"
            >
              Algomint Labs builds intelligent SaaS products,
              AI applications, and scalable digital solutions
              that help businesses grow.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-3"
            >

              <a
                href="#products"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-transform hover:scale-[1.03]"
              >

                Explore Products

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Start a Project
              </a>

            </motion.div>

            {/* Stats */}

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6"
            >

              <div>
                <p className="text-lg font-semibold">
                  SaaS
                </p>

                <p className="text-xs text-gray-500">
                  Product Engineering
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  AI
                </p>

                <p className="text-xs text-gray-500">
                  Intelligent Applications
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  Cloud
                </p>

                <p className="text-xs text-gray-500">
                  Scalable Solutions
                </p>
              </div>

            </motion.div>

          </div>

          {/* ───────── Right Visual ───────── */}

          <motion.div
            variants={itemVariants}
            className="relative"
          >

            <div className="mb-4 flex items-center justify-between px-1">

              <p className="text-xs font-medium tracking-widest text-gray-500">
                OUR TECHNOLOGY
              </p>

              <div className="flex items-center gap-2 text-[10px] text-gray-500">

                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                CONNECTED SYSTEMS

              </div>

            </div>

            <FlowNetwork />

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >

              <p className="text-[10px] tracking-widest text-gray-500">
                BUILT FOR
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Real-world impact ✦
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}

        <motion.div
          variants={itemVariants}
          className="mt-20 flex items-center justify-center gap-2 text-xs text-gray-600"
        >

          <ChevronDown
            size={14}
            className="animate-bounce"
          />

          Scroll to explore

        </motion.div>

      </motion.div>

    </section>
  );
}