import * as Icons from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

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

        {/* Grouped skills with proficiency bars */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <Card className="h-full p-6 transition-all hover:border-foreground/20">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-300">
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
    <div className="flex items-center gap-3 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] px-3.5 py-2.5">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
        style={{ backgroundColor: `${skill.color}1a`, color: skill.color }}
      >
        <Icon name={skill.icon} className="size-[18px]" />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-medium">{skill.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{skill.note}</p>
      </div>
    </div>
  );
}
