// Pure helpers shared by the website and the seed script (no imports on purpose).

/**
 * Firestore does not keep object key order (it sorts map keys alphabetically).
 * Some UI renders keys in order, so this restores the key order of `template`
 * (the local data) onto `value` (the Firestore data). Values are never changed,
 * only the order of object keys. Keys that exist only in Firestore are kept and
 * appended at the end.
 */
export function orderLike<T>(value: unknown, template: T): T {
  if (Array.isArray(value)) {
    const tpl = Array.isArray(template) ? template : [];
    return value.map((item, i) => orderLike(item, tpl[i] ?? tpl[0])) as T;
  }
  if (value && typeof value === "object") {
    const src = value as Record<string, unknown>;
    const tpl =
      template && typeof template === "object" && !Array.isArray(template)
        ? (template as Record<string, unknown>)
        : {};
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(tpl)) {
      if (key in src) out[key] = orderLike(src[key], tpl[key]);
    }
    for (const key of Object.keys(src)) {
      if (!(key in out)) out[key] = src[key];
    }
    return out as T;
  }
  return value as T;
}

/** True when `remote` has the same top-level kind as `local` (array vs object vs primitive). */
export function hasSameShape(remote: unknown, local: unknown): boolean {
  if (remote === null || remote === undefined) return false;
  if (Array.isArray(local)) return Array.isArray(remote);
  if (local && typeof local === "object") {
    return typeof remote === "object" && !Array.isArray(remote);
  }
  return typeof remote === typeof local;
}
