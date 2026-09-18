// src/data/products.ts

export type ProductMetric = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  industry: string;
  tagline: string;
  description: string;
  longDescription: string;
  url: string;
  image: string;
  images: string[];
  problems: string[];
  solution: string;
  features: string[];
  benefits: string[];
  workflow: string[];
  technologies: string[];
  metrics: ProductMetric[];
  audience: string[];
  seoKeywords: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const products: Product[] = [
  {
    slug: "clinicdrx",
    name: "ClinicDrx",
    shortName: "ClinicDrx",
    category: "Healthcare SaaS",
    industry: "Healthcare",
    tagline: "Simplify clinic and OPD management.",
    description:
      "ClinicDrx is a cloud-based clinic and OPD management platform designed to simplify appointments, patient records, doctor schedules, and daily clinic operations.",
    longDescription:
      "ClinicDrx brings important clinic workflows into one connected digital platform. It is designed to help clinics organize appointments, manage patient information, coordinate doctor schedules, and improve visibility across daily operations.",
    url: "https://clinicdrx.com/",
    image: "/products/clinicdrx-dashboard.png",
    images: [
      "/products/clinicdrx-dashboard.png",
      "/products/clinicdrx-appointments.png",
      "/products/clinicdrx-patients.png",
    ],
    problems: [
      "Manual appointment handling",
      "Scattered patient information",
      "Difficult doctor schedule management",
      "Repetitive administrative work",
      "Limited visibility into daily clinic operations",
    ],
    solution:
      "ClinicDrx connects clinic operations through a centralized cloud-based system for appointments, patient records, doctor schedules, and OPD workflows.",
    features: [
      "Clinic and OPD management",
      "Appointment management",
      "Patient record management",
      "Doctor schedule management",
      "Cloud-based access",
      "Centralized clinic workflows",
      "Organized patient information",
      "Operational visibility",
    ],
    benefits: [
      "Better appointment organization",
      "Centralized patient information",
      "Improved clinic visibility",
      "Reduced administrative effort",
      "More organized doctor schedules",
      "Accessible cloud-based workflows",
    ],
    workflow: [
      "Patient",
      "Appointment",
      "Doctor Consultation",
      "Patient Record",
      "OPD Management",
      "Clinic Operations",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Cloud Infrastructure",
    ],
    metrics: [
      {
        label: "Product Type",
        value: "Cloud SaaS",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Platform",
        value: "Web",
      },
    ],
    audience: [
      "Clinics",
      "Doctors",
      "Healthcare teams",
      "OPD centers",
      "Medical practice owners",
    ],
    seoKeywords: [
      "clinic management software",
      "OPD management software",
      "healthcare SaaS",
      "patient management software",
      "doctor appointment software",
      "clinic software in India",
    ],
    faq: [
      {
        question: "What is ClinicDrx?",
        answer:
          "ClinicDrx is a cloud-based clinic and OPD management platform for organizing appointments, patient records, doctor schedules, and clinic operations.",
      },
      {
        question: "Who can use ClinicDrx?",
        answer:
          "ClinicDrx is designed for clinics, doctors, OPD centers, healthcare teams, and medical practice owners.",
      },
      {
        question: "Can I explore ClinicDrx online?",
        answer:
          "Yes. You can visit the official ClinicDrx website to explore the product.",
      },
    ],
  },

  {
    slug: "prashnas",
    name: "Prashnas",
    shortName: "Prashnas",
    category: "EdTech SaaS",
    industry: "Education",
    tagline: "Create, manage, and deliver online examinations.",
    description:
      "Prashnas is an online examination and practice test platform for educators, tuition classes, competitive exam preparation, and student assessments.",
    longDescription:
      "Prashnas helps educators and students manage digital assessments through online tests, custom question papers, student attempts, and performance tracking. The platform is designed for tuition classes, educators, and competitive exam preparation.",
    url: "https://www.prashnas.com/",
    image: "/products/prashnas-dashboard.png",
    images: [
      "/products/prashnas-dashboard.png",
      "/products/prashnas-tests.png",
      "/products/prashnas-results.png",
    ],
    problems: [
      "Manual test paper preparation",
      "Time-consuming assessment processes",
      "Scattered student test records",
      "Difficulty managing multiple tests",
      "Limited performance visibility",
    ],
    solution:
      "Prashnas provides a centralized examination platform where educators can create tests, manage question papers, publish assessments, and review student performance.",
    features: [
      "Online examination platform",
      "Practice test creation",
      "Custom question papers",
      "Teacher and tutor dashboard",
      "Student assessments",
      "Test publishing",
      "Performance tracking",
      "Competitive exam preparation",
    ],
    benefits: [
      "Faster test creation",
      "Easier student assessment",
      "Centralized examination records",
      "Better performance tracking",
      "Reusable question papers",
      "More organized teaching workflows",
    ],
    workflow: [
      "Teacher",
      "Create Test",
      "Add Questions",
      "Publish Test",
      "Student Attempts",
      "Assessment Results",
      "Performance Analytics",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    metrics: [
      {
        label: "Product Type",
        value: "EdTech SaaS",
      },
      {
        label: "Industry",
        value: "Education",
      },
      {
        label: "Platform",
        value: "Web",
      },
    ],
    audience: [
      "Tuition teachers",
      "Coaching institutes",
      "Schools",
      "Competitive exam educators",
      "Students",
    ],
    seoKeywords: [
      "online examination platform",
      "online test series platform",
      "practice test software",
      "tuition class software",
      "student assessment platform",
      "online exam software",
    ],
    faq: [
      {
        question: "What is Prashnas?",
        answer:
          "Prashnas is an online examination and practice test platform for educators, tuition classes, students, and competitive exam preparation.",
      },
      {
        question: "Who can use Prashnas?",
        answer:
          "Prashnas is designed for tuition teachers, coaching institutes, educators, schools, and students.",
      },
      {
        question: "Can educators create custom tests?",
        answer:
          "Prashnas is designed to support online test creation, custom question papers, test publishing, and student assessments.",
      },
    ],
  },

  {
    slug: "solarudaan",
    name: "Solarudaan",
    shortName: "Solarudaan",
    category: "Solar EPC CRM",
    industry: "Solar Energy",
    tagline: "Manage solar sales, projects, and customer workflows.",
    description:
      "Solarudaan is a cloud CRM platform for solar EPC companies to manage leads, quotations, customers, installations, projects, and sales operations.",
    longDescription:
      "Solarudaan helps solar EPC businesses organize their sales and project workflows in one connected CRM. It is designed to support lead management, customer communication, quotations, project tracking, and installation operations.",
    url: "https://solarudaan.com/",
    image: "/products/solarudaan-dashboard.png",
    images: [
      "/products/solarudaan-dashboard.png",
      "/products/solarudaan-leads.png",
      "/products/solarudaan-projects.png",
    ],
    problems: [
      "Leads managed in spreadsheets",
      "Manual quotation handling",
      "Scattered customer information",
      "Difficult installation tracking",
      "Limited sales pipeline visibility",
    ],
    solution:
      "Solarudaan centralizes solar EPC sales and project operations through lead management, customer records, quotations, project tracking, and installation workflows.",
    features: [
      "Solar EPC CRM",
      "Lead management",
      "Customer management",
      "Quotation management",
      "Project tracking",
      "Installation workflow management",
      "Sales pipeline management",
      "Centralized business records",
    ],
    benefits: [
      "Centralized lead management",
      "Better quotation tracking",
      "Clear project visibility",
      "Organized customer records",
      "Improved sales workflows",
      "Better coordination between teams",
    ],
    workflow: [
      "New Lead",
      "Lead Qualification",
      "Site Survey",
      "Quotation",
      "Customer Confirmation",
      "Installation",
      "Project Completion",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Cloud Infrastructure",
    ],
    metrics: [
      {
        label: "Product Type",
        value: "B2B CRM",
      },
      {
        label: "Industry",
        value: "Solar EPC",
      },
      {
        label: "Platform",
        value: "Web",
      },
    ],
    audience: [
      "Solar EPC companies",
      "Solar installers",
      "Solar sales teams",
      "Renewable energy businesses",
      "Project managers",
    ],
    seoKeywords: [
      "solar EPC CRM",
      "solar CRM software",
      "solar lead management software",
      "solar project management software",
      "solar installation CRM",
      "solar sales software",
    ],
    faq: [
      {
        question: "What is Solarudaan?",
        answer:
          "Solarudaan is a CRM platform for solar EPC companies to manage leads, customers, quotations, projects, installations, and sales operations.",
      },
      {
        question: "Who can use Solarudaan?",
        answer:
          "Solarudaan is designed for solar EPC companies, solar installers, sales teams, and renewable energy businesses.",
      },
      {
        question: "What workflows does Solarudaan support?",
        answer:
          "Solarudaan is designed around lead management, site surveys, quotations, customer confirmation, installation, and project completion.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}