export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Internship — Web Development",
    company: "ICT HAX",
    location: "Bogura",
    period: "May 2026 – Present",
    stack: ["React", "Node.js", "TypeScript", "TanStack Start", "Supabase", "WordPress"],
    points: [
      "Developed and deployed a user authentication module using Supabase for a new React application, enabling secure access for 50+ beta users and laying groundwork for future feature expansion.",
      "Completed a three-month web development internship under industrial supervisor Rafiul Islam (Java Full-Stack Developer).",
    ],
  },
];
