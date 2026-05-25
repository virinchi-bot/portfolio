import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gudla SaiVirinchi",
    alternateName: "SaiVirinchi",
    description:
      "Vibecoder and creative developer from Hyderabad, India. Building full-stack apps and AI tools.",
    url: "https://your-vercel-url.vercel.app",
    image: "https://your-vercel-url.vercel.app/portrait.png",
    sameAs: [
      "https://github.com/virinchi-bot",
      "https://instagram.com/virinchi_valmiki",
    ],
    jobTitle: "Vibecoder & Creative Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
