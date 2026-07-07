import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects I've"
            highlight="built"
            subtitle="A selection of projects that show how I turn ideas into clean, working software — from AI tools to polished front-ends."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
