import projects from './projects.json';

import ProjectCard from './card';

import { Container, Stack } from '@mui/material';

import type { Project } from '../types/projects';

export const metadata = {
  title: 'Projects',
};

export default function Projects() {
  // const desc = projects.sort((a: Project, b: Project) => {
  //   return Number(new Date(a.date)) - Number(new Date(b.date)); // descending
  // });
  const asc = projects.sort((a: Project, b: Project) => {
    return Number(new Date(b.date)) - Number(new Date(a.date)); // ascending
  });

  return (
    <Container component='main' maxWidth='lg'>
			<Stack gap={6}>
				{asc.map((project) => <ProjectCard key={`project-${project.id}`} project={project} />)}
			</Stack>
    </Container>
  );
}
