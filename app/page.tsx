'use client';

import styles from '@/app/page.module.css';

import { Button, Container, Stack, Typography, useTheme } from '@mui/material';

export default function Home() {
	// const theme = useTheme();

  return (
    <Container
			maxWidth='lg'
			// sx={{ position: 'fixed', height: '100%', flex: '1 1 auto' }}
		>
      <Stack
				alignItems='center'
				direction='column'
				height='100%'
				justifyContent='center'
				sx={{ margin: 'auto 0', flex: '1 1 auto' }}
			>
        <Typography textAlign='center' variant='h1'>Julie <span className={styles.hide}>M. </span>Evans</Typography>

        <Stack
					alignItems='center'
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent='center'
					spacing={1}
				>
          <Typography>Software Engineer</Typography>
          <span className={styles.hide}>-</span>
          <Typography>Web Developer</Typography>
        </Stack>
				<Button
					size='large'
					sx={{
						mt: 2,
						borderRadius: 8,
					}}
					variant='outlined'
				>
					Email Me
				</Button>
      </Stack>
    </Container>
  );
}
