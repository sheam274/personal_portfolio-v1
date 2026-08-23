import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

export default function Contact() {
  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's build something great together" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <GlassPanel glow className="p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="grid gap-5 sm:grid-cols-3">
                {details.map((detail) => {
                  const content = (
                    <>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <detail.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="mt-4 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {detail.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium">
                        {detail.value}
                      </span>
                    </>
                  );
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="rounded-2xl transition-colors hover:text-primary"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <MagneticButton href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Say hello
                </MagneticButton>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/sheam274"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sheam-nasemur-rahman-8b637b78"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
