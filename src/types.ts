export interface SkillItem {
  name: string;
  category: "technical" | "strategy" | "smo";
  level: number; // 0 - 100 percentage
}

export interface ToolItem {
  name: string;
  category: "all" | "analytics" | "seo" | "platform";
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface AuditRequest {
  websiteUrl: string;
  email: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  websiteUrl: string;
  service: string;
  message: string;
}
