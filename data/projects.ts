export interface Project {
  id: string;
  title: string;
  category: "Enterprise & Gov" | "Healthcare" | "Developer Tools & CLI" | "E-Commerce" | "Media & Tools";
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  image: string;
  imagePosition?: string;
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

export const projects: Project[] = [
  {
    id: "devgit",
    title: "DevGit - Safer Git Assistant & Terminal UI",
    category: "Developer Tools & CLI",
    subtitle: "Ergonomic Go CLI, Keyboard-Driven Terminal UI & SQLite Command Auditing",
    description:
      "DevGit is an open-source, safer, developer-friendly Git assistant pairing an ergonomic Go/Cobra CLI with an interactive keyboard-driven Bubble Tea & Lip Gloss terminal dashboard, embedded SQLite metadata auditing, and conservative safeguards against accidental data loss.",
    highlights: [
      "Interactive Terminal UI: Keyboard-driven dashboard powered by Bubble Tea & Lip Gloss with 6 direct view tabs (Dashboard, Status, Branches, Log, Diff, Stashes).",
      "Safe Push & Pull: Remote synchronization with ahead/behind tracking, upstream branch discovery, protected branch safeguards, and fast-forward only updates.",
      "Guarded Branch & Stash Engine: Intuitive branch listing, safe switching with dirty working-tree protection, guarded deletion, and non-destructive stash stack controls.",
      "Embedded SQLite Metadata Auditing: Zero-config SQLite database for command execution metrics, runtime durations, and persistent UI preferences (never storing repository secrets).",
      "Pure Go Cross-Platform Binaries: Cross-compiled via GoReleaser with SHA256 checksums for macOS (Apple Silicon M1-M4 & Intel), Linux, and Windows."
    ],
    technologies: ["Go", "Cobra CLI", "Bubble Tea", "Lip Gloss", "SQLite", "Git CLI", "GoReleaser", "GitHub Actions"],
    metrics: "6 Target Architectures • Zero Data-Loss Safeguards • Interactive TUI",
    image: "/images/projects/devgit.png",
    githubUrl: "https://github.com/animesh67samanta/devgit",
    liveUrl: "https://github.com/animesh67samanta/devgit/releases/latest",
    featured: true,
    architectureDetails: {
      overview:
        "DevGit is architected around a strict principle: official Git CLI is the single source of truth for all repository state, while Cobra CLI and Bubble Tea TUI drive the user experience and SQLite acts as an operational metadata store.",
      keyModules: [
        "Cobra CLI Layer: Subcommands (status, diff, log, commit, push, pull, branch, stash, tui, config, history, db) and shell completions for Bash, Zsh, Fish, and PowerShell.",
        "Bubble Tea Interactive TUI: Full terminal dashboard with 6 views, quick navigation (1-6, Tab, h/j/k/l), safe actions (p for safe push, P/u for safe pull, r for refresh), and Lip Gloss styling.",
        "internal/git: Execution of external Git commands using structured argument arrays (exec.Command) without shell interpretation, preventing command injection.",
        "internal/database: Embedded zero-configuration SQLite database for command execution history, duration metrics, and persistent UI preferences."
      ],
      databaseInsights:
        "SQLite strictly stores DevGit's operational metadata (command runtime, exit status, and UI settings). It never stores Git objects, diffs, file contents, credentials, or secrets. DevGit functions normally even if SQLite is disabled, locked, or unavailable.",
      securityNotes:
        "All external commands execute with structured arguments avoiding shell interpretation (sh -c / bash -c). Push and branch operations enforce pre-flight safety checks (upstream verification, uncommitted changes protection, and guarded branch/stash deletion)."
    }
  },
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
    image: "/images/projects/local_doctor_booking.png",
    githubUrl: "https://github.com/animesh67samanta",
    liveUrl: "https://github.com/animesh67samanta",
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
    image: "/images/projects/property_tax.png",
    githubUrl: "https://github.com/animesh67samanta",
    liveUrl: "https://github.com/animesh67samanta",
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
    image: "/images/projects/water_tax_performace.png",
    githubUrl: "https://github.com/animesh67samanta",
    liveUrl: "https://github.com/animesh67samanta",
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
    id: "rajneta",
    title: "Raajneta - Civic Engagement & Political Updates Platform",
    category: "Enterprise & Gov",
    subtitle: "Citizen Civic Engagement, Political News Updates & Electoral Insights",
    description:
      "A comprehensive civic and political communication platform designed to connect citizens with elected representatives, deliver verified real-time governance updates, explain welfare schemes, and provide transparent constituency election insights.",
    highlights: [
      "Real-time verified political updates, civic announcements, policy rollouts, and community issue tracking.",
      "Categorized directory of government schemes & welfare services with eligibility criteria and application guides.",
      "Representative connect portal enabling citizens to follow constituency leaders and monitor local initiatives.",
      "Election insights dashboard offering transparent candidate profiles and historical voting data."
    ],
    technologies: ["Laravel", "MySQL", "RESTful APIs", "Sanctum Auth", "FastAPI (AI)", "Softzix SMS", "Blade / Mobile API"],
    metrics: "Real-time verified political feeds, candidate directory, and civic welfare guides",
    image: "/images/projects/rajneta.png",
    imagePosition: "object-top",
    githubUrl: "https://github.com/animesh67samanta",
    liveUrl: "https://github.com/animesh67samanta",
    featured: true,
    architectureDetails: {
      overview:
        "Engineered as a high-concurrency civic portal pairing Laravel REST APIs with mobile applications and an admin moderation desk, delivering timely governance updates, scheme discovery, and public accountability.",
      keyModules: [
        "Constituency & Candidate Directory Engine",
        "Welfare Schemes & Eligibility Knowledge Base",
        "Verified News Moderation & Push Notification Pipeline",
        "Token-Based Sanctum Mobile Authentication"
      ],
      databaseInsights:
        "Relational database optimized for regional partitioning, constituency lookups, fast full-text searching on welfare schemes, and cached news feeds using Redis.",
      securityNotes:
        "Sanctum bearer token authentication, request throttling, content moderation workflows, and strict role-based access for editors and administrators."
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
    githubUrl: "https://github.com/animesh67samanta",
    liveUrl: "https://github.com/animesh67samanta",
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
  // {
  //   id: "mumbai-votes",
  //   title: "Mumbai Votes - Civic Portal & Video Transcoding",
  //   category: "Media & Tools",
  //   subtitle: "Civic Candidate Directory with Coordinate Maps & Media Transcoding",
  //   description:
  //     "A civic candidate information portal built in PHP MVC with automated media transcoding (converting legacy .flv video assets to modern .mp4 streams) and geolocation coordinate mapping for voters.",
  //   highlights: [
  //     "Engineered custom batch video conversion utility transcoding .flv to .mp4 format for single uploads or entire server folders.",
  //     "Configured interactive mapping with area coordinates for location-based constituency information.",
  //     "Built responsive administrative panel to manage candidate bios, track election records, and publish civic updates.",
  //     "Optimized video delivery for standard mobile browsers without requiring third-party hosting."
  //   ],
  //   technologies: ["PHP", "MVC Architecture", "FFmpeg / Transcoder", "Maps API", "MySQL", "JavaScript", "Bootstrap"],
  //   metrics: "Automated batch conversion of legacy civic video repositories to mobile-ready MP4",
  //   image: "/images/projects/mumbai-votes.png",
  //   githubUrl: "https://github.com/animesh67samanta",
  //   liveUrl: "https://github.com/animesh67samanta",
  //   featured: false,
  //   architectureDetails: {
  //     overview:
  //       "Modular MVC application integrating CLI media conversion utilities and GIS coordinate presentation for public accountability.",
  //     keyModules: [
  //       "Video Transcoder Pipeline (.flv to .mp4 batch worker)",
  //       "Constituency & Candidate Map Geolocation Interface",
  //       "Administrative Moderation & Publishing CMS"
  //     ],
  //     databaseInsights:
  //       "Candidate profiles linked with geographic polygon coordinates, historical track records, and media attachments.",
  //     securityNotes:
  //       "Strict file extension and mime inspection before shell execution, sanitized inputs, and admin role authorization."
  //   }
  // },
  // {
  //   id: "manyavar",
  //   title: "Manyavar - Enterprise Retail Inventory & ERP Module",
  //   category: "Enterprise & Gov",
  //   subtitle: "High-Scale Retail Web App with RBAC & Courier Logistics",
  //   description:
  //     "Maintained and enhanced core backend and frontend modules for the Manyavar apparel retail ecosystem, handling role-based permission tiers, Blue-dart courier shipping integrations, and high-volume CSV synchronization.",
  //   highlights: [
  //     "Maintained and enhanced enterprise Laravel application handling front-end workflows and backend fulfillment.",
  //     "Configured robust Role-Based Access Control (RBAC) ensuring precise privileges across sales, warehouse, and management tiers.",
  //     "Built bidirectional CSV data import/export engines for high-volume inventory reconciliation and audit reports.",
  //     "Crafted interactive data tables utilizing AJAX and Laravel pagination for friction-free inventory navigation.",
  //     "Integrated Blue-dart courier tracking webhooks and automated status alerts."
  //   ],
  //   technologies: ["Laravel", "MySQL", "Blue-dart API", "Bulk CSV/Excel", "AJAX", "CRON Jobs", "Plesk", "Jira", "Bitbucket"],
  //   metrics: "Zero-downtime inventory reconciliations and automated courier status updates",
  //   image: "/images/projects/manyavar.png",
  //   githubUrl: "https://github.com/animesh67samanta",
  //   liveUrl: "https://github.com/animesh67samanta",
  //   featured: false,
  //   architectureDetails: {
  //     overview:
  //       "Enterprise ERP maintenance and feature development in an agile team using Jira and Bitbucket pipelines on Plesk servers.",
  //     keyModules: [
  //       "Inventory Reconciliation & Chunked CSV Exporter",
  //       "Blue-dart Logistics & Order Tracking Sync",
  //       "Interactive AJAX Data Tables with Cursor Pagination",
  //       "Warehouse RBAC & Permission Middleware"
  //     ],
  //     databaseInsights:
  //       "Optimized inventory SKU tables with composite keys and indexed timestamps to prevent lock contention during mass imports.",
  //     securityNotes:
  //       "Role authorization middleware, audit tracking of stock adjustments, and secure webhook signature verification."
  //   }
  // }
];
