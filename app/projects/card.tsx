'use client';

import Link from 'next/link';

import { Card, CardHeader, CardMedia, CardActionArea, alpha } from '@mui/material';

import type { Project } from '../types/projects';

// import Card from '@/app/components/card'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
			sx={{
				mt: 2,
				bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
				height: '100%',
			}}
			variant='outlined'
		>
			<CardActionArea
				component={Link}
				href={`/projects/${project.id}`}
				sx={{ height: '100%' }}
			>
				{project.image[0] && (
					<CardMedia
						alt={`screenshot of ${project.title}`}
						component='img'
						height={280}
						image={project.image[0]}
						sx={{ objectPosition: 'top' }}
					/>
				)}
				<CardHeader
					subheader={project.description[0]}
					title={project.title}
				/>
			</CardActionArea>
    </Card>
  );
}
