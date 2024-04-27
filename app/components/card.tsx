import { Card as MuiCard } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function CardBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<MuiCard
			sx={{
				bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
			}}
			variant='outlined'
		>
			{children}
		</MuiCard>
	);
}
