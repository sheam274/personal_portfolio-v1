export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    title: "TalentBD",
    subtitle: "AI Career Platform",
    description:
      "An AI-powered career pathing and skill-gap analysis platform. Helps users identify key skills for advancement and clarifies progression — boosted learning-resource engagement by 50%. Built as a full-stack capstone project (React 19, TanStack Router/Query, Tailwind CSS, Supabase/PostgreSQL).",
    tags: ["TypeScript", "TanStack Start", "Supabase", "OpenAI API", "PostgreSQL"],
    link: "https://talentbd.lovable.app",
    accent: "from-orange-500/40 via-amber-400/20 to-transparent",
  },
  {
    title: "CGPBL",
    subtitle: "Cell Genetics & Plant Biotechnology Laboratory",
    description:
      "Rebuilt the official website for a university research laboratory (Jahangirnagar University) with a fully component-driven architecture, Supabase backend, and premium, research-grade frontend presentation.",
    tags: ["React", "TypeScript", "Supabase", "Component Architecture"],
    accent: "from-emerald-500/40 via-teal-400/20 to-transparent",
  },
  {
    title: "Sports Bike Configurator",
    subtitle: "& Garage Manager",
    description:
      "An interactive bike configurator featuring a full Three.js WebGL 3D preview with orbit controls and procedurally built motorcycle geometry — real-time visual changes reflect performance modifications across an expanded multi-brand catalog.",
    tags: ["JavaScript", "Three.js", "WebGL", "3D"],
    accent: "from-sky-500/40 via-indigo-400/20 to-transparent",
  },
  {
    title: "Endless-Runner",
    subtitle: "Android Game",
    description: "An Android endless-runner game built in Android Studio.",
    tags: ["Android Studio", "Gradle", "Java"],
    link: "https://github.com/sheam274/Endless-runner.git",
    accent: "from-fuchsia-500/40 via-rose-400/20 to-transparent",
  },
];
