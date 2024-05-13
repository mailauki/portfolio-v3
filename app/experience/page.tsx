import { ExperienceCard, EducationCard } from './card';
import { Container, Grid } from '@mui/material';

export const metadata = {
  title: 'Experience',
};

export default function Experience() {
  return (
    <Container component='main' maxWidth='lg'>
			<Grid container spacing={2}>
				<Grid item lg={7} md={12}>
					<ExperienceCard />
				</Grid>
				<Grid item lg={5} md={12}>
					<EducationCard />
				</Grid>
			</Grid>
    </Container>
  );
}
