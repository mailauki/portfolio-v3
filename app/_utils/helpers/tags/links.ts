import { Tag } from "../../types/projects";

export function getTagsLink(tag: Tag) {
  switch (tag) {
    case "Bootstrap":
      return "https://getbootstrap.com";
    case "Chakra UI":
      return "https://v2.chakra-ui.com";
    case "CSS":
      return "https://developer.mozilla.org/en-US/docs/Web/CSS";
    case "dbdiagram.io":
      return "https://dbdiagram.io";
    case "Figma":
      return "https://www.figma.com";
    case "Heroku":
      return "https://www.heroku.com";
    case "HTML":
      return "https://developer.mozilla.org/en-US/docs/Web/HTML";
    case "JavaScript":
      return "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    case "jQuery":
      return "https://jquery.com";
    case "Material UI":
      return "https://mui.com/material-ui";
    case "Netlify":
      return "https://app.netlify.com";
    case "Next UI":
      return "https://nextui.org";
    case "Next JS":
      return "https://nextjs.org";
    case "Open Graph":
      return "https://vercel.com/docs/functions/og-image-generation";
    case "PostgreSQL":
      return "https://www.postgresql.org";
    case "Rails":
      return "https://rubyonrails.org";
    case "React":
      return "https://react.dev";
    case "React Icons":
      return "https://react-icons.github.io/react-icons";
    case "React JS":
      return "https://react.dev";
    case "Render":
      return "https://render.com";
    case "Redux":
      return "https://redux.js.org";
    case "Ruby":
      return "https://www.ruby-lang.org/en/";
    case "Ruby on Rails":
      return "https://rubyonrails.org";
    case "Sass":
      return "https://sass-lang.com";
    case "SCSS":
      return "https://sass-lang.com";
    case "SQL":
      return "https://www.sqltutorial.org";
    case "SQLite":
      return "https://www.sqlite.org";
    case "Supabase":
      return "https://supabase.com";
    case "Swiper JS":
      return "https://swiperjs.com";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    case "Tremor":
      return "https://blocks.tremor.so";
    case "TypeScript":
      return "https://www.typescriptlang.org";
    case "Vanilla JS":
      return "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    case "Vercel":
      return "https://vercel.com";
    default:
      return "#";
  }
}
