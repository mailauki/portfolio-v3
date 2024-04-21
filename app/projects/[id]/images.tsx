/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'

import { Box, Button, MobileStepper, ThemeProvider, createTheme } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

export default function Images({ project }) {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = project.image.length

	const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

	return (
		<Box sx={{ minWidth: 350, maxWidth: 500, mb: 2, position: 'relative' }}>
			{project.image[activeStep] && (
				<img
					src={project.image[activeStep]}
					alt={`screenshot of ${project.title}`}
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						objectPosition: 'top'
					}}
				/>
			)}
			{maxSteps > 1 && (
				<ThemeProvider theme={darkTheme}>
					<MobileStepper
						steps={maxSteps}
						position="static"
						activeStep={activeStep}
						nextButton={
							<Button
								size="small"
								onClick={handleNext}
								disabled={activeStep === maxSteps - 1}
							>
								Next
								<KeyboardArrowRight />
							</Button>
						}
						backButton={
							<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
								<KeyboardArrowLeft />
								Back
							</Button>
						}
						color={theme.palette.mode }
						sx={{
							background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
							position: 'absolute',
							bottom: 0,
							right: 0,
							width: '100%',
							// height: '100%',
							alignItems: 'flex-end'
						}}
					/>
				</ThemeProvider>
			)}
		</Box>
	)
}
