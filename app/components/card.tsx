import { Card as MuiCard } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<MuiCard
			sx={{
				mt: 2,
				bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
			}}
			variant='outlined'
		>
			{children}
		</MuiCard>
	);
}
