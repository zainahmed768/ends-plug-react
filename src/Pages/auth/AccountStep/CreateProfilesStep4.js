import React from "react";

const CreateProfilesStep4 = (props) => {
	const { NextStep } = props;
	const stopsubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<>
				<div className="login-card-wrapper Create-Your-Profile ">
					<div className="login-heading-wrapper">
						<h3>Create Your Profile</h3>
					</div>
					<div className="login-form-wrapper mt-5">
						<form action="" onSubmit={stopsubmit}>
							<div className="form-group ">
								<input
									type="text"
									placeholder="Favorite Strain*"
									className="form-control"
								/>
							</div>
							<div className="form-group ">
								<select name="" className="form-control" id="">
									<option value="Cannabis Interests" selected>
										Cannabis Interests
									</option>
									<option value="Cannabis Interests">Cannabis Interests</option>
								</select>
								<p>Select cannabis interests</p>
							</div>
							<div className="form-group text-center">
								<button onClick={NextStep} className="btn">
									Finish
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		</>
	);
};

export default CreateProfilesStep4;
