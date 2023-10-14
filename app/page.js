import styles from './page.module.css'

import { Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography variant='h1' textAlign='center'>Julie <span className={styles.hide}>M. </span>Evans</Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}  justifyContent='center' alignItems='center'>
        <Typography>Software Engineer</Typography>
        <span className={styles.hide}>-</span>
        <Typography>Web Developer</Typography>
      </Stack>
    </Stack>
  )
}
