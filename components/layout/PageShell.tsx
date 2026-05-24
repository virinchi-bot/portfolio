"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PixelIntro from "@/components/intro/PixelIntro";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"intro" | "reveal">("intro");

  const handleIntroComplete = useCallback(() => {
    setPhase("reveal");
  }, []);

  return (
    <div className="relative min-h-screen bg-void overflow-hidden">
      <AmbientBackground />

      <AnimatePresence>
        {phase === "intro" && (
          <PixelIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "reveal" ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ pointerEvents: phase === "reveal" ? "auto" : "none" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #7DD3FC 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}