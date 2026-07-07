import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const PAGE_SIZE = 6;

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const totalPages = Math.ceil(featured.length / PAGE_SIZE);
  const [page, setPage] = useState(1);

  const start = (page - 1) * PAGE_SIZE;
  const visible = featured.slice(start, start + PAGE_SIZE);

  const goToPage = (next) => {
    setPage(next);
    // Bring the section heading back into view when the page changes.
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

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
          {visible.map((project, i) => (
            <Reveal key={`${page}-${project.title}`} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <PagerButton
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="size-4" />
            </PagerButton>

            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((n) => (
              <PagerButton
                key={n}
                onClick={() => goToPage(n)}
                active={n === page}
                aria-label={`Page ${n}`}
                aria-current={n === page ? "page" : undefined}
              >
                {n}
              </PagerButton>
            ))}

            <PagerButton
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="size-4" />
            </PagerButton>
          </div>
        )}
      </div>
    </section>
  );
}

function PagerButton({ active, disabled, className, children, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "grid h-10 min-w-10 place-items-center rounded-xl border px-3 text-sm font-medium transition-all",
        active
          ? "border-blue-500/50 bg-blue-500/15 text-blue-300"
          : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:text-foreground",
        disabled && "cursor-not-allowed opacity-40 hover:border-white/10 hover:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
