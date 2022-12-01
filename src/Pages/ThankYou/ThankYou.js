import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/thank-you.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Thank You Sec */}
			<section className="thank-you">
				<div className="container">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="heading-wrapper">
								<h2>Thank You for Shopping!!</h2>
								<h4>Your Order is confirmed</h4>
								<h3 className="orderno">OrderNo#1084598423154</h3>
							</div>
							<div className="thank-you-box">
								<h3 className="title">Shipment Address</h3>
								<ul className="details">
									<li>
										<h4 className="property">Country:</h4>
										<span className="value">United States</span>
									</li>
									<li>
										<h4 className="property">Address:</h4>
										<span className="value">
											10515 Fox Ave Fairdale, Kentucky(KY), 40118
										</span>
									</li>
									<li>
										<h4 className="property">Phone:</h4>
										<span className="value">+44-123-456-789</span>
									</li>
									<li>
										<h4 className="property">State:</h4>
										<span className="value">Texas</span>
									</li>
								</ul>
								<h4 className="title">Payment details</h4>
								<ul className="payment-detail">
									<li>
										<h4 className="property">Item Total :</h4>
										<span className="value">$50</span>
									</li>
									<li>
										<h4 className="property">Shipment & Delivery</h4>
										<span className="value">$0</span>
									</li>
									<li>
										<h4 className="property">Promo Applied :</h4>
										<span className="value">-$5</span>
									</li>
								</ul>
								<div className="total-amount">
									<h4 className="colored">Order Total</h4>
									<h4 className="total">$45</h4>
								</div>
							</div>
							<div className="button-group">
								<Link to="/" className="btn">
									Continue Shopping
								</Link>
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
				</div>
			</section>
			{/* Thank You Sec */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default ThankYou;
