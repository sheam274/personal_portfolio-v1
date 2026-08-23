import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import Badge from "@/components/ui/Badge";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've been working" />

        <div className="mt-14">
          <Timeline>
            {experience.map((entry) => (
              <TimelineItem key={`${entry.company}-${entry.role}`}>
                <GlassPanel className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.role}</h3>
                      <p className="mt-1 text-sm text-primary">
                        {entry.company} · {entry.location}
                      </p>
                    </div>
                    <Badge tone="accent">{entry.period}</Badge>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {entry.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassPanel>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
