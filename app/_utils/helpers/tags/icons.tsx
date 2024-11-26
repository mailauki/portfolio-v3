import {
  BootstrapOriginal,
  Css3Plain,
  FigmaOriginal,
  HerokuOriginal,
  Html5Plain,
  JavascriptPlain,
  JqueryPlain,
  MaterialuiPlain,
  NetlifyPlain,
  NextjsPlain,
  PostgresqlPlain,
  RailsPlain,
  ReactOriginal,
  ReduxOriginal,
  RubyPlain,
  SassOriginal,
  SqldeveloperPlain,
  SqliteOriginal,
  SupabaseOriginal,
  SwiperOriginal,
  TailwindcssOriginal,
  TypescriptPlain,
  VercelOriginal,
} from "devicons-react";
import { SvgIcon } from "@mui/material";

import { Tag } from "../../types/projects";

export function getTagsIcon(tag: Tag) {
  switch (tag) {
    case "Bootstrap":
      return <BootstrapOriginal />;
    case "CSS":
      return <Css3Plain />;
    case "Figma":
      return <FigmaOriginal />;
    case "Heroku":
      return <HerokuOriginal />;
    case "HTML":
      return <Html5Plain />;
    case "JavaScript":
      return <JavascriptPlain />;
    case "Material UI":
      return <MaterialuiPlain />;
    case "Netlify":
      return <NetlifyPlain />;
    case "Next JS":
      return <NextjsPlain />;
    case "PostgreSQL":
      return <PostgresqlPlain />;
    case "Rails":
      return <RailsPlain />;
    case "React":
      return <ReactOriginal />;
    case "React JS":
      return <ReactOriginal />;
    case "Redux":
      return <ReduxOriginal />;
    case "Render":
      return (
        <SvgIcon sx={{ p: 0.5 }}>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z" />
          </svg>
        </SvgIcon>
      );
    case "Ruby":
      return <RubyPlain />;
    case "Ruby on Rails":
      return <RailsPlain />;
    case "SCSS":
      return <SassOriginal />;
    case "SQL":
      return <SqldeveloperPlain />;
    case "SQLite":
      return <SqliteOriginal />;
    case "Sass":
      return <SassOriginal />;
    case "Supabase":
      return <SupabaseOriginal />;
    case "Swiper JS":
      return <SwiperOriginal />;
    case "Tailwind CSS":
      return <TailwindcssOriginal />;
    case "jQuery":
      return <JqueryPlain />;
    case "TypeScript":
      return <TypescriptPlain />;
    case "Vanilla JS":
      return <JavascriptPlain />;
    case "Vercel":
      return <VercelOriginal />;
    default:
      return undefined;
  }
}
