export type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

export const faqItems: FAQItem[] = [
  {
    category: "General",
    question: "What does Algomint Labs do?",
    answer:
      "Algomint Labs is a software development company that builds modern web applications, SaaS platforms, AI-powered solutions, CRM systems, healthcare software, and custom digital products for businesses.",
  },
  {
    category: "General",
    question: "What type of software does Algomint Labs develop?",
    answer:
      "We develop SaaS platforms, business management systems, healthcare applications, education platforms, CRM software, AI-powered applications, dashboards, automation systems, and custom web applications.",
  },
  {
    category: "Services",
    question: "Do you provide custom software development?",
    answer:
      "Yes. We create custom software based on your business requirements, workflow, users, integrations, and long-term growth plans.",
  },
  {
    category: "Services",
    question: "Can you build a SaaS product from scratch?",
    answer:
      "Yes. We can help with SaaS product planning, UI/UX design, frontend development, backend APIs, database architecture, authentication, subscriptions, dashboards, deployment, and ongoing improvements.",
  },
  {
    category: "Services",
    question: "Do you develop AI-powered applications?",
    answer:
      "Yes. We work with AI application concepts such as AI assistants, document processing, OCR, RAG systems, vector databases, workflow automation, and AI-powered business tools.",
  },
  {
    category: "Technology",
    question: "Which technologies do you use?",
    answer:
      "Our technology stack includes Next.js, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, Supabase, REST APIs, GraphQL, Docker, AWS, and modern AI tools.",
  },
  {
    category: "Technology",
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate payment gateways, WhatsApp APIs, email services, Google services, CRM systems, analytics tools, AI APIs, maps, and other third-party platforms.",
  },
  {
    category: "Process",
    question: "What is your software development process?",
    answer:
      "Our process generally includes requirement discovery, planning, UI/UX design, development, API and database integration, testing, deployment, and continuous support.",
  },
  {
    category: "Process",
    question: "How long does it take to build a software product?",
    answer:
      "The timeline depends on the product scope, features, integrations, and complexity. A small MVP may take a few weeks, while a larger platform may require several months.",
  },
  {
    category: "Process",
    question: "Can you improve or maintain an existing application?",
    answer:
      "Yes. We can improve existing applications, fix bugs, optimize performance, add new features, modernize the technology stack, and provide ongoing maintenance.",
  },
  {
    category: "Business",
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, small businesses, growing companies, and established organizations to build practical software solutions according to their goals and budget.",
  },
  {
    category: "Business",
    question: "How can I start a project with Algomint Labs?",
    answer:
      "You can contact us with your business idea, project requirements, existing application details, or automation needs. We will discuss your goals and suggest a suitable development approach.",
  },
];