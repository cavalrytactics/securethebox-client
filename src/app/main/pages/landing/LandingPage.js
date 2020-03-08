import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Particles from 'react-particles-js';
import Grid from '@material-ui/core/Grid';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Business, EmojiEvents, CloudDone, School } from '@material-ui/icons';


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
		backgroundColor: "transparent"
	},
	about: {
		height: "50vh",
		padding: theme.spacing(0),
		textAlign: 'left',
		color: "white",
		backgroundColor: "#272822"
	},
	features: {
		height: "60vh",
		padding: theme.spacing(0),
		textAlign: 'center',
		color: "white",
		backgroundColor: "#333333"
	},
	join: {
		height: "50vh",
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
			<boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
			<meshStandardMaterial attach="material" color={hovered ? '#F92672' : '#A6E22E'} />
		</mesh>
	)
}


function InviteButton() {
	let history = useHistory();

	function handleClick() {
		history.push("/invite");
	}

	return (
		<Button onClick={handleClick} variant="outlined" size="large" style={{ borderColor: "#A6E22E", color: "#A6E22E", textTransform: "none", fontSize: '30px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }} >Join</Button>
	);
}

function LandingPage() {
	const classes = useStyles();

	return (
		<div>
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
			<div className={classes.root}>
				<Canvas style={{ position: "absolute" }}>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Box position={[0, 2, 0]} />
				</Canvas>

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
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '50px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Secure The Box
								</div>
								<br />
								{/* "Menlo, Monaco, \"Courier New\", monospace" */}
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									<Typist>
										<span style={{ color: "#66D9EF" }}>Interviews</span> that are
										<span role="img" aria-label="fun" style={{ color: "#F92672" }}> fun 🎉</span>
										<Typist.Backspace count={6} delay={1500} />
										<span role="img" aria-label="challenging" style={{ color: "#A6E22E" }}> challenging 🤔</span>
										<Typist.Backspace count={14} delay={1500} hideWhenDone={true} blink={true} />
										<span role="img" aria-label="real" style={{ color: "#FD971F" }}> real 🌎</span>
										<Typist.Backspace count={30} delay={1500} hideWhenDone={true} blink={true} />
										<span style={{ color: "#66D9EF" }}>Competitions</span> that are
										<span role="img" aria-label="fun" style={{ color: "#F92672" }}> scalable 🗺️</span>
										<Typist.Backspace count={12} delay={1500} hideWhenDone={true} blink={true} />
										<span role="img" aria-label="fun" style={{ color: "#A6E22E" }}> analyzed 🔍</span>
										<Typist.Backspace count={12} delay={1500} hideWhenDone={true} blink={true} />
										<span role="img" aria-label="fun" style={{ color: "#F92672" }}> memorable 😎</span>
									</Typist>
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container
							spacing={0}
							direction="row"
							justify="center"
							alignItems="center"
							className={classes.about}
						>
							<Grid item xs>{}</Grid>
							<Grid item xs={10} >
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '20px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									About <span style={{ color: "#A6E22E" }}>Secure The Box</span>
								</div>
								<br />
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									<ul>
										<li>
											<span style={{ color: "#66D9EF" }}>Secure The Box</span> is an online platform allowing an individual or team to access a <span style={{ color: "#66D9EF" }}>simulated business environment</span> consisting of several real-world services.
										</li>
										<li style={{ paddingTop: 10 }}>
											The objective is to secure the environment and solve problems while being attacked by industry professional Penetration Testers and scripted Bots.
										</li>
									</ul>
								</div>
							</Grid>
							<Grid item xs>{}</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} >
						<Grid container
							spacing={0}
							direction="row"
							justify="center"
							alignItems="center"
							className={classes.features}
						>
							<Grid item xs={6} sm={3}>
								<Business style={{ fontSize: 40, color: "#FD971F" }} />
								<div style={{ letterSpacing: '-0.5px', fontSize: '20px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Real World
								</div>
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									These environments simulate real company environments at a small scale to give you real world attack scenarios.
								</div>
							</Grid>
							<Grid item xs={6} sm={3}>
								<EmojiEvents style={{ fontSize: 40, color: "#A6E22E" }} />
								<div style={{ letterSpacing: '-0.5px', fontSize: '20px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Rankings
								</div>
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Compete with other users to reach the top of the Hall of Fame and show off your progress with many different ranks.
								</div>
							</Grid>
							<Grid item xs={12}>{}</Grid>
							<Grid item xs={6} sm={3}>
								<School style={{ fontSize: 40, color: "#F92672" }} />
								<div style={{ letterSpacing: '-0.5px', fontSize: '20px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Careers
								</div>
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Apply for security-related job openings or use Secure The Box as a platform to find talent for your own company.
								</div>
							</Grid>
							<Grid item xs={6} sm={3}>
								<CloudDone style={{ fontSize: 40, color: "#66D9EF" }} />
								<div style={{ letterSpacing: '-0.5px', fontSize: '20px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Dedicated Labs
								</div>
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Rent a private lab for your company or university, fully managed and tailored to your requirements.
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container
							spacing={0}
							direction="row"
							justify="center"
							alignItems="center"
							className={classes.join}
						>

							<Grid item xs>{}</Grid>
							<Grid item xs={6} >
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Join Now
							</div>
								<br />
								<div variant="h4" style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									<ul>
										<li>
											Join Secure The Box with an Invite Code
										</li>
										<li style={{ paddingTop: 20 }}>
											<InviteButton />
										</li>
									</ul>
								</div>
							</Grid>
							<Grid item xs>{}</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container
							spacing={0}
							direction="row"
							justify="center"
							alignItems="center"
							className={classes.contact}
						>
							<Grid item xs>{}</Grid>
							<Grid item xs={6} >
								<div style={{ letterSpacing: '-0.5px', fontSize: '25px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									Contact
								</div>
								<br />
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									<span style={{ color: "#66D9EF" }}>support@securethebox.us</span>
								</div>
								<br />
								<div style={{ letterSpacing: '-0.5px', fontSize: '14px', fontWeight: 350, fontFamily: "Menlo,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"" }}>
									<span>Copyright © <br /><span style={{ color: "#A6E22E" }}>Secure The Box</span> {new Date().getFullYear()}</span>
								</div>
							</Grid>
							<Grid item xs>{}</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default LandingPage;
