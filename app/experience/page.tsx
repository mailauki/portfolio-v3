import ExperienceCard from './card';

import { Container, Stack} from '@mui/material';

export const metadata = {
  title: 'Experience',
};

export default function Experience() {
  return (
    <Container maxWidth='md'>
      <Stack
				alignItems={{ xs: 'center', sm: 'center', md: 'stretch' }}
				justifyContent='center'
			>
        <ExperienceCard />
      </Stack>
    </Container>
  );
}
