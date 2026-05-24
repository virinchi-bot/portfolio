"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

interface Particle {
  x: number; y: number;
  tx: number; ty: number;
  r: number; g: number; b: number;
  vx: number; vy: number;
  blinkPhase: number;
  delay: number;
}

const PIXEL_SIZE = 3;
const FRAME_SIZE = 320;

export default function PixelIntro({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"blinking" | "forming" | "holding" | "transitioning" | "done">("blinking");
  const phaseRef = useRef("blinking");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = FRAME_SIZE;
    canvas.height = FRAME_SIZE;

    const particles: Particle[] = [];
    let animId: number;
    let startTime: number | null = null;
    let formingStart: number | null = null;
    const BLINK_DURATION = 1800;
    const FORM_DURATION = 2800;

    const img = new Image();
    img.src = "/portrait.png";
    img.onload = () => {
      const cols = Math.floor(FRAME_SIZE / PIXEL_SIZE);
      const rows = Math.floor(FRAME_SIZE / PIXEL_SIZE);
      const off = document.createElement("canvas");
      off.width = cols; off.height = rows;
      const offCtx = off.getContext("2d")!;
      offCtx.drawImage(img, 0, 0, cols, rows);
      const data = offCtx.getImageData(0, 0, cols, rows).data;

      for (let py = 0; py < rows; py++) {
        for (let px = 0; px < cols; px++) {
          const i = (py * cols + px) * 4;
          if (data[i + 3] < 20) continue;
// Skip very dark/black pixels (background)
if (data[i] < 30 && data[i + 1] < 30 && data[i + 2] < 30) continue;
          particles.push({
            x: Math.random() * FRAME_SIZE,
            y: Math.random() * FRAME_SIZE,
            tx: px * PIXEL_SIZE,
            ty: py * PIXEL_SIZE,
            r: data[i], g: data[i + 1], b: data[i + 2],
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            blinkPhase: Math.random() * Math.PI * 2,
            delay: Math.random() * 0.5,
          });
        }
      }

      const animate = (ts: number) => {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        ctx.fillStyle = "#070B14";
        ctx.fillRect(0, 0, FRAME_SIZE, FRAME_SIZE);

        const p = phaseRef.current;

        if (p === "blinking") {
          for (const pt of particles) {
            pt.x += pt.vx * 0.5;
            pt.y += pt.vy * 0.5;
            if (pt.x < 0 || pt.x > FRAME_SIZE) pt.vx *= -1;
            if (pt.y < 0 || pt.y > FRAME_SIZE) pt.vy *= -1;
            const blink = Math.sin(elapsed * 0.004 + pt.blinkPhase);
            const alpha = blink > 0 ? blink * 0.7 : 0;
            ctx.fillStyle = `rgba(${pt.r},${pt.g},${pt.b},${alpha})`;
            ctx.fillRect(Math.round(pt.x), Math.round(pt.y), PIXEL_SIZE - 1, PIXEL_SIZE - 1);
          }
          if (elapsed > BLINK_DURATION) {
            phaseRef.current = "forming";
            setPhase("forming");
            formingStart = ts;
          }

        } else if (p === "forming") {
          if (!formingStart) formingStart = ts;
          const raw = Math.min((ts - formingStart) / FORM_DURATION, 1);
          let allArrived = true;

          for (const pt of particles) {
            const progress = easeOutCubic(Math.max(0, Math.min((raw - pt.delay) / (1 - pt.delay), 1)));
            if (progress < 0.99) allArrived = false;
            pt.x += (pt.tx - pt.x) * (0.05 + progress * 0.08);
            pt.y += (pt.ty - pt.y) * (0.05 + progress * 0.08);
            ctx.fillStyle = `rgba(${pt.r},${pt.g},${pt.b},${Math.min(progress * 1.5, 1)})`;
            ctx.fillRect(Math.round(pt.x), Math.round(pt.y), PIXEL_SIZE - 1, PIXEL_SIZE - 1);
          }

          if (allArrived) {
            phaseRef.current = "holding";
            setPhase("holding");
            setTimeout(() => {
              phaseRef.current = "transitioning";
              setPhase("transitioning");
            }, 1200);
          }

        } else if (p === "holding" || p === "transitioning") {
          for (const pt of particles) {
            const floatY = Math.sin(ts * 0.001 + pt.tx * 0.05) * 0.8;
            ctx.fillStyle = `rgba(${pt.r},${pt.g},${pt.b},1)`;
            ctx.fillRect(Math.round(pt.tx), Math.round(pt.ty + floatY), PIXEL_SIZE - 1, PIXEL_SIZE - 1);
          }
        }

        animId = requestAnimationFrame(animate);
      };

      animId = requestAnimationFrame(animate);
    };

    return () => cancelAnimationFrame(animId);
  }, []);

  // When transitioning phase completes → call onComplete
  useEffect(() => {
    if (phase === "transitioning") {
      const t = setTimeout(() => {
        onComplete(); // Hero starts fading in
        setTimeout(() => setPhase("done"), 400); // intro exits slightly after
      }, 200);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 bg-void flex items-center justify-center"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: phase === "transitioning" ? 0.85 : 1,
            x: phase === "transitioning" ? "32vw" : 0,
            y: phase === "transitioning" ? "-5vh" : 0,
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            x: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            y: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
            <div className="absolute inset-0 rounded-2xl border border-violet/20 rotate-2 scale-105" />
            <div className="absolute inset-0 rounded-2xl border border-sky/10 -rotate-1" />

            <div
              className="relative rounded-2xl overflow-hidden border border-white/10"
              style={{ width: FRAME_SIZE, height: FRAME_SIZE }}
            >
              <canvas ref={canvasRef} className="w-full h-full" />
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-sky/50 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-sky/50 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-sky/50 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-sky/50 pointer-events-none" />
            </div>

            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              animate={{ opacity: phase === "holding" || phase === "transitioning" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-pixel text-violet text-xs tracking-widest">
                Gudla SaiVirinchi
              </span>
            </motion.div>
          </motion.div>

          {/* Text slides in from left during transition */}
          <motion.div
            className="absolute left-[10vw] top-1/2 -translate-y-1/2 space-y-4 max-w-sm"
        initial={{ opacity: 0, x: -40 }}
        animate={{
          opacity: phase === "transitioning" ? 1 : 0,
          x: phase === "transitioning" ? 0 : -40,
        }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-sky opacity-60" />
          <span className="font-pixel text-sky text-xs tracking-widest uppercase opacity-80">Portfolio</span>
        </div>
        <h1 className="text-6xl font-bold leading-none tracking-tight gradient-text">
          Saivirinchi
        </h1>
        <p className="text-xl text-white font-medium">Vibecoder · Video Editor · Builder</p>
        <p className="text-mist font-mono text-sm">Next.js · Supabase · AI Tools · SvelteKit</p>
      </motion.div>

      {/* Loading dots */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
        animate={{ opacity: phase === "blinking" || phase === "forming" ? 1 : 0 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-violet rounded-full"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )}
    </AnimatePresence>
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - Math.max(0, Math.min(1, t)), 3);
}