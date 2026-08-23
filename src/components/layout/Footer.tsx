import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground">
          Designed &amp; built by <span className="text-gradient font-semibold">Sheam.</span>
        </p>
      </div>
    </footer>
  );
}
