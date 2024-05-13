import { Container } from '@mui/material';
import Filter from './filter';

export const metadata = {
  title: 'Projects',
};

export default function Projects() {

  return (
    <Container component='main' maxWidth='lg'>
			<Filter />
    </Container>
  );
}
