import { Card as MuiCard } from '@mui/material'
import { alpha } from '@mui/material/styles'

export default function Card({ children }) {
	return (
		<MuiCard
			variant='outlined'
			sx={{
				mt: 2,
				bgcolor: (theme) => alpha(theme.palette.background.default, 0.2),
				// height: '100%'
			}}
		>
			{children}
		</MuiCard>
	)
}
