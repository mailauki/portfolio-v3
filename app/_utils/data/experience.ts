import { ExperienceType } from "../types/experience";

export const experience: ExperienceType[] = [
  {
    title: "PingWind, Inc.",
    description: "Web Developer",
    dates: "May 2023 - October 2024",
    bullets: [
      "Implemented “Clean Slate” to reduce excessive files and transition to updated sites with new look and feel.",
      "Created new BMI Calculators and updated the Alcohol Quiz refreshing the UI, adding features, and improving the functionality.",
      "Collaborated with team members to run security scans and remediate PDFs to be 508 compliant.",
    ],
    source: "https://www.pingwind.com",
    avatar: "/experience/pingwind.jpg",
    links: [
      {
        text: "Child/Teen BMI Calculator",
        link: "https://www.cdc.gov/bmi/child-teen-calculator/index.html",
      },
      {
        text: "Adult BMI Calculator",
        link: "https://www.cdc.gov/bmi/adult-calculator/index.html",
      },
    ],
  },
  {
    title: "Chingu",
    description: "Software Engineer",
    dates: "January 2023 - February 2023",
    bullets: [
      "Worked as part of a team of 5 engineers to build an e-commerce web application, using React.",
      "Used a combination of Figma and GitHub to plan, organize, and coordinate the process with my team.",
    ],
    source: "https://www.chingu.io",
    avatar: "/experience/chingu.jpg",
    links: [
      {
        text: "Nearby Markets",
        link: "https://github.com/chingu-voyages/v42-geckos-team-20",
      },
    ],
  },
  {
    title: "Naqada Studio",
    description: "Freelance Translator",
    dates: "May 2021",
    bullets: [
      "Translated 10 episodes of an anime TV show from Japanese into English.",
      "Listened to audio from video to aid in translating the Japanese dialogue transcription.",
    ],
  },
  {
    title: "TED Conferences LLC",
    description: "Translator",
    dates: "October 2020 - December 2020",
    bullets: [
      "Watched videos and translated Japanese dialogue transcriptions into English.",
      "Time-coded the translated dialogue in sync with audio for subtitles.",
    ],
    source: "https://conferences.ted.com",
    avatar: "/experience/ted.jpg",
  },
];
