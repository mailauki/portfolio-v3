import { Typography } from '@mui/material';
import Filter from './filter';

export const metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
		<>
			<Typography fontFamily='serif' px={2} fontSize='10rem' variant='h1' mb={5}>Projects</Typography>
			<Filter />
		</>
  );
}
