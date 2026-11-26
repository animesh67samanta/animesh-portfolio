/**
 * Centralized Media & Project Configuration for the Professional Services Page.
 *
 * Update images, video links, titles, and descriptions directly in this file.
 * - For images: Reference paths under /public (e.g. /images/projects/example.png).
 * - For videos: Configure YouTube URLs, Vimeo URLs, or local videos under /public/videos/.
 *   Set videoType to "youtube", "vimeo", "local", or "placeholder".
 */

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  metrics?: string;
  projectUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  alt: string;
  duration?: string;
  videoType: "youtube" | "vimeo" | "local" | "placeholder";
  /**
   * Video URL or ID:
   * - YouTube: Full URL e.g. "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
   * - Vimeo: Full URL e.g. "https://vimeo.com/VIDEO_ID"
   * - Local: Path starting from public e.g. "/videos/demo.mp4"
   * - Placeholder: Leave empty ("") to show the placeholder guidance dialog.
   */
  videoUrl: string;
  projectUrl?: string;
  technologies: string[];
  isPlaceholder: boolean;
  notes?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  icon: "FiMessageSquare" | "FiCompass" | "FiCode" | "FiCheckCircle" | "FiShield";
}

export interface WhyWorkWithMeBenefit {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  icon: "FiCode" | "FiDatabase" | "FiCpu" | "FiLayout" | "FiZap" | "FiUsers";
}

/**
 * Real project showcase entries referencing actual portfolio assets.
 */
export const selectedProjectsShowcase: ProjectShowcaseItem[] = [
  {
    id: "smartgram-property",
    title: "Municipal Property Tax Automation & GIS Platform",
    category: "Civic Infrastructure & Tax Engines",
    clientType: "Local Municipal Governance",
    description:
      "Enterprise municipal assessment platform computing tax liabilities, automating GIS property boundary inspections, and producing instantaneous QR-coded digital tax invoices.",
    image: "/images/projects/property_tax.png",
    alt: "Municipal Property Tax Assessment and Management System",
    technologies: ["Laravel 12", "MySQL", "Leaflet.js", "DOMPDF", "Bootstrap"],
    metrics: "40% reduction in manual assessment processing time",
    projectUrl: "/projects/smartgram-property",
    liveUrl: "https://thesmartgram.com",
    featured: true
  },
  {
    id: "local-doctors",
    title: "Telemedicine & Real-time Doctor Booking Portal",
    category: "Healthcare & Appointment Systems",
    clientType: "Private Clinics & Health Networks",
    description:
      "Multi-tenant clinical booking platform with Sanctum token authentication, dynamic doctor availability calendars, automated conflict prevention, and encrypted report vaults.",
    image: "/images/projects/local_doctor_booking.png",
    alt: "Local Doctors Appointment Booking and Telemedicine Portal",
    technologies: ["Laravel 12", "MySQL", "REST API", "Sanctum", "OTP Auth"],
    metrics: "Zero double-booking conflicts across clinic doctors",
    projectUrl: "/projects/local-doctors",
    featured: true
  },
  {
    id: "devgit",
    title: "DevGit - Terminal UI & Safe Git CLI Assistant",
    category: "Developer Tools & Terminal UIs",
    clientType: "Open-Source Engineering",
    description:
      "Cross-platform Git assistant written in Go featuring a keyboard-driven Bubble Tea terminal UI, guarded branch operations, and embedded SQLite command execution auditing.",
    image: "/images/projects/devgit.png",
    alt: "DevGit Terminal UI Dashboard with Bubble Tea and Lip Gloss",
    technologies: ["Go", "Cobra CLI", "Bubble Tea", "Lip Gloss", "SQLite"],
    metrics: "Cross-compiled pure Go binary for macOS, Linux, and Windows",
    projectUrl: "/projects/devgit",
    liveUrl: "https://github.com/animesh67samanta/devgit",
    featured: true
  },
  {
    id: "smartgram-water",
    title: "Automated Water Tax & Utility Billing System",
    category: "Billing Software & Payment Gateways",
    clientType: "Public Utility Board",
    description:
      "Civic utility management engine featuring automated monthly tariff computations, Razorpay online gateway reconciliation, SMS notices, and automated PDF demand bills.",
    image: "/images/projects/water_tax_performace.png",
    alt: "Automated Water Tax and Civic Utility Billing System",
    technologies: ["Laravel", "MySQL", "Razorpay", "DOMPDF", "CRON Jobs"],
    metrics: "Automated monthly recurring generation for hundreds of households",
    projectUrl: "/projects/smartgram-water",
    featured: false
  },
  {
    id: "manyavar",
    title: "Manyavar Luxury Ethnic Apparel E-Commerce Store",
    category: "E-Commerce & Retail",
    clientType: "Fashion & Retail",
    description:
      "High-traffic apparel storefront featuring customized WooCommerce cart workflows, product variant matrix pricing, and high-performance MySQL query caching.",
    image: "/images/projects/manyavar.png",
    alt: "Manyavar Ethnic Apparel E-Commerce Platform",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "REST API"],
    metrics: "Optimized checkout flow with seamless multi-currency support",
    projectUrl: "/projects/manyavar",
    featured: false
  },
  {
    id: "the-smartgram",
    title: "The SmartGram Municipal Citizen Portal",
    category: "Civic Portal & Digital Governance",
    clientType: "Civic Administration",
    description:
      "Citizen-facing digital services hub supporting online document verification, grievance registration, tax balance lookups, and administrative municipal announcements.",
    image: "/images/projects/thesmartgram_landing.png",
    alt: "The SmartGram Civic Administration Landing Page",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Tailwind CSS"],
    metrics: "Unified civic hub serving thousands of local citizens",
    projectUrl: "/projects/smartgram-property",
    liveUrl: "https://thesmartgram.com",
    featured: false
  }
];

/**
 * Centralized video showcase entries.
 *
 * Replace empty strings with your YouTube, Vimeo, or local video links when ready.
 * When isPlaceholder is true or videoUrl is empty, clicking displays an informative
 * dialog directing to code repositories or case studies.
 */
export const videoShowcaseItems: VideoShowcaseItem[] = [
  {
    id: "devgit-demo",
    title: "DevGit Terminal UI & Safety Safeguards Walkthrough",
    subtitle: "Interactive Go TUI in Action",
    description:
      "A deep dive into DevGit's keyboard-driven Bubble Tea dashboard, exploring interactive branch management, diff inspections, and non-destructive stash workflows.",
    thumbnail: "/images/projects/devgit.png",
    alt: "DevGit Interactive Terminal UI Demonstration",
    duration: "Demo Ready",
    videoType: "placeholder",
    videoUrl: "", // Paste YouTube/Vimeo embed URL or local video path here
    projectUrl: "/projects/devgit",
    technologies: ["Go", "Bubble Tea", "Cobra CLI"],
    isPlaceholder: true,
    notes: "Update videoUrl with your YouTube/Vimeo link or local file in /public/videos/"
  },
  {
    id: "property-tax-demo",
    title: "Municipal Property Tax Engine & Assessment Workflow",
    subtitle: "Civic Calculation & Instant PDF Generation",
    description:
      "Walkthrough of the municipal property tax calculation engine, showing ward categorization, automated arrears calculations, and on-the-fly PDF invoice generation.",
    thumbnail: "/images/projects/property_tax.png",
    alt: "Municipal Property Tax Engine Workflow Demonstration",
    duration: "Demo Ready",
    videoType: "placeholder",
    videoUrl: "", // Paste YouTube/Vimeo embed URL or local video path here
    projectUrl: "/projects/smartgram-property",
    technologies: ["Laravel 12", "MySQL", "DOMPDF"],
    isPlaceholder: true,
    notes: "Update videoUrl with your YouTube/Vimeo link or local file in /public/videos/"
  },
  {
    id: "local-doctors-demo",
    title: "Local Doctors Clinic Management & Conflict-Free Booking",
    subtitle: "Real-time Slot Locking & Patient Records",
    description:
      "Demonstration of the appointment scheduling engine preventing double-booking, doctor slot configurations, and secure patient medical document handling.",
    thumbnail: "/images/projects/local_doctor_booking.png",
    alt: "Local Doctors Clinic Booking System Demonstration",
    duration: "Demo Ready",
    videoType: "placeholder",
    videoUrl: "", // Paste YouTube/Vimeo embed URL or local video path here
    projectUrl: "/projects/local-doctors",
    technologies: ["Laravel 12", "Sanctum", "REST API"],
    isPlaceholder: true,
    notes: "Update videoUrl with your YouTube/Vimeo link or local file in /public/videos/"
  }
];

/**
 * 5-Step Project Workflow.
 */
export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Requirement Discussion",
    timeline: "Days 1–3",
    description:
      "We begin with a detailed discovery session to understand your business objectives, target users, data requirements, and technical constraints.",
    deliverables: [
      "Discovery notes & functional requirements document",
      "Technology stack recommendation",
      "Scope alignment and project roadmap"
    ],
    icon: "FiMessageSquare"
  },
  {
    step: "02",
    title: "Scope & Planning",
    timeline: "Days 4–7",
    description:
      "I formulate the database schema design, system architecture, API endpoints, milestone breakdown, and a transparent fixed timeline and quote.",
    deliverables: [
      "Relational database schema blueprint (ERD)",
      "API route contracts & integration specs",
      "Milestone schedule with clear milestones"
    ],
    icon: "FiCompass"
  },
  {
    step: "03",
    title: "Development",
    timeline: "Sprint Execution",
    description:
      "Iterative sprint development with clean Laravel / PHP code, strict Git version control, and frequent staging demos so you can track real progress.",
    deliverables: [
      "Clean, modular codebase following best practices",
      "Accessible staging environment for review",
      "Weekly progress updates and demo recordings"
    ],
    icon: "FiCode"
  },
  {
    step: "04",
    title: "Testing & Review",
    timeline: "Pre-Release Verification",
    description:
      "Comprehensive testing across user flows, database query performance, responsive mobile devices, and security vulnerability checks.",
    deliverables: [
      "Validation of edge cases and critical flows",
      "Mobile and cross-browser responsiveness checks",
      "Database query speed & indexing review"
    ],
    icon: "FiCheckCircle"
  },
  {
    step: "05",
    title: "Delivery & Support",
    timeline: "Launch & Maintenance",
    description:
      "Smooth production deployment, domain and SSL setup, technical documentation handoff, and ongoing support to ensure zero disruption.",
    deliverables: [
      "Production deployment to your server or cloud host",
      "Full documentation and configuration guide",
      "Post-launch warranty and ongoing support options"
    ],
    icon: "FiShield"
  }
];

/**
 * 6 Practical Benefits of Working With Animesh Samanta.
 */
export const whyWorkWithMeBenefits: WhyWorkWithMeBenefit[] = [
  {
    id: "maintainable-code",
    title: "Maintainable Laravel & PHP Applications",
    shortTag: "Clean Architecture",
    description:
      "Built with modular service-repository patterns, strict types, and standard conventions so any engineering team can easily maintain and extend your software.",
    icon: "FiCode"
  },
  {
    id: "thoughtful-database",
    title: "Thoughtful Database Design",
    shortTag: "Data Integrity & Speed",
    description:
      "Properly normalized relational schemas with composite indexing, foreign keys, and query optimization that prevent deadlocks as your dataset grows.",
    icon: "FiDatabase"
  },
  {
    id: "reliable-apis",
    title: "Reliable API Integration",
    shortTag: "Robust Endpoints",
    description:
      "Secure RESTful APIs with Sanctum token authentication, error handling, rate limiting, and seamless connections to payment gateways and third-party services.",
    icon: "FiCpu"
  },
  {
    id: "responsive-interfaces",
    title: "Responsive, User-Friendly Interfaces",
    shortTag: "Intuitive UI/UX",
    description:
      "Clean, modern layouts styled with Tailwind CSS or Bootstrap that load quickly and deliver intuitive experiences across mobile, tablet, and desktop screens.",
    icon: "FiLayout"
  },
  {
    id: "performance-conscious",
    title: "Performance-Conscious Implementation",
    shortTag: "Core Web Vitals",
    description:
      "Streamlined assets, server-side caching with Redis, and optimized backend query pipelines ensuring rapid response times and excellent PageSpeed scores.",
    icon: "FiZap"
  },
  {
    id: "clear-communication",
    title: "Clear Project Communication",
    shortTag: "Direct & Transparent",
    description:
      "Direct developer communication without intermediary confusion. Transparent sprint milestones, honest timelines, and timely status reports throughout.",
    icon: "FiUsers"
  }
];

