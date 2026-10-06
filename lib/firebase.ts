// Firebase client setup (Firestore Lite + Auth).
// In web applications, Firebase credentials identify the project and are configured
// via environment variables (NEXT_PUBLIC_*) to prevent accidental secret scanner flags.
// Access control is enforced by firestore.rules and Firebase Authentication.
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore/lite";
import { getAuth, type Auth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "rifathossen47.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "rifathossen47",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "rifathossen47.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "400409906850",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:400409906850:web:43778c9f56834025fd51fb",
};

// The only account allowed to write content (must match firestore.rules).
export const ADMIN_UID = process.env.NEXT_PUBLIC_ADMIN_UID || "cyhaUkuDnMOe8wdhmhXF3dUsdzy1";
export const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "rifat8851@gmail.com";

export function getFirebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getDb(): Firestore {
  return getFirestore(getFirebaseApp());
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}
