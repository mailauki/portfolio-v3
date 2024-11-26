export type Project = {
  id: string;
  title: string;
  description: (string | string[])[];
  image: string[];
  links: {
    githubLink: string;
    demoLink?: string;
  };
  tags: Tag[];
  date: string;
  inspiration?: (string | { text: string; link: string })[];
  wip?: boolean;
};

export type Tag =
  | "Bootstrap"
  | "Chakra UI"
  | "CSS"
  | "dbdiagram.io"
  | "Figma"
  | "Heroku"
  | "HTML"
  | "JavaScript"
  | "jQuery"
  | "Material UI"
  | "Netlify"
  | "Next JS"
  | "Next UI"
  | "Open Graph"
  | "PostgreSQL"
  | "Rails"
  | "React"
  | "React Icons"
  | "React JS"
  | "Redux"
  | "Render"
  | "Ruby"
  | "Ruby on Rails"
  | "Sass"
  | "SCSS"
  | "SQL"
  | "SQLite"
  | "Supabase"
  | "Swiper JS"
  | "Tailwind CSS"
  | "Tremor"
  | "TypeScript"
  | "Vercel"
  | "Vanilla JS";
