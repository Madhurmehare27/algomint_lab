"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Journey", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-7xl">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/65 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <motion.span
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-8 w-8 rounded-full border border-cyan-300/60 border-dashed"
              />

              <Sparkles className="relative z-10 h-5 w-5 text-cyan-300" />
            </span>

            <div>
              <p className="text-sm font-semibold tracking-tight text-white sm:text-base">
                Algomint Labs
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.24em] text-neutral-500 sm:block">
                Digital intelligence
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-cyan-200 lg:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 p-4 backdrop-blur-xl lg:hidden"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}