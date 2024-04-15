import projects from './projects'

import ProjectCard from './card'

import { Container, Grid } from '@mui/material'

export const metadata = {
  title: 'Projects',
}

export default function Projects() {
  const desc = projects.sort((a, b) => {
    return new Date(a.date) - new Date(b.date); // descending
  })
  const asc = projects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date); // ascending
  })
  
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2} justifyContent='space-between' alignItems='stretch'>
        {asc.map((project) => (
          <Grid key={`project-${project.id}`} item xs={12} sm={12} md={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}