// Centralized Blog & Technical Writing Service
// Supports persistent storage via localStorage with rich initial articles

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  published: boolean;
  content: string;
  tags: string[];
}

export interface BlogComment {
  id: string;
  slug: string;
  name: string;
  email?: string;
  text: string;
  date: string;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "building-mycuetbus-react-native-gps",
    title: "Building MyCUETBus: Real-Time GPS Tracking with React Native",
    excerpt:
      "Deep dive into architecting a campus transit tracking application with Expo Router, Mapbox GL, and an MQTT-to-Firebase telemetry synchronization bridge for 834+ students.",
    category: "Mobile Engineering",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    author: "Md Rifat Hossen",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?auto=format&fit=crop&w=1080&q=80",
    published: true,
    tags: ["React Native", "Expo Router", "Mapbox", "Firebase", "MQTT", "IoT"],
    content: `
      <h2>The Problem: Campus Commute Uncertainty</h2>
      <p>Chittagong University of Engineering and Technology (CUET) is located approximately 25 kilometers away from Chittagong city. Every day, thousands of students, faculty members, and campus staff rely on a fleet of university buses to commute back and forth along the busy highway.</p>
      <p>Without automated GPS monitoring, students routinely encountered missed buses, irregular traffic schedules, and extended waiting times at isolated highway stops under extreme weather conditions. We needed a reliable, battery-efficient, and low-latency tracking system tailored to our campus ecosystem.</p>

      <h2>System Architecture & IoT Bridge</h2>
      <p>The solution comprises two coordinated layers:</p>
      <ul>
        <li><strong>Hardware Telemetry Pipeline:</strong> Bus-mounted ESP32 microcontrollers with NEO-6M GPS modules stream geographic coordinates via MQTT protocol to a cloud-based ingestion service.</li>
        <li><strong>Node.js Telemetry Bridge:</strong> A lightweight cloud microservice validates coordinates, sanitizes speed and heading data, and updates Firebase Realtime Database at 5-second polling intervals.</li>
        <li><strong>Cross-Platform Mobile App:</strong> Built on React Native 0.76 with Expo Router v4 and Mapbox Maps (<code>@rnmapbox/maps</code>), rendering live vector markers with heading orientation.</li>
      </ul>

      <h2>Background Location & Battery Optimization</h2>
      <p>One of the primary engineering challenges was maintaining consistent GPS broadcasting from drivers' Android devices without battery drain or OS task termination. We utilized <code>expo-task-manager</code> coupled with foreground services to establish a persistent location loop that continues streaming even when the device is locked.</p>

      <h2>Campus Adoption & Impact</h2>
      <p>Following its launch, MyCUETBus was adopted by over <strong>834 verified CUET students</strong> via institutional email verification (<code>@student.cuet.ac.bd</code>). Today, it serves as the official digital transit companion for students commuting across Chittagong.</p>
    `,
  },
  {
    id: "post-2",
    slug: "publishing-ieee-papers-undergraduate",
    title: "Publishing Peer-Reviewed Papers as an Undergraduate",
    excerpt:
      "Methodology, experimental rigor, and lessons learned from co-authoring 6 research papers across Springer Nature (Q2 Journal) and IEEE during undergraduate study at CUET.",
    category: "Academic Research",
    date: "Dec 8, 2025",
    readTime: "10 min read",
    author: "Md Rifat Hossen",
    image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?auto=format&fit=crop&w=1080&q=80",
    published: true,
    tags: ["Academic Research", "Deep Learning", "Bengali NLP", "Springer Nature", "IEEE"],
    content: `
      <h2>The Undergraduate Research Mindset</h2>
      <p>Many undergraduate engineering students assume that publishing in top-tier venues like Springer Nature or IEEE requires years of post-graduate study or large laboratory budgets. However, with disciplined problem formulation, thorough literature review, and reproducible experimental design, undergraduates can deliver impactful contributions to the scientific community.</p>

      <h2>Key Tenet 1: Ground Your Problem in High-Impact Domains</h2>
      <p>Our research trajectory focused on two areas where real gaps existed in the literature:</p>
      <ol>
        <li><strong>Low-Resource Bengali NLP:</strong> Bengali is spoken by over 300 million people, yet benchmarks for fine-grained multi-aspect sentiment analysis (BanglaSentNet) and multimodal disaster classification (BanglaMM-Disaster) were virtually non-existent.</li>
        <li><strong>Explainable AI in Industry:</strong> Applying Grad-CAM to semiconductor wafer defect classification (IEEE ECCE 2025) and multi-task fruit freshness inspection (IEEE ICCIT 2025) to convert black-box deep CNNs into interpretable diagnostic tools.</li>
      </ol>

      <h2>Key Tenet 2: Rigorous Ablation Studies & Baselines</h2>
      <p>Reviewers from Q2 journals like <em>SN Computer Science</em> demand more than just a high accuracy metric. You must prove <em>why</em> your architectural design outperforms existing techniques. For BanglaSentNet, we benchmarked classical ML (SVM, Random Forest), deep recurrent models (BiLSTM, GRU), standalone transformers (BanglaBERT), and our proposed length-adaptive dynamic ensemble over 5 random seeds with paired t-tests ($p < 0.01$).</p>

      <h2>Key Tenet 3: Transparency & Open Science</h2>
      <p>Always release reproducible codebases, pre-trained weights, and evaluation artifacts on GitHub. This builds credibility and enables researchers worldwide to benchmark against your work.</p>
    `,
  },
  {
    id: "post-3",
    slug: "full-stack-cuet-foodexpress-case-study",
    title: "Full-Stack Development: CUET FoodExpress Case Study",
    excerpt:
      "Architecting a multi-role food ordering platform with React, Node.js, MongoDB, Stripe webhooks, and Mailgun notification queues during industrial attachment at W3 Eden.",
    category: "Web Engineering",
    date: "Dec 5, 2025",
    readTime: "12 min read",
    author: "Md Rifat Hossen",
    image: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?auto=format&fit=crop&w=1080&q=80",
    published: true,
    tags: ["Full-Stack", "React 18", "Express.js", "MongoDB", "Stripe", "JWT Auth"],
    content: `
      <h2>The Challenge: Friction in Campus Cafeterias</h2>
      <p>During peak lunch hours, university cafeterias experience massive queues, order mix-ups, and cash handling friction. CUET FoodExpress was built to provide a clean digital interface where students can browse real-time menus, place orders, and pay securely online, while kitchen administrators track orders and live revenue.</p>

      <h2>The Engineering Stack</h2>
      <p>The system was engineered during an intensive industrial attachment at W3 Eden, utilizing a modern JavaScript architecture:</p>
      <ul>
        <li><strong>Client:</strong> React 18, Vite 5, Tailwind CSS, TanStack Query v5 for optimistic cart state management.</li>
        <li><strong>Server:</strong> Express.js REST API with JWT-protected administrative middleware.</li>
        <li><strong>Database:</strong> MongoDB Atlas with complex aggregation pipelines (<code>$lookup</code>, <code>$unwind</code>, <code>$group</code>) for sales analytics.</li>
        <li><strong>Payments:</strong> Stripe Elements card processing with backend PaymentIntent verification.</li>
      </ul>

      <h2>Security & Role-Based Routing</h2>
      <p>We implemented strict role separation using dual middleware guards: <code>verifyToken</code> checks the JSON Web Token signature attached to Axios requests, while <code>verifyAdmin</code> queries the database to confirm administrative privileges before granting access to revenue analytics and menu management tools.</p>
    `,
  },
  {
    id: "post-4",
    slug: "bengali-nlp-banglaaste-framework",
    title: "Bengali NLP: Aspect-Sentiment Extraction with BanglaBERT",
    excerpt:
      "Extracting fine-grained aspect-sentiment-opinion triplets from Bengali e-commerce customer reviews using transformer embeddings and syntactic graph matching.",
    category: "Machine Learning",
    date: "Dec 1, 2025",
    readTime: "15 min read",
    author: "Md Rifat Hossen",
    image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?auto=format&fit=crop&w=1080&q=80",
    published: true,
    tags: ["BanglaBERT", "NLP", "ASTE", "Machine Learning", "Transformers"],
    content: `
      <h2>Beyond Simple Sentiment Analysis</h2>
      <p>Traditional sentiment analysis classifies an entire review as simply positive or negative. However, real-world customer feedback frequently contains contrasting sentiments for different aspects of a product in the very same sentence:</p>
      <blockquote><em>"ফোনের ব্যাটারি ব্যাকআপ অসাধারণ কিন্তু ক্যামেরা কোয়ালিটি মোটামুটি"</em><br/>(Translation: The battery backup is awesome, but the camera quality is mediocre)</blockquote>

      <h2>The BanglaASTE Pipeline</h2>
      <p>Published in IEEE SPICSCON 2025, our BanglaASTE framework extracts complete <code>(Aspect, Opinion, Sentiment)</code> triplets through a 4-stage pipeline:</p>
      <ol>
        <li><strong>Unicode Normalization & Cleaning:</strong> Strips platform noise and standardizes informal internet spellings.</li>
        <li><strong>Span Extraction:</strong> Pretrained BanglaBERT transformer representations coupled with Conditional Random Fields (CRF) to identify aspect and opinion word spans.</li>
        <li><strong>Syntactic Graph Pairing:</strong> Maps grammatical dependencies between aspect terms and opinion expressions.</li>
        <li><strong>Ensemble Classification:</strong> XGBoost classifier determining polarity into Positive, Negative, or Neutral.</li>
      </ol>

      <h2>Results & Benchmark</h2>
      <p>On our benchmark dataset of 3,345 manually annotated reviews (7,694 triplets from Daraz and Rokomari), BanglaASTE attained <strong>89.9% classification accuracy</strong> and <strong>89.1% F1-score</strong>, outperforming standalone transformer baselines by +20.4%.</p>
    `,
  },
];

const STORAGE_KEY = "rifat_portfolio_blogs";
const COMMENTS_PREFIX = "rifat_blog_comments_";

export const blogService = {
  getAllPosts: (): BlogPost[] => {
    if (typeof window === "undefined") {
      return INITIAL_BLOG_POSTS;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BLOG_POSTS));
        return INITIAL_BLOG_POSTS;
      }
      return JSON.parse(stored);
    } catch {
      return INITIAL_BLOG_POSTS;
    }
  },

  getPostBySlug: (slug: string): BlogPost | undefined => {
    const posts = blogService.getAllPosts();
    return posts.find((p) => p.slug === slug);
  },

  createPost: (post: Omit<BlogPost, "id">): BlogPost => {
    const posts = blogService.getAllPosts();
    const newPost: BlogPost = {
      ...post,
      id: `post-${Date.now()}`,
    };
    const updated = [newPost, ...posts];
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    return newPost;
  },

  updatePost: (id: string, updatedData: Partial<BlogPost>): BlogPost | null => {
    const posts = blogService.getAllPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    posts[index] = { ...posts[index], ...updatedData };
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
    return posts[index];
  },

  deletePost: (id: string): boolean => {
    const posts = blogService.getAllPosts();
    const filtered = posts.filter((p) => p.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
    return true;
  },

  // Comments Management
  getComments: (slug: string): BlogComment[] => {
    if (typeof window === "undefined") return [];
    try {
      const key = `${COMMENTS_PREFIX}${slug}`;
      const stored = localStorage.getItem(key);
      if (!stored) return [];
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  addComment: (slug: string, comment: Omit<BlogComment, "id" | "slug" | "date">): BlogComment => {
    const comments = blogService.getComments(slug);
    const newComment: BlogComment = {
      ...comment,
      id: `comment-${Date.now()}`,
      slug,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    const updated = [newComment, ...comments];
    if (typeof window !== "undefined") {
      localStorage.setItem(`${COMMENTS_PREFIX}${slug}`, JSON.stringify(updated));
    }
    return newComment;
  },

  // Firestore Async Integrations (with local cache mirroring)
  fetchPostsFromFirestore: async (): Promise<BlogPost[]> => {
    if (typeof window === "undefined") return INITIAL_BLOG_POSTS;
    try {
      const { getDb } = await import("./firebase");
      const { collection, getDocs } = await import("firebase/firestore/lite");
      const { BLOG_POSTS_COLLECTION } = await import("./content-source");
      const snap = await getDocs(collection(getDb(), BLOG_POSTS_COLLECTION));
      if (!snap.empty) {
        const posts: BlogPost[] = snap.docs.map((d) => d.data() as BlogPost);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        return posts;
      }
    } catch (err) {
      console.warn("[blogService] Error fetching posts from Firestore:", err);
    }
    return blogService.getAllPosts();
  },

  fetchPostBySlugFromFirestore: async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await blogService.fetchPostsFromFirestore();
    return posts.find((p) => p.slug === slug);
  },

  savePostToFirestore: async (post: BlogPost): Promise<void> => {
    // Save to local cache first
    const posts = blogService.getAllPosts();
    const idx = posts.findIndex((p) => p.id === post.id);
    let updated: BlogPost[];
    if (idx >= 0) {
      posts[idx] = post;
      updated = posts;
    } else {
      updated = [post, ...posts];
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    // Then persist to Firestore
    try {
      const { getDb } = await import("./firebase");
      const { doc, setDoc } = await import("firebase/firestore/lite");
      const { BLOG_POSTS_COLLECTION } = await import("./content-source");
      await setDoc(doc(getDb(), BLOG_POSTS_COLLECTION, post.id), post);
    } catch (err) {
      console.error("[blogService] Failed to save post to Firestore:", err);
      throw err;
    }
  },

  deletePostFromFirestore: async (id: string): Promise<void> => {
    blogService.deletePost(id);
    try {
      const { getDb } = await import("./firebase");
      const { doc, deleteDoc } = await import("firebase/firestore/lite");
      const { BLOG_POSTS_COLLECTION } = await import("./content-source");
      await deleteDoc(doc(getDb(), BLOG_POSTS_COLLECTION, id));
    } catch (err) {
      console.error("[blogService] Failed to delete post from Firestore:", err);
      throw err;
    }
  },

  fetchCommentsFromFirestore: async (slug: string): Promise<BlogComment[]> => {
    if (typeof window === "undefined") return [];
    try {
      const { getDb } = await import("./firebase");
      const { collection, getDocs } = await import("firebase/firestore/lite");
      const { BLOG_COMMENTS_COLLECTION } = await import("./content-source");
      const snap = await getDocs(collection(getDb(), BLOG_COMMENTS_COLLECTION));
      if (!snap.empty) {
        const comments = snap.docs
          .map((d) => d.data() as BlogComment)
          .filter((c) => c.slug === slug);
        if (comments.length > 0) {
          localStorage.setItem(`${COMMENTS_PREFIX}${slug}`, JSON.stringify(comments));
          return comments;
        }
      }
    } catch (err) {
      console.warn("[blogService] Error fetching comments from Firestore:", err);
    }
    return blogService.getComments(slug);
  },

  addCommentToFirestore: async (
    slug: string,
    comment: Omit<BlogComment, "id" | "slug" | "date"> & { email?: string }
  ): Promise<BlogComment> => {
    const localNew = blogService.addComment(slug, comment);
    try {
      const { getDb } = await import("./firebase");
      const { doc, setDoc, serverTimestamp } = await import("firebase/firestore/lite");
      const { BLOG_COMMENTS_COLLECTION, BLOG_COMMENT_CONTACTS_COLLECTION } = await import("./content-source");
      const commentId = localNew.id;
      await setDoc(doc(getDb(), BLOG_COMMENTS_COLLECTION, commentId), {
        slug,
        name: comment.name,
        text: comment.text,
        date: localNew.date,
        createdAt: serverTimestamp(),
      });
      if (comment.email && comment.email.trim()) {
        await setDoc(doc(getDb(), BLOG_COMMENT_CONTACTS_COLLECTION, commentId), {
          slug,
          email: comment.email.trim(),
          createdAt: serverTimestamp(),
        });
      }
    } catch (err) {
      console.warn("[blogService] Could not persist comment to Firestore:", err);
    }
    return localNew;
  },
};

