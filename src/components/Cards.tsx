import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
	card: {
		maxWidth: 345,
	},
	root: {
		flexGrow: 1,
		padding: 20,
	},
};

interface Props {
	classes: {
		card: string,
		root: string
	};
}
function Cards(props: Props) {

	const { classes } = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (

		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								// image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								image="images/thumb/donghae1.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								// image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								image="images/thumb/donghae1.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								// image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								image="images/thumb/donghae1.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								// image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								image="images/thumb/donghae1.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(Cards);