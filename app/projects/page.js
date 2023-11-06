import data from './data'

import ProjectCard from './card'

import { Grid } from '@mui/material'

export const metadata = {
  title: 'Projects',
}

export default function Projects() {
  const desc = data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date); // descending
  })
  const asc = data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date); // ascending
  })
  
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      {asc.map((project) => (
        <Grid key={project.id} item xs={12} sm={12} md={6}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}