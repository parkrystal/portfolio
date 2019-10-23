import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
		},
		input: {
			display: 'none',
		},
	});

interface Props {
	classes: {
		button: string,
		input: string
	};
}
function PfList(props: Props) {

	const { classes } = props;

	return(
		<>
			<Button variant="contained" className={classes.button}>
				Default
			</Button>
			<Button variant="contained" color="primary" className={classes.button}>
				Primary
			</Button>
			<Button variant="contained" color="secondary" className={classes.button}>
				Secondary
			</Button>
			<Button variant="contained" color="secondary" disabled className={classes.button}>
				Disabled
			</Button>
			<Button variant="contained" href="#contained-buttons" className={classes.button}>
				Link
			</Button>
			<input
				accept="image/*"
				className={classes.input}
				id="contained-button-file"
				multiple
				type="file"
			/>
			<label htmlFor="contained-button-file">
				<Button variant="contained" component="span" className={classes.button}>
				Upload
				</Button>
			</label>
		</>
	);
};

export default withStyles(styles)(PfList);