# Animesh Samanta — Modern Developer Portfolio & Case Studies

[![Production URL](https://img.shields.io/badge/Production%20Website-animeshsamanta.is--a.dev-06b6d4?style=flat&logo=vercel)](https://animeshsamanta.is-a.dev/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-61dafb?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Production-grade, high-performance developer portfolio website and technical case-study hub engineered with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Three.js (React Three Fiber)**, **Google Analytics 4 (GA4)**, and **Enterprise Security Headers**.

Built for **Animesh Samanta** — **Laravel & PHP Developer** with 3+ years of experience architecting high-throughput REST APIs, municipal civic tax automation platforms, database query optimizations, and queue processing systems. Author of **[DevGit](https://github.com/animesh67samanta/devgit)** (open-source Go CLI & TUI).

---

## 🌟 Highlights & Features

- **Pillar-Cluster SEO Architecture**:
  - Homepage (`/`) optimized for core queries (*Animesh Samanta*, *Animesh Samanta Laravel Developer*, *Animesh Samanta PHP Developer*, *Animesh Samanta Portfolio*).
  - Projects Index Hub (`/projects`) listing all enterprise case studies.
  - Dedicated SSG Case Study Pages (`/projects/[id]`) with in-depth technical breakdowns, database schemas, and architectural blueprints.
  - Dynamic XML Sitemap (`/sitemap.xml`) indexing all routes with canonical absolute URLs.
  - RFC 9309-compliant `/robots.txt` referencing the live sitemap with zero Googlebot warnings.
  - Google Search Console ownership verification (`/google7f3ea9cf085dc8a3.html`).
- **Rich Schema.org Structured Data (JSON-LD)**:
  - `Person` schema with verified GitHub & LinkedIn profile links, job title, and employer attribution.
  - `ProfilePage` & `WebSite` schema linking author identity and site metadata.
  - `CollectionPage` schema on the `/projects` directory.
  - `TechArticle` & `BreadcrumbList` schemas across all individual project case studies.
- **Enterprise Security Hardening**:
  - Production Content Security Policy (CSP) with whitelisted analytics, fonts, and scripts.
  - Strict-Transport-Security (HSTS, max-age=31536000, includeSubDomains).
  - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
  - Vercel Bot Protection (`botid`) integration for automated bot mitigation.
  - Input-sanitized API contact endpoint (`/api/contact`) with rate limiting and payload validation.
- **Google Analytics 4 (GA4) Integration**:
  - Official `@next/third-parties/google` GA4 integration (`G-Z39KYRHH2N`).
  - Reusable custom event tracking (`trackProjectClick`, `trackResumeDownload`, `trackContactSubmit`, `trackGitHubClick`, `trackLinkedInClick`).
- **Interactive 3D Digital Globe Hero**:
  - React Three Fiber / Three.js 3D Earth visualization with atmospheric Fresnel rim shaders, 3D great circle network arcs, tech hub pulses, and cybernetic orbital rings.
  - Graceful fallback for devices without WebGL or with `prefers-reduced-motion` enabled.
- **Dual Theme System**:
  - Seamless dark/light theme switching with zero FOUC (Flash of Unstyled Content) via inline initialization script and local storage sync.
- **EmailJS & Direct API Contact**:
  - Contact form with client-side validation, honeypot spam guard, and server route support.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16.4.3 (App Router, Server Components & SSG Prerendering) |
| **Language** | TypeScript 5.x (Strict Mode) |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Variables, Modern Glassmorphism |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | Framer Motion |
| **Analytics** | Google Analytics 4 (GA4: `G-XXXXXXXX`), Vercel Analytics, Speed Insights |
| **Security** | HSTS, Strict CSP, BotId (`botid`), Permissions-Policy |
| **Email Service** | EmailJS Browser SDK (`@emailjs/browser`) |
| **Icons** | React Icons (`react-icons`: Simple Icons, Feather Icons, Tabler Icons) |
| **Deployment** | Vercel (Production URL: `https://animeshsamanta.is-a.dev`) |

---

## 📂 Project Structure

```
animesh-portfolio/
├── app/
│   ├── api/
│   │   └── contact/           # Hardened server-side contact API endpoint
│   ├── projects/              # Dedicated Project Case Study Hub
│   │   ├── page.tsx           # /projects pillar index page
│   │   └── [id]/              # /projects/[id] dynamic SSG case study pages
│   │       └── page.tsx       # Detailed case study with TechArticle JSON-LD & gallery
│   ├── favicon.ico            # Site favicon
│   ├── globals.css            # Tailwind v4 theme tokens, custom scrollbars, selection styles
│   ├── icon.png               # Monogram app icon
│   ├── layout.tsx             # Root layout, theme provider, GA4, Person JSON-LD, SEO metadata
│   ├── opengraph-image.tsx    # Dynamic Open Graph preview image generation
│   ├── page.tsx               # Homepage assembling all portfolio sections
│   ├── robots.ts              # Dynamic, RFC 9309-compliant robots.txt route
│   ├── sitemap.ts             # Dynamic XML sitemap indexing all canonical routes
│   └── twitter-image.tsx      # Dynamic Twitter preview image generation
├── components/
│   ├── Navbar.tsx             # Responsive header with smooth anchor and multi-page navigation
│   ├── SidebarProfile.tsx     # CVio-style sticky profile sidebar with verified contact details
│   ├── Footer.tsx             # Footer with copyright, tech badges, and back-to-top shortcut
│   ├── GoogleAnalytics.tsx    # Reusable GA4 tracking component
│   ├── JsonLd.tsx             # Schema.org structured data (Person & ProfilePage)
│   ├── ThemeProvider.tsx      # Dark / light theme provider
│   ├── ThemeToggle.tsx        # Accessible theme toggle switch
│   ├── animations/            # TextReveal, FadeIn micro-animation helpers
│   ├── hero/                  # 3D Globe visualization components (Earth, Arcs, Atmosphere)
│   ├── sections/              # Homepage sections:
│   │   ├── Hero.tsx           # Hero intro with 3D canvas and primary CTAs
│   │   ├── About.tsx          # Biography, engineering standards, verified impact metrics
│   │   ├── Skills.tsx         # Categorized skills matrix with proficiency badges
│   │   ├── Experience.tsx     # Professional career timeline (Adgion, Aman, Bluehorse)
│   │   ├── Projects.tsx       # 6 production projects with blueprint modals & case study links
│   │   ├── Services.tsx       # 6 core backend services & key deliverables
│   │   ├── ResumeSection.tsx  # Education, training, certifications & languages
│   │   └── Contact.tsx        # Contact form with validation & direct contact channels
│   └── three/                 # 3D Hero scene canvas
├── data/
│   ├── portfolioData.ts       # Central source of truth for portfolio content & resume data
│   └── projects.ts            # Project data, architectural details, and gallery screenshot paths
├── lib/
│   ├── analytics.ts           # Type-safe GA4 custom event tracking functions
│   ├── emailjs.ts             # EmailJS client send handler & form validation
│   └── utils.ts               # Classname concatenator helper
├── public/
│   ├── google7f3ea9cf085dc8a3.html # Google Search Console HTML verification file
│   ├── images/
│   │   ├── avatar.png         # Profile portrait of Animesh Samanta
│   │   └── projects/          # Verified project interface and architecture screenshots
│   └── resume/
│       └── animesh-samanta-resume.pdf # Verified downloadable resume PDF
├── next.config.ts             # Next.js config with security headers, redirects, CSP & BotId
└── package.json               # Dependencies and build scripts
```

---

## 📑 Featured Case Studies

| Project | Category | Key Technologies | Route |
| :--- | :--- | :--- | :--- |
| **DevGit** | Developer Tools & CLI | Go, Cobra CLI, Bubble Tea, Lip Gloss, SQLite, GoReleaser | [`/projects/devgit`](https://animeshsamanta.is-a.dev/projects/devgit) |
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
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Code Quality & Type Check
```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run ESLint
npm run lint
```

### 5. Production Build
```bash
npm run build
```

---

## 🔒 Security Configuration

The application implements a defense-in-depth security architecture in `next.config.ts`:

- **Strict-Transport-Security (HSTS)**: `max-age=31536000; includeSubDomains`.
- **Content-Security-Policy (CSP)**: Explicitly allows scripts and connect endpoints for Google Tag Manager, Google Analytics, Vercel Insights, and EmailJS, while blocking unauthorized object-src and framing.
- **X-Frame-Options**: `DENY` to prevent clickjacking attacks.
- **X-Content-Type-Options**: `nosniff` to block MIME-type sniffing.
- **Permissions-Policy**: Restricts camera, microphone, geolocation, and browsing-topics.
- **Bot Protection**: Integration with Vercel Bot Protection via `botid`.

---

## 📈 Analytics & Event Tracking

Configured with Google Analytics 4 Measurement ID `G-XXXXXXXXX`. Custom events are tracked via `lib/analytics.ts`:

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
- **Location**: Kolkata, India
- **Portfolio**: [https://animeshsamanta.is-a.dev](https://animeshsamanta.is-a.dev/)
- **GitHub**: [@animesh67samanta](https://github.com/animesh67samanta)
- **LinkedIn**: [animesh-samanta-296b24211](https://www.linkedin.com/in/animesh-samanta-296b24211)
- **Email**: [animesh67samanta@gmail.com](mailto:animesh67samanta@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
