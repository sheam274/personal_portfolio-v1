export interface Certification {
  title: string;
  detail: string;
  year?: string;
  kind: "award" | "certification";
}

export const certifications: Certification[] = [
  {
    title: "ICPC Regional Finalist",
    detail: "International Collegiate Programming Contest — Regional Finals",
    year: "2024",
    kind: "award",
  },
  {
    title: "Web Development Certification",
    detail: '"Learn and Earn" project, an official project of the Government of Bangladesh',
    kind: "certification",
  },
];
