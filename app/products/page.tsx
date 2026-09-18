import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Algomint Labs products including ClinicDrx, Prashnas, and Solarudaan.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-32 sm:px-8">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Our products
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Software products built for real businesses.
        </h1>

        <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
          Explore our software platforms designed to simplify operations,
          improve productivity, and help businesses grow.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.slug}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
              <Image
                src={product.image}
                alt={`${product.name} product dashboard`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                {product.category}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                {product.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-cyan-200"
                >
                  View product
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
                >
                  Visit website
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}