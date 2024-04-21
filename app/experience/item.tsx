import { Avatar, IconButton, Link, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material"
// import Link from "next/link"

export default function Item({ exp }) {
	const { company, avatar, jobTitle, dates, description, name, location } = exp
	return (
		<ListItem key={company} alignItems='flex-start'>
			{/* <ListItemButton
				alignItems='flex-start'
				sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
			> */}
				{avatar && (
					<ListItemAvatar>
						<IconButton
							component={Link}
							href={exp.source}
							sx={{ p: 0.5, m: 0 }}
						>
							<Avatar src={avatar} alt={company || name} />
						</IconButton>
					</ListItemAvatar>
				)}
				<ListItemText
					inset={!avatar}
					disableTypography
					primary={
						<Typography>
							<Typography
								component={exp.source ? Link : 'span'}
								href={exp.source}
								underline='hover'
								color='text.primary'
							>
								{company || name}
							</Typography>
							{(jobTitle || location) && (
								<>
									{' — '}
									<Typography component='span' fontStyle='italic' color='text.secondary'>{jobTitle || location}</Typography>
								</>
							)}
						</Typography>
					}
					secondary={
						<>
							<Typography variant='body2' color='text.secondary'>
								{dates}
							</Typography>
							{description && description[0] && (
								<Typography
									sx={{
										'&:before': {
											content: '"•"',
											mr: 1
										}
									}}
								>
									{description[0]}
								</Typography>
							)}
							{description && description[1] && (
								<Typography
									sx={{
										'&:before': {
											content: '"•"',
											mr: 1
										}
									}}
								>
									{description[1]}
								</Typography>
							)}
						</>
					}
				/>
			{/* </ListItemButton> */}
		</ListItem>
	)
}