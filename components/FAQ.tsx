"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left content */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              FAQ
            </span>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Questions?
              <br />
              We have answers.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-neutral-400">
              Learn more about our software development services, technology
              stack, process, and how we help businesses build digital
              products.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Discuss your project
            </a>
          </motion.div>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-medium leading-6 text-white sm:text-lg">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-neutral-400"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-6">
                        <p className="text-sm leading-7 text-neutral-400 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}