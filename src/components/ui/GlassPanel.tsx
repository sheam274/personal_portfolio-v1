import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassPanel({ children, className, glow = false }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-2xl",
        glow && "shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
