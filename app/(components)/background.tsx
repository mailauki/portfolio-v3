'use client';

import { Paper, useTheme } from '@mui/material';
import { brown } from '@mui/material/colors';

export default function Background() {
	const theme = useTheme();

	return (
		<Paper
			elevation={0}
			square
			sx={{
				background: `linear-gradient(to bottom, ${theme.palette.background.default} 50%, ${brown[500]})`,
				// teal[500]
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
