export interface EducationEntry {
  institution: string;
  degree: string;
  result: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Pundra University of Science & Technology",
    degree: "B.Sc. in Computer Science and Engineering",
    result: "CGPA 3.60",
    note: "Ongoing · Batch 21",
  },
  {
    institution: "Dinajpur Govt. College",
    degree: "Higher Secondary Certificate (HSC)",
    result: "CGPA 5.00",
  },
  {
    institution: "Dinajpur Zilla School",
    degree: "Secondary School Certificate (SSC)",
    result: "CGPA 5.00",
  },
];
