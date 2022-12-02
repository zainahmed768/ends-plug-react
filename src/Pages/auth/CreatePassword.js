import React, { useState } from "react";
import "../../assets/css/login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { forgotPassword } from "../../redux/actions/AuthActions";
import { login_header_logo, logo, password_eye } from "../../constant";

const CreatePassword = () => {
	const Navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState("");
	const [checked, setChecked] = useState("");
	const ForgetPasswordHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!email) {
			toast.error("please enter Your email");
			setLoading(false);
		}
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email,
			)
		) {
			toast.error("please enter correct email");
			setLoading(false);
			return;
		} else {
			let data = { email: email };
			setTimeout(async () => {
				setLoading(false);
				let send = await dispatch(forgotPassword(data));
				// Navigate("/forgot-password-Otp", { state: email });
				// Navigate("/newpassword");
				// window.location.href = "/newpassword";
			}, 600);
		}
	};
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
			<section className="login-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="login-card-wrapper">
								<div className="login-heading-wrapper">
									<h3>Create New Password</h3>
									<p className="text-center">
										You will receive a 4 digit authentication code on your Email
										Thomas*****@gmail.com
									</p>
								</div>
								<div className="login-form-wrapper">
									<form action="/DigitCode">
										<div className="form-group">
											<input
												type="text"
												placeholder="Username"
												className="form-control"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<button
												className="btn"
												disabled={loading}
												onClick={(e) => ForgetPasswordHandler(e)}
											>
												{" "}
												{loading ? "Loading.." : "Submit"}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* login ends here */}
		</>
	);
};

export default CreatePassword;
