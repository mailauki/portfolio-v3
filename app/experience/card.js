'use client'

import experience from './experience'
import education from './education'

import { alpha } from '@mui/material/styles'

import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

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
            <ListItem key={work.company}>
              <ListItemText
                inset={!work.avatar}
                disableTypography
                primary={
                  <Typography>
                    <Typography component='span'>{work.company}</Typography>
                    {' — '}
                    <Typography component='span' fontStyle='italic' color='text.secondary'>{work.jobTitle}</Typography>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant='body2' color='text.secondary'>{work.dates}</Typography>
                    <Typography sx={{ pl: 4 }}>{work.decription[0]}</Typography>
                    {work.decription && work.decription[1] ? (
                      <Typography sx={{ pl: 4 }}>{work.decription[1]}</Typography>
                    ) : (
                      <></>
                    )}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>

        <List subheader={<Typography variant='h6'>Education</Typography>}>
          {education.map((school) => (
            <ListItem alignItems='flex-start' key={school.name}>
              <ListItemAvatar>
                <Avatar src={school.avatar} alt={school.name} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography>
                    <Typography component='span'>{school.name}</Typography>
                    {school.location ? (
                      <>
                        {' — '}
                        <Typography component='span' fontStyle='italic' color='text.secondary'>{school.location}</Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant='body2' color='text.secondary'>{school.dates}</Typography>
                    <Typography>{school.description}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}