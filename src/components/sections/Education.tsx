import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import Badge from "@/components/ui/Badge";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { education } from "@/data/education";
import { coursework } from "@/data/coursework";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14">
          <Timeline>
            {education.map((entry) => (
              <TimelineItem key={entry.institution}>
                <GlassPanel className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{entry.institution}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{entry.degree}</p>
                      {entry.note ? (
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary/80">
                          {entry.note}
                        </p>
                      ) : null}
                    </div>
                    <Badge tone="accent">{entry.result}</Badge>
                  </div>
                </GlassPanel>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Relevant Coursework
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-border bg-white/5 px-3.5 py-1.5 text-sm text-foreground/80"
                >
                  {course}
                </span>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
