import projects from '../projects'

import Link from 'next/link'

import moment from 'moment'

import { Button, Card, CardContent, CardHeader, CardMedia, Chip, Link as Anchor, Stack, Typography, CardActions, Box, Container } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function ProjectPage({ params }) {
  const project = projects.find((project) => project.id === params.id)

  return (
    <Container maxWidth='lg' sx={{ flex: '1 1 auto'}}>
      <Box>
        <Button
          component={Link}
          href='/projects'
          sx={{ mb: 2 }}
        >
          Back to Projects
        </Button>

        <Card>
          {/* {project.image ? <CardMedia
            id="project-page-img-top"
            component='img'
            image={project.image}
            alt={`screenshot of ${project.title}`}
          /> : <></>} */}
          <CardHeader
            title={project.title}
            subheader={project.description[0]}
          />

          {project.image ? <CardMedia
            id="project-page-img-top"
            component='img'
            image={project.image}
            alt={`screenshot of ${project.title}`}
          /> : <></>}

          <Stack direction='row' justifyContent='space-between'>
            <CardContent>
              {project.description[1] ? project.description[1].map((bullet, index) => <Typography key={index} paragraph variant='body2'>• {bullet}</Typography>) : <></>}

              <Typography paragraph>
                {project.inspiration ? project.inspiration.map((part) => {
                  if (typeof part !== 'string') {
                    // eslint-disable-next-line react/jsx-key
                    return <Anchor href={part.link}>{part.text}</Anchor>
                  }
                  else return part
                }) : <></>}
              </Typography>

              <Stack
                direction='row'
                spacing={1}
                flexWrap='wrap'
                useFlexGap
                sx={{ mb: 2 }}
              >
                {project.tags.map((tag) => <Chip key={tag} label={tag} />)}
              </Stack>
            </CardContent>

            {project.image ? <CardMedia
              id="project-page-img-right"
              component='img'
              image={project.image}
              alt={`screenshot of ${project.title}`}
              sx={{ width: '50%', height: 'fit-content' }}
            /> : <></>}
          </Stack>

          <CardContent>
            <Stack
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              {project.date ? 
                <Stack
                  direction='row'
                  justifyContent='end'
                  alignItems='center'
                  spacing={1}
                  sx={{ mt: 1 }}
                >
                  <Typography variant='caption' color='text.secondary'>Last Updated</Typography>
                  <Typography>{moment(project.date).format('MMM D YYYY')}</Typography>
                </Stack> : <></>
              }
            </Stack>
          </CardContent>

          <CardActions>
            <Button
              startIcon={<GitHubIcon />}
              variant='outlined'
              component={Link}
              href={project.links.githubLink}
              target='_blank'
              aria-label='github repository link'
            >
              GitHub
            </Button>

            {project.links.demoLink ? <Button
              startIcon={<OpenInNewIcon/>}
              variant='outlined'
              component={Link}
              href={project.links.demoLink}
              target='_blank'
              aria-label='demo link'
            >
              Demo
            </Button> : <></>}
          </CardActions>
        </Card>
      </Box>
    </Container>
  )
}