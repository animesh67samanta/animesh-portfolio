export type SkillCategory =
  | "Backend"
  | "Database"
  | "Frontend"
  | "Mobile"
  | "CMS & Tools";

export type SkillLevel = "Expert" | "Advanced" | "Proficient";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  iconName: string;
  level: SkillLevel;
  experience?: string;
  description: string;
  tags: string[];
  highlight?: string;
  accentColor?: string;
}

export const skillCategories: { id: SkillCategory | "All"; label: string; count?: number }[] = [
  { id: "All", label: "All Skills" },
  { id: "Backend", label: "Backend" },
  { id: "Database", label: "Database" },
  { id: "Frontend", label: "Frontend" },
  { id: "Mobile", label: "Mobile" },
  { id: "CMS & Tools", label: "CMS & Tools" },
];

/**
 * Technical skills showcased in the interactive 3D Spatial Gallery.
 * Easily add, remove, or reorder skills in this array.
 */
export const skillsData: SkillItem[] = [
  // ==========================================
  // BACKEND
  // ==========================================
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    iconName: "SiLaravel",
    level: "Expert",
    experience: "3+ Years",
    description: "Enterprise Laravel (v8-v12), clean architecture, Eloquent ORM, custom Artisan commands, event listeners, and domain-driven design.",
    tags: ["Laravel 12", "Eloquent", "Artisan", "Clean Arch"],
    highlight: "Primary Backend Specialization",
    accentColor: "#f43f5e"
  },
  {
    id: "php",
    name: "PHP",
    category: "Backend",
    iconName: "SiPhp",
    level: "Expert",
    experience: "3+ Years",
    description: "Modern PHP 8+ engine, strict typing, OOP design patterns, attributes, memory management, and high-throughput server backends.",
    tags: ["PHP 8.2+", "OOP", "Composer", "Type Safety"],
    highlight: "Core Language Mastery",
    accentColor: "#818cf8"
  },
  {
    id: "core-php",
    name: "Core PHP",
    category: "Backend",
    iconName: "FaPhp",
    level: "Expert",
    experience: "3+ Years",
    description: "Deep native PHP fundamentals, procedural-to-OOP migration, custom MVC routing engines, secure session handling, and raw database abstraction.",
    tags: ["Vanilla PHP", "Custom MVC", "Sessions", "Security"],
    highlight: "Deep Native Foundations",
    accentColor: "#6366f1"
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    iconName: "TbApi",
    level: "Expert",
    experience: "3+ Years",
    description: "High-performance RESTful API design, Sanctum token authentication, JSON API resources, rate-limiting middleware, and third-party integrations.",
    tags: ["Sanctum", "JSON Spec", "Rate Limiting", "Endpoints"],
    highlight: "Enterprise Architecture",
    accentColor: "#06b6d4"
  },
  {
    id: "queues-jobs",
    name: "Queues & Async Jobs",
    category: "Backend",
    iconName: "LuWorkflow",
    level: "Expert",
    experience: "2+ Years",
    description: "Asynchronous background queues, Redis drivers, scheduled CRON jobs, and automated batch processing systems with retry safeguards.",
    tags: ["Redis Queues", "CRON Schedulers", "Workers", "Failover"],
    highlight: "High-Throughput Automation",
    accentColor: "#38bdf8"
  },

  // ==========================================
  // DATABASE
  // ==========================================
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    iconName: "SiMysql",
    level: "Expert",
    experience: "3+ Years",
    description: "Relational modeling, multi-table JOIN optimization, composite indexing strategies, stored procedures, and ACID transaction safety.",
    tags: ["InnoDB", "Indexing", "Normalization", "Stored Procs"],
    highlight: "High-Concurrency Relational",
    accentColor: "#0284c7"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    iconName: "SiPostgresql",
    level: "Advanced",
    experience: "2+ Years",
    description: "Advanced relational schemas, JSONB semi-structured data stores, window functions, complex aggregations, and strict concurrency isolation.",
    tags: ["JSONB", "Transactions", "Window Functions", "Full-Text"],
    highlight: "Advanced Analytics & Storage",
    accentColor: "#3b82f6"
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    iconName: "FiDatabase",
    level: "Expert",
    experience: "3+ Years",
    description: "Complex query optimization, EXPLAIN plan diagnostics, 40%+ latency reductions, triggers, views, and bilingual database design.",
    tags: ["Query Tuning", "EXPLAIN Plans", "Data Integrity", "Triggers"],
    highlight: "40%+ Latency Optimization",
    accentColor: "#06b6d4"
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    iconName: "SiRedis",
    level: "Advanced",
    experience: "2+ Years",
    description: "In-memory caching architectures, atomic locks, distributed session persistence, queue worker backing, and pub/sub message brokers.",
    tags: ["In-Memory Caching", "Atomic Locks", "Pub/Sub", "Sessions"],
    highlight: "Sub-Millisecond Caching",
    accentColor: "#ef4444"
  },

  // ==========================================
  // FRONTEND
  // ==========================================
  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    iconName: "SiHtml5",
    level: "Expert",
    experience: "3+ Years",
    description: "Semantic HTML5 architecture, WAI-ARIA accessibility compliance, structured data tags, and high-performance DOM structure.",
    tags: ["Semantic HTML", "WAI-ARIA", "Accessibility", "SEO Tags"],
    highlight: "Accessible Core Standards",
    accentColor: "#f97316"
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    iconName: "SiCss",
    level: "Expert",
    experience: "3+ Years",
    description: "Modern CSS3 specifications, Flexbox, Grid, 3D CSS transforms, responsive design, dark mode theming, and smooth GPU-accelerated keyframe animations.",
    tags: ["3D Transforms", "Flexbox/Grid", "Custom Properties", "Animations"],
    highlight: "Fluid Responsive Styling",
    accentColor: "#38bdf8"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Frontend",
    iconName: "SiBootstrap",
    level: "Expert",
    experience: "3+ Years",
    description: "Enterprise admin dashboard styling, responsive multi-breakpoint layouts, custom SCSS theming, modals, and rapid component delivery.",
    tags: ["Bootstrap 5", "Admin Portals", "Responsive Grid", "SCSS"],
    highlight: "Enterprise Admin Portals",
    accentColor: "#a855f7"
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    iconName: "SiJavascript",
    level: "Expert",
    experience: "3+ Years",
    description: "Modern asynchronous JavaScript, Promises, async/await, DOM events, zero-reload AJAX form handling, and modular client logic.",
    tags: ["ES6+", "Async/Await", "AJAX", "Event Loop"],
    highlight: "Interactive Frontends",
    accentColor: "#eab308"
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    iconName: "SiReact",
    level: "Advanced",
    experience: "2+ Years",
    description: "Component architecture, hooks, state management, client-side routing, Next.js server components, and dynamic user interfaces.",
    tags: ["React 19", "Hooks", "SPA", "Next.js"],
    highlight: "Modern Component Engineering",
    accentColor: "#06b6d4"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    iconName: "SiTailwindcss",
    level: "Advanced",
    experience: "2+ Years",
    description: "Modern utility-first styling systems, custom design tokens, dark mode variants, and lightweight, performant UI components.",
    tags: ["Utility-First", "Dark Mode", "Custom Tokens", "PostCSS"],
    highlight: "Modern Design Velocity",
    accentColor: "#06b6d4"
  },

  // ==========================================
  // MOBILE
  // ==========================================
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile",
    iconName: "TbBrandReactNative",
    level: "Advanced",
    experience: "1+ Years",
    description: "Cross-platform mobile applications for iOS & Android, native bridge integration, mobile navigation stacks, and offline state management.",
    tags: ["iOS & Android", "Native Modules", "Mobile Navigation", "Offline First"],
    highlight: "Cross-Platform Mobile Apps",
    accentColor: "#38bdf8"
  },
  {
    id: "expo",
    name: "Expo",
    category: "Mobile",
    iconName: "SiExpo",
    level: "Advanced",
    experience: "1+ Years",
    description: "Expo application ecosystem, managed workflows, EAS cloud builds, Over-The-Air (OTA) updates, and hardware sensor API integrations.",
    tags: ["Managed Workflow", "EAS Build", "Push Notifications", "Hardware APIs"],
    highlight: "Rapid Mobile Deployment",
    accentColor: "#6366f1"
  },

  // ==========================================
  // CMS & TOOLS
  // ==========================================
  {
    id: "wordpress",
    name: "WordPress",
    category: "CMS & Tools",
    iconName: "SiWordpress",
    level: "Expert",
    experience: "3+ Years",
    description: "Bespoke theme and plugin engineering from scratch, custom WooCommerce checkout workflows, action hooks, filters, and caching speed tuning.",
    tags: ["Custom Themes", "Plugins", "WooCommerce", "Action Hooks"],
    highlight: "Bespoke Theme & Plugin Dev",
    accentColor: "#38bdf8"
  },
  {
    id: "git",
    name: "Git",
    category: "CMS & Tools",
    iconName: "SiGit",
    level: "Expert",
    experience: "3+ Years",
    description: "Advanced version control workflows, feature branching, interactive rebasing, merge conflict resolution, and commit hygiene.",
    tags: ["Version Control", "Rebasing", "Branching", "Git Hooks"],
    highlight: "Clean Code History",
    accentColor: "#f43f5e"
  },
  {
    id: "github",
    name: "GitHub",
    category: "CMS & Tools",
    iconName: "SiGithub",
    level: "Expert",
    experience: "3+ Years",
    description: "Open-source collaboration, pull request reviews, automated GitHub Actions CI/CD pipelines, release automation, and issue management.",
    tags: ["GitHub Actions", "Pull Requests", "CI/CD", "Releases"],
    highlight: "Collaborative Pipelines",
    accentColor: "#a855f7"
  },
  {
    id: "composer",
    name: "Composer",
    category: "CMS & Tools",
    iconName: "SiComposer",
    level: "Expert",
    experience: "3+ Years",
    description: "PHP package management, PSR-4 autoloading configurations, semantic version constraints, private package repositories, and security audits.",
    tags: ["PSR-4", "Dependency Tree", "Package Publishing", "Autoloading"],
    highlight: "PHP Package Ecosystem",
    accentColor: "#ca8a04"
  },
  {
    id: "docker",
    name: "Docker",
    category: "CMS & Tools",
    iconName: "SiDocker",
    level: "Advanced",
    experience: "2+ Years",
    description: "Containerized development environments, multi-stage Dockerfiles for PHP/Nginx/MySQL, docker-compose orchestration, and isolated testing.",
    tags: ["Docker Compose", "LEMP Containers", "Multi-Stage", "Microservices"],
    highlight: "Reproducible Environments",
    accentColor: "#0284c7"
  },
  {
    id: "postman",
    name: "Postman",
    category: "CMS & Tools",
    iconName: "SiPostman",
    level: "Expert",
    experience: "3+ Years",
    description: "Comprehensive API test suites, environment variables, automated collection runners, mock servers, and interactive documentation.",
    tags: ["API Testing", "Collection Runners", "Environment Scripts", "Specs"],
    highlight: "Automated API QA",
    accentColor: "#f97316"
  }
];

