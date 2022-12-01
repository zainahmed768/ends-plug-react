import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/contact-us.css";

const ContactUs = () => {
	return (
		<>
			<Header />
			{/* contact us banner starts here */}
			<section className="contact-us-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header-content-wrapper">
								<h1>
									Contact <br /> Ents-Plug
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* contact us banner ends here */}
			{/* contact form starts here */}
			<section className="contact-form">
				<div className="container">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="contact-form-wrapper">
								<div className="contact-form-heading-wrapper">
									<h3>Get in Touch </h3>
								</div>
								<form action="">
									<div className="form-group row">
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="First Name*"
												className="form-control"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Last Name*"
												className="form-control"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Email*"
												className="form-control"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Phone number"
												className="form-control"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-lg-6">
											<input
												type="text"
												placeholder="Company Field"
												className="form-control"
											/>
										</div>
									</div>
									<div className="form-group">
										<textarea
											name=""
											className="form-control"
											id=""
											cols="30"
											rows="5"
											placeholder="Enter your message here*"
										></textarea>
									</div>
									<div className="form-group">
										<button className="btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="info-wrapper">
								<h4>General Questions, Requests, and Concerns:</h4>
								<a href="mailto:info@ents-plug.com">
									Email Us: info@ents-plug.com
								</a>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="info-wrapper">
								<h4>Become A Brand Ambassador or Merchandise Affiliate</h4>
								<a href="mailto:brandrep.ents-plug @gmail.com">
									Email Us: brandrep.ents-plug @gmail.com
								</a>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="info-wrapper">
								<h4>Business Inquiries:</h4>
								<a href="mailto:business@ents-plug.com">
									Email Us: business@ents-plug.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* contact form ends here */}
			<Footer />
		</>
	);
};

export default ContactUs;
