'use client'

import skills from './skills.json'

import { CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'

import Card from '@/app/components/card'

export default function Skills() {
  return (
    <Card>
      <CardHeader
        title={<Typography variant='h6'>Skills</Typography>}
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