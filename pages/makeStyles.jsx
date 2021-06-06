import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.primary.main,
		padding: '1rem',
		paddingTop: '3rem',

		'& h1': {
			color: 'white',
		},
	},
}))

const MakeStyles = () => {
	const { container } = useStyles()

	return (
		<Box className={container}>
			<Typography variant='h1' align='center'>
				{' '}
				This is CSS in JS{' '}
			</Typography>
		</Box>
	)
}

export default MakeStyles
