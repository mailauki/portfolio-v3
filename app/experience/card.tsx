'use client';

import experience from './experience.json';
import education from './education.json';

import { CardContent, CardHeader, List } from '@mui/material';

import Item from './item';
import CardBox from '@/app/components/card';

export function ExperienceCard() {
  return (
		<CardBox>
			<CardHeader
				sx={{ pb: 0 }}
				title='Experience'
			/>
			<CardContent sx={{ pt: 0 }}>
				<List>
					{experience.map((work) => (
						<Item exp={work} key={work.company} />
					))}
				</List>
			</CardContent>
		</CardBox>
  );
}
export function EducationCard() {
  return (
		<CardBox>
			<CardHeader
				sx={{ pb: 0 }}
				title='Education'
			/>
			<CardContent sx={{ pt: 0 }}>
				<List>
					{education.map((school) => (
						<Item exp={school} key={school.name} />
					))}
				</List>
			</CardContent>
		</CardBox>
  );
}
