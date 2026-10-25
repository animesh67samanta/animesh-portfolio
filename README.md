# Animesh Samanta — Modern Developer Portfolio (Next.js)

A production-ready, high-performance developer portfolio website engineered with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Three.js, and EmailJS. Inspired by the dark, refined, and minimalist aesthetic of the CVio Resume/CV template.

Built for **Animesh Samanta**, Laravel Backend Developer & PHP Developer with 3+ years of experience architecting municipal tax automation platforms, high-throughput REST APIs, and healthcare scheduling systems.

---

## 🌟 Key Features

- **CVio-Inspired Architecture**: Features a desktop sticky profile card with verified contact details, glowing status indicators, and sleek active-section navigation.
- **Interactive Three.js 3D Visual**: A dynamic isometric glass tesseract core with orbital glowing rings, star particles, and cursor-reactive parallax damping.
- **Graceful Accessible Fallback**: Automatically falls back to high-resolution 3D visuals when WebGL is unavailable or when the user prefers reduced motion.
- **Framer Motion Micro-Animations**: Smooth section reveals, rotating hero specialty badges, modal popups, and button interactions.
- **Verified Portfolio Data**: 100% authentic data extracted from Animesh Samanta's verified resume across experience, education, training, and 6 production projects.
- **System Architecture Blueprints**: Interactive project modal drawers displaying system architecture, database design insights, key modules, and security policies.
- **EmailJS Contact Integration**: Client-side validated contact form with honeypot spam protection, real-time feedback, and zero custom server requirements.
- **Static Site Export (`output: 'export'`)**: Fully exportable to plain HTML/CSS/JS for deployment on Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) with WebGL
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Handling**: [@emailjs/browser](https://www.emailjs.com/)

---

## 📂 Project Structure

```
animesh-portfolio/
├── app/
│   ├── globals.css            # Dark theme tokens, custom scrollbars & focus styles
│   ├── layout.tsx             # Root layout with SEO and Open Graph metadata
│   └── page.tsx               # Main portfolio page assembling all sections
├── components/
│   ├── Navbar.tsx             # Responsive header & mobile drawer with active tracking
│   ├── SidebarProfile.tsx     # CVio sticky profile sidebar with status badge
│   ├── Footer.tsx             # Minimalist footer with back-to-top shortcut
│   ├── animations/
│   │   ├── FadeIn.tsx         # Framer motion fade-in with reduced-motion support
│   │   └── TextReveal.tsx     # Rotating hero badge text animation
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section with 3D canvas and primary CTAs
│   │   ├── About.tsx          # Bio, verified impact metrics & engineering standards
│   │   ├── Skills.tsx         # Categorized skills matrix with React Icons
│   │   ├── Experience.tsx     # Professional timeline (Adgion, Aman, Bluehorse)
│   │   ├── Projects.tsx       # 6 production projects with architecture blueprint modals
│   │   ├── Services.tsx       # 6 core backend services & key deliverables
│   │   ├── ResumeSection.tsx  # Education, training, certifications & languages
│   │   └── Contact.tsx        # EmailJS form with validation & direct contact channels
│   └── three/
│       └── HeroScene.tsx      # Three.js 3D isometric tesseract with mouse parallax
├── data/
│   └── portfolioData.ts       # Central source of truth for all portfolio content
├── lib/
│   ├── emailjs.ts             # EmailJS client send handler & form validation
│   └── utils.ts               # Classname concatenator helper
├── public/
│   ├── images/
│   │   ├── avatar.png         # Cropped photo of Animesh Samanta
│   │   ├── hero-3d-bg.png     # 3D isometric glass cube render
│   │   └── projects/          # High-resolution dark UI project screenshots
│   └── resume/
│       └── animesh-samanta-resume.pdf # Downloadable verified resume PDF
├── .env.example               # Environment variables template
└── next.config.ts             # Static export configuration
```

---

## 🚀 Getting Started

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

---

## 📧 EmailJS Setup (Contact Form)

The contact form is configured to work out-of-the-box in demo mode, simulating successful delivery. To receive real messages in your personal inbox:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. Gmail) and copy your **Service ID**.
3. Create an **Email Template** with the following template variables:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email
   - `{{subject}}` — Message subject
   - `{{message}}` — Message body
4. Copy your **Template ID** and your account **Public Key** (Account > API Keys).
5. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```
6. Update `.env.local` with your credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
   ```

---

## 📦 Building and Static Export

This project is configured with `output: 'export'` for static export:

```bash
npm run build
```

The optimized static website will be generated in the `out/` directory.

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Click **Deploy**. Vercel will build and serve the static export automatically.

### Deploying to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `out`
4. Add the `NEXT_PUBLIC_EMAILJS_*` environment variables in Site Settings.
5. Deploy.

---

## 📝 Customizing Content

All portfolio information is centralized in [`data/portfolioData.ts`](./data/portfolioData.ts). To update your details, edit that single file:
- **Personal Details**: Update bio, phone, email, and social URLs.
- **Projects**: Add new projects, update technologies, or add live demo links.
- **Skills**: Adjust skills, categories, or proficiency tags.
- **Experience**: Add new roles, milestones, and technical achievements.
