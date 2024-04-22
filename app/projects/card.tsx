/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { CardHeader, Stack, Box, Grid, CardActions, Button, Link as Anchor, Typography, Chip, CardContent } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import type { Project } from '../types/projects';

import CardBox from '@/app/components/card';

import moment from 'moment';

export default function ProjectCard({ project }: { project: Project }) {
  return (
		<CardBox>
			<CardHeader
				subheader={project.description[0]}
				title={project.title}
			/>

			<CardContent>
				<Grid
					container
					justifyContent='flex-end'
					spacing={2}
					sx={{ minHeight: 350 }}
				>
					<Grid item xs={4}>
						<Box>
							{project.description[1] && (
								(project.description[1] as string[]).map((bullet: string, index: number) => <Typography color='text.secondary' key={index} paragraph variant='body2'>• {bullet}</Typography>)
							)}

							<Stack
								direction='row'
								flexWrap='wrap'
								spacing={1}
								sx={{ mb: 2 }}
								useFlexGap
							>
								{project.tags.map((tag) => <Chip key={tag} label={tag} />)}
							</Stack>

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
						</Box>
					</Grid>

					<Grid item xs={8}>
						{project.image[0] && (
							<img
								alt={`screenshot of ${project.title}`}
								src={project.image[0]}
								style={{ objectFit: 'contain' }}
								width='100%'
							/>
						)}

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
					</Grid>
				</Grid>
				{/* </Stack> */}
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
		</CardBox>
  );
}
