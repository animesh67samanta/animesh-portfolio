export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "SiLaravel" | "TbApi" | "SiWordpress" | "SiWoocommerce" | "SiMysql" | "FiCpu";
  category: "Backend & Systems" | "APIs & Integration" | "Websites & CMS" | "E-Commerce" | "Data & Optimization";
  image: string;
  alt: string;
  technologies: string[];
  deliverables: string[];
  idealFor: string;
  ctaLabel: string;
  ctaLink: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "laravel-php-development",
    slug: "laravel-php-development",
    title: "Laravel & PHP Web Development",
    shortDescription:
      "Enterprise web applications, administrative ERP/CRM portals, and custom backend systems built with modern PHP 8 and Laravel 12.",
    fullDescription:
      "I architect modular, secure web applications tailored to business operations. Utilizing modern PHP 8, Laravel 12, strict type safety, and the service-repository pattern, I create maintainable platforms that easily scale as user demand grows.",
    iconName: "SiLaravel",
    category: "Backend & Systems",
    image: "/images/projects/thesmartgram_landing.png",
    alt: "Laravel Web Application Engineering Dashboard",
    technologies: ["Laravel 12", "PHP 8.2+", "MySQL", "Blade / Inertia", "Redis", "Eloquent ORM"],
    deliverables: [
      "Custom business web applications, ERP, and CRM platforms",
      "Role-Based Access Control (RBAC) and multi-guard authentication",
      "Modular domain architecture with service and repository patterns",
      "Automated queue jobs, scheduled CRON workers, and email notifications",
      "Dynamic PDF generation, document export, and audit trails",
      "Unit and feature testing for critical transaction workflows"
    ],
    idealFor: "Businesses and startups needing dependable, bespoke web applications that eliminate manual workflows.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  },
  {
    id: "rest-api-development",
    slug: "rest-api-development",
    title: "REST API Development & Integration",
    shortDescription:
      "High-throughput, secure RESTful APIs and microservice endpoints engineered for mobile apps, SPAs, and third-party systems.",
    fullDescription:
      "I design and implement resilient REST APIs following standard HTTP semantics, JSON:API formats, and strict token-based authentication. From connecting mobile applications to orchestrating third-party services, I build fast and documented endpoints.",
    iconName: "TbApi",
    category: "APIs & Integration",
    image: "/images/projects/water_tax_performace.png",
    alt: "REST API Architecture and Integration Workflow",
    technologies: ["RESTful APIs", "Laravel Sanctum / JWT", "FastAPI", "JSON:API", "Postman", "Rate Limiting"],
    deliverables: [
      "Secure API token authentication and refresh mechanisms via Sanctum",
      "Third-party payment gateway integration (Razorpay, Stripe, PayPal)",
      "Real-time webhook receivers, payload validation, and event handling",
      "IP-based rate limiting, input sanitization, and request throttling",
      "Interactive Postman collections and OpenAPI / Swagger documentation",
      "Database query caching via Redis for millisecond response times"
    ],
    idealFor: "Companies needing backend APIs for mobile applications, frontend SPAs, or third-party service connections.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  },
  {
    id: "business-websites-cms",
    slug: "business-websites-cms",
    title: "Business Websites & CMS Development",
    shortDescription:
      "Search-optimized corporate websites and bespoke Content Management Systems built on WordPress or custom headless stacks.",
    fullDescription:
      "I build custom, responsive business websites that load fast, rank well on Google, and convert visitors into clients. Instead of bloated multi-purpose themes, I develop clean custom WordPress implementations and lightweight headless websites.",
    iconName: "SiWordpress",
    category: "Websites & CMS",
    image: "/images/projects/the_samrtgram.png",
    alt: "Corporate Website and Content Management System",
    technologies: ["WordPress", "PHP", "ACF Pro", "Custom Themes", "Next.js / Headless", "Tailwind CSS"],
    deliverables: [
      "Bespoke WordPress theme tailored to your exact brand guidelines",
      "Advanced Custom Fields (ACF) setup for effortless client content editing",
      "Mobile-first, responsive layouts achieving 90+ Core Web Vitals scores",
      "On-page technical SEO, semantic HTML, and schema markup integration",
      "Custom post types, taxonomy filtering, and search functionality",
      "Hardened WordPress security and automated daily backup routines"
    ],
    idealFor: "Firms looking to establish an authoritative online presence with an easy-to-manage content workflow.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortDescription:
      "Scalable online stores and shopping platforms engineered with WooCommerce or custom Laravel backends with secure checkouts.",
    fullDescription:
      "I engineer e-commerce platforms that provide seamless shopping experiences. From custom product variant configurators to friction-free checkouts with automated invoicing, I build storefronts that turn visitors into repeat customers.",
    iconName: "SiWoocommerce",
    category: "E-Commerce",
    image: "/images/projects/manyavar.png",
    alt: "E-commerce Online Store and Shopping Cart Platform",
    technologies: ["WooCommerce", "Laravel", "MySQL", "Razorpay / Stripe", "Redis Session Caching", "Tailwind CSS"],
    deliverables: [
      "Custom product catalog with dynamic attribute filters and search",
      "Frictionless single-page checkout with guest checkout support",
      "Payment gateway integration with instant webhook reconciliation",
      "Automated PDF invoice generation and branded customer email notices",
      "Stock inventory management, backorder controls, and low-stock alerts",
      "Optimized cart and session storage for high-traffic sale events"
    ],
    idealFor: "Retailers and brands wanting a reliable, custom online store with zero transaction fee lock-in.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  },
  {
    id: "database-design-migration",
    slug: "database-design-migration",
    title: "Database Design & Data Migration",
    shortDescription:
      "Normalized relational database schemas, query indexing, and safe ETL data migration routines for mission-critical systems.",
    fullDescription:
      "A fast web application requires a well-structured database foundation. I design normalized relational schemas, resolve slow N+1 query bottlenecks, create composite indexes, and execute risk-free data migrations between legacy systems and modern databases.",
    iconName: "SiMysql",
    category: "Data & Optimization",
    image: "/images/projects/property_tax.png",
    alt: "Relational Database Schema Design and Query Optimization",
    technologies: ["MySQL 8", "PostgreSQL", "SQLite", "Database Indexing", "ETL Pipelines", "Data Migration"],
    deliverables: [
      "Third Normal Form (3NF) relational schema design and entity mapping",
      "Foreign key constraints, indexing strategies, and partition planning",
      "Slow query log analysis, EXPLAIN query auditing, and execution tuning",
      "Custom ETL migration scripts with zero-data-loss checksum verification",
      "Database replication, automated snapshot backups, and point-in-time recovery",
      "Data sanitation, anonymization for staging, and schema version control"
    ],
    idealFor: "Organizations upgrading legacy software or suffering from sluggish database queries and high server load.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  },
  {
    id: "maintenance-performance-optimization",
    slug: "maintenance-performance-optimization",
    title: "Website Maintenance & Performance Optimization",
    shortDescription:
      "Proactive security patching, Core Web Vitals optimization, server tuning, and continuous monitoring to keep platforms running smoothly.",
    fullDescription:
      "Web platforms require consistent updates, security patching, and speed tuning. I provide proactive maintenance, PHP runtime upgrades, database housekeeping, and frontend optimization to guarantee rapid loading times and zero downtime.",
    iconName: "FiCpu",
    category: "Data & Optimization",
    image: "/images/projects/website_sequrity.png",
    alt: "Application Maintenance, Security Hardening and Speed Optimization",
    technologies: ["Core Web Vitals", "PHP-FPM Tuning", "Redis Caching", "Security Hardening", "Cloudflare", "CRON Automation"],
    deliverables: [
      "Core Web Vitals performance overhaul (FCP, LCP, CLS, and INP fixes)",
      "PHP and framework version upgrades with zero downtime deployments",
      "Server-level security hardening, firewalls, and SSL certificate renewals",
      "Proactive uptime monitoring and real-time error log alerting",
      "Automated off-site database backups with regular restoration tests",
      "Dedicated developer hours for ongoing feature enhancements and bug fixes"
    ],
    idealFor: "Business owners who want uninterrupted reliability and lightning-fast speeds without worrying about technical maintenance.",
    ctaLabel: "Contact for a Quote",
    ctaLink: "#quote"
  }
];

