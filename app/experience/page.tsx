import { ExperienceCard, EducationCard } from './card';
import Grid from '@mui/material/Grid2';

export const metadata = {
  title: 'Experience',
};

export default function Experience() {
  return (
			<Grid container spacing={2}>
				<Grid size={{ md: 12, lg: 7 }}>
					<ExperienceCard />
				</Grid>
				<Grid size={{ md: 12, lg: 5 }}>
					<EducationCard />
				</Grid>
			</Grid>
  );
}
