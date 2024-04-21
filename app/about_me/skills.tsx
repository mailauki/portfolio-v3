'use client';

import skills from './skills.json';

import { CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material';

import Card from '@/app/components/card';

export default function Skills() {
  return (
    <Card>
      <CardHeader
        subheader={<Typography sx={{ textTransform: 'uppercase' }} variant='caption'>still learning and mastering</Typography>}
        sx={{ pb: 0 }}
        title={<Typography variant='h6'>Skills</Typography>}
      />
      <CardContent>
        <Stack direction='row' flexWrap='wrap' justifyContent='center' spacing={1} useFlexGap>
          {skills.map((skill) => <Chip key={skill.id} label={skill.title} />)}
        </Stack>
      </CardContent>
    </Card>
  );
}
