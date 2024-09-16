import Link from 'next/link';
import { Avatar, Button, Stack, Typography, Link as Anchor } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialLinks from '../(components)/social';
import Summary from './summary';
import Skills from './skills';
import { GitHub } from '@mui/icons-material';

export const metadata = {
  title: 'About Me',
};

export default function AboutMe() {
  return (
      <Grid alignItems={{ xs: 'center', sm: 'center', md: 'stretch' }} container justifyContent='center' spacing={{ xs: 2, sm: 2, md: 4 }}>
        <Grid size={{ xs: 12, sm: 10, md: 4 }}>
          <Stack alignItems='center' sx={{ textAlign: 'center', height: '100%' }}>
            <Avatar
              alt='Julie Evans'
              src='/profile.jpg'
              sx={{ width: 200, height: 200, my: 2 }}
            >
              JE
            </Avatar>

            <Anchor component={Link} href='mailto:juliemevans17@gmail.com' variant='h6'>juliemevans17@gmail.com</Anchor>

            <SocialLinks />

            <Stack sx={{ mx: 2, mt: 1, mb: 2, width: '100%' }}>
              <Button
                aria-label='Github repository link for this Portfolio'
                component={Link}
                fullWidth
                href='https://github.com/mailauki/portfolio-v3'
                startIcon={<GitHub />}
                target='_blank'
                variant='outlined'
              >
                Github
              </Button>
              <Typography variant='caption'>Code for this Portfolio</Typography>
            </Stack>

            <Skills />

          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 10, md: 8 }}>
          <Summary />
        </Grid>
      </Grid>
  );
}
