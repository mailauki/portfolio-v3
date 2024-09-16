'use client';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../_utils/context';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Fade, IconButton, Stack, Tab, Tabs, Toolbar, alpha, styled, useScrollTrigger, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SocialLinks from './social';
import type { MenuProps } from '../_utils/types/menu';

interface StyledTabProps {
  label: string;
	component: React.ElementType | React.ReactNode;
	href: string;
	value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab {...props} />
))(({ theme }) => ({
	margin: '0.5rem',
	padding: '0 1.25rem',
	border: '1px solid',
	borderColor: 'transparent',
	borderRadius: '32px',
	'&:hover': {
		backgroundColor: theme.palette.action.hover,
		border: '1px solid',
		borderColor: 'transparent',
	},
	'&.Mui-selected': {
		backgroundColor: theme.palette.action.selected,
	},
	'&.Mui-selected:hover': {
		border: '1px solid',
		borderColor: theme.palette.primary.main,
	},
}));

export default function Header({ menuOpen, handleClose }: MenuProps) {
  const { darkMode, setDarkMode } = useContext(Context);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const pathname = usePathname();
  const [tab, setTab] = useState(pathname);
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    setTab(pathname);
  }, [pathname]);

  return (
    <>
			{matches ? (
				<>
					<AppBar
						color='inherit'
						position='sticky'
						sx={{
							// bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
							bgcolor: 'transparent',
							backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
							width: 'calc(100% - 32px)',
							top: '5.5rem',
							left: '3rem',
							borderRadius: (theme) => theme.shape.borderRadius,
							overflow: 'hidden',
							m: 4,
							borderColor: 'transparent',
							transition: 'all 0.4s ease-in-out 0.25s',
						}}
						variant='outlined'
					>
						<Toolbar
							disableGutters
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Tabs
								centered
								orientation='vertical'
								sx={{
									'& .MuiTabs-indicator': {
										backgroundColor: 'transparent',
									},
								}}
								value={tab}
							>
								<StyledTab
									component={Link}
									href='/'
									label='Hello'
									value='/'
								/>
								<StyledTab
									component={Link}
									href='/about_me'
									label='About Me'
									value='/about_me'
								/>
								<StyledTab
									component={Link}
									href='/projects'
									label='Projects'
									value='/projects'
								/>
								<StyledTab
									component={Link}
									href='/experience'
									label='Experience'
									value='/experience'
								/>
							</Tabs>
						</Toolbar>
					</AppBar>

					<AppBar
						color='inherit'
						component='div'
						position='fixed'
						sx={{
							bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
							backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
							width: 'fit-content',
							height: 'fit-content',
							top: '1rem',
							right: { xs: '1rem', sm: '1.5rem' },
							borderColor: !scrollTrigger ? 'transparent' : 'default',
							transition: 'all 0.4s ease-in-out 0.25s',
						}}
						variant='outlined'
					>
							<IconButton
								disabled={prefersDarkMode}
								onClick={() => setDarkMode(!darkMode)}
							>
								{darkMode ? <ModeNightIcon/> : <LightModeIcon />}
							</IconButton>
					</AppBar>

					<Fade in={scrollTrigger}>
						<AppBar
							component='div'
							position='fixed'
							sx={{
								bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
								backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
								color: 'text.primary',
								width: 'fit-content',
								top: 'auto',
								bottom: '1rem',
								right: { xs: '1rem', sm: '1.5rem' },
								px: 1,
								py: 0.25,
								transition: 'all 0.4s ease-in-out 0.25s',
							}}
							variant='outlined'
						>
							<SocialLinks />
						</AppBar>
					</Fade>
				</>
			) : (
				<AppBar
					color='inherit'
					position='fixed'
					sx={{
						bgcolor: !scrollTrigger ? 'transparent' : alpha(theme.palette.background.default, 0.25),
						backdropFilter: !scrollTrigger ? 'blur(0)' : 'blur(10px)',
						width: 'fit-content',
						height: 'fit-content',
						top: '1rem',
						right: { xs: '1rem', sm: '1.5rem' },
						px: 1,
						py: 0.25,
						borderColor: !scrollTrigger ? 'transparent' : 'default',
						transition: 'all 0.4s ease-in-out 0.25s',
					}}
					variant='outlined'
				>
					<Stack direction='row' spacing={1}>
						<IconButton
							disabled={prefersDarkMode}
							onClick={() => setDarkMode(!darkMode)}
						>
							{darkMode ? <ModeNightIcon/> : <LightModeIcon />}
						</IconButton>
						<IconButton
							onClick={handleClose}
						>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
					</Stack>
				</AppBar>
			)}
    </>
  );
}
