import React from "react";

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="footer-widget-wrapper">
								<div className="footer-heading-wrapper">
									<h5>Contact Us</h5>
									<p></p>
									<ul>
										<li>
											London Oxford Street, 012 United <br /> Kingdom.
										</li>
										<li>
											Business@userthemes.net <br /> +032 3456 7890
										</li>
									</ul>
								</div>
								<div className="social-icon-wrapper">
									<ul>
										<li>
											<a href="#">
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-google-plus"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-widget-wrapper">
								<div className="footer-heading-wrapper">
									<h5>About Us</h5>
									<p></p>
									<ul className="about-list">
										<li>
											About History Ents-plug <br /> Work With Us
										</li>
										<li>Contact us on Map</li>
										{/* <li>
											<a href="#">Learn more</a>
										</li>
										<li>
											<button
												type="button"
												data-bs-toggle="modal"
												data-bs-target="#TierModal"
											>
												Tier
											</button>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-widget-wrapper lst-footer">
								<div className="footer-heading-wrapper">
									<h5>Recent Posts</h5>
									<p></p>
									<ul>
										<li className="admin">20BY ADMIN | may 6, 2022 </li>
										<li>
											Nam ac elit a ante commodo tristique. <br /> Condimentum a
											vehicula <br /> hendrerit ac nisi Lorem
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div id="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<p>COPYRIGHT © 2022 - ALL RIGHTS RESERVED.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
