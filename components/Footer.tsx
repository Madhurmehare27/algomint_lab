"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
//   Github,
//   Linkedin,
  Mail,
  Sparkles,
//   Twitter,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Our Journey", href: "#journey" },
    { label: "FAQ", href: "#faq" },
  ],
  products: [
    {
      label: "ClinicDrx",
      href: "https://clinicdrx.com/",
    },
    {
      label: "Prashnas",
      href: "https://www.prashnas.com/",
    },
    {
      label: "Solarudaan",
      href: "https://solarudaan.com/",
    },
  ],
};

const nodes = [
  { x: "8%", y: "25%", delay: 0 },
  { x: "23%", y: "65%", delay: 0.8 },
  { x: "39%", y: "20%", delay: 1.4 },
  { x: "52%", y: "72%", delay: 0.3 },
  { x: "67%", y: "30%", delay: 1 },
  { x: "83%", y: "65%", delay: 1.8 },
  { x: "94%", y: "20%", delay: 0.5 },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* AI animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["0%", "8%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["0%", "-8%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
        />

        <div className="absolute inset-x-0 top-0 h-[420px] opacity-50">
          <svg
            viewBox="0 0 1000 420"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aiLineGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <path
              d="M80 110 L230 275 L390 85 L520 300 L670 125 L830 270 L940 80"
              fill="none"
              stroke="url(#aiLineGradient)"
              strokeWidth="1"
            />

            <path
              d="M80 110 L390 85 L670 125 L940 80"
              fill="none"
              stroke="url(#aiLineGradient)"
              strokeWidth="1"
            />

            <path
              d="M230 275 L520 300 L830 270"
              fill="none"
              stroke="url(#aiLineGradient)"
              strokeWidth="1"
            />

            <path
              d="M80 110 L520 300 L940 80"
              fill="none"
              stroke="url(#aiLineGradient)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />
          </svg>

          {nodes.map((node, index) => (
            <motion.span
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
              style={{
                left: node.x,
                top: node.y,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main CTA */}
        <div className="border-b border-white/10 py-24 sm:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200"
            >
              <Sparkles className="h-4 w-4" />
              Build the future
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                Let’s turn it into intelligence.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
            >
              From SaaS platforms to AI-powered applications, Algomint Labs
              helps businesses transform ideas into scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-200"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:hello@algomintlabs.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10">
                <BrainCircuit className="h-6 w-6 text-cyan-200" />
              </span>

              <div>
                <p className="font-semibold">Algomint Labs</p>
                <p className="text-xs text-neutral-500">
                  Software. Intelligence. Growth.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-500">
              Building modern software products, AI applications, SaaS
              platforms, and business automation systems.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-cyan-300/40 hover:text-white"
              >
                {/* <Github className="h-4 w-4" /> */}
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-cyan-300/40 hover:text-white"
              >
                {/* <Linkedin className="h-4 w-4" /> */}
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-cyan-300/40 hover:text-white"
              >
                {/* <Twitter className="h-4 w-4" /> */}
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-500 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Capabilities</h3>

            <ul className="mt-5 space-y-3">
              {[
                "SaaS Development",
                "AI Applications",
                "Web Development",
                "CRM Systems",
                "API Integrations",
                "Cloud Deployment",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm text-neutral-500"
                >
                  <Check className="h-3.5 w-3.5 text-cyan-300" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Algomint Labs. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}