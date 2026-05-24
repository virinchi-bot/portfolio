"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "CareerOS",
    desc: "AI-powered career intelligence platform with resume analysis, job matching, and cinematic 3D landing page.",
    tags: ["Next.js", "Gemini AI", "Supabase", "Three.js"],
    status: "In Progress",
    statusColor: "#F59E0B",
  },
  {
    title: "KNRCER Portal",
    desc: "College portal for EEE department — role-based dashboards, timetables, student ID requests and approvals.",
    tags: ["SvelteKit", "Supabase", "TypeScript", "GSAP"],
    status: "Built",
    statusColor: "#7DD3FC",
  },
  {
    title: "NH Collections",
    desc: "Saree e-commerce site with collections, product detail pages, and a full admin panel.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    status: "Built",
    statusColor: "#A78BFA",
  },
  {
    title: "VibeStudio",
    desc: "Telugu vibecoding learning platform. SEO 100/100 on PageSpeed with Google Search Console setup.",
    tags: ["HTML/JS", "SEO", "Vercel"],
    status: "Live",
    statusColor: "#C084FC",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-40 px-6 flex flex-col items-center w-full">
      <div className="max-w-4xl w-full mx-auto text-center">

        <SectionLabel label="Projects" centered />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold gradient-text mt-4 mb-16 text-center"
        >
          Things I've Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {projects.map((project, i) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="glass shimmer rounded-2xl p-6 border border-white/5 space-y-4 group flex flex-col items-center text-center"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-white font-semibold text-base group-hover:text-violet transition-colors duration-300">
          {project.title}
        </h3>
        <span
          className="font-pixel text-xs px-2 py-0.5 rounded-full shrink-0"
          style={{
            color: project.statusColor,
            backgroundColor: `${project.statusColor}12`,
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-mist text-sm leading-relaxed flex-1">
        {project.desc}
      </p>

      {/* Tags — clean dots style */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-mist/50 flex items-center gap-1.5"
          >
            <span className="w-1 h-1 rounded-full bg-violet/40 inline-block" />
            {tag}
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