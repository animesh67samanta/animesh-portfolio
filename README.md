# Animesh Samanta — Modern Developer Portfolio & Case Studies

[![Production URL](https://img.shields.io/badge/Production%20Website-animeshsamanta.is--a.dev-06b6d4?style=flat&logo=vercel)](https://animeshsamanta.is-a.dev/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-61dafb?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Production-grade, high-performance developer portfolio website, technical case-study directory, and professional services hub engineered with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Three.js (React Three Fiber)**, **Google Analytics 4 (GA4)**, and **Enterprise Security Headers**.

Built for **Animesh Samanta** — **Laravel & PHP Developer** with 3+ years of experience architecting high-throughput REST APIs, municipal civic tax automation platforms, database query optimizations, and queue processing systems. Author of **[DevGit](https://github.com/animesh67samanta/devgit)** (open-source Go CLI & TUI).

---

## 🌟 Highlights & Features

### 1. Dedicated Professional Services Hub (`/services`)
- **Comprehensive Service Offerings**:
  1. *Laravel & PHP Web Development* (Modular clean architecture, service-repository pattern, RBAC)
  2. *REST API Development & Integration* (Sanctum tokens, third-party payment gateways, OpenAPI)
  3. *Business Websites & CMS Development* (Custom WordPress themes, ACF Pro, headless Next.js)
  4. *E-commerce Development* (WooCommerce & custom Laravel checkout pipelines)
  5. *Database Design & Data Migration* (3NF normalization, slow query indexing, ETL migrations)
  6. *Website Maintenance & Performance Optimization* (Core Web Vitals, security hardening, backups)
- **Centralized Code-Managed Media**:
  - All services, projects, and media are managed via typed TypeScript configuration files ([`data/services.ts`](./data/services.ts) and [`data/service-media.ts`](./data/service-media.ts)).
  - Interactive **Video & Interface Showcase** supporting YouTube, Vimeo, local `/public/videos/`, and graceful developer configuration fallbacks.
  - **Zero Initial Video Payload**: Embedded video players mount strictly on-demand when clicked, preventing any initial page weight penalty.
- **5-Step Milestone Workflow**: Requirement Discussion $\to$ Scope & Planning $\to$ Development $\to$ Testing & Review $\to$ Delivery & Support.
- **Custom Quote Enquiry Flow**: Interactive quote request form integrated with the server-side contact API endpoint, with direct email and call channels.
- **Structured Data**: Schema.org `ProfessionalService` and `OfferCatalog` JSON-LD schemas for high-ranking service rich snippets.

### 2. Pillar-Cluster SEO & Canonical Architecture
- **Homepage (`/`)**: Core personal branding, 3D interactive hero, skills matrix, career timeline, and project teasers.
- **Projects Index Hub (`/projects`)**: Complete directory of enterprise applications and developer tools.
- **Individual Case Studies (`/projects/[id]`)**: Deep-dive technical breakdowns, database schemas, security blueprints, and high-res screenshot galleries.
- **Services Hub (`/services`)**: Business solutions, video walkthroughs, and custom quotation requests.
- **Dynamic XML Sitemap (`/sitemap.xml`)**: Automatically indexes all canonical routes with weekly/monthly update frequencies.
- **RFC 9309-Compliant `robots.txt`**: Standardized search engine crawler instructions.
- **Google Search Console**: Verified via `/google7f3ea9cf085dc8a3.html`.

### 3. Redesigned Experience Showcase (Hitit-Inspired)
- **Elevated Aesthetics**: Modern dark charcoal cards featuring blurred ambient gradient lighting (amber, olive, and teal tones), monogram brand emblems, and verified deliverable checklists.
- **Dual View Modes**:
  - *Spotlight Slider*: Company tabs (01 Adgion, 02 Aman, 03 Bluehorse), previous/next controls, and keyboard navigation ($\leftarrow$ / $\rightarrow$).
  - *Stacked View*: Clean, vertically stacked cards displaying complete employment records at once.
- **Natural, Untrapped Scrolling**: Completely free of scroll-hijacking—mouse wheel, trackpad, and touch gestures scroll the page smoothly without trapping vertical progress.

### 4. Rigorous Performance & Core Web Vitals Optimization
- **Next.js Native Image Pipeline**: Enabled WebP/AVIF generation with custom device viewport breakpoints; removed legacy `unoptimized` flags.
- **Sharp Asset Compression**: Reduced raw image payload from **27+ MB to ~2.1 MB** (92% reduction) using [`scripts/optimize-images.mjs`](./scripts/optimize-images.mjs).
- **Three.js WebGL Deferral**: Defers heavy 3D globe assets (~945 KB JavaScript) to `requestIdleCallback` on desktop, and serves an optimized static visual on mobile to eliminate mobile CPU throttling and minimize Total Blocking Time (TBT).
- **SSR-Painted LCP Content**: Hero headings and status indicators render immediately in initial server HTML without Framer Motion zero-opacity delays.
- **Zero Layout Thrashing**: Scroll listeners throttled via `requestAnimationFrame` with state gates to eliminate forced synchronous layouts.
- **Dynamic Section Code-Splitting**: Below-the-fold components ([`Projects`](./components/sections/Projects.tsx), [`Services`](./components/sections/Services.tsx), [`ResumeSection`](./components/sections/ResumeSection.tsx), [`Contact`](./components/sections/Contact.tsx)) loaded with `next/dynamic`.

### 5. Enterprise Security Hardening
- **Strict Content Security Policy (CSP)**:
  - Whitelists analytics (`googletagmanager.com`, `google-analytics.com`, `vercel-insights.com`), EmailJS, and video embeds (`youtube.com`, `youtube-nocookie.com`, `player.vimeo.com`).
  - Conditionally permits `'unsafe-eval'` **only in development mode** for React/Turbopack debugging, strictly stripping it in production.
- **HTTP Security Headers**: HSTS (`max-age=31536000`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
- **Bot Mitigation**: Vercel Bot Protection via `botid`.
- **API Endpoint Protection**: Sliding rate-limiter, input sanitization, and honeypot validation on `/api/contact`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16.4.3 (App Router, Server Components & Static Site Generation) |
| **Language** | TypeScript 5.x (Strict Mode) |
| **Styling** | Tailwind CSS v4, Modern Glassmorphism, CSS Custom Properties |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | Framer Motion (with `prefers-reduced-motion` compliance) |
| **Analytics** | Google Analytics 4 (GA4: `G-Z39KYRHH2N`), Vercel Analytics, Speed Insights |
| **Security** | HSTS, Strict CSP, Vercel BotId (`botid`), Permissions-Policy |
| **Email Service** | Next.js API Route + EmailJS Browser SDK fallback |
| **Icons** | React Icons (`react-icons`: Simple Icons, Feather Icons, Tabler Icons) |
| **Image Pipeline** | Sharp, Next.js Image Optimization (AVIF, WebP) |
| **Deployment** | Vercel (Production URL: `https://animeshsamanta.is-a.dev`) |

---

## 📂 Project Structure

```
animesh-portfolio/
├── app/
│   ├── api/
│   │   └── contact/           # Hardened server-side contact & quote API endpoint
│   ├── projects/              # Dedicated Project Case Study Hub
│   │   ├── page.tsx           # /projects pillar index page
│   │   └── [id]/              # /projects/[id] dynamic SSG case study pages
│   │       └── page.tsx       # Case study with TechArticle JSON-LD & screenshot gallery
│   ├── services/              # Dedicated Professional Services Hub
│   │   └── page.tsx           # /services page with ProfessionalService JSON-LD
│   ├── favicon.ico            # Site favicon
│   ├── globals.css            # Tailwind v4 tokens, custom scrollbars, selection styles
│   ├── icon.png               # Monogram brand icon
│   ├── layout.tsx             # Root layout, theme provider, GA4, Person JSON-LD, SEO metadata
│   ├── opengraph-image.tsx    # Dynamic Open Graph preview image generation
│   ├── page.tsx               # Homepage assembling all portfolio sections
│   ├── robots.ts              # Dynamic RFC 9309-compliant robots.txt route
│   ├── sitemap.ts             # Dynamic XML sitemap indexing all canonical routes
│   └── twitter-image.tsx      # Dynamic Twitter preview image generation
├── components/
│   ├── Navbar.tsx             # Responsive header supporting anchor and route navigation
│   ├── SidebarProfile.tsx     # Sticky profile sidebar with verified contact details
│   ├── Footer.tsx             # Footer with copyright, tech badges, and back-to-top shortcut
│   ├── GoogleAnalytics.tsx    # Reusable GA4 tracking component
│   ├── JsonLd.tsx             # Schema.org structured data (Person & ProfilePage)
│   ├── ThemeProvider.tsx      # Dark / light theme provider
│   ├── ThemeToggle.tsx        # Accessible theme toggle switch
│   ├── animations/            # TextReveal, FadeIn micro-animation helpers
│   ├── hero/                  # 3D Globe visualization & static fallback components
│   ├── sections/              # Homepage sections:
│   │   ├── Hero.tsx           # Hero intro with 3D canvas and primary CTAs
│   │   ├── About.tsx          # Biography, engineering standards, verified impact metrics
│   │   ├── Skills.tsx         # Categorized skills matrix with proficiency badges
│   │   ├── Experience.tsx     # Hitit-inspired work experience showcase (Adgion, Aman, Bluehorse)
│   │   ├── Projects.tsx       # 6 production projects with blueprint modals & case study links
│   │   ├── Services.tsx       # Overview of services linking to /services
│   │   ├── ResumeSection.tsx  # Education, training, certifications & languages
│   │   └── Contact.tsx        # Contact form with validation & direct contact channels
│   ├── services/              # Dedicated Professional Services components:
│   │   ├── ServicesHero.tsx       # Hero with H1, value proposition & primary CTAs
│   │   ├── ServicesList.tsx       # 6 Core service cards with category filters & deliverables
│   │   ├── SelectedWorkSection.tsx# Real-world project showcase in action
│   │   ├── VideoShowcaseSection.tsx# Accessible on-demand video demo modal player
│   │   ├── HowIWorkSection.tsx    # 5-Step project roadmap & delivery timeline
│   │   ├── WhyWorkWithMeSection.tsx # 6 Practical engineering principles
│   │   └── QuoteEnquirySection.tsx # Quote request form with auto-selected services
│   └── three/                 # 3D Hero scene canvas
├── data/
│   ├── portfolioData.ts       # Central source of truth for resume & general portfolio content
│   ├── projects.ts            # Detailed project case studies and architectural specifications
│   ├── services.ts            # 6 Specialized service offerings with deliverables & tech stacks
│   └── service-media.ts       # Centralized media configuration (gallery, videos, workflow)
├── lib/
│   ├── analytics.ts           # Type-safe GA4 custom event tracking functions
│   ├── emailjs.ts             # EmailJS client dispatch handler & form validation
│   └── utils.ts               # Classname concatenator helper
├── public/
│   ├── google7f3ea9cf085dc8a3.html # Google Search Console HTML verification file
│   ├── images/
│   │   ├── avatar.png         # Profile portrait of Animesh Samanta
│   │   └── projects/          # High-resolution project interface & architecture screenshots
│   └── resume/
│       └── animesh-samanta-resume.pdf # Verified downloadable resume PDF
├── scripts/
│   └── optimize-images.mjs    # Sharp image optimization script for repository assets
├── next.config.ts             # Next.js configuration with CSP, security headers & BotId
└── package.json               # Dependencies and build scripts
```

---

## 📑 Featured Case Studies & Routes

| Project / Section | Category | Key Technologies | Route |
| :--- | :--- | :--- | :--- |
| **Professional Services** | Studio Services Hub | Laravel 12, REST APIs, CMS, E-Commerce, Database | [`/services`](https://animeshsamanta.is-a.dev/services) |
| **DevGit** | Developer Tools & CLI | Go, Cobra CLI, Bubble Tea, Lip Gloss, SQLite | [`/projects/devgit`](https://animeshsamanta.is-a.dev/projects/devgit) |
| **Local Doctors** | Healthcare & Telemedicine | Laravel 12, MySQL, Sanctum Token Auth, RBAC, DOMPDF | [`/projects/local-doctors`](https://animeshsamanta.is-a.dev/projects/local-doctors) |
| **The Smart Gram — Property Tax** | Enterprise & Gov | Laravel, Blade, MySQL, Razorpay, Softzix SMS, CRON, DOMPDF | [`/projects/smartgram-property`](https://animeshsamanta.is-a.dev/projects/smartgram-property) |
| **The Smart Gram — Water Tax** | Enterprise & Gov | Laravel 12, MySQL, Spatie Permission, REST API, Queues | [`/projects/smartgram-water`](https://animeshsamanta.is-a.dev/projects/smartgram-water) |
| **Raajneta** | Civic Engagement | Laravel, MySQL, REST APIs, Sanctum, FastAPI (AI), SMS | [`/projects/rajneta`](https://animeshsamanta.is-a.dev/projects/rajneta) |
| **Earning Handle** | E-Commerce & Affiliate | Laravel, MySQL, REST API, Query Tuning, Token Auth, Redis | [`/projects/earning-handle`](https://animeshsamanta.is-a.dev/projects/earning-handle) |

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** 20.x or higher
- **npm** 10.x or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Linting
```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run ESLint check
npm run lint
```

### 5. Production Build
```bash
# Production compilation
npm run build
```

---

## 🔒 Security Configuration

Implemented in [`next.config.ts`](./next.config.ts):

- **Strict-Transport-Security (HSTS)**: `max-age=31536000; includeSubDomains`.
- **Content-Security-Policy (CSP)**:
  - Whitelists Google Analytics, Google Tag Manager, Vercel Insights, EmailJS, and YouTube/Vimeo embeds.
  - Dynamically includes `'unsafe-eval'` in development mode to support React debugging tools and Turbopack Fast Refresh, while strictly omitting it in production.
- **X-Frame-Options**: `DENY` to prevent clickjacking.
- **X-Content-Type-Options**: `nosniff` to block MIME-type sniffing.
- **Permissions-Policy**: Restricts camera, microphone, geolocation, and browsing-topics.
- **Bot Protection**: Integration with Vercel Bot Protection via `botid`.

---

## 📈 Analytics & Event Tracking

Configured with Google Analytics 4 (`G-Z39KYRHH2N`). Reusable custom tracking events in [`lib/analytics.ts`](./lib/analytics.ts):

- `trackProjectClick(projectTitle, destination)`
- `trackResumeDownload(source)`
- `trackContactSubmit(status)`
- `trackGitHubClick(source, url)`
- `trackLinkedInClick(source, url)`
- `trackExternalLinkClick(url, linkType, label)`

---

## 👤 Author

**Animesh Samanta**
- **Role**: Laravel Developer | PHP Developer
- **Location**: Kolkata, India (Remote Worldwide)
- **Portfolio**: [https://animeshsamanta.is-a.dev](https://animeshsamanta.is-a.dev/)
- **GitHub**: [@animesh67samanta](https://github.com/animesh67samanta)
- **LinkedIn**: [animesh-samanta-296b24211](https://www.linkedin.com/in/animesh-samanta-296b24211)
- **Email**: [animesh67samanta@gmail.com](mailto:animesh67samanta@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
