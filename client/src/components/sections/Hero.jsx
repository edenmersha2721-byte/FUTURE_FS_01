import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

// Tech badges that orbit the profile photo (Eden's stack).
const orbitBadges = [
  { icon: SiReact, label: "React", color: "#61DAFB", className: "left-0 top-6 sm:-left-10 sm:top-8" },
  { icon: FaJava, label: "Java", color: "#F89820", className: "right-0 top-2 sm:-right-12 sm:top-4" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E", className: "-left-2 top-1/2 sm:-left-16" },
  { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F", className: "-right-2 top-[60%] sm:-right-16" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1", className: "left-2 bottom-8 sm:-left-8" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8", className: "right-0 bottom-4 sm:-right-12" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span variants={item} className="eyebrow">
              <Sparkles className="size-3.5" />
              Aspiring Software Engineer
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m <span className="text-gradient">Eden Mersha</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl"
            >
              Full-Stack Developer{" "}
              <span className="text-muted-foreground">|</span> Grade 12 Student
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              I&apos;m passionate about building efficient, scalable web
              applications that solve real-world problems and create meaningful
              user experiences — from clean front-ends to robust back-ends.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={site.cvUrl} download>
                  <Download className="size-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <Social href={site.socials.github} label="GitHub">
                <Github className="size-4" />
              </Social>
              <Social href={site.socials.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </Social>
              <Social href={site.socials.instagram} label="Instagram">
                <FaInstagram className="size-4" />
              </Social>
              <Social href={site.socials.telegram} label="Telegram">
                <FaTelegramPlane className="size-4" />
              </Social>
              <Social href={site.socials.email} label="Email">
                <Mail className="size-4" />
              </Social>
            </motion.div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 glow-radial" />

            {/* circular profile only */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto grid w-fit place-items-center"
            >
              {/* soft ambient glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-500/40 via-indigo-500/25 to-violet-600/40 blur-3xl" />

              {/* slow-rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-white/15"
              />

              {/* gradient border + portrait */}
              <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[3px] shadow-2xl shadow-violet-700/30">
                <div className="rounded-full bg-background p-1.5">
                  <img
                    src={site.photo}
                    alt={`${site.name} — ${site.role}`}
                    className="h-60 w-60 rounded-full object-cover object-top sm:h-72 sm:w-72 md:h-80 md:w-80"
                  />
                </div>

                {/* orbiting tech badges */}
                {orbitBadges.map((b, i) => (
                  <OrbitBadge key={b.label} {...b} delay={i * 0.4} />
                ))}

                {/* availability badge */}
                <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/90 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available to Work
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-indigo-500/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function OrbitBadge({ icon: Icon, label, color, className, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={cn(
        "absolute z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur sm:flex",
        className
      )}
    >
      <Icon className="size-4 shrink-0" style={{ color }} />
      {label}
    </motion.div>
  );
}
