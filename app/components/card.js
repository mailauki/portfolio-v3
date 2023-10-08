'use client'

import { useState } from 'react'

import Link from 'next/link'

import { styled } from '@mui/material/styles'

import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, IconButton, Stack, Typography } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345 }}>
      <Stack justifyContent='space-between' sx={{ height: '100%', minHeight: project.image ? 416 : 170 }}>
        <Box>
          {project.image ? <CardMedia
            component='img'
            image={project.image}
            alt={`screenshot of ${project.title}`}
          /> : <></>}
          <CardHeader
            title={project.title}
            subheader={project.description[0]}
          />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ pt: 0 }}>
              {project.description[1] ? project.description[1].map((bullet, index) => <Typography key={index} paragraph variant='body2' color='text.secondary'>• {bullet}</Typography>) : <></>}

              <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>{project.tags.map((tag) => <Chip key={tag} label={tag} />)}</Stack>
            </CardContent>
          </Collapse>
        </Box>
        <CardActions>
          <Button
            startIcon={<GitHubIcon />}
            variant='outlined'
            component={Link}
            href={project.links.githubLink}
            target='_blank'
          >
            GitHub
          </Button>
          {project.links.demoLink ? <Button
            startIcon={<OpenInNewIcon/>}
            variant='outlined'
            component={Link}
            href={project.links.demoLink}
            target='_blank'
          >
            Demo
          </Button> : <></>}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Stack>
    </Card>
  )
}