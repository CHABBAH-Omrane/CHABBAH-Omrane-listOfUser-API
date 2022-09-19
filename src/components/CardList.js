import * as React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
} from '@mui/material';

const CardList = ({ listOfUSer }) => {
	return (
		<Card
			sx={{
				minWidth: 350,
				display: 'inline-block',
				mx: '5px',
				transform: 'scale(0.8)',
			}}
		>
			<CardContent>
				<Typography variant="h5" component="div">
					{listOfUSer.name}
				</Typography>

				<Typography variant="body2">{listOfUSer.email}</Typography>
			</CardContent>
			<CardActions>
				<Button
					href={`https://www.google.com/maps/@${listOfUSer.address.geo.lat},${listOfUSer.address.geo.lng},1z`}
					target="#"
					size="small"
				>
					See on maps
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardList;

{
	/* <div>
	<h1></h1>
	<a
		href={`https://www.google.com/maps/@${listOfUSer.address.geo.lat},${listOfUSer.address.geo.lng},1z`}
		target="#"
	>
		See on maps
	</a>
	<iframe
		name="NOM DE LA FRAME"
		src={`https://www.google.com/maps/@${listOfUSer.address.geo.lat},${listOfUSer.address.geo.lng},1z`}
		height="50%"
		width="50%"
	>
		{' '}
	</iframe>
</div>; */
}
