"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const skills = [
  {
    category: "Frontend",
    color: "#7DD3FC",
    items: ["Next.js", "SvelteKit", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"],
  },
  {
    category: "Backend",
    color: "#A78BFA",
    items: ["Supabase", "PostgreSQL", "TypeScript", "Node.js"],
  },
  {
    category: "AI Tools",
    color: "#C084FC",
    items: ["Gemini API", "Cursor", "Lovable.dev", "Claude", "Replit"],
  },
  {
    category: "Creative",
    color: "#F59E0B",
    items: ["Video Editing", "Pixel Art", "Vibecoding", "YouTube"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-40 px-6 flex flex-col items-center w-full">
      <div className="max-w-4xl w-full mx-auto text-center">

        <SectionLabel label="Skills" centered />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold gradient-text mt-4 mb-16 text-center"
        >
          What I Work With
        </motion.h2>

        <div className="space-y-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Category label */}
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <span
                  className="font-mono text-xs tracking-wide"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-mist border border-white/10 px-4 py-1.5 rounded-full
           hover:border-violet/40 hover:text-white transition-all duration-200 tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}