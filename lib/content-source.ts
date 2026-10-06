// Where each portfolio section lives in Firestore, and which source the site uses.
//
// SAFETY MODEL
// - lib/portfolio-data.ts stays the original, untouched copy of all content.
// - Pages are always pre-rendered from that local data first.
// - If a section is set to "firestore" below, the browser then loads the same
//   section from Firestore (portfolio/<doc>) and uses it ONLY if it exists and
//   has the same shape. Any error or missing doc => local data keeps showing.
// - To go back to 100% local for a section, change its value to "local".

export type ContentSource = "local" | "firestore";

/** Firestore collection holding one document per portfolio section. */
export const PORTFOLIO_COLLECTION = "portfolio";

/** Firestore collections used by the blog. */
export const BLOG_POSTS_COLLECTION = "blogPosts";
export const BLOG_COMMENTS_COLLECTION = "blogComments";
export const BLOG_COMMENT_CONTACTS_COLLECTION = "blogCommentContacts";

/**
 * Section key -> Firestore document id (portfolio/<id>).
 * Each document has the shape: { data: <exact copy of the local export>, source, updatedAt }
 */
export const SECTION_DOCS = {
  siteConfig: "siteConfig", // siteConfig
  experiences: "experiences", // experiences
  publications: "publications", // publications
  projects: "projects", // projects
  skillCategories: "skillCategories", // skillCategories
  competitiveProgramming: "competitiveProgramming", // competitiveProgrammingPlatforms
  problemSolvingTopics: "problemSolvingTopics", // problemSolvingTopics
  education: "education", // educationList
  certifications: "certifications", // certificationsList
  leadership: "leadership", // leadershipList
  creative: "creative", // creativeData (YouTube vlogs, design works, blog cards, hobbies)
} as const;

export type SectionKey = keyof typeof SECTION_DOCS;

/** Per-section data source switch. */
export const SECTION_SOURCE: Record<SectionKey, ContentSource> = {
  siteConfig: "firestore",
  experiences: "firestore",
  publications: "firestore",
  projects: "firestore",
  skillCategories: "firestore",
  competitiveProgramming: "firestore",
  problemSolvingTopics: "firestore",
  education: "firestore",
  certifications: "firestore",
  leadership: "firestore",
  creative: "firestore",
};

/** Blog source switch ("local" = use INITIAL_BLOG_POSTS + browser storage only). */
export const BLOG_SOURCE: ContentSource = "firestore";
