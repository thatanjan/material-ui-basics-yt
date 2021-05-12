import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const CustomTheme = () => {
	const theme = createMuiTheme({
		palette: {
			primary: {
				light: '#df6843',
				main: '#d84315',
				dark: '#972e0e',
			},
		},
		typography: {
			h1: {
				fontSize: '5rem',
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Typography color='primary'>
				This is a customized primary colored text
			</Typography>

			<Typography variant='h1'>This a customized H1 text</Typography>
		</ThemeProvider>
	)
}

export default CustomTheme
