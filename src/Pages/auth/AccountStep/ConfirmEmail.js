import React from "react";

const ConfirmEmail = (props) => {
	const { NextStep } = props;
	const stopsubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<div className="login-card-wrapper Create-Email-Address">
				<div className="login-heading-wrapper">
					<h3>Confirm Email Address</h3>
					<p className="text-center">
						Tap the "Confirm" button in the email we sent to <br /> your email
						so we can complete your account creation.
					</p>
				</div>
				<div className="login-form-wrapper mt-5">
					<form onSubmit={stopsubmit} action="">
						<div className="form-group row">
							<div className="col-lg-12 text-center">
								<button onClick={NextStep} className="btn">
									Submit
								</button>
							</div>
						</div>
						<div className="form-group"></div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ConfirmEmail;
