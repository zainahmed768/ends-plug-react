import React from "react";
import "../../assets/css/login.css";
import { login_header_logo, logo, password_eye } from "../../constant";

const CreateUserName = () => {
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
									<h3>Create New Username</h3>
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
											/>
										</div>
										<div className="form-group">
											<button className="btn">Submit</button>
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

export default CreateUserName;