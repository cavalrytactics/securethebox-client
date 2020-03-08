import FuseAnimate from '@fuse/core/FuseAnimate';
// import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Checkbox from '@material-ui/core/Checkbox';
// import Divider from '@material-ui/core/Divider';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Particles from 'react-particles-js';
// import { Link } from 'react-router-dom';
import * as authActions from 'app/auth/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken("#1e1f1c", 0.5)} 0%, #1e1f1c 80%)`,
		color: theme.palette.secondary.contrastText,
		'& .MuiInputBase-input': {
			color: 'white',
		},
	},
	label: {
		color: "white", letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
	}
}));

function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef()

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onPointerOver={e => setHover(false)}
			onPointerOut={e => setHover(false)}>
			<boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
			<meshStandardMaterial attach="material" color={hovered ? '#F92672' : '#A6E22E'} />
		</mesh>
	)
}


function LoginPage() {
	const classes = useStyles();
	const dispatch = useDispatch()
	const login = useSelector(({ auth }) => auth.login);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	// const { form, handleChange, resetForm } = useForm({
	// 	email: '',
	// 	password: '',
	// 	remember: true
	// });

	useEffect(() => {
		if (login.error && (login.error.username || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error
			});
			disableButton();
		}
	}, [login.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(authActions.submitLoginWithFireBase(model));

	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<Particles
				style={{
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					position: "absolute",
				}}
				params={{
					"particles": {
						"number": {
							"value": 60
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
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384" style={{ backgroundColor: "#333333" }}>
						<CardContent className="flex flex-col items-center justify-center p-32" style={{ backgroundColor: "#333333" }}>
							{/* <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" /> */}
							<Canvas className="w-128 m-32">
								<ambientLight />
								<pointLight position={[10, 10, 10]} />
								<Box position={[0, 0, 0]} />
							</Canvas>
							<Typography variant="h6" className="mt-16 mb-32" style={{ color: "#A6E22E", letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
								Login to your account
							</Typography>

							<Formsy
								onValidSubmit={handleSubmit}
								onValid={enableButton}
								onInvalid={disableButton}
								ref={formRef}
								className="flex flex-col justify-center w-full"
							>
								<TextFieldFormsy
									className="mb-16"
									type="text"
									name="username"
									label="Email"
									validations={{
										minLength: 4
									}}
									validationErrors={{
										minLength: 'Min character length is 4'
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Icon className="text-20" color="action">
													email
												</Icon>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
								/>

								<TextFieldFormsy
									className="mb-16"
									type="password"
									name="password"
									label="Password"
									validations={{
										minLength: 4
									}}
									validationErrors={{
										minLength: 'Min character length is 4'
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Icon className="text-20" color="action">
													vpn_key
												</Icon>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
								/>

								<Button
									type="submit"
									variant="contained"
									color="secondary"
									className="w-full mx-auto normal-case mt-16"
									aria-label="LOG IN"
									disabled={!isFormValid}
									value="firebase"
								>
									Log in
								</Button>
							</Formsy>

						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default LoginPage;
