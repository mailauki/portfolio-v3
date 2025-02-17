import { ProjectType } from "@/app/_utils/types/projects";
import { projects } from "@/app/_utils/data/projects";

import ProjectIdCard from "./card";

export default async function ProjectIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === id) as ProjectType;

  if (!project) return <></>;

  return <ProjectIdCard project={project} />;
}
