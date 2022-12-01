import React from "react";
import { login_header_logo, logo, password_eye } from "../../constant";
const DigitCode = () => {
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
										Enter 4 digit authentication code here
									</p>
								</div>
								<div className="login-form-wrapper">
									<form action="/NewPassword">
										<div className="form-group DigitCode">
											<input type="number" className="form-control" />
											<input type="number" className="form-control" />
											<input type="number" className="form-control" />
											<input type="number" className="form-control" />
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

export default DigitCode;
