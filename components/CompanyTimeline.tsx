"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "Algomint Labs started with a vision to build reliable, scalable, and innovative digital solutions for modern businesses.",
    icon: Building2,
    tag: "The Beginning",
  },
  {
    year: "2025",
    title: "First Product Launched",
    description:
      "We started transforming ideas into real products by building platforms for healthcare, education, and business operations.",
    icon: Rocket,
    tag: "Product Innovation",
  },
  {
    year: "2026",
    title: "Multiple SaaS Platforms",
    description:
      "Our ecosystem expanded with multiple SaaS products designed to simplify workflows and help businesses operate more efficiently.",
    icon: Layers3,
    tag: "Scaling Forward",
  },
];

export default function CompanyTimeline() {
  return (
   <div>
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            Our Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            From an idea to a
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              growing technology ecosystem.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base leading-8 text-slate-400"
          >
            Every milestone represents our commitment to building meaningful
            technology and creating long-term value.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Center vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-purple-400/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[42px_1fr] gap-5 md:grid-cols-2 md:gap-16"
                >
                  {/* Timeline node */}
                  <div className="absolute left-5 top-0 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/50 bg-[#070a12] md:left-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
                  </div>

                  {/* Year on desktop left/right */}
                  <div
                    className={`hidden md:flex ${
                      isEven
                        ? "items-start justify-end text-right"
                        : "order-2 items-start justify-start text-left"
                    }`}
                  >
                    <div>
                      <span className="text-7xl font-black tracking-tighter text-white/10 lg:text-8xl">
                        {milestone.year}
                      </span>

                      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                        {milestone.tag}
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`col-start-2 ${
                      !isEven ? "md:order-1" : ""
                    }`}
                  >
                    {/* Mobile year */}
                    <div className="mb-4 md:hidden">
                      <span className="text-4xl font-black tracking-tight text-white">
                        {milestone.year}
                      </span>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        {milestone.tag}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{
                        y: -8,
                        borderColor: "rgba(103,232,249,0.35)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
                    >
                      {/* Card glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:bg-cyan-400/20" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                            <Icon
                              size={24}
                              className="text-cyan-300"
                            />
                          </div>

                          <span className="text-xs font-medium text-slate-500">
                            MILESTONE {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                          {milestone.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                          {milestone.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                          Algomint Labs
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
</div>
  );
}