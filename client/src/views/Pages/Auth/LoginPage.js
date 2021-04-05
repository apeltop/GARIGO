import React from 'react';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';

import styles from 'assets/jss/material-dashboard-pro-react/views/loginPageStyle.js';
import {inject, observer} from 'mobx-react';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles(styles);

let LoginPage = inject('store')(observer((props) => {
		const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
		React.useEffect(() => {
			let id = setTimeout(function() {
				setCardAnimation('');
			}, 700);
			// Specify how to clean up after this effect:
			return function cleanup() {
				window.clearTimeout(id);
			};
		});

		const {store} = props;

		const classes = useStyles();
		return (
			<div className={classes.container}>
				<p>{store.jwtToken}</p>
				<GridContainer justify="center">
					<GridItem xs={12} sm={6} md={4}>
						<form>
							<Card login className={classes[cardAnimaton]}>
								<CardHeader
									className={`${classes.cardHeader} ${classes.textCenter}`}
									color="rose"
								>
									<h4 className={classes.cardTitle}>Log in</h4>
									<div className={classes.socialLine}>
										{[
											'fab fa-facebook-square',
											'fab fa-twitter',
											'fab fa-google-plus',
										].map((prop, key) => {
											return (
												<Button
													color="transparent"
													justIcon
													key={key}
													className={classes.customButtonClass}
												>
													<i className={prop} />
												</Button>
											);
										})}
									</div>
								</CardHeader>
								<CardBody>
									<CustomInput
										labelText="Email..."
										id="email"
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<Email className={classes.inputAdornmentIcon} />
												</InputAdornment>
											),
										}}
									/>
									<CustomInput
										labelText="Password"
										id="password"
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<Lock className={classes.inputAdornmentIcon} />
												</InputAdornment>
											),
											type: 'password',
											autoComplete: 'off',
										}}
									/>
								</CardBody>
								<CardFooter className={classes.justifyContentCenter}>
									<Button color="rose" simple size="lg" block onClick={() => store.signIn('123', 'pw')}>
										Let{'\''}s Go
									</Button>
								</CardFooter>
							</Card>
						</form>
					</GridItem>
				</GridContainer>
			</div>
		);
	},
));

export default LoginPage;
