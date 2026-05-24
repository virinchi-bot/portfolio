"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-40 px-6 flex flex-col items-center w-full">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">

        <SectionLabel label="Contact" centered />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold gradient-text"
        >
          Let's Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-mist leading-relaxed"
        >
          Open to freelance projects, collabs, or just a good conversation
          about building things. Reach out anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="glass shimmer px-8 py-4 rounded-xl border border-violet/20 hover:border-violet/40 text-white font-medium transition-colors duration-300"
          >
            Send Email ↗
          </a>
          <a
            href={PERSONAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-sky/20 hover:border-sky/40 hover:bg-sky/5 text-sky font-medium transition-all duration-300"
          >
            Instagram ↗
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-pixel text-mist text-xs pt-16 tracking-widest"
        >
          Gudla SaiVirinchi · Hyderabad · {new Date().getFullYear()}
        </motion.p>

      </div>
    </section>
  );
}