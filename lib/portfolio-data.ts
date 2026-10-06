// Centralized Portfolio Data & Configuration Hub
// Fully populated with verified CV, academic results, 6 peer-reviewed papers, client projects, and achievements.

export interface SectionConfigItem {
  enabled: boolean;
  title: string;
  navLabel: string;
  id: string;
}

export interface SiteConfig {
  sections: {
    hero: SectionConfigItem;
    experience: SectionConfigItem;
    projects: SectionConfigItem;
    publications: SectionConfigItem;
    skills: SectionConfigItem;
    credentials: SectionConfigItem;
    creative: SectionConfigItem;
    contact: SectionConfigItem;
  };
  personal: {
    name: string;
    romanizedName: string;
    titles: string[];
    bio: string;
    summary: string;
    email: string;
    academicEmail?: string;
    phone?: string;
    location: string;
    cvUrl: string;
    signatureQuote: {
      text: string;
      author: string;
      note?: string;
    };
    social: {
      github: string;
      linkedin: string;
      scholar: string;
      researchgate: string;
      orcid: string;
      youtube: string;
      facebook?: string;
    };
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  badge?: string;
  company: string;
  location: string;
  type: "Startup" | "Full-time" | "Research Lab" | "Contract" | "Part-time";
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  website?: string;
  projectUrl?: string;
  projectLabel?: string;
  logoText?: string;
  logoImage?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  publisher: "IEEE" | "Springer" | "ACM" | "arXiv" | "Elsevier" | "ResearchGate" | "Other";
  venue: string;
  year: string;
  highlightMetric?: { label: string; value: string };
  tags: string[];
  dataset?: string;
  paperUrl?: string; // Direct link (IEEE Xplore, SpringerLink, etc.)
  arxivUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  tech: string[];
  category: ("Web" | "Mobile" | "ML/AI" | "Systems")[];
  image: string;
  featured: boolean;
  links: {
    live?: string;
    api?: string;
    github?: string;
    githubFrontend?: string;
    githubBackend?: string;
    download?: string;
    figma?: string;
    demo?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CompetitiveProgrammingPlatform {
  name: string;
  username: string;
  profileUrl: string;
  badge: string;
  logo: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  gradeBadge: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  score?: string;
  verifyId?: string;
  featured?: boolean;
  category: "Development" | "Programming" | "Data & AI" | "Conferences";
  link?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  highlights: string[];
}

export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface YouTubeVideoItem {
  id: string;
  title: string;
  banglaTitle?: string;
  location: string;
  year: string;
  youtubeId: string;
  duration?: string;
  description: string;
  url: string;
}

export interface DesignWorkItem {
  title: string;
  category: string;
  clientOrContext: string;
  tools: string;
  description: string;
}

export interface DesignCategoryItem {
  name: string;
  folder: string;
  description: string;
  highlights: string;
  url: string;
}

export interface CreativeData {
  youtube: {
    channelName: string;
    channelHandle: string;
    channelUrl: string;
    focus: string;
    description: string;
    categories: string[];
    featuredVideos: YouTubeVideoItem[];
    skills: { name: string; tools?: string }[];
  };
  design: {
    description: string;
    tools: string[];
    githubUrl: string;
    featuredWorks?: DesignWorkItem[];
    categories?: DesignCategoryItem[];
  };
  blogs: BlogPostItem[];
  hobbies: {
    title: string;
    emoji: string;
    description: string;
    highlights: { label: string; value: string }[];
    link?: string;
    linkText?: string;
  }[];
}

// ==========================================
// 1. MASTER SITE CONFIGURATION
// ==========================================
export const siteConfig: SiteConfig = {
  sections: {
    hero: { enabled: true, title: "Introduction", navLabel: "About", id: "about" },
    experience: { enabled: true, title: "Work Experience", navLabel: "Experience", id: "experience" },
    projects: { enabled: true, title: "Featured Projects", navLabel: "Projects", id: "projects" },
    publications: { enabled: true, title: "Research & Publications", navLabel: "Research", id: "publications" },
    skills: { enabled: true, title: "Skills & Problem Solving", navLabel: "Skills & CP", id: "skills" },
    credentials: { enabled: true, title: "Education & Credentials", navLabel: "Credentials", id: "credentials" },
    creative: { enabled: true, title: "Beyond Code", navLabel: "Beyond Code", id: "beyond-code" },
    contact: { enabled: true, title: "Contact", navLabel: "Contact", id: "contact" },
  },

  personal: {
    name: "Md Rifat Hossen",
    romanizedName: "Rifat Hossain",
    titles: [
      "Full-Stack Software Engineer",
      "AI Researcher (Springer Nature & IEEE)",
      "Co-Founder & Tech Lead @ KREMS",
    ],
    bio: "Software Engineer & AI Researcher. Co-Founder & Technical Lead at KREMS Technologies. Co-author of 6 peer-reviewed research papers in deep learning, NLP, and multimodal AI across Springer Nature (Q2 Journal) and IEEE.",
    summary:
      "Passionate about building production-grade software and solving complex algorithmic challenges. Combining engineering rigor with peer-reviewed academic research in computer vision, Bengali NLP, and multimodal deep learning.",
    email: "rifat8851@gmail.com",
    academicEmail: "u2004129@student.cuet.ac.bd",
    phone: "+880 1720447606",
    location: "Chattogram / Dhaka, Bangladesh",
    cvUrl: "/Rifat_Hossen_CV.pdf",
    signatureQuote: {
      text: "The only thing we're allowed to do is believe that we won't regret the choice we made.",
      author: "Levi Ackerman",
      note: "Discipline, analytical depth, and relentless execution.",
    },
    social: {
      github: "https://github.com/RifatHossaiN47",
      linkedin: "https://linkedin.com/in/rifathossain47",
      scholar: "https://scholar.google.com/citations?user=kJRow6AAAAAJ&hl=en",
      researchgate: "https://www.researchgate.net/profile/Md-Rifat-Hossen-3",
      orcid: "https://orcid.org/0009-0004-7835-3794",
      youtube: "https://youtube.com/@RifatHossaiNBro",
      facebook: "https://www.facebook.com/rifathossain4777",
    },
  },
};

// ==========================================
// 2. WORK EXPERIENCE DATA
// ==========================================
export const experiences: ExperienceItem[] = [
  {
    id: "krems",
    role: "AI Engineer & Full-Stack Developer",
    badge: "Co-Founder & Technical Lead",
    company: "KREMS Technologies",
    location: "Remote / CUET ITBI Level-3",
    type: "Startup",
    period: "2025 - Present",
    description:
      "Co-founded AI-powered software startup; architect full-stack applications, implement AI/ML pipelines, and direct technical strategy for an engineering team of 5. Secured office space at CUET IT Business Incubator (Level-3) to scale startup operations.",
    highlights: [
      "Architected and delivered 10+ client software projects including HealthPort (AI healthcare), RChatbot (RAG chatbot), and official agency Next.js platform",
      "Integrated machine learning pipelines and agentic automation workflows for client applications",
      "Responsible for system scalability, database schema design, and technical roadmap execution",
      "Collaborative technical leadership, mentoring, and code reviews across distributed team members",
      "Secured office space at CUET IT Business Incubator (Level-3) to scale startup operations",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Node.js",
      "Python",
      "Agentic AI",
      "Firebase",
      "Tailwind CSS v4",
      "MongoDB",
    ],
    website: "https://krems.vercel.app",
    logoImage: "/kremslg.jpg",
  },
  {
    id: "w3eden",
    role: "Full-Stack Web Developer",
    badge: "Industrial Attachment",
    company: "W3 Eden",
    location: "Chattogram, Bangladesh",
    type: "Contract",
    period: "3 Weeks Intensive",
    description:
      "Completed intensive industrial training in modern production web development stack (React, Node.js, MongoDB, Firebase). Engineered CUET FoodExpress, an end-to-end campus cafeteria ordering platform with Stripe payments and administrative dispatch console.",
    highlights: [
      "Engineered CUET FoodExpress end-to-end full-stack campus food ordering platform",
      "Implemented Firebase authentication, JWT-secured Express endpoints, and Stripe card payment processing",
      "Designed customer ordering UI and comprehensive kitchen admin management dashboard with sales analytics",
    ],
    techStack: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
    website: "https://w3eden.com/",
    projectUrl: "https://cuet-foodexpress-w3.web.app",
    projectLabel: "CUET FoodExpress App",
    logoText: "W3",
  },
];

// ==========================================
// 3. RESEARCH & PUBLICATIONS (Springer Nature Q2 & IEEE Conferences)
// ==========================================
export const publications: PublicationItem[] = [
  {
    id: "banglasentnet-journal",
    title:
      "BanglaSentNet: An Explainable Hybrid Deep Learning Framework for Multi-Aspect Sentiment Analysis with Cross-Domain Transfer Learning",
    publisher: "Springer",
    venue: "Springer Nature — SN Computer Science (Q2 Journal, Vol. 7, Article No. 446)",
    year: "2026",
    highlightMetric: { label: "Weighted F1 / Accuracy", value: "0.880 F1 / 85.0%" },
    tags: ["Springer Q2 Journal", "BanglaBERT", "XAI / SHAP", "Cross-Domain Transfer", "BiLSTM", "FastText"],
    dataset: "8,755 Real-World Bengali E-Commerce Reviews",
    paperUrl: "https://doi.org/10.1007/s42979-026-05053-x",
    codeUrl: "https://github.com/RifatHossaiN47/journal-banglasentnet",
    featured: true,
  },
  {
    id: "banglasentnet-conference",
    title:
      "BanglaSentNet: A Hybrid Deep Learning Framework for Multi-Aspect Sentiment Analysis in Bangla E-Commerce Reviews",
    publisher: "Springer",
    venue: "Springer ICDSAIA 2025 (CCIS Vol. 2682, pp. 283–300)",
    year: "2025",
    highlightMetric: { label: "F1 / Accuracy Score", value: "0.88 F1 / 85.0%" },
    tags: ["Springer CCIS", "BanglaBERT", "GloVe 2.5B", "Aspect Sentiment", "Dynamic Ensemble"],
    dataset: "8,755 Verified Bengali Reviews",
    paperUrl: "https://doi.org/10.1007/978-3-032-11352-8_20",
    codeUrl: "https://github.com/RifatHossaiN47/conference_BanglaSentNet",
    featured: true,
  },
  {
    id: "fruit-freshness-xai",
    title:
      "A Multi Task Deep Learning Model for Fruit Detection and Freshness Classification with GradCAM Explainability",
    publisher: "IEEE",
    venue: "IEEE ICCIT 2025 (28th International Conference on Computer and Information Technology)",
    year: "2025",
    highlightMetric: { label: "Variety / Freshness Acc", value: "99.64% / 97.27%" },
    tags: ["ResNet152V2", "Grad-CAM XAI", "Multi-Task Learning", "ROC-AUC 0.998", "Hugging Face Demo"],
    dataset: "30,357 Multi-Category Fruit Images",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11491294",
    codeUrl: "https://github.com/RifatHossaiN47/conference-fruit-freshness-xai",
    demoUrl: "https://huggingface.co/spaces/nahinfarhan/fruit-classifier",
    featured: true,
  },
  {
    id: "semiconductor-wafer",
    title:
      "Advancing Semiconductor Fabrication: A CNN-Based Wafer Defect Detection with XAI Insights",
    publisher: "IEEE",
    venue: "IEEE ECCE 2025 (International Conference on Electrical, Computer and Communication Engineering)",
    year: "2025",
    highlightMetric: { label: "Defect Classification Accuracy", value: "94.08%" },
    tags: ["ResNet50", "Grad-CAM", "Transfer Learning", "WM-811K Fab Benchmark", "Computer Vision"],
    dataset: "WM-811K (811,457 Wafer Maps)",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11013292",
    codeUrl: "https://github.com/RifatHossaiN47/conference_semiconductor",
    featured: true,
  },
  {
    id: "bangla-mm-disaster",
    title:
      "BanglaMM-Disaster: A Multimodal Transformer-Based Deep Learning Framework for Multiclass Disaster Classification in Bangla",
    publisher: "IEEE",
    venue: "IEEE SPICSCON 2025 & 3MT Bangladesh 2025",
    year: "2025",
    highlightMetric: { label: "Multimodal Accuracy", value: "83.76%" },
    tags: ["BanglaBERT", "ResNet50", "Multimodal Fusion", "3MT Presentation", "Low-Resource NLP"],
    dataset: "5,037 Bengali Multimodal Social Media Benchmark",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11504189",
    arxivUrl: "https://arxiv.org/abs/2511.21364",
    codeUrl: "https://github.com/RifatHossaiN47/conference_BanglaMM-Disaster",
    featured: true,
  },
  {
    id: "bangla-aste",
    title:
      "BanglaASTE: A Novel Framework for Aspect-Sentiment-Opinion Extraction in Bangla E-commerce Reviews Using Ensemble Deep Learning",
    publisher: "IEEE",
    venue: "IEEE SPICSCON 2025",
    year: "2025",
    highlightMetric: { label: "F1 / Accuracy Score", value: "89.9% / 89.1%" },
    tags: ["BanglaBERT", "XGBoost", "CRF Tagging", "Triplet Extraction", "Aspect Sentiment"],
    dataset: "3,345 Reviews / 7,694 Triplets (Daraz, Rokomari)",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11504105",
    codeUrl: "https://github.com/RifatHossaiN47/conference_BanglaASTE",
    featured: true,
  },
  {
    id: "evoting-poster",
    title:
      "E-Voting Systems: The Future of Secure & Transparent Elections",
    publisher: "ResearchGate",
    venue: "CUET CSE Academic Research Poster Showcase & Symposium (DOI: 10.13140/RG.2.2.12065.16483/1)",
    year: "2024",
    highlightMetric: { label: "Focus", value: "Blockchain & Cryptography" },
    tags: ["Blockchain", "Homomorphic Encryption", "Biometrics", "Verifiable Auditing", "E-Voting Security"],
    dataset: "Decentralized Election Protocol Architectures",
    paperUrl: "https://doi.org/10.13140/RG.2.2.12065.16483/1",
    codeUrl: "https://github.com/RifatHossaiN47/research-poster-collection",
    featured: false,
  },
];

// ==========================================
// 4. FEATURED PROJECTS
// ==========================================
export const projects: ProjectItem[] = [
  {
    id: "mycuetbus",
    title: "MyCUETBus",
    emoji: "🚌",
    description:
      "Real-time campus transit tracking Android application with interactive Mapbox rendering and an MQTT-to-Firebase telemetry bridge streaming live GPS coordinates. Adopted by 834+ verified CUET students.",
    tech: ["React Native", "Expo Router", "Mapbox GL", "Firebase", "MQTT", "NativeWind"],
    category: ["Mobile"],
    image: "/projects/mycuetbus.png",
    featured: true,
    links: {
      live: "https://mycuetbus.web.app/",
      download: "https://github.com/RifatHossaiN47/MyCUETBus/releases/download/v5.0.0/MyCUETBusV5.apk",
      figma: "https://www.figma.com/design/vQ2w1PHp8utaXXKp5U1dHc/MyCUETBus-Design",
      github: "https://github.com/RifatHossaiN47/MyCUETBus",
    },
  },
  {
    id: "cxr-sentinel",
    title: "CXR-Sentinel",
    emoji: "🩻",
    description:
      "AI-assisted chest X-ray analysis and clinical reporting prototype simulating a 5-stage radiological workflow with Gemini API, RAD-DINO ViT-B/14, and dual uncertainty gating (0.988 mean AUC).",
    tech: ["Next.js 16", "TypeScript", "PyTorch", "Gemini API", "Tailwind CSS v4", "Framer Motion"],
    category: ["Web", "ML/AI"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1080&q=80",
    featured: true,
    links: {
      live: "https://cxr-sentinal.vercel.app",
      github: "https://github.com/RifatHossaiN47/cxr-sentinal",
    },
  },
  {
    id: "cuet-foodexpress",
    title: "CUET FoodExpress",
    emoji: "🍕",
    description:
      "Full-stack campus food ordering and cafeteria management platform featuring Firebase authentication, JWT-secured Express endpoints, Stripe card checkout, and an administrative dispatch dashboard.",
    tech: ["React 18", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase", "Tailwind CSS"],
    category: ["Web"],
    image: "/projects/cuetfoodexpress.png",
    featured: true,
    links: {
      live: "https://cuet-foodexpress-w3.web.app",
      api: "https://cuet-foodexpress-server.vercel.app",
      githubFrontend: "https://github.com/RifatHossaiN47/cuet-foodexpress-frontend",
      githubBackend: "https://github.com/RifatHossaiN47/cuet-foodexpress-backend",
    },
  },
  {
    id: "fruit-classifier",
    title: "Multi-Task Fruit Classification & Freshness XAI",
    emoji: "🍎",
    description:
      "Unified multi-task ResNet152V2 model for simultaneous 9-class fruit categorization (99.64% acc) and freshness classification (97.27% acc, 0.998 ROC-AUC) with dual-head Grad-CAM XAI. Published in IEEE ICCIT 2025.",
    tech: ["Python", "TensorFlow", "ResNet152V2", "Grad-CAM", "Streamlit", "Hugging Face"],
    category: ["ML/AI"],
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1080&q=80",
    featured: true,
    links: {
      live: "https://huggingface.co/spaces/nahinfarhan/fruit-classifier",
      demo: "https://huggingface.co/spaces/nahinfarhan/fruit-classifier",
      github: "https://github.com/RifatHossaiN47/conference-fruit-freshness-xai",
    },
  },
  {
    id: "krems-portal",
    title: "KREMS Technologies Platform",
    emoji: "🏢",
    description:
      "Modern agency platform for AI automation engineering, RAG chatbot implementations, and full-stack software development with integrated EmailJS inquiry pipeline.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "EmailJS"],
    category: ["Web"],
    image: "/projects/krems.png",
    featured: true,
    links: {
      live: "https://krems.vercel.app/",
      github: "https://github.com/RifatHossaiN47/krems",
    },
  },
  {
    id: "siyam-it-center",
    title: "Siyam IT Center",
    emoji: "💻",
    description:
      "Production-grade multilingual IT agency website engineered with Next.js App Router, SSR/SSG, and zero-downtime CI/CD deployment on Vercel Edge Network.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    category: ["Web"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80",
    featured: true,
    links: {
      github: "https://github.com/RifatHossaiN47/siyam-it-center",
    },
  },
  {
    id: "email-spam-classifier",
    title: "Email & SMS Spam Classifier",
    emoji: "📧",
    description:
      "NLP spam detection engine leveraging Multinomial Naive Bayes and TF-IDF feature extraction achieving 100% precision on spam with sub-millisecond inference.",
    tech: ["Python", "Streamlit", "Scikit-learn", "NLTK", "TF-IDF", "Render"],
    category: ["ML/AI"],
    image: "/projects/emailspam.jpg",
    featured: true,
    links: {
      live: "https://email-spam-classifier-ml-model.onrender.com/",
      github: "https://github.com/RifatHossaiN47/Email-Spam-Classifier-ML-Model",
    },
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    emoji: "🎬",
    description:
      "Content-based movie recommendation engine converting TMDB 5,000 film metadata into a 5,000-dimensional vector space with sub-second cosine distance lookups.",
    tech: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
    category: ["ML/AI"],
    image: "/projects/movierecommend.jpg",
    featured: false,
    links: {
      live: "https://movie-recommendation-rh47.streamlit.app/",
      github: "https://github.com/RifatHossaiN47/ML-Movie-Recommendation-System",
    },
  },
  {
    id: "gooqle-vault",
    title: "GooQle Search & Cloud Vault",
    emoji: "🔍",
    description:
      "Minimalist browser startpage powered by DuckDuckGo with an embedded, realtime Google Cloud Firestore text and code snippet vault.",
    tech: ["HTML5", "Vanilla CSS3", "JavaScript ES6+", "Firestore", "Firebase Hosting"],
    category: ["Web"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1080&q=80",
    featured: false,
    links: {
      live: "https://goooqle.web.app",
      github: "https://github.com/RifatHossaiN47/gooqle",
    },
  },
  {
    id: "stadium-ticket",
    title: "Stadium Ticket Management",
    emoji: "🎫",
    description:
      "Enterprise ticketing and seating reservation platform backed by Java Spring Boot and relational MySQL transaction handling.",
    tech: ["Java Spring Boot", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    category: ["Web"],
    image: "/projects/tricket.png",
    featured: false,
    links: {
      live: "https://stadium-ticket-management-system-production.up.railway.app/",
      github: "https://github.com/RifatHossaiN47/Stadium-Ticket-Management-System",
    },
  },
  {
    id: "cse-database-cuet",
    title: "CUET CSE Department Database",
    emoji: "🎓",
    description:
      "Terminal academic record management system in C++ with role-segregated faculty and student portals using atomic file-based persistence.",
    tech: ["C++", "OOP", "File I/O", "Data Structures"],
    category: ["Systems"],
    image: "/projects/datacse.png",
    featured: false,
    links: {
      download: "https://github.com/RifatHossaiN47/Cpp_OOP_Projects/releases/download/v1.0.0/CSEDatabaseCUET.exe",
      github: "https://github.com/RifatHossaiN47/Cpp_OOP_Projects",
    },
  },
  {
    id: "bmi-calculator",
    title: "BMI Health Tracker",
    emoji: "🏋️",
    description:
      "Native Android application for Body Mass Index calculation with dual imperial seekbars and WHO health risk categorization.",
    tech: ["Java", "Android SDK", "Material Design"],
    category: ["Mobile"],
    image: "/projects/bmi.png",
    featured: false,
    links: {
      download: "https://github.com/RifatHossaiN47/BMI-Calculator-App/releases/download/v1.0.0/BMICalculator.apk",
      github: "https://github.com/RifatHossaiN47/BMI-Calculator-App",
    },
  },
  {
    id: "bash-library",
    title: "Bash Library System",
    emoji: "📚",
    description:
      "Unix command-line library inventory management system featuring role-based access control and file persistence.",
    tech: ["Bash", "Linux Shell Scripting", "Unix Utilities"],
    category: ["Systems"],
    image: "/projects/library.png",
    featured: false,
    links: {
      github: "https://github.com/RifatHossaiN47/bash-library-management-system",
    },
  },
];

// ==========================================
// 5. SKILLS & PROBLEM SOLVING
// ==========================================
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL", "Bash", "Solidity", "HTML5/CSS3"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React 19", "Next.js 16", "React Native", "Expo Router", "Tailwind CSS v4", "NativeWind", "Vite"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "Java Spring Boot", "RESTful APIs", "JWT Auth", "Stripe API", "Firebase RTDB"],
  },
  {
    title: "AI, ML & Research",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "BanglaBERT",
      "ResNet",
      "Grad-CAM XAI",
      "SHAP",
      "LLM APIs (Gemini)",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "MySQL", "Firestore", "Firebase Hosting", "Vercel", "Render", "Railway", "Docker (basics)", "Git & GitHub"],
  },
];

export const competitiveProgrammingPlatforms: CompetitiveProgrammingPlatform[] = [
  {
    name: "Codeforces",
    username: "@RifatHossain47",
    profileUrl: "https://codeforces.com/profile/RifatHossain47",
    badge: "Active Specialist Candidate",
    logo: "🏆",
    accentColor: "from-sky-500 to-blue-600",
    stats: [
      { label: "Max Rating", value: "1350" },
      { label: "Current Rating", value: "1200" },
      { label: "Problems Solved", value: "180+" },
      { label: "Contests Participated", value: "25+" },
    ],
  },
  {
    name: "LeetCode",
    username: "@RifatHossain47",
    profileUrl: "https://leetcode.com/u/RifatHossain47/",
    badge: "Problem Solver",
    logo: "💻",
    accentColor: "from-amber-500 to-orange-600",
    stats: [
      { label: "Total Solved", value: "150+" },
      { label: "Easy", value: "65" },
      { label: "Medium", value: "70" },
      { label: "Hard", value: "15" },
    ],
  },
  {
    name: "CodeChef",
    username: "@rifathossain47",
    profileUrl: "https://www.codechef.com/users/rifathossain47",
    badge: "3-Star Rated Coder",
    logo: "⭐",
    accentColor: "from-yellow-600 to-amber-700",
    stats: [
      { label: "Peak Rating", value: "1520" },
      { label: "Current Rating", value: "1400+" },
      { label: "Star Division", value: "3-Star (3★)" },
      { label: "Problems Solved", value: "120+" },
    ],
  },
];

export const problemSolvingTopics: string[] = [
  "Data Structures",
  "Graph Algorithms",
  "Dynamic Programming",
  "Greedy Algorithms",
  "Binary Search",
  "Tree Traversals",
  "Number Theory",
  "String Manipulation",
  "Divide & Conquer",
];

// ==========================================
// 6. EDUCATION & CREDENTIALS (Corrected with verified GPA/CGPA)
// ==========================================
export const educationList: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Chittagong University of Engineering & Technology (CUET)",
    duration: "2022 – 2026",
    location: "Chattogram, Bangladesh",
    gradeBadge: "CGPA: 3.60 / 4.00",
    details:
      "Graduated in CSE. Co-authored 6 peer-reviewed research papers in deep learning and NLP published in Springer Nature (Q2 Journal) and IEEE. Led campus initiatives, hackathons, and software engineering projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Dhaka College",
    duration: "2018 – 2020",
    location: "Dhaka, Bangladesh",
    gradeBadge: "GPA: 5.00 / 5.00",
    details:
      "Science Group. Core coursework in Physics, Chemistry, Higher Mathematics, and Biology, along with General curriculum subjects including ICT, English, and Bangla. Graduated with GPA 5.00 / 5.00.",
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Samsul Haque Khan School and College",
    duration: "2013 – 2018",
    location: "Dhaka, Bangladesh",
    gradeBadge: "GPA: 5.00 / 5.00",
    details:
      "Science Group. Core coursework in Physics, Chemistry, Higher Mathematics, Biology, and General Science, with general curriculum subjects in Bangla, English, and Social Studies. Graduated with GPA 5.00 / 5.00.",
  },
];

export const certificationsList: CertificationItem[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online (Prof. Andrew Ng)",
    year: "2024",
    verifyId: "7DRBM-CJBH6U0",
    featured: true,
    category: "Data & AI",
  },
  {
    name: "Mobile App Development (Android / Flutter / iOS)",
    issuer: "EDGE Project — Bangladesh Computer Council, ICT Division (80 hrs)",
    year: "2025",
    featured: true,
    category: "Development",
  },
  {
    name: "Roadmap to Successful Products — Software Engineering Best Practices",
    issuer: "Dept. of CSE, CUET & Kolpolok Ltd.",
    year: "2025",
    featured: true,
    category: "Development",
  },
  {
    name: "NodeJS, Express & MongoDB Development",
    issuer: "KnowledgeGate & W3 Eden",
    year: "2024",
    featured: true,
    category: "Development",
  },
  {
    name: "Complete Java Programming Mastery",
    issuer: "KnowledgeGate",
    year: "2024",
    score: "95%",
    featured: true,
    category: "Programming",
  },
  {
    name: "React & Redux State Architecture",
    issuer: "KnowledgeGate",
    year: "2023",
    category: "Development",
  },
  {
    name: "Python Data Analysis",
    issuer: "DataCamp",
    year: "2024",
    category: "Data & AI",
  },
  {
    name: "Python Data Fundamentals",
    issuer: "DataCamp",
    year: "2023",
    category: "Data & AI",
  },
  {
    name: "GitHub Fundamentals & Version Control",
    issuer: "DataCamp",
    year: "2023",
    category: "Programming",
  },
  {
    name: "IEEE ICCIT 2025 Paper Presentation",
    issuer: "IEEE (Paper ID: 193)",
    year: "2025",
    featured: true,
    category: "Conferences",
  },
  {
    name: "IEEE ECCE 2025 Paper Presentation",
    issuer: "IEEE",
    year: "2025",
    featured: true,
    category: "Conferences",
  },
  {
    name: "IEEE SPICSCON 2025 Paper Presentation",
    issuer: "IEEE",
    year: "2025",
    featured: true,
    category: "Conferences",
  },
  {
    name: "Springer ICDSAIA 2025 Conference Presentation",
    issuer: "Springer Nature",
    year: "2025",
    featured: true,
    category: "Conferences",
  },
  {
    name: "3-Minute Thesis (3MT) Bangladesh 2025",
    issuer: "Elite Research Lab LLC & GradAgent.AI",
    year: "2025",
    featured: true,
    category: "Conferences",
  },
];

export const leadershipList: LeadershipItem[] = [
  {
    role: "General Secretary",
    organization: "Dhaka College Association of CUET (DCAC)",
    period: "2024 – 2025",
    badge: "Executive Committee",
    description:
      "Leading executive operations, event coordination, student mentorship, and regional alumni outreach for Dhaka College alumni at CUET.",
    highlights: [
      "Directed annual general meetings, student welcome receptions, and cultural events",
      "Coordinated CKRUET Admission Helpline campaign assisting hundreds of admission candidates",
      "Oversaw organizational communications and digital visual branding",
    ],
  },
  {
    role: "Joint General Secretary",
    organization: "Greater Dhaka Association of CUET",
    period: "2024 – 2025",
    badge: "Executive Committee",
    description:
      "Co-directing cross-departmental coordination, student welfare programs, and collaborative activities for students from Greater Dhaka region.",
    highlights: [
      "Assisted in student welfare programs and inter-hall student coordination",
      "Organized regional student gatherings and annual departmental farewell ceremonies",
    ],
  },
  {
    role: "Organizer & Volunteer",
    organization: "CUET Career Fest 2024 (CUET Career Club)",
    period: "2024",
    badge: "Certificate of Achievement",
    description:
      "Recognized by CUET Career Club for phenomenal effort in organizing the university flagship career festival hosting top national tech employers.",
    highlights: [
      "Awarded official Certificate of Achievement signed by President and General Secretary",
      "Coordinated corporate booth logistics, speaker sessions, and technical workshop schedules",
    ],
  },
  {
    role: "Co-Founder & Technical Lead",
    organization: "KREMS Technologies (CUET IT Business Incubator)",
    period: "2025 – Present",
    badge: "Startup Leadership",
    description:
      "Leading engineering direction for a 5-member AI startup; secured official office space at CUET IT Business Incubator (Level-3).",
    highlights: [
      "Represented KREMS at the ITBI Startup Pitch Fest 2026",
      "Delivered 10+ client software solutions across AI healthcare and RAG chatbots",
    ],
  },
];

// ==========================================
// 7. CREATIVE STUDIO (Beyond Code: YouTube, Design, Blog, Hobbies)
// ==========================================
export const creativeData: CreativeData = {
  youtube: {
    channelName: "Rifat HossaiN.",
    channelHandle: "@RifatHossaiNBro",
    channelUrl: "https://www.youtube.com/@RifatHossaiNBro",
    focus: "Travel Filmmaking & Cinematic Visuals",
    description:
      "Documenting raw landscapes, mountain trails, and cultural journeys across Bangladesh. Combining cinematic drone perspectives, dynamic sound design, and custom color grading to tell immersive travel stories.",
    categories: [
      "Travel Documentaries",
      "Cinematic Films",
      "Wilderness Expeditions",
      "Drone Cinematography",
    ],
    featuredVideos: [
      {
        id: "thanchi-amiakhum",
        title: "Thanchi to Amiakhum — Raw Wilderness of Bangladesh",
        banglaTitle: "থানচি থেকে আমিয়াখুম - বাংলাদেশের সবচেয়ে দুর্গম সৌন্দর্য",
        location: "Bandarban, Bangladesh",
        year: "2024",
        youtubeId: "RE2A6_dt8_w",
        duration: "Expedition Film",
        description:
          "Cinematic journey through the remote hill tracts of Thanchi, Sangu River boat expedition, and trekking to Amiakhum & Nafakhum waterfalls.",
        url: "https://www.youtube.com/watch?v=RE2A6_dt8_w",
      },
      {
        id: "beauty-of-sylhet",
        title: "Beauty of Sylhet — Sada Pathor, Lalakhal & Volagonj",
        banglaTitle: "Beauty of Sylhet | Cinematic Video",
        location: "Sylhet, Bangladesh",
        year: "2022",
        youtubeId: "nq8SYuk3PWE",
        duration: "Cinematic Film",
        description:
          "Visual journey through the turquoise watercourses of Lalakhal and the crystalline white stonebeds of Bholaganj along the border.",
        url: "https://www.youtube.com/watch?v=nq8SYuk3PWE",
      },
      {
        id: "chandranath-hill",
        title: "Chandranath Hill Peak Expedition",
        banglaTitle: "চন্দ্রনাথ পাহাড় | BoysofQK20_CUET",
        location: "Sitakunda, Chittagong",
        year: "2021",
        youtubeId: "F9XeeHfShdc",
        duration: "Mountain Trail",
        description:
          "Pre-dawn mountain ascent to the 1,155 ft Chandranath Temple peak in Sitakunda, capturing steep rocky ridges and morning sea mist.",
        url: "https://www.youtube.com/watch?v=F9XeeHfShdc",
      },
      {
        id: "sreemangal-tour",
        title: "Sreemangal — Rain, Mist & Endless Tea Valleys",
        banglaTitle: "Sreemangal Tour | Sylhet",
        location: "Sreemangal, Moulvibazar",
        year: "2022",
        youtubeId: "hY-XikKWTXU",
        duration: "Nature Ambience",
        description:
          "Atmospheric cinematic film exploring the rolling green tea terraces, rain-soaked landscapes, and forest trails of Sreemangal.",
        url: "https://www.youtube.com/watch?v=hY-XikKWTXU",
      },
    ],
    skills: [
      { name: "Cinematic Video Editing", tools: "DaVinci Resolve, Adobe Premiere Pro, CapCut" },
      { name: "Camera & Drone Composition", tools: "4K Composition, Framing, Gimbal Tracking" },
      { name: "Color Grading & LUTs", tools: "Log Correction, Film Look, Ambient Tonal Balance" },
      { name: "Sound Design & Atmosphere", tools: "Foley, Environmental Audio, Dynamic Pacing" },
    ],
  },
  design: {
    description:
      "Visual brand strategist, graphic artist, and motion editor. Crafting high-impact event branding, technical workshop posters, institutional crests, and motion animations for university organizations (IEEE CS CUET, CUET Computer Club, Dhaka College Association of CUET).",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "After Effects", "Figma", "Canva"],
    githubUrl: "https://github.com/RifatHossaiN47/Graphic-Design",
    categories: [
      {
        name: "Event Posters & Banners",
        folder: "Posters-and-Banners",
        description: "Official IEEE event announcements, tech symposium banners, cultural festivals & sports fixture posters.",
        highlights: "IEEE CS CUET, Blockchain Workshop, International Mother Language Day",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Posters-and-Banners",
      },
      {
        name: "Logos & Brand Identity",
        folder: "Logos-and-Branding",
        description: "Institutional identity systems, student association crests, modern monogram marks & vector typography.",
        highlights: "Dhaka College Association of CUET, 47 R Syndicate, Custom Emblems",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Logos-and-Branding",
      },
      {
        name: "Motion Graphics & Openers",
        folder: "Motion-and-Video",
        description: "High-energy brand reveals, stroke line typography openers, circular wipe transitions & glitch loops.",
        highlights: "The Fintick Show Intro, 47 R Syndicate Cyber Loop, Event Bumpers",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Motion-and-Video",
      },
      {
        name: "Certificates & Honor Awards",
        folder: "Certificates-and-Awards",
        description: "Official competition certificates, executive appointment letters & academic achievement awards.",
        highlights: "IEEE CS CUET Competitions, Workshop Completion Laurels",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Certificates-and-Awards",
      },
      {
        name: "Editorial & Social Media",
        folder: "Social-Media-and-Portraits",
        description: "Executive committee spotlight cards, cultural tribute posts, editorial layouts & social banners.",
        highlights: "President & General Secretary Panels, Holiday Celebrations",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Social-Media-and-Portraits",
      },
      {
        name: "Production Vector Source Files",
        folder: "Source-Files",
        description: "Full editable vector project files with intact layer hierarchies, typography paths & composite smart objects.",
        highlights: ".ai (Illustrator), .psd (Photoshop), .prproj / .aep project assets",
        url: "https://github.com/RifatHossaiN47/Graphic-Design/tree/main/Source-Files",
      },
    ],
    featuredWorks: [
      {
        title: "CUET Squad Conquers Bandarban",
        category: "Event Branding",
        clientOrContext: "Adventure Tour & Photo Manipulation",
        tools: "Adobe Photoshop & Illustrator",
        description: "Digital photo manipulation, landscape composite art, and adventure tour caricature poster.",
      },
      {
        title: "IEEE CS CUET Inauguration Ceremony",
        category: "Event Branding",
        clientOrContext: "IEEE Computer Society CUET SB Chapter",
        tools: "Adobe Illustrator",
        description: "Official campaign banner for poster presentations and frontend fusion competitions.",
      },
      {
        title: "Blockchain & Solidity Workshop",
        category: "Event Branding",
        clientOrContext: "CUET Computer Club",
        tools: "Adobe Photoshop & Illustrator",
        description: "Technical workshop announcement poster featuring modern tech geometry and typographic hierarchy.",
      },
      {
        title: "The Fintick Show — Motion Graphics Suite",
        category: "Motion Graphics",
        clientOrContext: "Podcast & Media Brandmark",
        tools: "Adobe Premiere Pro & After Effects",
        description: "Stroke line opener, circular wipe reveal, and multi-layer intro sequence.",
      },
      {
        title: "47 R Syndicate — Glitch Loop",
        category: "Motion Graphics",
        clientOrContext: "Personal Digital Brand Badge",
        tools: "Adobe Premiere Pro & After Effects",
        description: "Cyber-glitch RGB chromatic aberration loop with progress bar animation.",
      },
      {
        title: "Dhaka College Association of CUET Crest",
        category: "Logos & Identity",
        clientOrContext: "Organization Crest",
        tools: "Adobe Illustrator",
        description: "Stylized geometric DCA ligature seamlessly integrated with institutional crest motifs.",
      },
    ],
  },
  blogs: [
    {
      slug: "building-mycuetbus-react-native-gps",
      title: "Building MyCUETBus: Real-Time GPS Tracking with React Native",
      excerpt:
        "Deep dive into architecting a university bus tracking application with Expo, Mapbox GL, and an MQTT-to-Firebase telemetry synchronization bridge.",
      category: "Mobile Engineering",
      date: "Dec 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?auto=format&fit=crop&w=1080&q=80",
    },
    {
      slug: "publishing-ieee-papers-undergraduate",
      title: "Publishing Peer-Reviewed Papers as an Undergraduate",
      excerpt:
        "Key strategies, experimental methodology, and lessons learned from publishing 6 academic research papers across Springer Nature and IEEE during undergraduate study.",
      category: "Academic Research",
      date: "Dec 8, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?auto=format&fit=crop&w=1080&q=80",
    },
    {
      slug: "full-stack-cuet-foodexpress-case-study",
      title: "Full-Stack Development: CUET FoodExpress Case Study",
      excerpt:
        "Architecting a multi-role food ordering platform with React, Node.js, MongoDB, Stripe webhooks, and Mailgun notification queues.",
      category: "Web Engineering",
      date: "Dec 5, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?auto=format&fit=crop&w=1080&q=80",
    },
    {
      slug: "bengali-nlp-banglaaste-framework",
      title: "Bengali NLP: Aspect-Sentiment Extraction with BanglaBERT",
      excerpt:
        "Extracting fine-grained aspect-sentiment-opinion triplets from Bengali text using transformer encoders and gradient boosted classifiers.",
      category: "Machine Learning",
      date: "Dec 1, 2025",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?auto=format&fit=crop&w=1080&q=80",
    },
  ],
  hobbies: [
    {
      title: "Chess & Strategic Play",
      emoji: "♟️",
      description: "Honing mental sharpness, tactical anticipation, and pattern recognition through regular matches on Chess.com.",
      highlights: [
        { label: "Platform", value: "Chess.com" },
        { label: "Handle", value: "@rifathossain47" },
        { label: "Focus", value: "Rapid & Blitz Strategy" },
      ],
      link: "https://www.chess.com/member/rifathossain47",
      linkText: "View Chess.com Profile",
    },
    {
      title: "Travel & Exploration",
      emoji: "🌍",
      description: "Discovering cultural landscapes across Bangladesh and documenting remote destinations with cinematic photography.",
      highlights: [
        { label: "Locations Explored", value: "30+ Destinations" },
        { label: "Key Highlights", value: "Amiakhum, Bandarban, Sylhet, Sitakunda" },
        { label: "Focus", value: "Expedition & Nature Documentaries" },
      ],
      link: "https://www.youtube.com/@RifatHossaiNBro",
      linkText: "Explore Travel Series",
    },
  ],
};
