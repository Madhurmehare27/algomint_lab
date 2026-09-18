import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Algomint Labs",
  description:
    "Learn about Algomint Labs, a software development company building SaaS platforms, AI applications, and custom digital products.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-32 sm:px-8">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
          About Algomint Labs
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Building digital products for the next generation.
        </h1>

        <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
          Algomint Labs is a software development company focused on building
          modern SaaS platforms, AI-powered applications, healthcare software,
          education platforms, CRM systems, and business automation tools.
        </p>
      </section>

      <section className="mt-20 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Product Engineering",
            description:
              "From product planning to scalable frontend, backend, and database development.",
          },
          {
            title: "AI & Automation",
            description:
              "AI assistants, document processing, workflow automation, RAG, and intelligent business systems.",
          },
          {
            title: "Business Platforms",
            description:
              "Custom CRM, healthcare, education, SaaS, and operational management platforms.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-400">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}