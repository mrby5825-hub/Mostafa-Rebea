export interface NavLink {
  label: string;
  id: string; // section id, used for both the href (#id) and scroll-spy matching
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'whatsapp';
}

export type SkillCategory =
  | 'Programming'
  | 'Business Intelligence'
  | 'Data Analysis'
  | 'Machine Learning'
  | 'Visualization'
  | 'Business Analytics'
  | 'Databases'
  | 'Cloud'
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'powerbi' | 'bi' | 'sql' | 'python' | 'ml' | 'automation' | 'cleaning' | 'reporting' | 'dashboard' | 'visualization';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  // Fill these in with the real URLs when available — buttons only render when non-empty.
  credentialUrl?: string;
  verifyUrl?: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export type ProjectCategory =
  | 'Power BI'
  | 'Python / ML'
  | 'Excel'
  | 'SQL';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  cover: string;
  gallery: ProjectImage[];
  businessProblem: string;
  dataset: string;
  tools: string[];
  insights: string[];
  impact: string;
  role: string;
  roadmap: string[]; // step-by-step: what I actually did, in order
  githubKey: string; // key into PROJECT_LINKS, filled in later
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
