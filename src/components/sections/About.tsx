import { motion } from "framer-motion";
import { MapPin, GraduationCap, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { profile } from "@/data/profile";

const highlights = [
  { icon: GraduationCap, label: "CSE Undergraduate", value: "Batch 21 · PUB" },
  { icon: Trophy, label: "ICPC", value: "Regional Finalist 2024" },
  { icon: MapPin, label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="Building interfaces that feel alive" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassPanel className="flex items-center gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
