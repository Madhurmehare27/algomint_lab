"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

type ProductWorkflowProps = {
  title: string;
  steps: string[];
};

export default function ProductWorkflow({
  title,
  steps,
}: ProductWorkflowProps) {
  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Product Workflow
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A connected workflow designed around the real operational needs of
          the product.
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Step {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {step}
                </h3>
              </div>
            </motion.div>

            {index !== steps.length - 1 && (
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08 + 0.2,
                  }}
                  className="flex origin-top flex-col items-center text-cyan-300"
                >
                  <div className="h-5 w-px bg-cyan-300/50" />
                  <ArrowDown size={16} />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}