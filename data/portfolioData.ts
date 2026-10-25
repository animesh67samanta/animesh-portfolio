export interface Project {
  id: string;
  title: string;
  category: "Enterprise & Gov" | "Healthcare" | "E-Commerce" | "Media & Tools";
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architectureDetails?: {
    overview: string;
    keyModules: string[];
    databaseInsights: string;
    securityNotes: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  workType: "On-site" | "Remote" | "Hybrid";
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  category: "Backend" | "Frontend" | "Databases" | "DevOps & Tools" | "APIs & Integrations" | "CMS";
  iconName: string;
  level: "Expert" | "Advanced" | "Proficient";
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  certId?: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Animesh Samanta",
    greeting: "Hello, I'm",
    role: "Laravel Backend Developer | PHP Developer",
    secondaryRoles: [
      "Laravel 12 & Clean Architecture",
      "High-Performance REST APIs",
      "Database Optimization & Redis",
      "Automated Queues, Jobs & CRON",
      "Spatie RBAC & Payment Gateways"
    ],
    shortBio:
      "Laravel Backend Developer with 3+ years of experience architecting resilient web applications, RESTful APIs, ERP modules, tax automation platforms, and queue processing systems. Dedicated to clean code, robust database design, and high-throughput workflows.",
    fullBio:
      "I specialize in Laravel and modern PHP ecosystem engineering, bridging complex business requirements with bulletproof backend architectures. Over the past 3+ years, I have architected mission-critical municipal tax platforms that slashed manual processing by 65%, optimized database queries by 40%, built healthcare appointment systems with real-time slot locking, and integrated secure payment gateways and AI endpoints.",
    location: "Kolkata, India",
    email: "animesh67samanta@gmail.com",
    phone: "+91 9126577584",
    avatar: "/images/avatar.png",
    heroBg: "/images/hero-3d-bg.png",
    resumePdf: "/resume/animesh-samanta-resume.pdf",
    availability: "Available for Full-time & Remote Roles",
    socialLinks: {
      github: "https://github.com/animeshsamanta",
      linkedin: "https://www.linkedin.com/in/animesh-samanta",
      email: "mailto:animesh67samanta@gmail.com",
      phone: "tel:+919126577584"
    }
  },

  metrics: [
    { label: "Years Experience", value: "3+", detail: "In Laravel, PHP & Full-Stack Systems" },
    { label: "Production Platforms", value: "6+", detail: "Enterprise, Gov & Healthcare Systems" },
    { label: "Manual Workload Cut", value: "65%", detail: "In Municipal Tax Automation" },
    { label: "Query Speed Gain", value: "40%", detail: "Via Complex JOIN & Index Optimization" }
  ],

  services: [
    {
      id: "laravel-architecture",
      title: "Laravel Application Architecture",
      icon: "SiLaravel",
      description:
        "Building modular, scalable backend applications adhering to Repository Pattern, Service Layers, clean routing, and domain-driven practices using Laravel 12 and PHP 8+.",
      deliverables: [
        "Modular architecture & service layer setup",
        "Custom artisan commands & event-driven design",
        "Spatie RBAC & multi-guard authorization",
        "Full test coverage & maintainable codebases"
      ]
    },
    {
      id: "rest-apis",
      title: "High-Performance RESTful APIs",
      icon: "TbApi",
      description:
        "Architecting secure, token-authenticated (Sanctum/JWT) REST APIs with strict validation, API resources, rate limiting, and seamless mobile/SPA integration.",
      deliverables: [
        "Sanctum token-based authentication",
        "Standardized JSON API Resource transformations",
        "CORS, rate limiting & error handling middleware",
        "Postman collection documentation"
      ]
    },
    {
      id: "database-optimization",
      title: "Database Design & Query Tuning",
      icon: "SiMysql",
      description:
        "Crafting normalized relational schemas in MySQL/SQL Server, diagnosing slow queries, structuring indexes, and integrating Redis for caching and session speed.",
      deliverables: [
        "Relational schema modeling & foreign constraints",
        "40%+ query latency reduction via EXPLAIN profiling",
        "Redis caching strategies & key invalidation",
        "Bilingual & internationalization schema support"
      ]
    },
    {
      id: "queue-automation",
      title: "Queue Processing & Cron Jobs",
      icon: "LuWorkflow",
      description:
        "Decoupling heavy computing from HTTP cycles using Laravel Queues, background jobs, schedulers, and event listeners for peak system responsiveness.",
      deliverables: [
        "Asynchronous email, SMS, and PDF generation",
        "Automated yearly/monthly CRON synchronization",
        "Queue failure retries & Redis queue drivers",
        "Bulk CSV and Excel import workers"
      ]
    },
    {
      id: "payment-integrations",
      title: "Payment Gateways & Third-Party APIs",
      icon: "MdPayment",
      description:
        "Flawless integration with financial payment providers, SMS gateways, AI microservices, and courier tracking with strict transaction safety.",
      deliverables: [
        "Razorpay & PhonePe webhook & checkout flows",
        "FastAPI AI-driven content & recommendation pipelines",
        "Softzix SMS & transactional email notifications",
        "Blue-dart shipping tracking & webhook handling"
      ]
    },
    {
      id: "legacy-modernization",
      title: "Security Hardening & Code Modernization",
      icon: "SiOpenaccess",
      description:
        "Auditing existing PHP/Laravel codebases for vulnerabilities, upgrading legacy code to modern PHP 8/Laravel standards, and enforcing OWASP security.",
      deliverables: [
        "SQL injection, CSRF & XSS prevention",
        "Legacy PHP to modern Laravel refactoring",
        "Digital signature workflows on official documents",
        "Audit logging & tamper-evident record keeping"
      ]
    }
  ] as ServiceItem[],

  skills: [
    // Backend
    { name: "Laravel (v10 - v12)", category: "Backend", iconName: "SiLaravel", level: "Expert", description: "Architecture, Service Layer, Sanctum, Eloquent, Queues" },
    { name: "PHP 8+", category: "Backend", iconName: "SiPhp", level: "Expert", description: "OOP, Attributes, Type Safety, Namespaces, Modern Syntax" },
    { name: "RESTful APIs", category: "Backend", iconName: "TbApi", level: "Expert", description: "API Resources, Rate Limiting, Sanctum Tokens, JSON Specs" },
    { name: "Queues & Jobs", category: "Backend", iconName: "LuWorkflow", level: "Expert", description: "Async workers, event dispatching, failed job monitoring" },
    { name: "CRON & Schedulers", category: "Backend", iconName: "FiClock", level: "Expert", description: "Automated batch processing, yearly sync, custom commands" },
    { name: "Spatie & RBAC", category: "Backend", iconName: "FiShield", level: "Expert", description: "Guards, permissions, policy checks, multi-tenant roles" },
    { name: "OOP & Clean Arch", category: "Backend", iconName: "FiLayers", level: "Expert", description: "SOLID principles, repository patterns, DRY codebases" },
    { name: "Payment Gateways", category: "Backend", iconName: "MdPayment", level: "Advanced", description: "Razorpay, PhonePe checkout, webhooks & receipts" },
    
    // Databases
    { name: "MySQL", category: "Databases", iconName: "SiMysql", level: "Expert", description: "Schema design, indexing, foreign keys, stored procedures" },
    { name: "Query Optimization", category: "Databases", iconName: "FiZap", level: "Expert", description: "JOIN optimization, EXPLAIN analysis, query caching" },
    { name: "Redis", category: "Databases", iconName: "SiRedis", level: "Advanced", description: "Key-value caching, session storage, queue workers" },
    { name: "SQL Server", category: "Databases", iconName: "FiDatabase", level: "Proficient", description: "Relational queries, migrations, enterprise data sync" },
    { name: "Database Design", category: "Databases", iconName: "FiGrid", level: "Expert", description: "Normalization, ERD, bilingual schemas (_mr fields)" },

    // Frontend
    { name: "React.js", category: "Frontend", iconName: "SiReact", level: "Advanced", description: "Component lifecycle, state hooks, responsive interfaces" },
    { name: "Inertia.js", category: "Frontend", iconName: "SiInertia", level: "Advanced", description: "Seamless monolith SPA with Laravel & React/Vue" },
    { name: "Blade Templating", category: "Frontend", iconName: "SiLaravel", level: "Expert", description: "Components, layouts, directives, view caching" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss", level: "Advanced", description: "Modern responsive utility styling, dark mode" },
    { name: "JavaScript / ES6+", category: "Frontend", iconName: "SiJavascript", level: "Advanced", description: "Async/await, DOM manipulation, promises, fetch" },
    { name: "AJAX Form Handling", category: "Frontend", iconName: "FiRepeat", level: "Expert", description: "Zero-reload submissions, real-time validation, 50% faster" },
    { name: "TypeScript", category: "Frontend", iconName: "SiTypescript", level: "Proficient", description: "Type safety, interfaces, strict props typing" },
    { name: "Vue.js", category: "Frontend", iconName: "SiVuedotjs", level: "Proficient", description: "Reactive components, props, template syntax" },
    { name: "Bootstrap", category: "Frontend", iconName: "SiBootstrap", level: "Advanced", description: "Responsive grids, dashboard layouts, UI components" },

    // DevOps & Tools
    { name: "Git & GitHub", category: "DevOps & Tools", iconName: "SiGithub", level: "Expert", description: "Branching, PRs, version control, conflict resolution" },
    { name: "Postman", category: "DevOps & Tools", iconName: "SiPostman", level: "Expert", description: "API testing, automated runner collections, mock environments" },
    { name: "Docker", category: "DevOps & Tools", iconName: "SiDocker", level: "Proficient", description: "Containerized environments, docker-compose, PHP/MySQL" },
    { name: "Linux / Shell", category: "DevOps & Tools", iconName: "SiLinux", level: "Advanced", description: "Server administration, cron jobs, file permissions" },
    { name: "CI / CD", category: "DevOps & Tools", iconName: "FiTerminal", level: "Proficient", description: "Automated test runs, deployment hooks" },
    { name: "hPanel / cPanel / Plesk", category: "DevOps & Tools", iconName: "FiServer", level: "Expert", description: "Production deployments, SSL, DNS & database setup" },
    { name: "Jira & Bitbucket", category: "DevOps & Tools", iconName: "SiJira", level: "Advanced", description: "Sprint management, ticket tracking, code reviews" },

    // APIs & Integrations
    { name: "FastAPI / AI Integrations", category: "APIs & Integrations", iconName: "SiFastapi", level: "Advanced", description: "Connecting Laravel backend to AI models & suggestions" },
    { name: "Softzix SMS Gateway", category: "APIs & Integrations", iconName: "FiMessageSquare", level: "Expert", description: "Transactional SMS notifications, OTP, alerts" },
    { name: "Email Notifications", category: "APIs & Integrations", iconName: "FiMail", level: "Expert", description: "SMTP, Mailgun, dynamic PDF attachments, mailables" },
    { name: "PDF Generation (DOMPDF)", category: "APIs & Integrations", iconName: "FiFileText", level: "Expert", description: "Dynamic demand bills, tax slips, certificates" },
    { name: "Bulk Excel/CSV Engine", category: "APIs & Integrations", iconName: "FiFile", level: "Expert", description: "Maatwebsite Excel, chunked imports, export streams" },

    // CMS
    { name: "WordPress", category: "CMS", iconName: "SiWordpress", level: "Advanced", description: "Custom themes, plugins, REST API endpoints, hooks" },
    { name: "WooCommerce", category: "CMS", iconName: "SiWoocommerce", level: "Advanced", description: "E-commerce checkout customization, orders & inventory" }
  ] as SkillItem[],

  experiences: [
    {
      company: "Adgion Technology Pvt. Ltd.",
      role: "Laravel Developer",
      location: "Kolkata, India",
      workType: "On-site",
      period: "Recent Experience",
      summary:
        "Architecting robust enterprise REST APIs and web application modules using Laravel clean architecture, integrating AI endpoints, and hardening security.",
      achievements: [
        "Architected scalable REST APIs using Laravel and clean architecture principles to service web and mobile frontends.",
        "Built modular admin and user-facing portals combining Blade, Laravel, and responsive UI elements.",
        "Integrated AI-driven features including automatic content generation and intelligent suggestions powered by FastAPI.",
        "Secured external integrations including email providers, transactional notification streams, and OTP-based authentication.",
        "Implemented queue processing, asynchronous background jobs, domain events, and scheduled tasks to maximize application throughput."
      ],
      technologies: ["Laravel", "PHP 8", "REST APIs", "FastAPI (AI)", "Blade", "Queues & Jobs", "MySQL", "Postman", "Git"]
    },
    {
      company: "Aman Enterprises",
      role: "Laravel Developer",
      location: "Thane, Maharashtra, India",
      workType: "Remote",
      period: "Key Enterprise Engagement",
      summary:
        "Led the backend engineering of a comprehensive Property & Water Tax Management Platform, automating municipal computations and issuing digital certificates.",
      achievements: [
        "Architected a Laravel and MySQL-based Property Tax Management System that automated tax calculations, certificate issuance, and approval workflows, reducing manual processing time by over 65%.",
        "Built bulk import engines for property and previous tax records with computerized tax calculation and validation.",
        "Engineered automated PDF generation for tax slips, demand bills, and government certificates using DOMPDF.",
        "Created an officer approval workflow with digital signature integration for certificates and demand bills.",
        "Designed a bilingual database architecture supporting Marathi translations via _mr suffix schema fields for government compliance.",
        "Systematized annual tax synchronization across all wards through the custom 'hometax:sync' command via Laravel Scheduler & CRON."
      ],
      technologies: ["Laravel", "MySQL", "Blade", "Razorpay", "Softzix SMS", "CRON Jobs", "DOMPDF", "Maatwebsite Excel", "Sanctum"]
    },
    {
      company: "Bluehorse Software Solution Pvt. Ltd.",
      role: "PHP Web Developer",
      location: "West Medinipur, India",
      workType: "On-site",
      period: "Foundational Career Experience",
      summary:
        "Maintained and enhanced high-traffic Laravel and Core PHP applications, optimized databases, implemented payment gateways, and cut load times.",
      achievements: [
        "Maintained and enhanced complex Laravel and Core PHP applications, upgrading outdated codebases for marked response speed boosts.",
        "Collaborated tightly with a team of three developers to streamline sprint deliverables and reduce project delivery timelines.",
        "Customized commercial WordPress and WooCommerce themes, driving higher client satisfaction and retention.",
        "Modernized core features such as automated email notifications and Laravel cursor pagination, substantially lowering user complaints.",
        "Integrated PhonePe and Razorpay payment gateways, facilitating secure transactional processing for hundreds of users.",
        "Re-engineered form submission workflows using AJAX, cutting page load times by 50%."
      ],
      technologies: ["Core PHP", "Laravel", "MySQL", "AJAX", "WordPress", "Razorpay", "PhonePe", "Bootstrap", "Git"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "local-doctors",
      title: "Local Doctors - Telemedicine & Healthcare",
      category: "Healthcare",
      subtitle: "Modular Healthcare Platform with Token Auth & Real-Time Booking",
      description:
        "A full-stack enterprise healthcare platform engineered with Laravel 12, featuring Token-based Sanctum authentication, Role-Based Access Control (RBAC), and dynamic real-time slot availability for clinics, doctors, and patients.",
      highlights: [
        "Built with Laravel 12 using modular architecture and token-based Sanctum authentication.",
        "Implemented granular RBAC and specialized permissions for doctors, patients, and clinic administrators.",
        "Engineered real-time appointment booking engine preventing double-booking across schedules.",
        "Designed comprehensive lab test workflows: test catalog, online booking, sample tracking, and digital result delivery.",
        "Secure encrypted medical report storage, granular doctor-patient file access, and audit trail logs."
      ],
      technologies: ["Laravel 12", "MySQL", "Sanctum", "REST API", "Hostinger hPanel", "CRON Jobs", "DOMPDF", "OTP Auth"],
      metrics: "Real-time doctor appointment & lab booking with encrypted medical record vault",
      image: "/images/projects/local-doctors.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: true,
      architectureDetails: {
        overview:
          "Engineered using Laravel 12 modular domain architecture. Decoupled appointment booking engine, authentication service, and lab workflow pipeline with dedicated event listeners for notifications.",
        keyModules: [
          "Sanctum Multi-Guard Auth & OTP Verification",
          "Real-time Slot Locking & Appointment Scheduler",
          "Lab Test Tracking & Result PDF Generation",
          "Clinic Multi-Tenant Dashboard"
        ],
        databaseInsights:
          "Normalized schema with doctors, clinic_schedules, appointments, lab_orders, and encrypted patient_records tables indexed for fast availability lookups.",
        securityNotes:
          "Role-based middleware, encrypted health documents storage, strict MIME-type validation, and request throttling."
      }
    },
    {
      id: "smartgram-property",
      title: "The Smart Gram - Property Tax & Civic Registry",
      category: "Enterprise & Gov",
      subtitle: "Rural Panchayat Tax Automation & Certificate Issuance System",
      description:
        "An enterprise civic platform that automated rural property tax assessments, citizen demand bills, and official birth/death/marriage certificate issuance with digital signature workflows, cutting turnaround time from 4 days to 10 minutes.",
      highlights: [
        "Reduced certificate processing time by over 65% (from 3-4 days to under 10 minutes).",
        "Role-based access control with dedicated guards and middleware for Admin, Panchayat, and Field Officer roles.",
        "Bilingual database architecture using _mr suffix columns to seamlessly support Marathi and English.",
        "Officer approval pipeline with pending certificate queues, detailed review panels, and cryptographic digital signature embedding.",
        "Automated yearly tax synchronization via custom 'hometax:sync' Artisan command powered by Laravel Scheduler & CRON."
      ],
      technologies: ["Laravel", "Blade", "MySQL", "Razorpay", "Softzix SMS", "CRON Jobs", "DOMPDF", "Maatwebsite Excel"],
      metrics: "65%+ manual time reduction; 3-4 day turnaround cut to under 10 minutes",
      image: "/images/projects/smartgram-property.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: true,
      architectureDetails: {
        overview:
          "Built to modernize Panchayat governance. Implemented a 3-tier approval hierarchy (Admin, Panchayat Staff, Authorized Officer) with automated tax ledger updates.",
        keyModules: [
          "Automated Home Tax Calculation & Batch Demand Billing",
          "Birth, Death & Marriage Registry with DOMPDF Generation",
          "Digital Signature Workflow on Government Deeds",
          "Bilingual Marathi/English Dynamic Translation Engine"
        ],
        databaseInsights:
          "Comprehensive property records with annual assessment history, ward partitions, and dual-language columns (e.g. owner_name, owner_name_mr).",
        securityNotes:
          "Custom authorization policies, tamper-evident certificate serial numbers, and SMS verification on bill issuance."
      }
    },
    {
      id: "smartgram-water",
      title: "The Smart Gram - Water Tax & Metering System",
      category: "Enterprise & Gov",
      subtitle: "Civic Water Utility API with Queue-Based Batch Processing",
      description:
        "High-throughput civic utility API built with Laravel 12 and MySQL for managing thousands of rural water connections, bill calculations, automated collection workflows, and queue-driven bulk CSV uploads.",
      highlights: [
        "Built using Laravel 12, MySQL, Laravel Sanctum, and Spatie Laravel Permission.",
        "Planned clean architecture utilizing Repository Pattern, Service Layer, Jobs, and API Resources.",
        "Engineered queue-based bulk CSV/Excel ingestion allowing instantaneous uploads without server timeout.",
        "Automated recurring bill generation, payment ledger tracking, and delinquency alerts.",
        "Event-driven notifications sending real-time SMS and email confirmations on payment receipts."
      ],
      technologies: ["Laravel 12", "MySQL", "Spatie Permission", "RESTful API", "Laravel Queues", "Hostinger hPanel", "Bulk Excel"],
      metrics: "Asynchronous processing of thousands of connection records via Redis/database queues",
      image: "/images/projects/smartgram-water.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: true,
      architectureDetails: {
        overview:
          "Micro-service style API architecture structured around Spatie permissions, repository pattern for data access, and dedicated queue workers for batch processing.",
        keyModules: [
          "Connection Application & Meter Assignment Service",
          "Asynchronous Chunked CSV/Excel Import Pipeline",
          "Automated Monthly Billing Cron Worker",
          "Analytics & Collection Reconciliation Endpoints"
        ],
        databaseInsights:
          "Indexed meter_readings, water_connections, and billing_invoices tables with optimized foreign keys ensuring sub-100ms queries.",
        securityNotes:
          "Spatie permission-based route guards, Sanctum bearer tokens, and rate-limited API endpoints."
      }
    },
    {
      id: "earning-handle",
      title: "Earning Handle - Multi-Tier Affiliate & E-Commerce",
      category: "E-Commerce",
      subtitle: "Multi-Level Earning Platform & Commission Calculation Engine",
      description:
        "RESTful API suite powering a multi-tiered e-commerce and referral earning network, featuring dynamic commission distribution calculations, wallet withdrawals, and complex JOIN query optimizations.",
      highlights: [
        "Architected complete RESTful APIs for user onboarding, product catalog, affiliate trees, and payout wallets.",
        "Built mathematical commission distribution engine calculating multi-tier referral bonuses instantaneously.",
        "Optimized complex relational JOIN queries, slicing server response times by 40%.",
        "Secure token authentication and strict payload validation to prevent unauthorized withdrawal attempts.",
        "Automated payout audit logs and balance reconciliation."
      ],
      technologies: ["Laravel", "MySQL", "REST API", "Postman", "Query Tuning", "Token Auth", "Redis"],
      metrics: "40% reduction in API response times through SQL indexing and query restructuring",
      image: "/images/projects/earning-handle.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: true,
      architectureDetails: {
        overview:
          "Engineered to handle recursive tree traversals for affiliate referral bonuses without causing N+1 query bottlenecks.",
        keyModules: [
          "Recursive Referral Tree Traversal & Bonus Engine",
          "Digital Wallet & Withdrawal Request Pipeline",
          "Product Catalog & Order Management Endpoints",
          "Real-Time Payout Validation & Fraud Prevention"
        ],
        databaseInsights:
          "Denormalized commission balances with atomic transactions (DB::transaction) and comprehensive query indexing on user referral paths.",
        securityNotes:
          "Double-entry bookkeeping model for ledger consistency, anti-race condition locks, and token-based API authentication."
      }
    },
    {
      id: "mumbai-votes",
      title: "Mumbai Votes - Civic Portal & Video Transcoding",
      category: "Media & Tools",
      subtitle: "Civic Candidate Directory with Coordinate Maps & Media Transcoding",
      description:
        "A civic candidate information portal built in PHP MVC with automated media transcoding (converting legacy .flv video assets to modern .mp4 streams) and geolocation coordinate mapping for voters.",
      highlights: [
        "Engineered custom batch video conversion utility transcoding .flv to .mp4 format for single uploads or entire server folders.",
        "Configured interactive mapping with area coordinates for location-based constituency information.",
        "Built responsive administrative panel to manage candidate bios, track election records, and publish civic updates.",
        "Optimized video delivery for standard mobile browsers without requiring third-party hosting."
      ],
      technologies: ["PHP", "MVC Architecture", "FFmpeg / Transcoder", "Maps API", "MySQL", "JavaScript", "Bootstrap"],
      metrics: "Automated batch conversion of legacy civic video repositories to mobile-ready MP4",
      image: "/images/projects/mumbai-votes.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: false,
      architectureDetails: {
        overview:
          "Modular MVC application integrating CLI media conversion utilities and GIS coordinate presentation for public accountability.",
        keyModules: [
          "Video Transcoder Pipeline (.flv to .mp4 batch worker)",
          "Constituency & Candidate Map Geolocation Interface",
          "Administrative Moderation & Publishing CMS"
        ],
        databaseInsights:
          "Candidate profiles linked with geographic polygon coordinates, historical track records, and media attachments.",
        securityNotes:
          "Strict file extension and mime inspection before shell execution, sanitized inputs, and admin role authorization."
      }
    },
    {
      id: "manyavar",
      title: "Manyavar - Enterprise Retail Inventory & ERP Module",
      category: "Enterprise & Gov",
      subtitle: "High-Scale Retail Web App with RBAC & Courier Logistics",
      description:
        "Maintained and enhanced core backend and frontend modules for the Manyavar apparel retail ecosystem, handling role-based permission tiers, Blue-dart courier shipping integrations, and high-volume CSV synchronization.",
      highlights: [
        "Maintained and enhanced enterprise Laravel application handling front-end workflows and backend fulfillment.",
        "Configured robust Role-Based Access Control (RBAC) ensuring precise privileges across sales, warehouse, and management tiers.",
        "Built bidirectional CSV data import/export engines for high-volume inventory reconciliation and audit reports.",
        "Crafted interactive data tables utilizing AJAX and Laravel pagination for friction-free inventory navigation.",
        "Integrated Blue-dart courier tracking webhooks and automated status alerts."
      ],
      technologies: ["Laravel", "MySQL", "Blue-dart API", "Bulk CSV/Excel", "AJAX", "CRON Jobs", "Plesk", "Jira", "Bitbucket"],
      metrics: "Zero-downtime inventory reconciliations and automated courier status updates",
      image: "/images/projects/manyavar.png",
      githubUrl: "https://github.com/animeshsamanta",
      liveUrl: "https://github.com/animeshsamanta",
      featured: false,
      architectureDetails: {
        overview:
          "Enterprise ERP maintenance and feature development in an agile team using Jira and Bitbucket pipelines on Plesk servers.",
        keyModules: [
          "Inventory Reconciliation & Chunked CSV Exporter",
          "Blue-dart Logistics & Order Tracking Sync",
          "Interactive AJAX Data Tables with Cursor Pagination",
          "Warehouse RBAC & Permission Middleware"
        ],
        databaseInsights:
          "Optimized inventory SKU tables with composite keys and indexed timestamps to prevent lock contention during mass imports.",
        securityNotes:
          "Role authorization middleware, audit tracking of stock adjustments, and secure webhook signature verification."
      }
    }
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Institute of Science and Technology (WBUT)",
      location: "Chondokona Town, West Bengal, India",
      period: "07/2017 – 07/2020",
      details: "Comprehensive coursework in Database Management Systems, Data Structures, Software Engineering, Object-Oriented Programming, and Web Technologies."
    },
    {
      degree: "Higher Secondary (Commerce)",
      institution: "Ghatal Vidyasagar High School (WBCHSE)",
      location: "Ghatal, Paschim Medinipur, West Bengal, India",
      period: "04/2012 – 05/2014",
      details: "Business mathematics, accountancy, economics, and quantitative analysis."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Build an AI Agent with MCP and RAG",
      provider: "Edureka",
      certId: "RZ268B3P",
      description: "Advanced program covering Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG), embeddings, and orchestrating autonomous AI agent workflows."
    },
    {
      title: "PHP & MySQL Professional Training",
      provider: "Ardent Computech Pvt. Ltd.",
      certId: "ACPL/1657/2019",
      description: "Hands-on engineering certification. Designed, developed, and deployed the project 'Secured Vegetable and Fruit Ordering System' with relational database modeling."
    }
  ] as CertificationItem[],

  languages: [
    { name: "English", proficiency: "Advanced / Professional", level: 4 },
    { name: "Hindi", proficiency: "Advanced / Professional", level: 4 },
    { name: "Bengali", proficiency: "Native / Bilingual", level: 5 }
  ],

  emailJsConfig: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
  }
};
