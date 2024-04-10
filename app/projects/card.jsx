'use client'

import Link from 'next/link'

import { Card, CardHeader, CardMedia, CardActionArea, alpha } from '@mui/material'

// import Card from '@/app/components/card'

export default function ProjectCard({ project }) {
  return (
    <Card
			variant='outlined'
			sx={{
				mt: 2,
				bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
				height: '100%'
			}}
		>
			<CardActionArea
				component={Link}
				href={`/projects/${project.id}`}
				sx={{ height: '100%' }}
			>
				{project.image[0] && (
					<CardMedia
						height={280}
						component='img'
						image={project.image}
						alt={`screenshot of ${project.title}`}
						sx={{ objectPosition: 'top' }}
					/>
				)}
				<CardHeader
					title={project.title}
					subheader={project.description[0]}
				/>
			</CardActionArea>
    </Card>
  )
}