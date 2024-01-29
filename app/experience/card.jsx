'use client'

import experience from './experience'
import education from './education'

import { alpha } from '@mui/material/styles'

import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Item from './item'

export default function ExperienceCard() {
  return (
    <Card
      variant='outlined'
      sx={{
        mt: 2,
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.2)
      }}
    >
      <CardContent>
        <List subheader={<Typography variant='h6'>Experience</Typography>}>
          {experience.map((work) => (
						<Item key={work.company} exp={work} />
          ))}
        </List>

        <List subheader={<Typography variant='h6'>Education</Typography>}>
          {education.map((school) => (
						<Item key={school.name} exp={school} />
          ))}
        </List>
      </CardContent>
    </Card>
  )
}