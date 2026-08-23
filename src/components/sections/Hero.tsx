import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

function useRotatingTitle(titles: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[index] ?? "";
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % titles.length);
        } else {
          setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
        }
      },
      done ? 1800 : deleting ? 45 : 85,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, titles]);

  return text;
}

export default function Hero() {
  const typed = useRotatingTitle(profile.rotatingTitles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6">
      <AnimatedBackground />

      <div className="relative mx-auto w-full max-w-5xl py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          — {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-[5.5rem]"
        >
          Md. Sheam
          <br />
          <span className="text-gradient">Nasemur Rahman</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 flex h-8 items-center text-lg font-medium text-foreground/80 sm:text-2xl"
        >
          <span>{typed}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-center gap-3"
        >
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={social.label}
                className="glass-panel grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
