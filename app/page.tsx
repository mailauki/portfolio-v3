import styles from './page.module.css';

import { Container, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
			maxWidth='lg'
			sx={{ position: 'fixed', height: '100%', flex: '1 1 auto' }}
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
      </Stack>
    </Container>
  );
}
