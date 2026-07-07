/**
 * Skill data, grouped by category.
 * Icons are referenced by name and resolved with lucide-react in the UI.
 */
export const skillGroups = [
  {
    category: "Frontend",
    icon: "MonitorSmartphone",
    blurb: "Crafting responsive, accessible and delightful user interfaces.",
    skills: [
      { name: "React", note: "Component-driven UIs with hooks & router", icon: "Atom", color: "#61DAFB" },
      { name: "Tailwind CSS", note: "Utility-first, design-system styling", icon: "Wind", color: "#38BDF8" },
      { name: "JavaScript", note: "ES6+, async patterns, DOM", icon: "Braces", color: "#F7DF1E" },
      { name: "HTML & CSS", note: "Semantic markup & modern layouts", icon: "Code2", color: "#E34F26" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    blurb: "Building reliable APIs and server-side logic.",
    skills: [
      { name: "Node.js", note: "Express REST APIs & tooling", icon: "Hexagon", color: "#5FA04E" },
      { name: "Java", note: "OOP & robust application logic", icon: "Coffee", color: "#F89820" },
      { name: "Spring Boot", note: "Production-ready REST services", icon: "Leaf", color: "#6DB33F" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    blurb: "Modeling and querying data with confidence.",
    skills: [
      { name: "PostgreSQL", note: "Relational design & SQL", icon: "Database", color: "#4169E1" },
      { name: "MySQL", note: "Relational data for web apps", icon: "Database", color: "#00758F" },
    ],
  },
  {
    category: "Tools & Architecture",
    icon: "Workflow",
    blurb: "Shipping with the right workflow and system design.",
    skills: [
      { name: "Git & GitHub", note: "Version control & collaboration", icon: "GitBranch", color: "#F05032" },
      { name: "Microservices", note: "Scalable, decoupled services", icon: "Boxes", color: "#A78BFA" },
    ],
  },
];

/**
 * Flat preview list used on the Home page skills section.
 */
export const skillPreview = [
  { name: "React", category: "UI Library", icon: "Atom", color: "#61DAFB" },
  { name: "Node.js", category: "Runtime", icon: "Hexagon", color: "#83CD29" },
  { name: "Java", category: "Language", icon: "Coffee", color: "#F89820" },
  { name: "Spring Boot", category: "Framework", icon: "Leaf", color: "#6DB33F" },
  { name: "Tailwind CSS", category: "Styling", icon: "Wind", color: "#38BDF8" },
  { name: "PostgreSQL", category: "Database", icon: "Database", color: "#4169E1" },
  { name: "Git", category: "Versioning", icon: "GitBranch", color: "#F05032" },
  { name: "Microservices", category: "Architecture", icon: "Boxes", color: "#A78BFA" },
];
