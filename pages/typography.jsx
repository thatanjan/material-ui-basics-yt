import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Text = () => {
	return (
		<div>
			<Typography>This is a Typography component.</Typography>

			<Typography variant='h1'>This a H1 text</Typography>

			<Typography variant='body2'>This a body2 text</Typography>

			<Typography component='h1' variant='h5'>
				This a h5 text
			</Typography>

			<Typography component={Button}>This a h5 text</Typography>

			<Typography color='primary' variant='h1'>
				This a Primary text
			</Typography>
			<Typography color='secondary' variant='h1' align='center'>
				This a Centered aligned Secondary text
			</Typography>
			<Typography color='error' variant='h1' align='right'>
				This a Error text
			</Typography>
		</div>
	)
}

export default Text
