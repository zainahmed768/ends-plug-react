import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { login_header_logo } from "../../constant";
import ConfirmEmail from "./AccountStep/ConfirmEmail";
import CreateProfile from "./AccountStep/CreateProfile";
import CreateProfilesStep4 from "./AccountStep/CreateProfilesStep4";
import BecomeMember from "./AccountStep/BecomeMember";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../../redux/actions/AuthActions";
import axios from "axios";
import { ApiUrl } from "../../network/ApiUrl";
import { doPost } from "../../network/Config";

const steps = [
	"Select campaign settings",
	"Create an ad group",
	"Create an ad",
	"Create an addg",
];

const CreateAccount = () => {
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("");
	const [btnLoading, setBtnLoading] = useState(false);
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};
	// const stopsubmit = (event) => {
	// 	event.preventDefault();
	// };

	const SignUpHandler = async (e) => {
		e.preventDefault();
		setBtnLoading(true);
		if (
			!first_name ||
			!last_name ||
			!dob ||
			!gender ||
			!email
			// !confirmPassword ||
		) {
			toast.error("Please Enter All Fields");
			setBtnLoading(false);
			return;
		}
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email,
			)
		) {
			toast.error("Invalid Email");
			setBtnLoading(false);
			return;
		}
		// if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
		// 	toast.error("Invalid date of birth");
		// 	setBtnLoading(false);
		// 	console.log(dob);
		// 	return;
		// }
		else {
			var data = new FormData();
			data.append("first_name", first_name);
			data.append("last_name", last_name);
			data.append("dob", dob);
			data.append("email", email);
			data.append("gender", gender);
			console.log("complete Data", data);
			let send = await dispatch(signUp(data, Navigate, setBtnLoading));
		}
		// let newSkipped = skipped;
		// if (isStepSkipped(activeStep)) {
		// 	newSkipped = new Set(newSkipped.values());
		// 	newSkipped.delete(activeStep);
		// }

		// setActiveStep((prevActiveStep) => prevActiveStep + 1);
		// setSkipped(newSkipped);
	};
	console.log(first_name, last_name, dob, gender, email);
	return (
		<>
			{/* header logo starts here */}
			<header className="login-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-logo-wrapper">
								<figure>
									<img src={login_header_logo} alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* header logo ends here */}
			{/* login starts here */}
			<section className="login-sec Create-account">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							{/* <div className="login-card-wrapper">
								<div className="login-heading-wrapper">
									<h3>Create Your Account</h3>
								</div>
								<div className="login-form-wrapper mt-5">
									<form action="">
										<div className="form-group row">
											<div className="col-lg-6">
												<input
													type="text"
													className="form-control"
													placeholder="First name"
												/>
											</div>
											<div className="col-lg-6">
												<input
													type="text"
													className="form-control"
													placeholder="Last name"
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-lg-6">
												<input
													type="text"
													className="form-control"
													placeholder="D.O.B"
												/>
											</div>
											<div className="col-lg-6">
												<select name="" className="form-control" id="">
													<option value="Gender (Optional)" selected>
														Gender (Optional)
													</option>
													<option value="Gender (Optional)">
														Gender (Optional)
													</option>
													<option value="Gender (Optional)">
														Gender (Optional)
													</option>
												</select>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-lg-6">
												<input
													type="Email"
													className="form-control"
													placeholder="D.O.B"
												/>
												<p>
													<>You will confirm this in next step</>
												</p>
											</div>
											<div className="col-lg-6">
												<button className="btn">Submit</button>
											</div>
										</div>
										<div className="form-group"></div>
									</form>
								</div>
							</div>
							<ConfirmEmail />
							<CreateProfile /> */}

							<Box sx={{ width: "100%" }}>
								<Stepper activeStep={activeStep}>
									{steps.map((label, index) => {
										const stepProps: { completed?: boolean } = {};
										const labelProps: {
											optional?: React.ReactNode,
										} = {};
										if (isStepOptional(index)) {
											labelProps.optional = (
												<Typography variant="caption">Optional</Typography>
											);
										}
										if (isStepSkipped(index)) {
											stepProps.completed = false;
										}
										return (
											<Step key={label} {...stepProps}>
												{/* <StepLabel {...labelProps}>{label}</StepLabel> */}
											</Step>
										);
									})}
								</Stepper>
								{activeStep === steps.length ? (
									<React.Fragment>
										<BecomeMember />
									</React.Fragment>
								) : (
									<React.Fragment>
										{/* <Typography sx={{ mt: 2, mb: 1 }}>
											Step {activeStep + 1}
										</Typography> */}
										{activeStep + 1 == 1 ? (
											<div className="login-card-wrapper">
												<div className="login-heading-wrapper">
													<h3>Create Your Account</h3>
												</div>
												<div className="login-form-wrapper mt-5">
													<form action="">
														<div className="form-group row">
															<div className="col-lg-6">
																<input
																	type="text"
																	className="form-control"
																	placeholder="First name"
																	value={first_name}
																	required
																	onChange={(e) => setFirstName(e.target.value)}
																/>
															</div>
															<div className="col-lg-6">
																<input
																	type="text"
																	className="form-control"
																	placeholder="Last name"
																	required
																	value={last_name}
																	onChange={(e) => setLastName(e.target.value)}
																/>
															</div>
														</div>
														<div className="form-group row">
															<div className="col-lg-6">
																<input
																	type="date"
																	className="form-control"
																	placeholder="D.O.B"
																	required
																	value={dob}
																	onChange={(e) => setDob(e.target.value)}
																/>
															</div>
															<div className="col-lg-6">
																<select
																	onChange={(e) => setGender(e.target.value)}
																	name=""
																	required
																	className="form-control"
																	id=""
																>
																	<option defaultValue="" selected>
																		Gender (Optional)
																	</option>
																	<option defaultValue="Male">Male</option>
																	<option defaultValue="Female">Female</option>
																</select>
															</div>
														</div>
														<div className="form-group row">
															<div className="col-lg-6">
																<input
																	type="Email"
																	className="form-control"
																	required
																	placeholder="Email"
																	value={email}
																	onChange={(e) => setEmail(e.target.value)}
																/>
																<p>
																	<>You will confirm this in next step</>
																</p>
															</div>
															<div className="col-lg-6">
																<button
																	onClick={(e) => SignUpHandler(e)}
																	type="submit"
																	className="btn"
																>
																	Submit
																</button>
															</div>
														</div>
														<div className="form-group"></div>
													</form>
												</div>
											</div>
										) : activeStep + 1 == 2 ? (
											<ConfirmEmail NextStep={handleNext} />
										) : activeStep + 1 == 3 ? (
											<CreateProfile NextStep={handleNext} />
										) : (
											<CreateProfilesStep4 NextStep={handleNext} />
										)}
										{/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
											<Button
												color="inherit"
												disabled={activeStep === 0}
												onClick={handleBack}
												sx={{ mr: 1 }}
											>
												Back
											</Button>

											<Box sx={{ flex: "1 1 auto" }} />
											{isStepOptional(activeStep) && (
												<>
													<Button
														color="inherit"
														onClick={handleSkip}
														sx={{ mr: 1 }}
													>
														Skip
													</Button>
												</>
											)}
											<Button onClick={handleNext}>
												{activeStep === steps.length - 1 ? "Finish" : "Next"}
											</Button>
										</Box> */}
									</React.Fragment>
								)}
							</Box>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</section>
			{/* login ends here */}
		</>
	);
};

export default CreateAccount;
