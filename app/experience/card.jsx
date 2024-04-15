'use client'

import experience from './experience'
import education from './education'

import { CardContent, CardHeader, Divider, List, Typography } from '@mui/material'
import Item from './item'
import Card from '@/app/components/card'

export default function ExperienceCard() {
  return (
		<>
			<Card>
				<CardHeader
					title='Experience'
					sx={{ pb: 0 }}
				/>
				<CardContent sx={{ pt: 0 }}>
					<List>
						{experience.map((work) => (
							<>
								<Item key={work.company} exp={work} />
								{/* <Divider variant="inset" component="li" /> */}
							</>
						))}
					</List>
				</CardContent>
			</Card>

			<Card>
				<CardHeader
					title='Education'
					sx={{ pb: 0 }}
				/>
				<CardContent sx={{ pt: 0 }}>
					<List>
						{education.map((school) => (
							<Item key={school.name} exp={school} />
						))}
					</List>
				</CardContent>
			</Card>
		</>
  )
}