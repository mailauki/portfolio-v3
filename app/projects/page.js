import data from './data'

import ProjectCard from '../components/card'

import { Grid } from '@mui/material'

export default function Projects() {
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      {data.map((project) => (
        <Grid key={project.id} item>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}