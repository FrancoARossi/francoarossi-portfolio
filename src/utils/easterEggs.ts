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
  EGG_IDS.map(id => [encodeEgg(id), encodeEgg(id)])
); 