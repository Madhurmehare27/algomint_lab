"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Partner One",
    logo: "/partners/partner-one.svg",
  },
  {
    name: "Gruhasoba Furniture Mall",
    logo: "/gruhasoba.png",
  },
  {
    name: "Partner Three",
    logo: "/partners/partner-three.svg",
  },
  {
    name: "Partner Four",
    logo: "/partners/partner-four.svg",
  },
  {
    name: "Partner Five",
    logo: "/partners/partner-five.svg",
  },
];

export default function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-transparent py-14">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Our Partners
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          Trusted by forward-thinking businesses
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          Collaborating with ambitious teams to build meaningful digital
          products and scalable technology.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#070a12] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#070a12] to-transparent" />

        <motion.div
          className="flex w-max items-center gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-transparent px-8 transition-all duration-300 hover:border-cyan-300/30"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={150}
                height={55}
                className="max-h-12 w-auto object-contain opacity-60  transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}