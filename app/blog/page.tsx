"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  BrainCircuit,
  Code2,
  Sparkles,
} from "lucide-react";

import { blogPosts } from "@/data/blogPosts";

const icons = [BrainCircuit, Code2, Sparkles];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-transparent px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
            >
              Insights & Ideas
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Thoughts on technology,
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                innovation, and growth.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              Discover practical insights, product engineering ideas, and
              technology trends from the Algomint Labs team.
            </motion.p>
          </div>

          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-300/40 hover:bg-white/[0.05]"
          >
            back home

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl"
              >
                {/* Blog visual */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent">
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

                  {/* Floating icon */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-xl"
                  >
                    <Icon
                      size={45}
                      strokeWidth={1.3}
                      className="text-cyan-200"
                    />
                  </motion.div>

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Blog content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span>{post.date}</span>

                    <span className="h-1 w-1 rounded-full bg-slate-600" />

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-white transition-colors group-hover:text-cyan-200">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                  >
                    Read article

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}