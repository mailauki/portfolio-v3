import Link from 'next/link'

import { IconButton, Stack, Tooltip } from '@mui/material'

import { GitHub, LinkedIn, LogoDev } from '@mui/icons-material'

export default function SocialLinks() {
  return (
    <Stack direction='row' justifyContent='center' spacing={4}>
      <Tooltip title='GitHub' placement='top' arrow>
        <IconButton
          component={Link}
          href='https://github.com/mailauki'
          target='_blank'
        >
          <GitHub />
        </IconButton>
      </Tooltip>

      <Tooltip title='LinkedIn' placement='top' arrow>
        <IconButton
          component={Link}
          href='https://www.linkedin.com/in/julie-evans-381486180'
          target='_blank'
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>

      <Tooltip title='Dev Blog' placement='top' arrow>
        <IconButton
          component={Link}
          href='https://dev.to/mailauki'
          target='_blank'
        >
          <LogoDev />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}