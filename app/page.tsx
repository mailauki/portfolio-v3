import styles from './page.module.css'

import { Container, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container
			maxWidth='lg'
			sx={{ position: 'fixed', height: '100%', flex: '1 1 auto' }}
		>
      <Stack
				direction='column'
				justifyContent='center'
				alignItems='center'
				height='100%'
				sx={{ margin: 'auto 0', flex: '1 1 auto' }}
			>
        <Typography variant='h1' textAlign='center'>Julie <span className={styles.hide}>M. </span>Evans</Typography>

        <Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={1}
					justifyContent='center'
					alignItems='center'
				>
          <Typography>Software Engineer</Typography>
          <span className={styles.hide}>-</span>
          <Typography>Web Developer</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
