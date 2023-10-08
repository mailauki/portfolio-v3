import Link from 'next/link'

import { IconButton, Stack } from '@mui/material'

import { GitHub, LinkedIn, LogoDev } from '@mui/icons-material'

export default function SocialLinks() {
  return (
    <Stack direction='row' justifyContent='center' spacing={4}>
      <IconButton component={Link} href="https://github.com/mailauki">
        <GitHub />
      </IconButton>
      <IconButton component={Link} href="https://www.linkedin.com/in/julie-evans-381486180">
        <LinkedIn />
      </IconButton>
      <IconButton component={Link} href="https://dev.to/mailauki">
        <LogoDev />
      </IconButton>
    </Stack>
  )
}