export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Core",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "TanStack Start", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "MySQL", "Supabase", "DBMS"],
  },
  {
    category: "AI / ML",
    items: [
      "TensorFlow",
      "OpenCV",
      "Prompt Engineering",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Operating Systems",
      "Networking",
      "Computer Architecture",
      "Cryptography",
      "Computer Graphics",
    ],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "GitHub Actions", "AWS", "Linux", "VS Code"],
  },
];
