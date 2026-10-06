// Copies the portfolio content from the local source files into Firestore,
// then reads it back and verifies it is IDENTICAL to the local data.
//
// Usage (PowerShell):
//   $env:ADMIN_PASSWORD="<your admin password>"; npm run seed:firestore            # create missing docs + verify
//   $env:ADMIN_PASSWORD="<your admin password>"; npm run seed:firestore -- --force # overwrite Firestore with local
//   $env:ADMIN_PASSWORD="<your admin password>"; npm run seed:firestore -- --check # verify only, write nothing
//
// By default existing Firestore documents are NOT overwritten, so edits you make
// in Firestore later are never lost by re-running this script.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore/lite";

import * as local from "../lib/portfolio-data";
import { INITIAL_BLOG_POSTS } from "../lib/blog-service";
import { orderLike } from "../lib/content-utils";
import { firebaseConfig, ADMIN_EMAIL } from "../lib/firebase";
import {
  PORTFOLIO_COLLECTION,
  BLOG_POSTS_COLLECTION,
  SECTION_DOCS,
  type SectionKey,
} from "../lib/content-source";

const args = new Set(process.argv.slice(2));
const FORCE = args.has("--force");
const CHECK_ONLY = args.has("--check");

// Section key -> the exact local export it mirrors.
const SECTIONS: Record<SectionKey, unknown> = {
  siteConfig: local.siteConfig,
  experiences: local.experiences,
  publications: local.publications,
  projects: local.projects,
  skillCategories: local.skillCategories,
  competitiveProgramming: local.competitiveProgrammingPlatforms,
  problemSolvingTopics: local.problemSolvingTopics,
  education: local.educationList,
  certifications: local.certificationsList,
  leadership: local.leadershipList,
  creative: local.creativeData,
};

const same = (remote: unknown, original: unknown) =>
  JSON.stringify(orderLike(remote, original)) === JSON.stringify(original);

async function main() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error('Set ADMIN_PASSWORD first, e.g. $env:ADMIN_PASSWORD="..."');

  const app = initializeApp(firebaseConfig);
  await signInWithEmailAndPassword(getAuth(app), ADMIN_EMAIL, password);
  const db = getFirestore(app);
  console.log(`Signed in as ${ADMIN_EMAIL}. Mode: ${CHECK_ONLY ? "check" : FORCE ? "force" : "create-missing"}\n`);

  // ---- 1. Write ----------------------------------------------------------
  if (!CHECK_ONLY) {
    for (const [key, value] of Object.entries(SECTIONS) as [SectionKey, unknown][]) {
      const ref = doc(db, PORTFOLIO_COLLECTION, SECTION_DOCS[key]);
      const exists = (await getDoc(ref)).exists();
      if (exists && !FORCE) {
        console.log(`  skip   ${PORTFOLIO_COLLECTION}/${SECTION_DOCS[key]} (already exists)`);
        continue;
      }
      await setDoc(ref, {
        data: JSON.parse(JSON.stringify(value)),
        source: "lib/portfolio-data.ts",
        updatedAt: serverTimestamp(),
      });
      console.log(`  write  ${PORTFOLIO_COLLECTION}/${SECTION_DOCS[key]}`);
    }
    for (const post of INITIAL_BLOG_POSTS) {
      const ref = doc(db, BLOG_POSTS_COLLECTION, post.id);
      const exists = (await getDoc(ref)).exists();
      if (exists && !FORCE) {
        console.log(`  skip   ${BLOG_POSTS_COLLECTION}/${post.id} (already exists)`);
        continue;
      }
      await setDoc(ref, JSON.parse(JSON.stringify(post)));
      console.log(`  write  ${BLOG_POSTS_COLLECTION}/${post.id}`);
    }
  }

  // ---- 2. Verify ---------------------------------------------------------
  console.log("\nVerifying Firestore content against local files:");
  let mismatches = 0;
  for (const [key, value] of Object.entries(SECTIONS) as [SectionKey, unknown][]) {
    const snap = await getDoc(doc(db, PORTFOLIO_COLLECTION, SECTION_DOCS[key]));
    const ok = snap.exists() && same(snap.data().data, value);
    if (!ok) mismatches++;
    console.log(`  ${ok ? "IDENTICAL" : "DIFFERENT"}  ${PORTFOLIO_COLLECTION}/${SECTION_DOCS[key]}`);
  }
  const remotePosts = await getDocs(collection(db, BLOG_POSTS_COLLECTION));
  for (const post of INITIAL_BLOG_POSTS) {
    const remote = remotePosts.docs.find((d) => d.id === post.id);
    const ok = !!remote && same(remote.data(), post);
    if (!ok) mismatches++;
    console.log(`  ${ok ? "IDENTICAL" : "DIFFERENT"}  ${BLOG_POSTS_COLLECTION}/${post.id}`);
  }
  const extra = remotePosts.docs.filter((d) => !INITIAL_BLOG_POSTS.some((p) => p.id === d.id));
  if (extra.length) console.log(`  (+${extra.length} extra blog post(s) created in Firestore: ${extra.map((d) => d.id).join(", ")})`);

  console.log(
    mismatches === 0
      ? "\nAll Firestore content matches your local portfolio data exactly."
      : `\n${mismatches} item(s) differ from local data. Re-run with --force to overwrite Firestore with local data.`
  );
  process.exit(mismatches === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
