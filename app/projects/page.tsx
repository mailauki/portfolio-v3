import projects from './projects.json';

import ProjectCard from './card';

import { Container, Grid } from '@mui/material';

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
    <Container maxWidth='lg'>
      <Grid alignItems='stretch' container justifyContent='space-between' spacing={2}>
        {asc.map((project) => (
          <Grid item key={`project-${project.id}`} md={6} sm={12} xs={12}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
