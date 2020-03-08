import Button from '@material-ui/core/Button';
import { useForm } from '@fuse/hooks';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Particles from 'react-particles-js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'react-typist/dist/Typist.css';
// import cryptojs from 'crypto-js';

// const config = require('../../../../../secrets/key')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;





const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#272822"
		backgroundColor: "#1e1f1c",
	},
	intro: {
		height: "100vh",
		padding: theme.spacing(0),
		textAlign: 'center',
		color: "white",
		backgroundColor: "transparent",
		'& .MuiInputBase-input': {
			color: 'white',
		},
	},
	about: {
		height: "50vh",
		padding: theme.spacing(0),
		textAlign: 'left',
		color: "white",
		backgroundColor: "#272822"
	},
	features: {
		height: "50vh",
		padding: theme.spacing(0),
		textAlign: 'center',
		color: "white",
		backgroundColor: "#333333"
	},
	join: {
		height: "30vh",
		padding: theme.spacing(0),
		textAlign: 'center',
		color: "white",
		backgroundColor: "#272822"
	},
	contact: {
		height: "30vh",
		padding: theme.spacing(0),
		textAlign: 'center',
		color: "white",
		backgroundColor: "transparent"
	},
}));

function LandingPage() {
	const classes = useStyles();

	const { form, handleChange, resetForm } = useForm({
		code: ''
	});

	function isFormValid() {
		return form.code.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		// secretCreds = config.invitePassword+"-"+today
		// var ciphertext = cryptojs.AES.encrypt(secretCreds, config.inviteSecret).toString();

		// var bytes = cryptojs.AES.decrypt(ciphertext, config.inviteSecret);
		// console.log(form.code, ciphertext)

		// if (bytes.toString(cryptojs.enc.Utf8) === config.invitePassword+"-"+today){
		// 	console.log("True", cryptojs.enc.Utf8, config.invitePassword+"-"+today)
		// }else{
		// 	console.log("False")
		// }
		resetForm();
	}

	return (
		<div>
			<Particles
				style={{
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					position: "fixed",
				}}
				params={{
					"particles": {
						"number": {
							"value": 120
						},
						"size": {
							"value": 1
						},
						"move": {
							"direction": "right",
							"out_mode": "out",
							"speed": 1
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": false,
							}
						}
					},
				}}
			/>
			<div className={classes.root}>
				<Grid container spacing={0}>
					<Grid item xs={12} >
						<Grid container
							spacing={0}
							direction="row"
							justify="center"
							alignItems="center"
							className={classes.intro}
						>
							<Grid item xs={6}>
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '30px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Invite Code
							</div>
								<br />
								{/* "Menlo, Monaco, \"Courier New\", monospace" */}
								<div >
									<form
										name="subscribeForm"
										noValidate
										className="flex flex-col justify-center w-full"
										onSubmit={handleSubmit}
									>
										<TextField
											style={{ backgroundColor: "#272822", borderColor: "blue", color: "white", letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}
											label="Code"
											autoFocus
											name="code"
											color="secondary"
											value={form.code}
											onChange={handleChange}
											variant="outlined"
											required
										/>
										<Button
											variant="outlined" 
											className="w-224 mx-auto my-16"
											aria-label="Submit"
											disabled={!isFormValid()}
											type="submit"
											style={{borderColor: "#A6E22E", color: "#A6E22E", textTransform: "none", fontSize: '18px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""}}
										>
											Submit
										</Button>
									</form>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default LandingPage;
