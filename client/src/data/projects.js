/**
 * Project portfolio. `status` controls the badge:
 *  - "live"     → deployed & linkable
 *  - "wip"      → work in progress
 */
export const projects = [
  {
    title: "PharmaHub",
    tagline: "Healthcare platform (in progress)",
    description:
      "Patients waste time calling around to find which pharmacy actually has their medicine in stock. PharmaHub (work in progress) lets users search a medicine and instantly locate the nearest pharmacies that have it, with real-time inventory.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Docker"],
    status: "wip",
    accent: "from-amber-500/30 to-orange-500/10",
    image: "/pharmahub.png",
    icon: "HeartPulse",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    title: "E-Prescription System",
    tagline: "Digital prescriptions for hospitals",
    description:
      "Handwritten prescriptions are easy to forge and hard for pharmacies to trust. This system lets hospitals issue secure online prescriptions and powers PharmaHub's validation — so pharmacies can confirm an uploaded prescription is genuine before dispensing.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    status: "wip",
    accent: "from-sky-500/30 to-blue-600/10",
    image: "/Hospital.png",
    icon: "ClipboardPlus",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Plant Disease Detector",
    tagline: "AI-powered plant disease detection",
    description:
      "Farmers and gardeners often detect plant diseases too late and lose crops to wrong or delayed treatment. This app lets anyone photograph a leaf and instantly get an AI diagnosis with treatment and prevention guidance — catching problems early.",
    tags: ["HTML5", "CSS", "JavaScript", "React", "Node.js"],
    status: "live",
    accent: "from-emerald-500/30 to-teal-500/10",
    image: "/plant-disease-detector.png",
    icon: "Leaf",
    liveUrl: "https://plant-disease-detector-sigma.vercel.app/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Flower Shop Website",
    tagline: "Frontend e-commerce experience",
    description:
      "Many small flower shops have no online presence, so customers can't browse arrangements or packages before visiting. This responsive site gives a luxury flower shop an elegant storefront to showcase its blooms, packages and story.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    accent: "from-pink-500/30 to-rose-500/10",
    image: "/flower-shop.png",
    icon: "Flower2",
    liveUrl: "https://edenmersha2721-byte.github.io/Flower-shop/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Ethiopia Tourism",
    tagline: "Tourism web application",
    description:
      "Travelers struggle to discover Ethiopia's top destinations and book trips from one place. This web app promotes the country's best spots, letting users explore destinations, browse galleries and book tours with ease.",
    tags: ["React", "Node.js", "MySQL"],
    status: "live",
    accent: "from-sky-500/30 to-cyan-500/10",
    image: "/tourism.png",
    icon: "Plane",
    liveUrl: "https://tourism-landing-fz4z.vercel.app/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Portfolio Website",
    tagline: "This very site",
    description:
      "Recruiters and clients need one professional place to see my skills, projects and reach me directly. This portfolio showcases my work and routes every contact message to a real Node.js + PostgreSQL backend.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    status: "live",
    accent: "from-blue-500/30 to-blue-600/10",
    image: "/portfolio.png",
    icon: "LayoutDashboard",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
];
