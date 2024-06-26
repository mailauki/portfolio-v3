/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { CardHeader, Stack, Box, Grid, CardActions, Button, Link as Anchor, Typography, Chip, CardContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Project } from '../(types)/projects';
import CardBox from '@/app/(components)/card';
import moment from 'moment';

export default function ProjectCard({ project }: { project: Project }) {
  return (
		<CardBox>
			<CardHeader
				id={project.id}
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
					<Grid item md={project.image[0] ? 4 : 12} sm={12} xs={12}>
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
									project.inspiration.map((part) => (
										(typeof part !== 'string') ? (
											<Anchor
												href={part.link}
												key={part.text}
											>
												{part.text}
											</Anchor>
										) : (
											part
										)
									))
								)}
							</Typography>
						</Box>
					</Grid>

					<Grid item md={project.image[0] ? 8 : 12} sm={12} xs={12}>
						{project.image[0] && (
							<img
								alt={`screenshot of ${project.title}`}
								src={project.image[0]}
								style={{ objectFit: 'contain', borderRadius: 8 }}
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
