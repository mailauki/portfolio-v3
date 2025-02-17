export interface ExperienceType {
  title: string;
  description?: string;
  dates: string;
  bullets: string[];
  source?: string;
  avatarSource?: string;
  avatar?: string;
  links?: { text: string; link: string }[];
}
