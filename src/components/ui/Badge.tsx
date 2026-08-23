import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent";
}

export default function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
        tone === "accent"
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-white/5 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
