'use client';
import styles from '@/app/page.module.css';
import { Button, Container, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
// import Link from 'next/link';

export default function Home() {
  return (
    // <Container component='main' maxWidth='lg'>
    //   <Stack
		// 		alignItems='center'
		// 		direction='column'
		// 		height='100%'
		// 		justifyContent='center'
		// 		spacing={4}
		// 		sx={{ margin: 'auto 0', flex: '1 1 auto' }}
		// 	>
		// 		<Typography textAlign='center' variant='h1'>Julie <span className={styles.hide}>M. </span>Evans</Typography>

		// 		<Stack
		// 			alignItems='center'
		// 			direction={{ xs: 'column', sm: 'row' }}
		// 			justifyContent='center'
		// 			spacing={1}
		// 		>
		// 			<Typography>Software Engineer</Typography>
		// 			<span className={styles.hide}>-</span>
		// 			<Typography>Web Developer</Typography>
		// 		</Stack>
		// 		<Button
		// 			component={Link}
		// 			href='mailto:juliemevans17@gmail.com'
		// 			size='large'
		// 			sx={{
		// 				mt: 2,
		// 				borderRadius: 8,
		// 			}}
		// 			variant='outlined'
		// 		>
		// 			Email Me
		// 		</Button>
    //   </Stack>
    // </Container>
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
			{/* <Grid size={4}>
				<Stack spacing={3} justifyContent='end' height='94%'>
					<Typography variant='h1' fontSize='1.05rem' textTransform='uppercase' fontWeight={500}>Julie M. Evans</Typography>
					<Typography variant='subtitle1'>Web Developer | Software Engineer </Typography>
					<Typography variant='subtitle1'>Currently working full-time as a Web Developer at <Link color='textPrimary' href='https://www.pingwind.com/' underline='hover'>PingWind</Link>.</Typography>
				</Stack>
			</Grid> */}
			{/* <Grid size={7}>
				<Stack>
					<Link
						href='/about'
						px={2}
						fontFamily='serif'
						fontSize='10rem'
						underline='none'
						variant='h2'
						color='textPrimary'
						sx={{ cursor: 'pointer', ':hover': { fontStyle: 'italic',transform: 'translateX(0.5rem)', transition: 'transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out' } }}
					>
					About
					</Link>
					<Link
						href='/projects'
						px={2}
						fontFamily='serif'
						fontSize='10rem'
						underline='none'
						variant='h2'
						color='textPrimary'
						sx={{ cursor: 'pointer', ':hover': { fontStyle: 'italic',transform: 'translateX(0.5rem)', transition: 'transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out' } }}
					>
						Projects
					</Link>
					<Link
						href='/contact'
						px={2}
						fontFamily='serif'
						fontSize='10rem'
						underline='none'
						variant='h2'
						color='textPrimary'
						sx={{ cursor: 'pointer', ':hover': { fontStyle: 'italic',transform: 'translateX(0.5rem)', transition: 'transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out' } }}
					>
						Contact
					</Link>
				</Stack>
			</Grid> */}
		</Grid>
  );
}
