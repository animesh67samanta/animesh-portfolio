import { projects, Project } from "./projects";
import { skillsData, SkillItem } from "./skillsData";

export type { Project, SkillItem };

export interface ExperienceItem {
  company: string;
  companyLogo?: string;
  role: string;
  employmentType: "On-site" | "Remote" | "Hybrid" | string;
  workType?: "On-site" | "Remote" | "Hybrid";
  startDate?: string;
  endDate?: string;
  period: string;
  location: string;
  description: string;
  summary?: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
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
    role: "Laravel Developer | PHP Developer",
    secondaryRoles: [
      "Author of DevGit CLI (Go & TUI)",
      "Laravel 12 & Clean Architecture",
      "High-Performance REST APIs",
      "Database Optimization & Redis",
      "Automated Queues, Jobs & CRON",
      "Spatie RBAC & Payment Gateways"
    ],
    shortBio:
      "Laravel Developer & Open Source Contributor with 3+ years of experience architecting resilient web applications, RESTful APIs, ERP modules, CLI tools, and queue processing systems. Dedicated to clean code, robust database design, and high-throughput workflows.",
    fullBio:
      "I specialize in Laravel and modern backend ecosystem engineering, bridging complex business requirements with bulletproof architectures. Alongside enterprise platforms, I am the author of DevGit—an open-source Go CLI and interactive terminal UI with conservative safeguards for safer daily developer workflows. Over the past 3+ years, I have architected mission-critical municipal tax platforms that slashed manual processing by 65%, optimized database queries by 40%, built healthcare appointment systems with real-time slot locking, and integrated secure payment gateways and AI endpoints.",
    location: "Kolkata, India",
    email: "animesh67samanta@gmail.com",
    phone: "+91 9126577584",
    avatar: "/images/avatar.png",
    heroBg: "/images/hero-3d-bg.png",
    resumePdf: "/resume/animesh-samanta-resume.pdf",
    availability: "Available for Full-time & Remote Roles",
    socialLinks: {
      github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/animesh67samanta",
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/animesh-samanta-296b24211",
      facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/animesh67samanta",
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
      id: "custom-web-apps",
      title: "Custom Web Applications & Full-Stack Development",
      icon: "SiReact",
      description:
        "Engineering responsive, end-to-end web applications combining high-performance Laravel/PHP backends with dynamic React.js interfaces to digitize operations and scale business growth.",
      deliverables: [
        "End-to-end full-stack web applications (Laravel + React)",
        "Mobile-responsive, accessible, and intuitive UI/UX design",
        "Role-based customer dashboards & administrative control panels",
        "State management, client-side caching & instant transitions"
      ]
    },
    {
      id: "erp-crm-cms",
      title: "ERP, CRM & Custom CMS Systems",
      icon: "FiGrid",
      description:
        "Developing centralized business management portals, CRM pipelines, ERP modules, and content management platforms tailored to your exact operational workflows and organizational hierarchy.",
      deliverables: [
        "Custom ERP module architecture (Inventory, Operations, Staff)",
        "CRM pipeline tracking, lead conversion & customer activity logs",
        "Granular Spatie RBAC & multi-tier authorization matrix",
        "Bilingual / localization support & audit-proof data tracking"
      ]
    },
    {
      id: "billing-software",
      title: "Billing Software & Invoicing Engines",
      icon: "MdReceiptLong",
      description:
        "Automating municipal and commercial billing calculations, GST/tax computation, demand bill generation, payment reconciliation, and digital certificate delivery to eliminate manual accounting errors.",
      deliverables: [
        "Automated demand bill & invoice PDF generation (DOMPDF)",
        "Complex tax algorithms, discount rules & penalty calculations",
        "Direct payment gateway reconciliation (Razorpay, PhonePe)",
        "Financial ledger synchronization & accounting audit reports"
      ]
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation & Operations Digitization",
      icon: "LuWorkflow",
      description:
        "Replacing repetitive paperwork, manual spreadsheets, and approval delays with automated digital workflows, background queues, and scheduled jobs that slash manual workload by 65%+.",
      deliverables: [
        "Multi-stage digital approval workflows with digital signatures",
        "Asynchronous queue processing (jobs, notifications, PDF renders)",
        "Automated yearly/monthly CRON synchronization engines",
        "Bulk chunked CSV/Excel ingestion & validation pipelines"
      ]
    },
    {
      id: "wordpress-websites",
      title: "Custom WordPress Websites & E-Commerce",
      icon: "SiWordpress",
      description:
        "Building fast, high-converting, and SEO-optimized custom WordPress websites, bespoke theme and plugin development, and scalable WooCommerce storefronts.",
      deliverables: [
        "Custom WordPress theme & plugin development from scratch",
        "WooCommerce store setup, checkout customization & gateways",
        "Speed optimization, query caching & security hardening",
        "Headless WordPress setups & custom REST API endpoints"
      ]
    },
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

  skills: skillsData,

  experiences: [
    {
      company: "Adgion Technology Pvt. Ltd.",
      companyLogo: undefined,
      role: "Laravel Developer",
      employmentType: "On-site",
      workType: "On-site",
      startDate: "Recent",
      endDate: "Present",
      period: "Recent Experience",
      location: "Kolkata, India",
      description:
        "Architecting robust enterprise REST APIs and web application modules using Laravel clean architecture, integrating AI endpoints, and hardening security.",
      summary:
        "Architecting robust enterprise REST APIs and web application modules using Laravel clean architecture, integrating AI endpoints, and hardening security.",
      responsibilities: [
        "Architected scalable REST APIs using Laravel and clean architecture principles to service web and mobile frontends.",
        "Built modular admin and user-facing portals combining Blade, Laravel, and responsive UI elements.",
        "Integrated AI-driven features including automatic content generation and intelligent suggestions powered by FastAPI.",
        "Secured external integrations including email providers, transactional notification streams, and OTP-based authentication.",
        "Implemented queue processing, asynchronous background jobs, domain events, and scheduled tasks to maximize application throughput."
      ],
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
      companyLogo: undefined,
      role: "Laravel Developer",
      employmentType: "Remote",
      workType: "Remote",
      startDate: "Enterprise",
      endDate: "Key Engagement",
      period: "Key Enterprise Engagement",
      location: "Thane, Maharashtra, India",
      description:
        "Led the backend engineering of a comprehensive Property & Water Tax Management Platform, automating municipal computations and issuing digital certificates.",
      summary:
        "Led the backend engineering of a comprehensive Property & Water Tax Management Platform, automating municipal computations and issuing digital certificates.",
      responsibilities: [
        "Architected a Laravel and MySQL-based Property Tax Management System that automated tax calculations, certificate issuance, and approval workflows, reducing manual processing time by over 65%.",
        "Built bulk import engines for property and previous tax records with computerized tax calculation and validation.",
        "Engineered automated PDF generation for tax slips, demand bills, and government certificates using DOMPDF.",
        "Created an officer approval workflow with digital signature integration for certificates and demand bills.",
        "Designed a bilingual database architecture supporting Marathi translations via _mr suffix schema fields for government compliance.",
        "Systematized annual tax synchronization across all wards through the custom 'hometax:sync' command via Laravel Scheduler & CRON."
      ],
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
      companyLogo: undefined,
      role: "PHP Web Developer",
      employmentType: "On-site",
      workType: "On-site",
      startDate: "Foundational",
      endDate: "Career Experience",
      period: "Foundational Career Experience",
      location: "West Medinipur, India",
      description:
        "Maintained and enhanced high-traffic Laravel and Core PHP applications, optimized databases, implemented payment gateways, and cut load times.",
      summary:
        "Maintained and enhanced high-traffic Laravel and Core PHP applications, optimized databases, implemented payment gateways, and cut load times.",
      responsibilities: [
        "Maintained and enhanced complex Laravel and Core PHP applications, upgrading outdated codebases for marked response speed boosts.",
        "Collaborated tightly with a team of three developers to streamline sprint deliverables and reduce project delivery timelines.",
        "Customized commercial WordPress and WooCommerce themes, driving higher client satisfaction and retention.",
        "Modernized core features such as automated email notifications and Laravel cursor pagination, substantially lowering user complaints.",
        "Integrated PhonePe and Razorpay payment gateways, facilitating secure transactional processing for hundreds of users.",
        "Re-engineered form submission workflows using AJAX, cutting page load times by 50%."
      ],
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

  projects,

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
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_lz916ok",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_s0qct88",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "FO50ce2ZmWgQGlQmx"
  }
};
