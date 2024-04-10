'use client'

import experience from './experience'
import education from './education'

import { CardContent, List, Typography } from '@mui/material'
import Item from './item'
import Card from '@/app/components/card'

export default function ExperienceCard() {
  return (
    <Card>
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