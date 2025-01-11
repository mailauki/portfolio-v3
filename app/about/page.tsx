import { EducationCard, ExperienceCard } from "../(experience)/card";

import Summary from "./summary";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Summary />
      <ExperienceCard />
      <EducationCard />
    </>
  );
}
