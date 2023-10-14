import data from './data'

import ProjectCard from './card'

import { Grid } from '@mui/material'

export const metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      {data.map((project) => (
        <Grid key={project.id} item xs={12} sm={12} md={6}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}