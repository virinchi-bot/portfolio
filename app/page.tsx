import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}