export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  rotatingTitles: string[];
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string[];
  socials: Social[];
}

export const profile: Profile = {
  name: "Md. Sheam Nasemur Rahman",
  initials: "SNR",
  title: "Web Developer",
  rotatingTitles: ["Web Developer", "Full-Stack Developer", "CSE Undergraduate"],
  tagline:
    "Passionate software developer eager to build reliable and user-friendly applications while continuously learning new technologies.",
  email: "sheam.rahman99@gmail.com",
  phone: "+8801742218274",
  location: "Bogura, Bangladesh",
  bio: [
    "I'm a Computer Science & Engineering undergraduate (Batch 21) at Pundra University of Science & Technology in Bogura, Bangladesh, and an ICPC Regional Finalist 2024.",
    "My work sits where engineering meets craft — frontend aesthetics, interactive UI/UX, 3D web experiences and AI-assisted tooling. I care about interfaces that feel considered, fast and alive.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/sheam274", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sheam-nasemur-rahman-8b637b78",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:sheam.rahman99@gmail.com", icon: "mail" },
  ],
};
