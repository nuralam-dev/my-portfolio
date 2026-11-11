export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "StudioSpace",
    category: "Full Stack Booking Platform",
    description:
      "A full-stack studio booking application where users can discover creative spaces, book facilities, and manage listings through a protected dashboard.",

    image: "/projects/studiospace.webp",

    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],

    features: [
      "Studio listing and searching",
      "Facility booking system",
      "Protected user dashboard",
      "Facility management with CRUD operations",
      "Authentication and authorization",
    ],

    liveUrl: "https://studiospace-client-ruby.vercel.app/",

    githubUrl: "https://github.com/nuralam-dev/a-08-client",

    featured: true,
  },

  {
    id: 2,
    title: "Bangla News 24",
    category: "Dynamic News Portal",
    description:
      "A modern Bangla news platform that fetches and displays news articles from an external API, organized into categories with a clean reading experience.",

    image: "/projects/bangla-news.webp",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
    ],

    features: [
      "External news API integration",
      "Category-based news sections",
      "Dynamic article rendering",
      "Most-read news section",
    ],

    liveUrl: "https://bangla-news-24-fawn.vercel.app/",

    githubUrl: "https://github.com/nuralam-dev/bangla-news-24",
  },

  {
    id: 3,
    title: "Bazar Dor",
    category: "Market Price Tracking Platform",
    description:
      "A bilingual market price tracking application that allows users to explore daily product prices, compare market information, and access protected price details.",

    image: "/projects/bazar-dor.webp",

    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
      "HeroUI",
    ],

    features: [
      "Daily product price tracking",
      "Search and category filtering",
      "Market price comparison",
      "Protected product details",
      "Bangla and English language support",
    ],

    liveUrl: "https://assignment-07-ruddy.vercel.app/",

    githubUrl: "https://github.com/nuralam-dev/assignment-07",
  },

  {
    id: 4,
    title: "Tour Management",
    category: "Travel & Tour Application",
    description:
      "A MERN-stack travel platform designed to help users explore destinations, search tour packages, and view detailed travel information.",

    image: "/projects/tour-management.webp",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],

    features: [
      "Destination exploration",
      "Tour package listings",
      "Tour search and filtering",
      "Detailed tour information",
      "Responsive travel interface",
    ],

    liveUrl: "https://tour-management-eight-iota.vercel.app/home",

    githubUrl: "https://github.com/nuralam-dev/Tour-Management-",
  },

  {
    id: 5,
    title: "FitLog",
    category: "Fitness & Activity Web Application",

    description:
      "A fitness-focused web application designed to provide an engaging experience for users exploring workout activities and healthy lifestyle goals.",

    image: "/projects/fitlog.webp",

    technologies: [],

    features: [
      "Fitness-focused user interface",
      "Workout and activity information",
      "Fitness activity exploration",
    ],

    liveUrl: "https://assignment-06-seven.vercel.app/",

    // Add the verified GitHub URL when available.
  },

  {
    id: 6,
    title: "Grocify",
    category: "Grocery Product Catalog",
    description:
      "A grocery shopping interface built with React and Vite, featuring product browsing, category filtering, search, sorting, and individual product pages.",

    image: "/projects/grocify.webp",

    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Icons",
    ],

    features: [
      "Grocery product catalog",
      "Product search",
      "Category and badge filtering",
      "Product sorting",
      "Individual product details",
    ],

    liveUrl: "https://grocify-website-omega.vercel.app/",

    githubUrl: "https://github.com/nuralam-dev/grocify-website",
  },
];
