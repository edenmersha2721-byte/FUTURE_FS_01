import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Rocket,
  Compass,
  GraduationCap,
  Code2,
  Layers,
  Server,
  Quote,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

const values = [
  {
    icon: Target,
    title: "My Mission",
    text: "To grow into an impactful software engineer who builds technology that solves real problems and improves people's lives.",
  },
  {
    icon: Lightbulb,
    title: "My Vision",
    text: "To contribute to meaningful, large-scale products and keep learning at the edge of modern web and systems engineering.",
  },
  {
    icon: Rocket,
    title: "What Drives Me",
    text: "Curiosity and the thrill of turning an idea into a working, polished product — line by line, feature by feature.",
  },
  {
    icon: Compass,
    title: "My Approach",
    text: "Writing clean, maintainable code and designing scalable systems that stay reliable as they grow.",
  },
];

const journey = [
  {
    phase: "The Spark",
    title: "Started with HTML & CSS",
    text: "Fell in love with building for the web by crafting my first static pages and styling them pixel by pixel.",
  },
  {
    phase: "Going Interactive",
    title: "JavaScript & React",
    text: "Learned to make pages come alive — state, components and responsive interfaces with React and Tailwind CSS.",
  },
  {
    phase: "Going Full-Stack",
    title: "Node.js, Java & Databases",
    text: "Moved into the back-end: building REST APIs with Node.js and Spring Boot, and modeling data in PostgreSQL.",
  },
  {
    phase: "Now",
    title: "Scalable Systems & Microservices",
    text: "Exploring microservices and system design through the INSA weekend program and hands-on internship projects.",
  },
];

const goals = [
  "Master microservices and distributed system design",
  "Build scalable, production-grade systems end to end",
  "Contribute to impactful products in the tech industry",
  "Keep growing as a thoughtful, well-rounded engineer",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              About Me
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.6rem]">
              Building digital solutions that{" "}
              <span className="text-gradient">make an impact</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m <span className="font-medium text-foreground">Eden Mersha</span>,
                a passionate full-stack developer and a Grade 12 student at{" "}
                <span className="font-medium text-foreground">{site.school}</span>.
                I love turning ideas into clean, efficient and user-friendly web
                applications.
              </p>
              <p>
                Alongside school, I take part in the{" "}
                <span className="font-medium text-foreground">
                  INSA weekend development program
                </span>{" "}
                and participate in a software development internship — real
                environments where I sharpen my engineering skills and ship
                practical projects.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Quote className="size-6 shrink-0 text-indigo-400" />
              <p className="text-sm italic leading-relaxed text-foreground/90">
                I believe in writing clean code, creating seamless user
                experiences, and building solutions that are both functional and
                meaningful.
              </p>
            </div>
          </div>

          {/* Profile card */}
          <Reveal y={32}>
            <div className="glass gradient-border relative overflow-hidden rounded-3xl p-7">
              <div className="absolute inset-0 glow-radial" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <img
                    src={site.photo}
                    alt={site.name}
                    className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-white/15"
                  />
                  <div>
                    <p className="text-lg font-semibold">{site.name}</p>
                    <p className="text-sm text-indigo-300/90">{site.role}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <InfoRow icon={GraduationCap} label="Grade 12 Student" />
                  <InfoRow icon={Code2} label="INSA Weekend Dev Program" />
                  <InfoRow icon={MapPin} label={site.location} />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <MiniStat value="5+" label="Projects" />
                  <MiniStat value="8+" label="Technologies" />
                  <MiniStat value="∞" label="Learning" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <Card className="flex h-full gap-4 p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 text-indigo-300">
                  <v.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Journey timeline */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="My Journey"
            title="From first tag to"
            highlight="full-stack"
            subtitle="Every developer has an origin story. Here's how mine has unfolded so far."
            align="center"
          />

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {journey.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div
                    className={`relative md:flex md:items-center md:gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <span className="absolute left-4 top-1.5 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-background text-indigo-300 md:left-1/2">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
                    </span>

                    <div className="ml-12 md:ml-0 md:w-1/2">
                      <Card className="p-5 transition-all hover:border-white/20">
                        <Badge variant="accent">{step.phase}</Badge>
                        <h3 className="mt-3 font-semibold">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </Card>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-20">
          <Reveal>
            <Card className="overflow-hidden">
              <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <span className="eyebrow">
                    <Target className="size-3.5" /> Looking Ahead
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
                    My <span className="text-gradient">goals</span>
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    I&apos;m just getting started. Here&apos;s what I&apos;m
                    working toward as I grow into a professional software
                    engineer.
                  </p>
                  <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Layers className="size-6 text-indigo-400" />
                    <Server className="size-6 text-violet-400" />
                    <p className="text-sm text-muted-foreground">
                      Focused on scalable systems & microservices.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {goals.map((g, i) => (
                    <motion.li
                      key={g}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                      <span className="text-sm text-foreground/90">{g}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <Icon className="size-4 text-indigo-400" />
      <span className="text-foreground/90">{label}</span>
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
      <p className="font-display text-xl font-bold text-gradient">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
