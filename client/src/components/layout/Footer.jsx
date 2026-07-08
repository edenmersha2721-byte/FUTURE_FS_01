import { ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-foreground/10">
      <div className="container py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  {site.initials}
                </span>
                <div>
                  <p className="font-semibold">{site.name}</p>
                  <p className="text-sm text-muted-foreground">{site.role}</p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Building modern, responsive and user-friendly web experiences —
                one project at a time.
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="text-sm font-semibold text-foreground">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.to.replace("/#", "#")}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-foreground">Get in touch</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    {site.email}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 text-sm text-muted-foreground sm:flex-row">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p>Built with React, Tailwind CSS & Node.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
