'use client'

import styles from '../page.module.css'

import { alpha } from '@mui/material/styles'

import { Card, CardContent, Typography } from '@mui/material'

export default function Summary() {
  return (
    <Card
      variant='outlined'
      sx={{
        height: '100%',
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.2)
      }}
    >
      <CardContent>
        <Typography paragraph className={styles.dropcap}>{`Hello, my name is Julie. I am a Web Developer from Texas. My hobbies are Linguistics, drawing, and collecting rocks.`}</Typography>
        
        <Typography paragraph>{`I've always loved design and I'm fascinated by words. I love the way words and languages work, especially how they differ and change with cultural influence. My greatest joy in life is being able to use my two greatest passions together, and expand my knowledge along the way. Programming languages are just like any other language, and learning how to utilize and understand them is fun for me. Combining that with turning UX designs into an aesthetic and functional web application is a dream come true.`}</Typography>

        <Typography paragraph>{`For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages. I like to understand the fundamentals of things and know how they function. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things to make things more fun.`}</Typography>

        <Typography paragraph>{`I'm experienced in React, JavaScript, and Ruby on Rails based programming. I have a Bachelors Degree in Integrative Studies with focuses in Linguistics and Anthropology. My understanding of Linguistics helps to provide a basis for ease in language learning, including programming languages.`}</Typography>

        <Typography paragraph fontStyle='italic'>{`I'm working towards learning Angular and Typescript, and anything else I come across.`}</Typography>
      </CardContent>
    </Card>
  )
}