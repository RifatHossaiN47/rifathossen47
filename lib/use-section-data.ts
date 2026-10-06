"use client";

// React hook: render local data immediately, then (optionally) swap in the
// Firestore copy of the same section. Falls back to local data on any problem.
import { useEffect, useState } from "react";
import { PORTFOLIO_COLLECTION, SECTION_DOCS, SECTION_SOURCE, type SectionKey } from "./content-source";
import { hasSameShape, orderLike } from "./content-utils";

// One network request per section per page load, shared by all components.
const sectionCache = new Map<SectionKey, Promise<unknown | null>>();

export function fetchSectionFromFirestore(key: SectionKey): Promise<unknown | null> {
  let pending = sectionCache.get(key);
  if (!pending) {
    pending = (async () => {
      try {
        // Loaded lazily so Firebase never blocks the first paint.
        const [{ getDb }, { doc, getDoc }] = await Promise.all([
          import("./firebase"),
          import("firebase/firestore/lite"),
        ]);
        const snap = await getDoc(doc(getDb(), PORTFOLIO_COLLECTION, SECTION_DOCS[key]));
        return snap.exists() ? (snap.data().data ?? null) : null;
      } catch (err) {
        console.warn(`[content] Using local data for "${key}":`, err);
        return null;
      }
    })();
    sectionCache.set(key, pending);
  }
  return pending;
}

export function useSectionData<T>(key: SectionKey, localData: T): T {
  const [data, setData] = useState<T>(localData);

  useEffect(() => {
    if (SECTION_SOURCE[key] !== "firestore") return;
    let active = true;
    fetchSectionFromFirestore(key).then((remote) => {
      if (active && hasSameShape(remote, localData)) {
        setData(orderLike(remote, localData));
      }
    });
    return () => {
      active = false;
    };
  }, [key, localData]);

  return data;
}
