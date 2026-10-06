// Firebase client setup (Firestore Lite + Auth).
// The web config below is public by design (it only identifies the project);
// access is controlled by firestore.rules, not by hiding these values.
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore/lite";
import { getAuth, type Auth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyC6rOwUQtXqOM2A0ymoQIRnqg9wRdOoZno",
  authDomain: "rifathossen47.firebaseapp.com",
  projectId: "rifathossen47",
  storageBucket: "rifathossen47.firebasestorage.app",
  messagingSenderId: "400409906850",
  appId: "1:400409906850:web:43778c9f56834025fd51fb",
};

// The only account allowed to write content (must match firestore.rules).
export const ADMIN_UID = "cyhaUkuDnMOe8wdhmhXF3dUsdzy1";
export const ADMIN_EMAIL = "rifat8851@gmail.com";

export function getFirebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getDb(): Firestore {
  return getFirestore(getFirebaseApp());
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}
