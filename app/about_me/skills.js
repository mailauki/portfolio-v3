'use client'

import { alpha } from '@mui/material/styles'

import skills from './skills.json'

import { Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'

export default function Skills() {
  return (
    <Card
      variant='outlined'
      sx={{
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.2)
        // bgcolor: 'transparent'
      }}
    >
      <CardHeader
        title={<Typography>Skills</Typography>}
        subheader={<Typography variant='caption' sx={{ textTransform: 'uppercase' }}>still learning and mastering</Typography>}
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap justifyContent='center'>
          {skills.map((skill) => <Chip key={skill.id} label={skill.title} />)}
        </Stack>
      </CardContent>
    </Card>
  )
}