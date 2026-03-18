export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  metrics: Metric[];
}

export interface Achievement {
  title: string;
  metric: string;
  context: string;
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
}

export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    links: { label: string; url: string }[];
  };
  experience: Experience[];
  achievements: Achievement[];
  skills: { [key: string]: string[] };
  education: Education[];
  certifications: string[];
  extra: string[];
}
