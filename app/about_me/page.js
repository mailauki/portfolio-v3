import Link from 'next/link'

import { Avatar, Button, Stack, Typography, Link as Anchor } from '@mui/material'

import SocialLinks from '../components/social'
import Summary from '../components/summary'

import { GitHub } from '@mui/icons-material'

export const metadata = {
  title: 'About Me',
}

export default function AboutMe() {
  return (
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={4} justifyContent='center'>
      <Stack sx={{ textAlign: 'center' }} alignItems='center'>
        <Avatar
          alt='Julie Evans'
          src='/profile.jpg'
          sx={{ width: 250, height: 250, mb: 2 }}
        >
          JE
        </Avatar>

        <Anchor variant='h6' component={Link} href="mailto:juliemevans17@gmail.com">juliemevans17@gmail.com</Anchor>

        <SocialLinks />

        <Stack sx={{ m: 2, width: '100%' }}>
          <Button
            startIcon={<GitHub />}
            variant='outlined'
            fullWidth
            component={Link}
            href='https://github.com/mailauki/portfolio-v3'
            aria-label='Github repository link for this Portfolio'
          >
            Github
          </Button>
          <Typography variant='caption' >Code for this Portfolio</Typography>
        </Stack>
      </Stack>
      
      <Summary />
    </Stack>
  )
}