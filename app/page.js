import Image from 'next/image'
import styles from './page.module.css'
import { Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function Home() {
  return (
    <Container maxWidth='lg' sx={{ bgcolor: grey[200] }} className={styles.main}>
      {/* <Image src='/signature.png' alt='Signature of Julie Evans' width='237' height='170' /> */}
      <Typography variant='h1'>Julie M. Evans</Typography>
      <Typography>Software Engineer - Web Developer</Typography>
    </Container>
  )
}
