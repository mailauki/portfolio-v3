import Title from "../(components)/title";
import Section from "../(components)/section";

import Filter from "./filter";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Title>Projects</Title>
      <Filter />
    </Section>
  );
}
