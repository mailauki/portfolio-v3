import { Project } from "@/app/_utils/types/projects";

import projects from "../projects.json";

import ProjectIdCard from "./card";

export default async function ProjectIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === id) as Project;

  if (!project) return <></>;

  return (
    // <div>
    //   <Breadcrumbs aria-label="breadcrumb">
    //     <Link color="inherit" href="/projects/" underline="hover">
    //       Projects
    //     </Link>
    //     <Typography sx={{ color: "text.primary" }}>
    //       {project?.title || id}
    //     </Typography>
    //   </Breadcrumbs>
    //   <ProjectIdCard project={project} />
    // </div>
    <ProjectIdCard project={project} />
  );
}
