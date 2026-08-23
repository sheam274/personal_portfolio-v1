import { motion } from "framer-motion";

interface SkillChipProps {
  label: string;
}

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="cursor-default rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
    >
      {label}
    </motion.span>
  );
}
