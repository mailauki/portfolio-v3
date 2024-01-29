import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"

export default function Item({ exp }) {
	const { company, avatar, jobTitle, dates, description, name, location } = exp
	return (
		<ListItem key={company} alignItems='flex-start'>
			{avatar && (
				<ListItemAvatar>
					<Avatar src={avatar} alt={company || name} />
				</ListItemAvatar>
			)}
			<ListItemText
				inset={!avatar}
				disableTypography
				primary={
					<Typography>
						<Typography component='span'>{company || name}</Typography>
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
		</ListItem>
	)
}