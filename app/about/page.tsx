import styles from '@/app/page.module.css';
import { Avatar, Button, Stack, Typography, Link as Anchor } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialLinks from '../(components)/social';
import Summary from './summary';
import Skills from './skills';
import { EducationCard, ExperienceCard } from '../(experience)/card';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
			<Grid container spacing={2}>
				<Grid size={{ md: 8, sm: 12 }}>
					<Stack px={2} spacing={2}>
						<Typography fontFamily='serif' fontSize='10rem' variant='h1'>About</Typography>
						<Typography fontFamily='serif' fontSize='2.8rem' variant='subtitle1' whiteSpace='balance'>I&apos;m Julie. A web developer, linguist, and problem solver.</Typography>
					</Stack>
				</Grid>
				<Grid size={{ md: 4 }} className={styles.hide}>
					<Stack alignItems='center' spacing={2} sx={{ textAlign: 'center', height: '100%' }}>
						<Avatar
							alt='Julie Evans'
							src='/profile.jpg'
							sx={{ width: 200, height: 200, my: 2 }}
						>
							JE
						</Avatar>
						<Button
							component={Anchor}
							href='mailto:juliemevans17@gmail.com'
							size='large'
							sx={{
								fontWeight: 600,
								mt: 2,
								padding: '0.6rem 2rem',
							}}
							color='primary'
							variant='contained'
							disableElevation
						>
							Contact Me
						</Button>
						<SocialLinks />
					</Stack>
				</Grid>
				<Grid size={12}>
					<Stack spacing={2}>
						<Summary />
						<Skills />
						<ExperienceCard />
						<EducationCard />
					</Stack>
				</Grid>
			</Grid>
  );
}
