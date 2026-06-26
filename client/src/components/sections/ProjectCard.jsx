import * as Icons from "lucide-react";
import { ExternalLink, Github, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function Icon({ name, ...props }) {
  const Cmp = Icons[name] || Icons.Folder;
  return <Cmp {...props} />;
}

export default function ProjectCard({ project }) {
  const {
    title,
    tagline,
    description,
    tags,
    status,
    accent,
    image,
    icon,
    liveUrl,
    repoUrl,
  } = project;
  const isWip = status === "wip";

  // When a live demo exists, clicking the banner opens it in a new tab.
  const clickable = Boolean(liveUrl);
  const BannerTag = clickable ? "a" : "div";
  const bannerProps = clickable
    ? {
        href: liveUrl,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `Open ${title} live demo`,
      }
    : {};

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20">
      {/* Banner: project screenshot, or a gradient fallback */}
      <BannerTag
        {...bannerProps}
        className={cn(
          "relative block h-44 overflow-hidden bg-gradient-to-br",
          accent,
          clickable && "cursor-pointer"
        )}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* gradient wash for legibility of the chips on top */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-black/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
        )}

        {/* hover hint when the banner links to a live demo */}
        {clickable && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
              <ExternalLink className="size-3.5" /> Visit live site
            </span>
          </div>
        )}

        <div className="absolute left-5 top-5">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-black/40 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Icon name={icon} className="size-6" />
          </span>
        </div>
        <div className="absolute right-5 top-5">
          {isWip ? (
            <Badge variant="warning" className="gap-1 bg-black/40 backdrop-blur">
              <Clock className="size-3" /> In Progress
            </Badge>
          ) : (
            <Badge variant="success" className="gap-1 bg-black/40 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
            </Badge>
          )}
        </div>
      </BannerTag>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-0.5 text-sm font-medium text-indigo-300/90">{tagline}</p>

        {/* Problem solved */}
        <div className="mt-3 flex flex-1 flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400/90">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Problem Solved
          </span>
          <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
            &ldquo;{description}&rdquo;
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-indigo-300"
            >
              <ExternalLink className="size-4" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/70">
              <Clock className="size-4" />
              {isWip ? "Coming Soon" : "Demo Unavailable"}
            </span>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" /> Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
