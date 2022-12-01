import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/Problem.css";

const Support = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Problem Form Start Here */}
			<section className="problem">
				<div className="container">
					<div className="heading">
						<h2>Customer Support</h2>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<form action="">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label>Username</label>
											<input type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Email</label>
											<input type="email" className="form-control" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label>Subject</label>
											<input type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label>Your message </label>
											<textarea className="form-control"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="button-group">
											<button className="btn">Submit</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</section>
			{/* Problem Form Start Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Support;
