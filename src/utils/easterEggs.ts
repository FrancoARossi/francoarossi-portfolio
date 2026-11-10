export function encodeEgg(id: string): string {
  if (typeof window !== "undefined" && window.btoa) {
    return window.btoa(id);
  }
  // Node.js (server)
  return Buffer.from(id, "utf-8").toString("base64");
}

export function decodeEgg(encoded: string): string {
  if (typeof window !== "undefined" && window.atob) {
    return window.atob(encoded);
  }
  // Node.js (server)
  return Buffer.from(encoded, "base64").toString("utf-8");
}

const EGG_IDS = ["franco-shake", "lila-limon"];

export const ENCODED_EGGS = EGG_IDS.map(encodeEgg);

export const EASTER_EGGS = Object.fromEntries(
  EGG_IDS.map((id) => [encodeEgg(id), encodeEgg(id)]),
);

function knownEggs(value: string): string[] {
  const found = new Set<string>();

  for (const part of value.split(",")) {
    const egg = part.trim();
    if (!egg) continue;

    if (ENCODED_EGGS.includes(egg)) {
      found.add(egg);
      continue;
    }

    const encoded = encodeEgg(egg);
    if (ENCODED_EGGS.includes(encoded)) found.add(encoded);
  }

  return [...found];
}

export function readFoundEggs(): string[] {
  const stored = localStorage.getItem("foundEasterEggs");
  if (!stored) return [];

  try {
    return knownEggs(decodeEgg(stored));
  } catch {
    return knownEggs(stored);
  }
}

export function saveFoundEggs(eggs: string[]): void {
  const unique = ENCODED_EGGS.filter((egg) => eggs.includes(egg));
  localStorage.setItem("foundEasterEggs", encodeEgg(unique.join(",")));
}