import data from './data'

import ProjectCard from '../components/card'

import { Grid, Stack } from '@mui/material'

export default function Projects() {
  return (
    // <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap='wrap' useFlexGap justifyContent='center'>
    //   {data.map((project) => (
    //     <ProjectCard key={project.id} project={project} />
    //   ))}
    // </Stack>
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      {data.map((project) => (
        <Grid key={project.id} item>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}