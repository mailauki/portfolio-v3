import { Avatar, IconButton, Link, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import type { Experience } from '../types/experience';

export default function Item({ exp }: { exp: Experience }) {
	const { company, avatar, jobTitle, dates, description, name, location } = exp;

	return (
		<ListItem alignItems='flex-start' key={company}>
				{avatar && (
					<ListItemAvatar>
						<IconButton
							component={Link}
							href={exp.source}
							sx={{ p: 0.5, m: 0 }}
						>
							<Avatar alt={company || name} src={avatar} />
						</IconButton>
					</ListItemAvatar>
				)}
				<ListItemText
					disableTypography
					inset={!avatar}
					primary={
						<Typography>
							<Typography
								color='text.primary'
								component={exp.source ? Link : 'span'}
								href={exp.source}
								underline='hover'
							>
								{company || name}
							</Typography>
							{(jobTitle || location) && (
								<>
									{' — '}
									<Typography color='text.secondary' component='span' fontStyle='italic'>{jobTitle || location}</Typography>
								</>
							)}
						</Typography>
					}
					secondary={
						<>
							<Typography color='text.secondary' variant='body2'>
								{dates}
							</Typography>
							{description && description[0] && (
								<Typography
									sx={{
										'&:before': {
											content: '"•"',
											mr: 1,
										},
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
											mr: 1,
										},
									}}
								>
									{description[1]}
								</Typography>
							)}
						</>
					}
				/>
		</ListItem>
	);
}
