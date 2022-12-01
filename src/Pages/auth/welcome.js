import React from "react";
import "../../assets/css/welcome.css";
import { auth_logo, google } from "../../constant";

const Welcome = () => {
	return (
		<>
			{/* welcome sec starts here */}
			<section className="welcome-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="welcome-content-wrapper">
								<div className="auth-logo-wrapper">
									<figure>
										<img src={auth_logo} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="welcome-heading-wrapper">
									<h2>Welcome to Ents-Plug</h2>
								</div>
								<div className="social-btn-wrapper">
									<a href="#" className="btn apple">
										<i className="fa fa-apple"></i>{" "}
										<span>Welcome to Ents-Plug</span>
									</a>
									<a href="#" className="btn Google">
										<img src={google} />
										<span>Connect with Google</span>
									</a>
									<a href="#" className="btn facbook">
										<i className="fa fa-facebook-official"></i>{" "}
										<span>Connect with Facebook</span>
									</a>
									<a href="#" className="btn create-account">
										<span>Create an Account</span>
									</a>
								</div>
								<div className="already-account">
									<p>
										Already have an account? <a href="#">Sign In</a>
									</p>
								</div>
								<div className="divider"></div>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* welcome sec starts here */}
		</>
	);
};

export default Welcome;
