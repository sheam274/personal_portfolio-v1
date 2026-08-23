import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative pl-8 sm:pl-12">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-border to-transparent sm:left-[11px]" />
      <div className="space-y-10">{children}</div>
    </div>
  );
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <span className="absolute -left-8 top-2 grid h-4 w-4 place-items-center rounded-full border border-primary/50 bg-background sm:-left-12">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </motion.div>
  );
}
