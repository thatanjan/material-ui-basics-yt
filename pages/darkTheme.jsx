import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'

const DarkTheme = () => {
	const [dark, setDark] = useState(false)

	const theme = createMuiTheme({
		palette: {
			type: dark ? 'dark' : 'light',
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Switch checked={dark} onChange={() => setDark(!dark)} />
			<Paper>
				<Typography variant='h1'>This is a h1 text</Typography>

				<Typography variant='body2'>This is a body2 text</Typography>
			</Paper>
		</ThemeProvider>
	)
}

export default DarkTheme
