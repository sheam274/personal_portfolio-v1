import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import SkillChip from "@/components/ui/SkillChip";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit"
          description="Languages, frameworks and fundamentals I reach for when building products."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassPanel className="h-full p-6 sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {group.category}
                </h3>
                <motion.div
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-5 flex flex-wrap gap-2.5"
                >
                  {group.items.map((item) => (
                    <SkillChip key={item} label={item} />
                  ))}
                </motion.div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
