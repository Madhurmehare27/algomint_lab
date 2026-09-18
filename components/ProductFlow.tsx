import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductFlow() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Our Products
        </p>

        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">
          Software built for real-world industries
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {product.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {product.name}
                </h3>
              </div>

              <ArrowUpRight
                size={22}
                className="text-slate-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
              />
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8 text-sm font-semibold text-cyan-300">
              Explore product →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}