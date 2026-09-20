"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const accordionItems = [
  {
    id: 1,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies.",
    image: "/FAQ.png",
    number: "01",
  },
  {
    id: 2,
    title: "AI & Automation",
    description:
      "AI-powered applications, intelligent agents, RAG systems and business automation.",
    image: "/FAQ.png",
    number: "02",
  },
  {
    id: 3,
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms designed for growing businesses and startups.",
    image: "/FAQ.png",
    number: "03",
  },
  {
    id: 4,
    title: "Mobile Applications",
    description:
      "Modern mobile experiences built for iOS and Android.",
    image: "/FAQ.png",
    number: "04",
  },
];

export default function ImageAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-[#05070d] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            What we build
          </span>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Digital products
            <br />
            <span className="text-neutral-500">
              built for impact.
            </span>
          </h2>
        </motion.div>

        {/* Desktop image accordion */}
        <div className="hidden h-[520px] gap-2 overflow-hidden lg:flex">
          {accordionItems.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(index)}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay */}
                <motion.div
                  animate={{
                    opacity: isActive ? 0.25 : 0.65,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Vertical title when collapsed */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="rotate-[-90deg] whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-white"
                    >
                      {item.title}
                    </span>
                  </div>
                )}

                {/* Active content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15,
                      }}
                      className="absolute inset-x-0 bottom-0 p-8"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs tracking-[0.25em] text-white/60">
                          {item.number}
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                          <ArrowUpRight
                            size={18}
                            className="text-white"
                          />
                        </div>
                      </div>

                      <h3 className="text-3xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="space-y-3 lg:hidden">
          {accordionItems.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(index)}
                className="relative overflow-hidden rounded-2xl border border-white/10"
              >
                <motion.div
                  animate={{
                    height: isActive ? 360 : 80,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs text-white/50">
                          {item.number}
                        </span>

                        <h3 className="mt-1 text-xl font-semibold text-white">
                          {item.title}
                        </h3>

                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 text-sm leading-6 text-white/70"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-white"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}