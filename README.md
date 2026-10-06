# Md Rifat Hossen — Full-Stack Software Engineer & AI Researcher

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0.10_(Turbopack)-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting_%26_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Springer Nature Q2](https://img.shields.io/badge/Springer_Nature-Q2_Journal_Author-005A9C?style=flat-square)](https://link.springer.com/)
[![IEEE Author](https://img.shields.io/badge/IEEE-5x_Conference_Author-00629B?style=flat-square&logo=ieee)](https://ieeexplore.ieee.org/)
[![ResearchGate](https://img.shields.io/badge/ResearchGate-DOI_Verified-00CCBB?style=flat-square&logo=researchgate)](https://www.researchgate.net/profile/Md-Rifat-Hossen-3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> Production personal portfolio, scientific research repository, dynamic technical writing publication, and secured administrative lab dashboard engineered with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, **Firebase Hosting & Cloud Firestore**, and a custom **"47 Code"** tactical cyber aesthetic.

**🌐 Live Production Site:** [rifathossen47.web.app](https://rifathossen47.web.app) *(Mirror: [rifathossen47.firebaseapp.com](https://rifathossen47.firebaseapp.com))*  
**📝 Technical Writing & Research Notes:** [rifathossen47.web.app/blog](https://rifathossen47.web.app/blog)  
**🔬 Author Admin Portal:** [rifathossen47.web.app/lab/login](https://rifathossen47.web.app/lab/login)

---

## 🧭 Overview & Architectural Philosophy

This repository contains the complete codebase for Md Rifat Hossen's portfolio platform. Designed to present full-stack engineering systems, peer-reviewed machine learning research, and creative media in an ultra-fast, structured format tailored for technical recruiters, engineering leaders, and academic collaborators.

### Key Highlights
- **High-Performance Firebase Infrastructure:** Fast global CDN delivery via Firebase Hosting with Cloud Firestore handling dynamic section content, technical blogs, and moderated reader comments.
- **Dual-Path Resilient Architecture:** Local TypeScript data ([`lib/portfolio-data.ts`](lib/portfolio-data.ts)) acts as the guaranteed ground truth and instant offline fallback, while Cloud Firestore enables dynamic remote content updates without redeploying.
- **The "47 Code" Tactical Aesthetic:** Custom minimalist design system featuring warm espresso (`#121110`), burnt amber (`#D96B27`), cream (`#F5EFE6`), Bebas Neue headlines, JetBrains Mono accents, and dual dark/light theme support.
- **Peer-Reviewed Scientific Research:** Highlights **6 published academic papers** (1 Springer Nature Q2 Journal, 5 IEEE Conferences) plus **1 academic research poster** on ResearchGate with official DOI indexing.
- **Visual Design Gallery Portal:** Dedicated Graphic Design showcase highlighting organized GitHub repositories across 6 design domains (Event Posters, Brand Identity, Motion Graphics, Certificates, Social Media, and Layered Vector Source Files).
- **Interactive Multi-Page Experience:**
  - **Single-Page Showcase:** Fast-scanning primary portfolio with modular sections and responsive drawers.
  - **Dynamic Technical Blog (`/blog` & `/blog/[slug]`):** Filterable technical articles featuring code walkthroughs, real-time GPS telemetry case studies, and reader comments.
  - **Author Lab Console (`/lab/login` & `/lab/dashboard`):** Firebase Auth-secured administrative dashboard for authoring, editing, and publishing blog articles directly to Firestore.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 16.0.10 (App Router)** | Static HTML export (`output: 'export'`), Turbopack compiler, optimized assets |
| **UI Library** | **React 19.2.1** | Component lifecycle, hooks, concurrent rendering primitives |
| **Language** | **TypeScript 5.0** | Strict type safety, interface contracts for research, projects, and blogs |
| **Styling** | **Tailwind CSS v4 + Vanilla CSS** | Modern CSS theme tokens, micro-animations, responsive layout utilities |
| **Cloud Database** | **Firebase Cloud Firestore** | Centralized collection storage for portfolio sections, blog articles, and comments |
| **Authentication** | **Firebase Auth** | Secured administrative authentication for article publishing and dashboard operations |
| **Cloud Hosting** | **Firebase Hosting** | Global edge CDN, sub-second latency, zero-config SSL certificates |
| **Icons & Typography** | **Lucide React + Google Fonts** | SVG icons, Bebas Neue, Inter, JetBrains Mono, Playfair Display |
| **Email Gateway** | **EmailJS Browser SDK** | Direct message dispatch with rate limiting and verification |

---

## 🗂️ Project Structure

```text
rifathossain47/
├── app/                              # Next.js App Router root
│   ├── blog/                         # Technical Writing Catalog & Dynamic Post View
│   │   ├── [slug]/                   # Article detail view with reader comments
│   │   │   ├── BlogDetailClient.tsx  # Dynamic Firestore-connected article client
│   │   │   └── page.tsx              # SSG static params generator
│   │   └── page.tsx                  # Filterable article catalog
│   ├── lab/                          # Administrative Publishing Portal
│   │   ├── dashboard/                # Article creation, edit, & delete console
│   │   │   └── page.tsx
│   │   └── login/                    # Secured Firebase Auth admin login
│   │       └── page.tsx
│   ├── globals.css                   # The 47 Code theme tokens, fonts, & styles
│   ├── layout.tsx                    # Root layout with ThemeProvider & SEO metadata
│   ├── not-found.tsx                 # Custom 404 error page
│   └── page.tsx                      # Single-page portfolio root
├── components/                       # Modular UI components
│   ├── sections/                     # Self-contained section blocks
│   │   ├── Hero.tsx                  # 00 // Headline, metrics, & avatar presentation
│   │   ├── Experience.tsx            # 01 // Work experience & industrial attachments
│   │   ├── Projects.tsx              # 02 // Featured web, mobile, & ML software
│   │   ├── Research.tsx              # 03 // Peer-reviewed Springer & IEEE publications + Poster
│   │   ├── Skills.tsx                # 04 // Technical stack & competitive coding track
│   │   ├── Education.tsx             # 05 // Degrees, credentials, & leadership honors
│   │   ├── CreativeStudio.tsx        # 06 // Filmmaking, design repo portal, & hobbies
│   │   ├── Contact.tsx               # 07 // Direct message dispatch form & networks
│   │   └── Footer.tsx                # Formal signature stamp & portal shortcuts
│   ├── Navigation.tsx                # Pathname-aware sticky navbar with mobile drawer
│   └── ThemeProvider.tsx             # Dark/Light theme state manager
├── lib/                              # Data models, Firebase integration & business logic
│   ├── blog-service.ts               # Blog CRUD store, Firestore queries, reader comments
│   ├── content-source.ts             # Firestore section document mappings & schemas
│   ├── content-utils.ts              # Data normalization and ordering helpers
│   ├── firebase.ts                   # Client Firebase SDK configuration & initialization
│   ├── portfolio-data.ts             # Centralized typed schema (ground truth & fallback)
│   ├── types.ts                      # Legacy type definitions
│   └── use-section-data.ts           # React hook for real-time Firestore content hydration
├── public/                           # Static public assets (brand logos, photos, CV)
├── scripts/                          # Automated data synchronization scripts
│   └── seed-firestore.mts            # Bi-directional seed & integrity verification script
├── firestore.rules                   # Granular Cloud Firestore security & validation rules
├── firebase.json                     # Firebase Hosting & Firestore configuration
├── next.config.ts                    # Next.js static export build configuration
├── package.json                      # Dependency declarations & npm scripts
├── tsconfig.json                     # Strict TypeScript compiler configuration
└── README.md                         # Repository documentation
```

---

## 🔬 Peer-Reviewed Research & Publications

Md Rifat Hossen has authored and co-authored **6 peer-reviewed academic papers** across top-tier venues (Springer Nature Q2 Journal, IEEE Conferences) and **1 academic research poster** indexed with a permanent DOI:

1. **Springer Nature — SN Computer Science (Q2 Journal, 2026)**
   * *Title:* BanglaSentNet: A Hybrid Deep Learning and Transformer-Based Approach for Aspect-Level Sentiment Analysis in Bengali E-Commerce Reviews
   * *DOI:* [10.1007/s42979-026-05053-x](https://doi.org/10.1007/s42979-026-05053-x) | *Code:* [GitHub](https://github.com/RifatHossaiN47/journal-banglasentnet)
2. **Springer Nature — CCIS Vol. 2682 (ICDSAIA 2025)**
   * *Title:* BanglaSentNet: A Hybrid Deep Learning Framework for Multi-Aspect Sentiment Analysis in Bangla E-Commerce Reviews
   * *DOI:* [10.1007/978-3-032-11352-8_20](https://doi.org/10.1007/978-3-032-11352-8_20) | *Code:* [GitHub](https://github.com/RifatHossaiN47/conference_BanglaSentNet)
3. **IEEE ICCIT 2025 (28th International Conference)**
   * *Title:* A Multi Task Deep Learning Model for Fruit Detection and Freshness Classification with GradCAM Explainability
   * *Link:* [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/11491294) | *Code:* [GitHub](https://github.com/RifatHossaiN47/conference-fruit-freshness-xai) | *Demo:* [Hugging Face](https://huggingface.co/spaces/nahinfarhan/fruit-classifier)
4. **IEEE ECCE 2025 (International Conference)**
   * *Title:* Advancing Semiconductor Fabrication: A CNN-Based Wafer Defect Detection with XAI Insights
   * *Link:* [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/11013292) | *Code:* [GitHub](https://github.com/RifatHossaiN47/conference_semiconductor)
5. **IEEE SPICSCON 2025 & 3MT Bangladesh**
   * *Title:* BanglaMM-Disaster: A Multimodal Transformer-Based Deep Learning Framework for Multiclass Disaster Classification in Bangla
   * *Link:* [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/11504189) | *Preprint:* [arXiv:2511.21364](https://arxiv.org/abs/2511.21364) | *Code:* [GitHub](https://github.com/RifatHossaiN47/conference_BanglaMM-Disaster)
6. **IEEE SPICSCON 2025 (Conference)**
   * *Title:* BanglaASTE: A Novel Framework for Aspect-Sentiment-Opinion Extraction in Bangla E-commerce Reviews Using Ensemble Deep Learning
   * *Link:* [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/11504105) | *Code:* [GitHub](https://github.com/RifatHossaiN47/conference_BanglaASTE)
7. **CUET CSE Academic Research Poster Showcase & Symposium (ResearchGate)**
   * *Title:* E-Voting Systems: The Future of Secure & Transparent Elections
   * *DOI:* [10.13140/RG.2.2.12065.16483/1](https://doi.org/10.13140/RG.2.2.12065.16483/1) | *Repository:* [GitHub](https://github.com/RifatHossaiN47/research-poster-collection)

---

## 🎨 Creative Studio: Graphic Design Repository

All visual brand collaterals, event marketing banners, vector crests, and motion graphics are organized in the open-source repository:  
👉 **[github.com/RifatHossaiN47/Graphic-Design](https://github.com/RifatHossaiN47/Graphic-Design)**

The portfolio provides direct navigation cards into each structured folder:
* 📂 **`Posters-and-Banners/`** — Event flyers, technical workshop announcements, sports fixtures, and cultural festival banners.
* 📂 **`Logos-and-Branding/`** — Institutional crests (Dhaka College Association of CUET), 47 R Syndicate, and custom monograms.
* 📂 **`Motion-and-Video/`** — The Fintick Show motion suite, cyber glitch loops, and event opening animations.
* 📂 **`Certificates-and-Awards/`** — Official competition laureates and organizational certificates.
* 📂 **`Social-Media-and-Portraits/`** — Executive committee spotlight cards and editorial posts.
* 📂 **`Source-Files/`** — Production vector master files (`.ai`, `.psd`, `.prproj`).

---

## 💻 Local Development & Setup

### Prerequisites
- **Node.js** `v18.18.0` or higher (Node.js 20+ recommended)
- **npm** `v9.0.0` or higher
- **Firebase CLI** installed globally: `npm install -g firebase-tools`

### Installation

```bash
# 1. Clone repository
git clone https://github.com/RifatHossaiN47/rifathossen47.git

# 2. Navigate to project root
cd rifathossen47

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔄 Firestore Data Synchronization

The repository includes a synchronization utility ([`scripts/seed-firestore.mts`](scripts/seed-firestore.mts)) that manages the sync between local TypeScript data and Cloud Firestore.

```powershell
# 1. Check if Firestore is in sync with local data (read-only verification)
$env:ADMIN_PASSWORD="<your-admin-password>"; npm run seed:firestore -- --check

# 2. Populate any missing documents in Firestore (safe mode, does not overwrite existing docs)
$env:ADMIN_PASSWORD="<your-admin-password>"; npm run seed:firestore

# 3. Force-sync local data into Firestore (overwrites remote docs with local data)
$env:ADMIN_PASSWORD="<your-admin-password>"; npm run seed:firestore -- --force
```

---

## 🚢 Deployment Guide

### Method 1: Instant CLI Deployment (Current Production Setup)

Whenever you make changes to components, styles, or data, deploy the updated static build directly to Firebase Hosting:

```bash
# Builds the Next.js static export and deploys to Firebase Hosting in one step
npm run deploy:hosting
```

Or run the two steps individually:
```bash
# 1. Build the static site into the /out directory
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting
```

Your updates will be live globally at **[https://rifathossen47.web.app](https://rifathossen47.web.app)** in seconds.

---

### Method 2: Automatic Deployment via GitHub Actions (CI/CD)

> **Important Note:** By default, simply running `git push origin main` saves your code to GitHub. It will **not** auto-deploy to Firebase Hosting unless a GitHub Actions workflow is configured with your Firebase credentials.

If you would like every push to `main` to automatically trigger a build and deploy to Firebase Hosting, follow these three steps:

#### Step 1: Generate Firebase Service Account Key
In your terminal, run:
```bash
firebase init hosting:github
```
* Select your repository: `RifatHossaiN47/rifathossen47`
* Set up workflow to run build before deploy: **Yes**
* Script to run before deploy: `npm ci && npm run build`
* Set up automatic deploy on merge to main: **Yes**
* Name of branch: `main`

#### Step 2: Or Configure Secrets Manually
If setting up manually, add your Firebase Service Account token as a secret in your GitHub repository:
1. Go to **GitHub Repository** → **Settings** → **Secrets and variables** → **Actions**.
2. Add a new repository secret named `FIREBASE_SERVICE_ACCOUNT_RIFATHOSSEN47`.
3. Paste your Firebase Service Account JSON key.

#### Step 3: Workflow File
Ensure `.github/workflows/firebase-hosting-merge.yml` contains:
```yaml
name: Deploy to Firebase Hosting on Merge

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Next.js Static Export
        run: npm run build

      - name: Deploy to Firebase Hosting
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_RIFATHOSSEN47 }}'
          channelId: live
          projectId: rifathossen47
```

Once configured, any `git push origin main` will automatically build and deploy to Firebase Hosting!

---

## 📬 Contact & Professional Networks

- **Email:** [rifat8851@gmail.com](mailto:rifat8851@gmail.com)
- **Academic Email:** [u2004129@student.cuet.ac.bd](mailto:u2004129@student.cuet.ac.bd)
- **LinkedIn:** [linkedin.com/in/rifathossain47](https://linkedin.com/in/rifathossain47)
- **GitHub:** [github.com/RifatHossaiN47](https://github.com/RifatHossaiN47)
- **Google Scholar:** [Md Rifat Hossen Citations](https://scholar.google.com/citations?user=kJRow6AAAAAJ&hl=en)
- **ResearchGate:** [Md Rifat Hossen Profile](https://www.researchgate.net/profile/Md-Rifat-Hossen-3)
- **ORCID:** [0009-0004-7835-3794](https://orcid.org/0009-0004-7835-3794)
- **YouTube Channel:** [@RifatHossaiNBro](https://youtube.com/@RifatHossaiNBro)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).
