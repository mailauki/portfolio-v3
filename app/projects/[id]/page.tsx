'use client';

import projects from '../projects.json';

import Link from 'next/link';

import moment from 'moment';

import { Button, CardContent, CardHeader, Chip, Link as Anchor, Stack, Typography, CardActions, Box, Container } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Card from '@/app/components/card';
import Images from './images';
import type { Project } from '@/app/types/projects';

export default function ProjectPage({ params }: { params: Project }) {
  const project = projects.find((project) => project.id === params.id) as Project;

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
						subheader={project.description[0]}
            title={project.title}
					/>

					<CardContent>
						<Stack
							direction={{sm: 'column', md: 'row'}}
							gap={2}
							justifyContent='space-between'
						>
							<Box>
								{project.description[1] && (
									project.description[1].map((bullet: string, index: number) => <Typography color='text.secondary' key={index} paragraph variant='body2'>• {bullet}</Typography>)
								)}

								<Typography paragraph>
									{project.inspiration && (
										project.inspiration.map((part) => {
											if (typeof part !== 'string') {
												// eslint-disable-next-line react/jsx-key
												return <Anchor href={part.link}>{part.text}</Anchor>;
											} else return part;
										})
									)}
								</Typography>

								<Stack
									direction='row'
									flexWrap='wrap'
									spacing={1}
									sx={{ mb: 2 }}
									useFlexGap
								>
									{project.tags.map((tag) => <Chip key={tag} label={tag} />)}
								</Stack>

							</Box>

							<Images project={project} />
						</Stack>

						{project.date && (
							<Stack
								alignItems='center'
								direction='row'
								justifyContent='end'
								spacing={1}
								sx={{ mt: 1 }}
							>
								<Typography color='text.secondary' variant='caption'>
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
							aria-label='github repository link'
							component={Link}
							href={project.links.githubLink}
							startIcon={<GitHubIcon />}
							target='_blank'
							variant='outlined'
						>
							GitHub
						</Button>

						{project.links.demoLink && (
							<Button
								aria-label='demo link'
								component={Link}
								href={project.links.demoLink}
								startIcon={<OpenInNewIcon/>}
								target='_blank'
								variant='outlined'
							>
								Demo
							</Button>
						)}
					</CardActions>
				</Card>
      </Box>
    </Container>
  );
}
