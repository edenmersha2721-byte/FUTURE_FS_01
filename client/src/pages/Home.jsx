import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

/**
 * Single-page portfolio. Every section lives here and is reached by smooth
 * scrolling via the navbar anchor links (#projects, #skills, etc.).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}
