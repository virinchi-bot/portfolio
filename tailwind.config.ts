import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        void: "#070B14",
        depth: "#0D1321",
        surface: "#111827",
        
        // Accents
        sky: "#7DD3FC",
        violet: "#A78BFA",
        bloom: "#C084FC",
        
        // Warm contrast
        amber: "#F59E0B",
        
        // Neutrals
        mist: "#94A3B8",
        ghost: "#1E293B",
      },
      fontFamily: {
        // Primary: modern, cinematic
        sans: ["var(--font-space-grotesk)", "system-ui"],
        // Monospace: code, labels
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        // Pixel accent: MINIMAL usage only
        pixel: ["var(--font-pixelify-sans)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "grid-subtle": `linear-gradient(rgba(125, 211, 252, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(125, 211, 252, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      boxShadow: {
        "glow-sky": "0 0 20px rgba(125, 211, 252, 0.15)",
        "glow-violet": "0 0 20px rgba(167, 139, 250, 0.15)",
        "glow-bloom": "0 0 30px rgba(192, 132, 252, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;