import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Calendar,
  FileImage,
  X,
  Maximize2,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Card } from "@/components/ui/card";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  // Index of the certificate currently open in the lightbox (null = closed).
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? certificates[activeIndex] : null;

  // Close on Escape; lock body scroll while the lightbox is open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && setActiveIndex(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Certificates &"
          highlight="recognition"
          subtitle="Programs, training and milestones along my journey. Click any certificate to view it in full size."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const hasImage = Boolean(cert.image);
            return (
              <Reveal key={cert.title} delay={i * 0.08}>
                <Card className="group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1.5 hover:border-white/20">
                  {/* Certificate image / placeholder */}
                  <button
                    type="button"
                    onClick={() => hasImage && setActiveIndex(i)}
                    aria-label={
                      hasImage
                        ? `View ${cert.title} certificate`
                        : `${cert.title} (no image yet)`
                    }
                    className={`relative h-44 overflow-hidden border-b border-white/10 ${
                      hasImage ? "cursor-zoom-in" : "cursor-default"
                    }`}
                  >
                    {hasImage ? (
                      <>
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                            <Maximize2 className="size-3.5" /> View full size
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="grid h-full place-items-center bg-gradient-to-br from-indigo-600/15 to-violet-700/10">
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                          <FileImage className="size-8" />
                          <span className="text-xs">Add image in /certificates</span>
                        </div>
                      </div>
                    )}
                    <span className="absolute right-4 top-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-black/30 text-amber-300 backdrop-blur">
                        <Award className="size-5" />
                      </span>
                    </span>
                  </button>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" />
                      {cert.year}
                    </div>
                    <h3 className="mt-2 flex items-start gap-2 text-base font-semibold leading-snug">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-300/90">
                      {cert.issuer}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-background text-foreground transition-colors hover:bg-white/10"
              >
                <X className="size-5" />
              </button>
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-card">
                <img
                  src={active.image}
                  alt={`${active.title} certificate`}
                  className="max-h-[78vh] w-full object-contain"
                />
                <div className="border-t border-white/10 p-4">
                  <p className="font-semibold">{active.title}</p>
                  <p className="text-sm text-indigo-300/90">
                    {active.issuer} · {active.year}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
