export function tagsLinks(tag: string) {
  switch (tag) {
    case "React":
      return "https://react.dev";
    case "Next JS":
      return "https://nextjs.org";
    case "TypeScript":
      return "https://www.typescriptlang.org";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    case "SCSS":
      return "https://sass-lang.com";
    case "Sass":
      return "https://sass-lang.com";
    case "React Icons":
      return "https://react-icons.github.io/react-icons";
    case "dbdiagram.io":
      return "https://dbdiagram.io";
    case "Next UI":
      return "https://nextui.org";
    case "Material UI":
      return "https://mui.com/material-ui";
    case "Chakra UI":
      return "https://v2.chakra-ui.com";
    case "Tremor":
      return "https://blocks.tremor.so";
    case "Swiper JS":
      return "https://swiperjs.com";
    case "Vercel":
      return "https://vercel.com";
    case "Netlify":
      return "https://app.netlify.com";
    case "Render":
      return "https://render.com";
    case "Heroku":
      return "https://www.heroku.com";
    case "Supabase":
      return "https://supabase.com";
    case "Redux":
      return "https://redux.js.org";
    case "PostgreSQL":
      return "https://www.postgresql.org";
    case "Ruby":
      return "https://www.ruby-lang.org/en/";
    case "Rails":
      return "https://rubyonrails.org";
    case "HTML":
      return "https://developer.mozilla.org/en-US/docs/Learn/HTML";
    case "Vanilla JS":
      return "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    default:
      return "#";
  }
}
