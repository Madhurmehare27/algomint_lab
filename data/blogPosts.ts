export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-is-transforming-business",
    title: "How AI Is Transforming Modern Business Operations",
    description:
      "Explore how AI-powered applications can automate repetitive work, improve decision-making, and create smarter business workflows.",
    category: "Artificial Intelligence",
    date: "September 18, 2026",
    readTime: "5 min read",
    author: "Algomint Labs",
    image: "/blog/ai-business.jpg",
    content: [
      "Artificial intelligence is changing how modern businesses operate. Companies are using AI to automate repetitive tasks, improve customer experiences, and make better decisions.",
      "AI-powered systems can process large amounts of data, identify patterns, and provide useful recommendations. This allows teams to focus on higher-value work.",
      "Businesses can start with small AI use cases such as customer support automation, document processing, lead qualification, and personalized recommendations.",
      "The most successful AI implementations focus on solving a real business problem instead of using AI only because it is a popular technology.",
    ],
  },
  {
    slug: "how-to-build-scalable-saas",
    title: "How to Build Scalable SaaS Products",
    description:
      "A practical look at architecture, authentication, databases, APIs, and deployment strategies for scalable SaaS platforms.",
    category: "Product Engineering",
    date: "September 18, 2026",
    readTime: "7 min read",
    author: "Algomint Labs",
    image: "/blog/scalable-saas.jpg",
    content: [
      "Building a SaaS product requires more than creating a beautiful interface. The product must also be secure, maintainable, and ready to support growing users.",
      "A scalable SaaS architecture usually separates the frontend, backend, database, authentication, and background processing layers.",
      "Caching, pagination, database indexing, monitoring, and proper error handling are important for maintaining performance as the product grows.",
      "Start with a simple architecture, measure real usage, and improve the system based on actual requirements.",
    ],
  },
  {
    slug: "from-idea-to-digital-product",
    title: "From Business Idea to Digital Product",
    description:
      "Understand the key stages involved in turning an idea into a useful, reliable, and market-ready software product.",
    category: "Technology",
    date: "September 18, 2026",
    readTime: "4 min read",
    author: "Algomint Labs",
    image: "/blog/digital-product.jpg",
    content: [
      "Every successful digital product begins with a clear understanding of the problem it is solving.",
      "The first stage is discovery. Identify the target users, their challenges, and the business value your product can provide.",
      "Next, create a focused MVP with only the most important features. This helps validate the idea before investing heavily in development.",
      "After launch, collect feedback, analyze usage, and continuously improve the product.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}