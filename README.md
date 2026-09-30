# Md Rifat Hossen — Full-Stack Software Engineer & AI Researcher

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0.10_(Turbopack)-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Springer Nature Q2](https://img.shields.io/badge/Springer_Nature-Q2_Journal_Author-005A9C?style=flat-square)](https://link.springer.com/)
[![IEEE Author](https://img.shields.io/badge/IEEE-5x_Conference_Author-00629B?style=flat-square&logo=ieee)](https://ieeexplore.ieee.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> Production personal portfolio, scientific research repository, technical writing publication, and administrative lab dashboard engineered with Next.js 16 (Turbopack), React 19, TypeScript, and a custom **"47 Code"** tactical cyber aesthetic.

**🌐 Live Deployment:** [rifathossen47.vercel.app](https://rifathossen47.vercel.app)  
**📝 Technical Writing & Research Notes:** [rifathossen47.vercel.app/blog](https://rifathossen47.vercel.app/blog)  
**🔬 Author Admin Portal:** [rifathossen47.vercel.app/lab/login](https://rifathossen47.vercel.app/lab/login)

---

## 🧭 Overview & Philosophy

This repository contains the complete source code for Md Rifat Hossen's digital home. Designed from the ground up to present full-stack engineering systems, peer-reviewed machine learning research, and creative media in a fast, humanized, and highly structured format tailored for technical recruiters, engineering leaders, and academic collaborators.

### Key Highlights
- **Human-Centric & Recruiter-Optimized:** Zero fluff, no generic AI template fillers. Clean quantitative impact metrics, clear technical roles, and direct links to live code and papers.
- **The "47 Code" Design System:** Distinctive tactical minimalist aesthetic inspired by custom terminal wallpapers — warm espresso (`#121110`), burnt amber (`#D96B27`), cream (`#F5EFE6`), Bebas Neue headlines, JetBrains Mono accents, and dual dark/light theme support.
- **Interactive Multi-Page Experience:**
  - **Single-Page Showcase:** Fast-scanning primary portfolio with interactive "See More" toggles to maintain mobile elegance.
  - **Dynamic Technical Blog (`/blog` & `/blog/[slug]`):** Filterable technical articles featuring code walkthroughs, real-time GPS telemetry case studies, and an interactive reader comments engine.
  - **Rifat's Lab Dashboard (`/lab/dashboard`):** Secured administrative console for authoring, editing, and publishing articles directly into the blog store.
- **Verified Scientific Research:** Highlights **6 peer-reviewed academic papers** (1 Springer Nature Q2 Journal, 5 IEEE International Conferences) with direct links to published proceedings, datasets, and code repositories.
- **Real-Time Contact Pipeline:** Fully functional, authenticated EmailJS dispatch system with responsive feedback and direct clipboard utilities.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.0.10 (App Router)** | Hybrid SSG/SSR rendering, Turbo engine compilation, nested routing |
| **UI Library** | **React 19.2.1** | Component lifecycle, hooks, concurrent rendering primitives |
| **Language** | **TypeScript 5.0** | Strict type safety, interface contracts for research, projects, and blogs |
| **Styling** | **Tailwind CSS v4 + Vanilla CSS** | Modern CSS theme variables, micro-animations, responsive grid systems |
| **Icons & Typography** | **Lucide React + Google Fonts** | Crisp SVG icons, Bebas Neue, Inter, JetBrains Mono, Playfair Display |
| **Email Service** | **EmailJS Browser SDK** | Direct client-side message dispatching with spam mitigation |
| **Analytics & Charts** | **Recharts** | Quantitative telemetry and visualization |
| **Hosting & CI/CD** | **Vercel** | Edge caching, automated branch preview deployments, SSL |

---

## 🗂️ Architecture & Project Structure

```text
rifathossain47/
├── app/                              # Next.js App Router root
│   ├── blog/                         # Technical Writing Catalog & Dynamic Post View
│   │   ├── [slug]/                   # Article detail view with reader comments
│   │   │   └── page.tsx
│   │   └── page.tsx                  # Filterable article catalog
│   ├── lab/                          # Administrative Publishing Portal
│   │   ├── dashboard/                # Article creation, edit, & delete console
│   │   │   └── page.tsx
│   │   └── login/                    # Secured admin authentication
│   │       └── page.tsx
│   ├── globals.css                   # The 47 Code theme tokens, fonts, & scrollbar rules
│   ├── layout.tsx                    # Root HTML layout with ThemeProvider & metadata
│   ├── not-found.tsx                 # Custom 404 page
│   └── page.tsx                      # Single-page portfolio root
├── components/                       # Modular UI components
│   ├── sections/                     # Self-contained section blocks
│   │   ├── Hero.tsx                  # 00 // Headline, metrics, & avatar presentation
│   │   ├── Experience.tsx            # 01 // Work experience & industrial attachments
│   │   ├── Projects.tsx              # 02 // Featured web, mobile, & ML software
│   │   ├── Research.tsx              # 03 // Peer-reviewed Springer & IEEE publications
│   │   ├── Skills.tsx                # 04 // Technical skills & competitive coding track
│   │   ├── Education.tsx             # 05 // Academic degrees, certifications, & leadership
│   │   ├── CreativeStudio.tsx        # 06 // Travel filmmaking, branding, & hobbies
│   │   ├── Contact.tsx               # 07 // Direct message dispatch form & networks
│   │   └── Footer.tsx                # Formal signature stamp & portal shortcuts
│   ├── Navigation.tsx                # Pathname-aware sticky navbar with mobile drawer
│   └── ThemeProvider.tsx             # Dark/Light theme state manager
├── lib/                              # Data models & business logic
│   ├── blog-service.ts               # Blog CRUD store, localStorage sync, comments handler
│   └── portfolio-data.ts             # Typed schema for projects, publications, & credentials
├── public/                           # Static public assets (brand logos, photos, CV)
├── package.json                      # Dependency declarations & build scripts
├── tsconfig.json                     # Strict TypeScript compiler options
└── README.md                         # Repository documentation
```

---

## 🚀 Key Functional Modules

### 1. Section Architecture
- **`01 // WORK EXPERIENCE`**: Co-Founder & Tech Lead at KREMS Technologies; Industrial Attachment at W3 Eden (w3eden.com) with live project references.
- **`02 // FEATURED PROJECTS`**: Filterable catalog (Web, Mobile, ML/AI, Systems) featuring MyCUETBus (834+ users), CXR-Sentinel (Deep learning chest X-ray triage), FoodExpress, and KREMS Platform.
- **`03 // RESEARCH & PUBLICATIONS`**: 6 scientific papers covering explainable sentiment analysis, wafer surface defect classification, disaster classification, and Bengali NLP. Top 3 displayed with expandable "View All" toggle.
- **`04 // SKILLS & PROBLEM SOLVING`**: Dual view mode featuring core technical stack and competitive programming achievements (500+ problems solved across Codeforces, LeetCode, CodeChef, Beecrowd).
- **`05 // EDUCATION & CREDENTIALS`**: Single-row slim switcher showcasing CUET B.Sc. in CSE (CGPA 3.60), HSC & SSC Science (GPA 5.00), 14+ professional certifications with toggle, and leadership awards.
- **`06 // CREATIVE STUDIO`**: Cinematic travel filmmaking channel (@RifatHossaiNBro), event branding designs, and strategic pursuits.
- **`07 // CONTACT & COLLABORATION`**: Clean EmailJS message gateway with humanized placeholders and direct one-click email copy.

### 2. Multi-Page Blog & Admin Lab
- **Public Blog Engine (`/blog`):** Category filters, reading time, publication dates, and individual article views with social share clipboard utilities.
- **Interactive Reader Comments:** Readers can submit thoughts, feedback, and technical queries stored per article slug.
- **Author Portal (`/lab/login` & `/lab/dashboard`):** Authenticated administrative interface allowing the owner to draft, edit, and publish posts to the local data store without needing an external CMS.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js** `v18.17.0` or higher
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RifatHossaiN47/rifathossen47.git

# 2. Enter project directory
cd rifathossen47

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
# Type check TypeScript definitions
npx tsc --noEmit

# Compile production bundle with Turbopack
npm run build

# Preview production build locally
npm run start
```

---

## 🔒 Security & Privacy Notice
- Administrative portal authentication credentials for `/lab/login` are strictly private and never displayed anywhere in user-facing client markup.
- Contact form submissions use verified EmailJS service templates with client-side rate limiting and error handling.

---

## 📬 Contact & Professional Links

- **Email:** [rifat8851@gmail.com](mailto:rifat8851@gmail.com)
- **LinkedIn:** [linkedin.com/in/rifathossain47](https://linkedin.com/in/rifathossain47)
- **GitHub:** [github.com/RifatHossaiN47](https://github.com/RifatHossaiN47)
- **Google Scholar:** [Md Rifat Hossen Citations](https://scholar.google.com/citations?user=kJRow6AAAAAJ&hl=en)
- **ResearchGate:** [Md Rifat Hossen](https://www.researchgate.net/profile/Md-Rifat-Hossen-3)
- **ORCID:** [0009-0004-7835-3794](https://orcid.org/0009-0004-7835-3794)
- **YouTube Channel:** [@RifatHossaiNBro](https://youtube.com/@RifatHossaiNBro)

---

## 📄 License

This repository is open source and available under the [MIT License](LICENSE).
