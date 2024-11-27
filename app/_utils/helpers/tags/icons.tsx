import {
  BootstrapOriginal,
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

import { Tag } from "../../types/projects";
import { RenderLogo } from "../../icons/dev/render";
import { ChakraLogo } from "../../icons/dev/chakra";
import { CssLogo } from "../../icons/dev/css";

export function getTagsIcon(tag: Tag) {
  switch (tag) {
    case "Bootstrap":
      return <BootstrapOriginal />;
    case "Chakra UI":
      return <ChakraLogo />;
    case "CSS":
      // return <Css3Plain />;
      return <CssLogo />;
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
      return <RenderLogo />;
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
