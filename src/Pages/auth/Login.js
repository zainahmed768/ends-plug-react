import React, { useState } from "react";
import "../../assets/css/login.css";
import { login_header_logo, logo, password_eye } from "../../constant";

const Login = () => {
	const [show, setshow] = useState(true);
	const handleshowpassword = () => {
		setshow(false);
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
									<h3>Log in</h3>
								</div>
								<div className="login-form-wrapper">
									<form action="">
										<div className="form-group">
											<input
												type="text"
												placeholder="Email"
												className="form-control"
											/>
										</div>
										<div className="form-group">
											<input
												type={show ? "password" : "text"}
												placeholder="Password"
												className="form-control"
											/>
											<span onClick={handleshowpassword}>
												<img src={password_eye} alt="" />
											</span>
										</div>
										<div className="form-check">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck1"
											/>
											<label className="form-check-label" for="exampleCheck1">
												Remember me
											</label>
										</div>
										<div className="form-group">
											<button className="btn">Login</button>
										</div>
										<div className="forget-pass-text">
											<a href="/CreatePassword">Forgot your password?</a>
										</div>
										<div className="forget-pass-text">
											<a href="/CreateUsername">Forgot your Username?</a>
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

export default Login;
