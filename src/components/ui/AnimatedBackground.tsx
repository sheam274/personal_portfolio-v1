import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black, transparent)",
        }}
      />
      <motion.div
        className="absolute -top-40 left-1/4 h-[38rem] w-[38rem] rounded-full blur-[130px]"
        style={{ background: "oklch(0.7 0.19 45 / 22%)" }}
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full blur-[140px]"
        style={{ background: "oklch(0.68 0.13 235 / 18%)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
