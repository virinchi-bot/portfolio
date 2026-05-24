// ─── Design Tokens ────────────────────────────────────────────
export const COLORS = {
  void: "#070B14",
  depth: "#0D1321",
  surface: "#111827",
  sky: "#7DD3FC",
  violet: "#A78BFA",
  bloom: "#C084FC",
  amber: "#F59E0B",
  mist: "#94A3B8",
} as const;

// ─── Pixel Formation Config ───────────────────────────────────
export const PIXEL_CONFIG = {
  pixelSize: 4,           // Size of each pixel particle (px)
  gapSize: 1,             // Gap between pixels (px)
  formationDuration: 3.2, // Seconds for particles to form portrait
  holdDuration: 1.2,      // Seconds to hold formed portrait
  fadeOutDuration: 0.8,   // Seconds to fade out intro
  particleCount: 200,     // Ambient background particles
} as const;

// ─── Portfolio Data (fill in your own) ────────────────────────
export const PERSONAL = {
  name: "Gudla SaiVirinchi",
  title: "Vibecoder & Creative Developer",
  subtitle: "B.Tech Student · Hyderabad",
  email: "virinchisai0@gmail.com",
  github: "https://github.com/virinchi-bot",
  instagram: "https://instagram.com/virinchi_valmiki",
} as const;