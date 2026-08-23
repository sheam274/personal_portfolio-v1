import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-4 flex w-full max-w-5xl items-center justify-between rounded-full px-5 transition-all duration-300",
          scrolled ? "glass-panel py-2.5 shadow-lg" : "py-4",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">{profile.initials}</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                active === link.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              {active === link.id ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}?subject=Resume%20request`}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground sm:inline-flex"
            style={{ background: "var(--gradient-accent)" }}
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass-panel grid h-9 w-9 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-panel absolute inset-x-4 top-20 rounded-2xl p-3 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
