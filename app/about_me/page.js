import Link from 'next/link'

import { Avatar, Button, Stack, Typography, Link as Anchor, Grid } from '@mui/material'

import SocialLinks from '../components/social'
import Summary from './summary'
import Skills from './skills'

// import { skills } from './skills'
// import skills from './skills.json'

import { GitHub } from '@mui/icons-material'

export const metadata = {
  title: 'About Me',
}

export default function AboutMe() {
  return (
    <Grid container spacing={4} justifyContent='center' alignItems={{ xs: 'center', sm: 'center', md: 'stretch' }}>
      <Grid item xs={12} sm={9} md={4}>
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
              target='_blank'
              aria-label='Github repository link for this Portfolio'
            >
              Github
            </Button>
            <Typography variant='caption' >Code for this Portfolio</Typography>
          </Stack>

          <Skills />
        
        </Stack>
      </Grid>

      <Grid item xs={12} sm={9} md={8}>
        <Summary />
      </Grid>
    </Grid>
  )
}