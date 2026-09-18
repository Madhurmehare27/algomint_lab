"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  FileText,
  GraduationCap,
  HeartPulse,
  Laptop,
  MessageSquare,
  Network,
  Rocket,
  SolarPanel,
  Stethoscope,
  Zap,
} from "lucide-react";

import {
  containerVariants,
  itemVariants,
  scaleVariants,
} from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "AI Solutions",
    description:
      "Build intelligent AI-powered products, automation systems, and data-driven workflows for modern businesses.",
    icon: BrainCircuit,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "SaaS Platforms",
    description:
      "Scalable SaaS applications with secure authentication, analytics, subscriptions, and powerful dashboards.",
    icon: Cloud,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "High-performance web and mobile applications built around your business requirements and workflows.",
    icon: Code2,
    gradient: "from-emerald-400 to-teal-500",
  },
];

const products = [
  {
    name: "ClinicDrx",
    category: "Healthcare SaaS",
    description:
      "A cloud-based OPD and clinic management platform for doctors, clinics, appointments, patients, and daily operations.",
    icon: Stethoscope,
    features: [
      "Doctor and clinic management",
      "Patient and appointment tracking",
      "Cloud-based OPD workflow",
    ],
    gradient: "from-cyan-400 to-blue-600",
    href: "https://clinicdrx.com",
  },
  {
    name: "Prashnas",
    category: "Education Technology",
    description:
      "An online examination and practice test platform for students, institutes, and tuition teachers.",
    icon: GraduationCap,
    features: [
      "Online test series",
      "Custom question papers",
      "Performance and result analytics",
    ],
    gradient: "from-purple-400 to-fuchsia-600",
    href: "https://prashnas.com",
  },
  {
    name: "Solarudaan",
    category: "Solar CRM",
    description:
      "A cloud CRM platform designed for solar EPC companies to manage leads, customers, projects, and sales operations.",
    icon: SolarPanel,
    features: [
      "Solar lead management",
      "Project and customer tracking",
      "Sales pipeline management",
    ],
    gradient: "from-amber-300 to-orange-600",
    href: "https://solarudaan.com",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080b14] px-6 py-32 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[45%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="mb-16 max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan-400" />

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              What we build
            </p>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Digital products that move your business forward.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
          >
            We combine modern engineering, AI, automation, and premium design
            to create software products that solve real business problems.
          </motion.p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={scaleVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                {/* Animated top border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className={`absolute left-0 top-0 h-[2px] bg-gradient-to-r ${service.gradient}`}
                />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>

                    <span className="text-sm font-medium text-white/30">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-white/60">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="mt-8 h-px bg-gradient-to-r from-cyan-300 to-purple-400"
                  />

                  <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
                    <span>Explore capability</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Products heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="mb-12 mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-purple-400" />

            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Our products
            </p>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold md:text-5xl"
          >
            Products built by Algomint Labs.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-lg leading-8 text-white/60"
          >
            Our own software products are designed to simplify operations,
            improve productivity, and help businesses grow.
          </motion.p>
        </motion.div>

        {/* Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                variants={scaleVariants}
                whileHover={{
                  y: -14,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101522]/80 p-7 backdrop-blur-xl"
              >
                {/* Product gradient */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.gradient}`}
                />

                {/* Product background glow */}
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${product.gradient} opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 15,
                      }}
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient}`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    {product.category}
                  </p>

                  <h3 className="mb-4 text-3xl font-bold">
                    {product.name}
                  </h3>

                  <p className="min-h-[112px] leading-7 text-white/60">
                    {product.description}
                  </p>

                  <div className="my-7 h-px bg-white/10" />

                  <div className="space-y-4">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-cyan-300">
                    Visit product
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 text-center md:p-12"
        >
          <Rocket className="mx-auto mb-5 h-10 w-10 text-cyan-300" />

          <h3 className="text-3xl font-bold md:text-4xl">
            Have an idea? Let&apos;s build it.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/60">
            From the first concept to a scalable production-ready product,
            Algomint Labs helps you turn ideas into powerful digital
            experiences.
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-black transition-colors hover:bg-cyan-200"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}