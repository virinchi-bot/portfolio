"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "YouTube Channel", value: "Live" },
  { label: "Tech Stack", value: "5+" },
  { label: "Based In", value: "HYD" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-40 px-6 flex flex-col items-center w-full">
      <div className="max-w-4xl w-full mx-auto text-center">

        <SectionLabel label="About" centered />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5 text-center"
          >
            <h2 className="text-4xl font-bold gradient-text">
              Who I Am
            </h2>
            <p className="text-mist leading-relaxed">
              I'm a B.Tech EEE student at KNR College, Hyderabad — but my real
              passion lives in building things on the web. I vibe-code full-stack
              apps using AI tools, ship fast, and teach others to do the same
              through my YouTube channel.
            </p>
            <p className="text-mist leading-relaxed">
              From college portals to e-commerce platforms to AI-powered career
              tools — I turn ideas into real, deployed products. Every project
              is a chance to push my skills further.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-sky animate-pulse-soft" />
              <span className="text-sky font-mono text-sm">
                Available for freelance projects
              </span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass shimmer rounded-xl p-6 border border-white/5 text-center space-y-2"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-mist text-xs font-mono tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}