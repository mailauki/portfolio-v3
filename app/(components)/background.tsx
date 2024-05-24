'use client';
import { Paper, useTheme } from '@mui/material';
import { teal } from '@mui/material/colors';

export default function Background() {
	const theme = useTheme();

	return (
		<Paper
			elevation={0}
			square
			sx={{
				background: `linear-gradient(to bottom, ${theme.palette.background.default} 70%, ${teal[500]} 70%)`,
				// backgroundImage: 'url("./ombre.png")',
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100vh',
				width: '100vw',
				zIndex: -1,
			}}
		></Paper>
	);
}
