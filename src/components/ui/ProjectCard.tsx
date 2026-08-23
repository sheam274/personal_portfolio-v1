import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const Wrapper = project.link ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={(event) => {
          if (isMobile) return;
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          mx.set((event.clientX - rect.left) / rect.width);
          my.set((event.clientY - rect.top) / rect.height);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          mx.set(0.5);
          my.set(0.5);
        }}
        style={isMobile ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-panel group relative h-full overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
      >
        <Wrapper
          {...(project.link
            ? { href: project.link, target: "_blank", rel: "noreferrer noopener" }
            : {})}
          className="block h-full"
        >
          {/* Visual */}
          <div className="relative h-52 overflow-hidden sm:h-60">
            <motion.div
              animate={{ scale: hovered && !isMobile ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn("absolute inset-0 bg-gradient-to-br", project.accent)}
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

            <span className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center font-display text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl">
              {project.title}
            </span>

            {project.link ? (
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/60 text-primary backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            ) : null}
          </div>

          {/* Body */}
          <div className="relative p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">{project.subtitle}</p>
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
}
