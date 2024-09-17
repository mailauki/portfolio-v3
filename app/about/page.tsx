import styles from '@/app/page.module.css';
import Link from 'next/link';
import { Avatar, Button, Stack, Typography, Link as Anchor } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialLinks from '../(components)/social';
import Summary from './summary';
import Skills from './skills';
import { GitHub } from '@mui/icons-material';
import { EducationCard, ExperienceCard } from '../experience/card';

export const metadata = {
  title: 'About Me',
};

export default function About() {
  return (
      // <Grid alignItems={{ xs: 'center', sm: 'center', md: 'stretch' }} container justifyContent='center' spacing={{ xs: 2, sm: 2, md: 4 }}>
      //   <Grid size={{ xs: 12, sm: 10, md: 4 }}>
      //     <Stack alignItems='center' sx={{ textAlign: 'center', height: '100%' }}>
      //       <Avatar
      //         alt='Julie Evans'
      //         src='/profile.jpg'
      //         sx={{ width: 200, height: 200, my: 2 }}
      //       >
      //         JE
      //       </Avatar>

      //       <Anchor component={Link} href='mailto:juliemevans17@gmail.com' variant='h6'>juliemevans17@gmail.com</Anchor>

      //       <SocialLinks />

      //       <Stack sx={{ mx: 2, mt: 1, mb: 2, width: '100%' }}>
      //         <Button
      //           aria-label='Github repository link for this Portfolio'
      //           component={Link}
      //           fullWidth
      //           href='https://github.com/mailauki/portfolio-v3'
      //           startIcon={<GitHub />}
      //           target='_blank'
      //           variant='outlined'
      //         >
      //           Github
      //         </Button>
      //         <Typography variant='caption'>Code for this Portfolio</Typography>
      //       </Stack>

      //       <Skills />

      //     </Stack>
      //   </Grid>

      //   <Grid size={{ xs: 12, sm: 10, md: 8 }}>
      //     <Summary />
      //   </Grid>
      // </Grid>
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
						{/* <Avatar alt='JE logo' src='/logo.png' sx={{ width: 100, height: 100, mx: 'auto' }}>JE</Avatar> */}
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
