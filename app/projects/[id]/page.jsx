'use client'

import projects from '../projects'

import Link from 'next/link'

import moment from 'moment'

import { Button, CardContent, CardHeader, Chip, Link as Anchor, Stack, Typography, CardActions, Box, Container, } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import Card from '@/app/components/card'
import Images from './images'

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
					<CardHeader
						title={project.title}
            subheader={project.description[0]}
					/>

					<CardContent>
						<Stack
							direction={{sm: 'column', md: 'row'}}
							justifyContent='space-between'
							gap={2}
						>
							<Box>
								{project.description[1] && (
									project.description[1].map((bullet, index) => <Typography key={index} paragraph variant='body2' color='text.secondary'>• {bullet}</Typography>)
								)}

								<Typography paragraph>
									{project.inspiration && (
										project.inspiration.map((part) => {
											if (typeof part !== 'string') {
												// eslint-disable-next-line react/jsx-key
												return <Anchor href={part.link}>{part.text}</Anchor>
											}
											else return part
										})
									)}
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
		
							</Box>

							<Images project={project} />
						</Stack>

						{project.date && (
							<Stack
								direction='row'
								justifyContent='end'
								alignItems='center'
								spacing={1}
								sx={{ mt: 1 }}
							>
								<Typography variant='caption' color='text.secondary'>
									Last Updated
								</Typography>
								<Typography>
									{moment(project.date).format('MMM D YYYY')}
								</Typography>
							</Stack>
						)}
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

						{project.links.demoLink && (
							<Button
								startIcon={<OpenInNewIcon/>}
								variant='outlined'
								component={Link}
								href={project.links.demoLink}
								target='_blank'
								aria-label='demo link'
							>
								Demo
							</Button>
						)}
					</CardActions>
				</Card>
      </Box>
    </Container>
  )
}