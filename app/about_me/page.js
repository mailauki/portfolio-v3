// import Image from 'next/image'

import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'

import { GitHub, LinkedIn, LogoDev } from '@mui/icons-material'

export default function AboutMe() {
  return (
    <>
      <Stack direction='row' spacing={4}>
        <Box sx={{ textAlign: 'center' }}>
          {/* <Image src='/profile.jpg' alt='profile picture of Julie Evans' width='300' height='300' /> */}
          <Avatar
            alt='Julie Evans'
            src='/profile.jpg'
            sx={{ width: 250, height: 250, mb: 2 }}
            // variant='rounded'
          >
            JE
          </Avatar>

          <Typography variant='h6' color='primary'>juliemevans17@gmail.com</Typography>

          <Stack direction='row' justifyContent='space-evenly'>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <LogoDev />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Typography paragraph sx={{ 'span': { fontSize: '3rem' } }}><span>H</span>ello, my name is Julie. I am a Web Developer from Texas. My hobbies are Linguistics, drawing, and collecting rocks.</Typography>
          
          <Typography paragraph>I've always loved design and I'm fasinated by words. I love the way words and languages work, especially how they differ and change with cultual influence. My greatest joy in life is being able to use my two greatest passions together, and expand my knowledge along the way. Programming languages are just like any other language, and learning how to utilize and understand them is fun for me. Combining that with turning UX designs into an asethetic and functional web application is a dream come true.</Typography>

          <Typography paragraph>For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages. I like to understand the fundamentals of things and know how they function. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things to make things more fun.</Typography>

          <Typography paragraph>I'm experienced in React, JavaScript, and Ruby on Rails based programming. I have a Bachelors Degree in Integrative Studies with focuses in Linguistics and Anthropology. My understanding of Linguistics helps to provide a basis for ease in language learning, including programming languages.</Typography>

          <Typography paragraph fontStyle='italic'>I'm working towards learning Angular and Typescript, and anthing else I come across.</Typography>
        </Box>
      </Stack>
    </>
  )
}