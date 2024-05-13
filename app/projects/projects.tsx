import { Stack } from '@mui/material';
import ProjectCard from './card';
import type { Project } from '../(types)/projects';

export default function Projects({ sort }: { sort: Project[] }) {
	return (
		<Stack gap={8}>
			{sort.map((project, index) => <ProjectCard key={`project-${index}-${project.id}`} project={project} />)}
		</Stack>
	);
}
