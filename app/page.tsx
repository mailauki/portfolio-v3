'use client';

import styles from '@/app/page.module.css';

import { Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container component='main' maxWidth='lg'>
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
					component={Link}
					href='mailto:juliemevans17@gmail.com'
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
