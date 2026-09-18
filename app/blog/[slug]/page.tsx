import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3 } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Algomint Labs",
    };
  }

  return {
    title: `${post.title} | Algomint Labs`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function DynamicBlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <article className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to blog
        </Link>

        {/* Category */}
        <div className="mt-10">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span>{post.author}</span>

          <span className="h-1 w-1 rounded-full bg-slate-600" />

          <span>{post.date}</span>

          <span className="h-1 w-1 rounded-full bg-slate-600" />

          <span className="flex items-center gap-2">
            <Clock3 size={15} />
            {post.readTime}
          </span>
        </div>

        {/* Cover image */}
        <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article content */}
        <div className="prose prose-invert mt-12 max-w-none">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-base leading-8 text-slate-300 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Build something meaningful
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Have an idea for your next digital product?
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Let’s turn your idea into a scalable software solution.
          </p>

          <Link
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
          >
            Start a project
          </Link>
        </div>
      </article>
    </main>
  );
}