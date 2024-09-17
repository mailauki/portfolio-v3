'use client';

import { Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Home() {
  return (
		<Grid container spacing={4}>
			<Grid>
				<Stack px={2} spacing={2}>
					<Typography fontFamily='serif' fontSize='10rem' variant='h1'>Hello</Typography>
					<Stack spacing={3} justifyContent='end' height='94%'>
						<Typography variant='h2' fontSize='1.15rem' textTransform='uppercase' fontWeight={500}>Julie M. Evans</Typography>
						<Typography variant='subtitle1'>Web Developer | Software Engineer </Typography>
						<Typography variant='subtitle1'>Currently working full-time as a Web Developer at <Link color='textPrimary' href='https://www.pingwind.com/' underline='hover'>PingWind</Link>.</Typography>
					</Stack>
					<Typography variant='subtitle1'>Get in touch with me however you like. No reason needed.</Typography>
					<Stack>
						<Typography variant='overline'>Email: <Link href='mailto:juliemevans17@gmail.com' variant='subtitle1' textTransform='initial'>juliemevans17@gmail.com</Link></Typography>
						<Typography variant='overline'>On the Internet: <Link href='https://www.linkedin.com/in/julie-evans-381486180' variant='subtitle1' textTransform='initial'>LinkedIn</Link> | <Link href='https://dev.to/mailauki' variant='subtitle1' textTransform='initial'>Blog</Link> | <Link href='https://github.com/mailauki' variant='subtitle1' textTransform='initial'>Github</Link></Typography>
					</Stack>
					<Typography variant='overline'>Kilgore, Texas</Typography>
				</Stack>
			</Grid>
		</Grid>
  );
}
