import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Card } from "@/components/ui/card";
import { skillGroups, skillPreview } from "@/data/skills";

/** Resolve a lucide icon by name, with a safe fallback. */
function Icon({ name, ...props }) {
  const Cmp = Icons[name] || Icons.Code2;
  return <Cmp {...props} />;
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="My Skills"
          title="Technologies I"
          highlight="work with"
          subtitle="The tools and technologies I use to build modern, scalable and efficient web applications — grouped by where they live in the stack."
          align="center"
        />

        {/* Tech preview chips */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skillPreview.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}1a`, color: tech.color }}
                >
                  <Icon name={tech.icon} className="size-5" />
                </span>
                <div className="leading-none">
                  <p className="text-sm font-semibold">{tech.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Grouped skills with proficiency bars */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <Card className="h-full p-6 transition-all hover:border-white/20">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 text-indigo-300">
                    <Icon name={group.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{group.category}</h3>
                    <p className="text-xs text-muted-foreground">
                      {group.blurb}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillRow({ skill }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
      <Icon name="BadgeCheck" className="mt-0.5 size-4 shrink-0 text-indigo-400" />
      <div className="leading-tight">
        <p className="text-sm font-medium">{skill.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{skill.note}</p>
      </div>
    </div>
  );
}
