import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recognition" title="Certifications & awards" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certifications.map((item, i) => {
            const Icon = item.kind === "award" ? Award : BadgeCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassPanel className="group h-full p-7 transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                    {item.year ? (
                      <span className="ml-2 text-sm font-normal text-primary">{item.year}</span>
                    ) : null}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
