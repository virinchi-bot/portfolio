"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

// ─── Animation variants ──────────────────────────────────────
const container = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Component ───────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-8 h-px bg-sky opacity-60" />
            <span className="font-pixel text-sky text-xs tracking-widest uppercase opacity-80">
              Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="space-y-1">
            <h1 className="text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <span className="gradient-text">{PERSONAL.name}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={item} className="space-y-1">
            <p className="text-xl text-white font-medium leading-snug">
              Vibecoder · Video Editor · Builder
            </p>
            <p className="text-mist font-mono text-sm mt-1">
              Next.js · Supabase · AI Tools · SvelteKit
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-mist text-base leading-relaxed max-w-md"
          >
            I build with AI tools, vibe-code full-stack apps, edit videos, and
            turn ideas into real products — fast.{" "}
            <span className="text-violet font-medium">B.Tech </span> student
            building a dev brand from Hyderabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="glass shimmer px-6 py-3 rounded-lg text-sm font-medium text-white border border-violet/20 hover:border-violet/40 transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-sm font-medium text-sky border border-sky/20 hover:border-sky/40 hover:bg-sky/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6 pt-2">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist hover:text-white transition-colors duration-200 font-mono text-xs tracking-wide"
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist hover:text-white transition-colors duration-200 font-mono text-xs tracking-wide"
            >
              Instagram ↗
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-mist hover:text-white transition-colors duration-200 font-mono text-xs tracking-wide"
            >
              Email ↗
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Portrait placeholder ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <PortraitFrame />
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator />
    </section>
  );
}

// ─── Portrait Frame ──────────────────────────────────────────
function PortraitFrame() {
  return (
    <div className="relative w-80 h-80">
      <div className="absolute inset-0 rounded-2xl border border-violet/20 rotate-3" />
      <div className="absolute inset-0 rounded-2xl border border-sky/10 -rotate-2" />

      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
        <img
          src="/portrait.png"
          alt="Gudla SaiVirinchi"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-sky/40" />
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-sky/40" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-sky/40" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-sky/40" />
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full border border-violet/20"
      >
        <span className="font-pixel text-violet text-xs">Gudla SaiVirinchi</span>
      </motion.div>
    </div >
  );
}



// ─── Scroll Indicator ────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-mist font-mono text-xs tracking-widest">Explore</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-10 bg-gradient-to-b from-violet/60 to-transparent"
      />
    </motion.div>
  );
}