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

export interface Project {
  title: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
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
    phone: string;
    workAuthorization: string;
    availability: string;
    links: { label: string; url: string }[];
  };
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  skills: { [key: string]: string[] };
  education: Education[];
  certifications: string[];
}
