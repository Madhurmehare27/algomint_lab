import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import ProductWorkflow from "@/components/ProductWorkflow";
import { getProduct, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://www.algomintlabs.com";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | Algomint Labs",
    };
  }

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
    keywords: product.seoKeywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${product.name} | Algomint Labs`,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 800,
          alt: `${product.name} product dashboard`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Algomint Labs`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function DynamicProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const productUrl = `${siteUrl}/products/${product.slug}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${productUrl}/#software`,
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: product.description,
    url: product.url,
    image: `${siteUrl}${product.image}`,
    creator: {
      "@type": "Organization",
      name: "Algomint Labs",
      url: siteUrl,
    },
    provider: {
      "@type": "Organization",
      name: "Algomint Labs",
      url: siteUrl,
    },
    featureList: product.features,
    keywords: product.seoKeywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <article className="mx-auto max-w-7xl">
        {/* Back link */}
        <Link
          href="/#products"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to products
        </Link>

        {/* Product Hero */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={15} />
              {product.category}
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              {product.industry}
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight text-white sm:text-7xl">
              {product.name}
            </h1>

            <h2 className="mt-5 text-2xl font-medium text-slate-200 sm:text-3xl">
              {product.tagline}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Visit {product.shortName}
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Build a Similar Product
                <ExternalLink size={17} />
              </Link>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={`${product.name} dashboard preview`}
                width={1200}
                height={800}
                priority
                className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </section>

        {/* Product Metrics */}
        <section className="mt-20 grid gap-4 sm:grid-cols-3">
          {product.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm text-slate-500">{metric.label}</p>

              <p className="mt-2 text-2xl font-semibold text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="mt-28 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Product Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Built around real business workflows
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-400">
            {product.longDescription}
          </p>
        </section>

        {/* Problem */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              The Challenge
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Turning operational challenges into digital workflows
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.problems.map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="mb-5 h-2 w-12 rounded-full bg-cyan-300" />

                <h3 className="text-lg font-semibold">{problem}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mt-28 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Our Solution
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            One platform. Connected operations.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            {product.solution}
          </p>
        </section>

        {/* Features */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Platform Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Features designed for daily operations
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <CheckCircle2 size={23} className="text-cyan-300" />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {feature}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Designed to make workflows more organized, accessible, and
                  easier to manage.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <ProductWorkflow
          title={`${product.name} workflow`}
          steps={product.workflow}
        />

        {/* Benefits */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Business Benefits
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Designed to create operational clarity
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-cyan-300"
                />

                <p className="font-medium text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Product Preview
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Explore the interface
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={image}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <Image
                  src={image}
                  alt={`${product.name} interface screenshot ${index + 1}`}
                  width={1200}
                  height={800}
                  className="h-auto w-full transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Audience */}
        <section className="mt-28">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Designed For
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Built for teams and businesses
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.audience.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="mt-28">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Built with modern technologies
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {product.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Questions about {product.name}
            </h2>
          </div>

          <div className="space-y-4">
            {product.faq.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Build Your Digital Product
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Have an idea similar to {product.name}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Algomint Labs helps businesses turn ideas into scalable SaaS
            platforms, AI applications, automation systems, and custom
            software.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Explore Other Products
              <ArrowLeft size={17} />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}