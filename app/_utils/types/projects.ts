import { Tag } from "./tags";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  links: {
    github: string;
    demo?: string;
  };
  tags: Tag[];
  date: Date;
  inspiration?: (string | { text: string; link: string })[];
  wip?: boolean;
}
