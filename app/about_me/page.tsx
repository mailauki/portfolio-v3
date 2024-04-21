import Link from 'next/link'

import { Avatar, Button, Stack, Typography, Link as Anchor, Grid, Container } from '@mui/material'

import SocialLinks from '../components/social'
import Summary from './summary'
import Skills from './skills'

import { GitHub } from '@mui/icons-material'

export const metadata = {
  title: 'About Me',
}

export default function AboutMe() {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={{ sm: 2, md: 4}} justifyContent='center' alignItems={{ xs: 'center', sm: 'center', md: 'stretch' }}>
        <Grid item xs={12} sm={10} md={4}>
          <Stack sx={{ textAlign: 'center', height: '100%' }} alignItems='center'>
            <Avatar
              alt='Julie Evans'
              src='/profile.jpg'
              sx={{ width: 200, height: 200, my: 2 }}
            >
              JE
            </Avatar>

            <Anchor variant='h6' component={Link} href="mailto:juliemevans17@gmail.com">juliemevans17@gmail.com</Anchor>

            <SocialLinks />

            <Stack sx={{ mx: 2, mt: 1, width: '100%' }}>
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

        <Grid item xs={12} sm={10} md={8}>
          <Summary />
        </Grid>
      </Grid>
    </Container>
  )
}