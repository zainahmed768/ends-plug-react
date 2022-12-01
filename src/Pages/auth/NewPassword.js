import React from "react";
import { login_header_logo } from "../../constant";

const NewPassword = () => {
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
								</div>
								<div className="login-form-wrapper">
									<form action="">
										<div className="form-group">
											<input
												type="text"
												placeholder="Enter new password"
												className="form-control"
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												placeholder="Confirm Password"
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

export default NewPassword;
