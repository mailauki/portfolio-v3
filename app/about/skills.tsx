'use client';

import skills from './skills.json';
import { CardContent, CardHeader, Chip, Divider, Stack } from '@mui/material';
import CardBox from '@/app/(components)/card';

export default function Skills() {
  return (
    <CardBox>
      <CardHeader
				titleTypographyProps={{ fontFamily: 'serif' }}
				subheaderTypographyProps={{ variant: 'overline' }}
        sx={{ pb: 0 }}
				title='Skills'
				subheader='Still learning and mastering'
      />
      <CardContent>
        <Stack direction='row' divider={<Divider flexItem orientation='vertical' variant='middle' />} flexWrap='wrap' spacing={1} useFlexGap>
          {skills.map((skill) => <Chip key={skill.id} label={skill.title} />)}
        </Stack>
      </CardContent>
    </CardBox>
  );
}
