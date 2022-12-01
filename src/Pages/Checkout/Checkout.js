import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/Checkout.css";
import { CartProduct1, Diamond, GiftCard, VisaCard } from "../../constant";

const Checkout = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* <!-- Checkout Start Here --> */}
			<section className="checkout">
				<div className="container">
					<form action="/thank-you">
						<div className="row">
							<div className="col-lg-6">
								<div className="first-top-bar">
									<h3>Shipment Details</h3>
								</div>
								<div className="saved-address">
									<div className="title">
										<h5>Use Saved Addresses</h5>
									</div>
									{/* <!-- Saved Address --> */}
									<label className="container">
										<input type="radio" defaultChecked name="radio" />
										<span className="checkmark">
											<div className="select-address">
												<div className="selection">
													<i className="fa fa-check" aria-hidden="true"></i>
												</div>
												<div className="radio-btn">
													<span></span>
												</div>
												<div className="address-detail">
													<div className="top">
														<h5>
															<span className="property">Country:</span>
															<span className="value">United States</span>
														</h5>
														<h5>
															<span className="property pl-4">State:</span>
															<span className="value">Texas</span>
														</h5>
													</div>
													<h5>
														<span className="property">Address:</span>
														<span className="value">
															10515 Fox Ave Fairdale, Kentucky(KY), 40118
														</span>
													</h5>
													<h5 className="last">
														<span className="property">Phone:</span>
														<span className="value">+44-123-456-789</span>
													</h5>
													<div className="button-group">
														<button className="btn default disabled">
															Default
														</button>
													</div>
												</div>
											</div>
										</span>
									</label>
									{/* <!-- Saved Address --> */}
								</div>
								<div className="add-new-address">
									<label className="container">
										{" "}
										Add New Address
										<input type="radio" name="radio" />
										<span className="checkmark"></span>
									</label>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<label for="method">Select a Region</label>
												<select id="method" className="form-control">
													<option selected>Select</option>
													<option>Select1</option>
													<option>Select2</option>
													<option>Select3</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="FullName">Full name</label>
												<input
													type="text"
													id="FullName"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="Phone">Phone</label>
												<input type="tel" id="Phone" className="form-control" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="Postal">Postal code</label>
												<input
													type="text"
													id="Postal"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="Town">Town City</label>
												<input type="text" id="Town" className="form-control" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label for="Address">Address</label>
												<input
													type="text"
													id="Address"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="checkbox">
												<input
													type="checkbox"
													className="form-check-input"
													id="check"
												/>
												<label for="check">Save Shipping Details</label>
											</div>
										</div>
									</div>
								</div>
								<div className="payment-details">
									<div className="heading">
										<h3>Payment Details</h3>
									</div>
									<div className="saved-payment-method">
										<h5>Use Saved Payments</h5>
										{/* <!-- Saved payments Method --> */}
										<label className="container">
											<input type="radio" name="payment-radio" />
											<span className="checkmark">
												<div className="card-details">
													<div className="radio-btn">
														<span></span>
													</div>
													<div className="visa-card">
														<div className="img-box">
															<figure>
																<img src={VisaCard} alt="No Image Found" />
															</figure>
														</div>
														<div className="input-box">
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly
															/>
														</div>
													</div>
													<div className="extra-btn">
														<button className="btn default disabled">
															Default
														</button>
														<div className="selection">
															<i className="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<label className="container second-card">
											<input type="radio" name="payment-radio" />
											<span className="checkmark">
												<div className="card-details">
													<div className="radio-btn">
														<span></span>
													</div>
													<div className="visa-card">
														<div className="img-box">
															<figure>
																<img src={VisaCard} alt="No Image Found" />
															</figure>
														</div>
														<div className="input-box">
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly
															/>
														</div>
													</div>
													<div className="extra-btn">
														<button className="btn default disabled">
															Default
														</button>
														<div className="selection">
															<i className="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<div className="add-new-method">
											<label className="container">
												{" "}
												Add New Payment
												<input type="radio" name="payment-radio" />
												<span className="checkmark"></span>
											</label>
											<div className="form-group">
												<input
													type="text"
													placeholder="Write Your Card Number"
													className="form-control"
												/>
											</div>
											<div className="button-group">
												<button className="btn">Add Card</button>
											</div>
										</div>
										{/* <div className="card-type">
											<label className="container">
												<input type="radio" checked="checked" name="radio" />
												<span className="checkmark">
													<figure>
														<img src="img/pymnt1.png" className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src="img/pymnt2.png" className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src="img/pymnt3.png" className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src="img/pymnt4.png" className="img-fluid" />
													</figure>
												</span>
											</label>
											<label className="container">
												<input type="radio" name="radio" />
												<span className="checkmark">
													<figure>
														<img src="img/pymnt5.png" className="img-fluid" />
													</figure>
												</span>
											</label>
										</div> */}
										{/* <!-- Saved payments Method --> */}
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="second-top-bar">
									<div className="title pb-4">
										<h3>Shipment Details</h3>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Enter Promo Code"
										/>
										<button type="button">APPLY</button>
									</div>
								</div>
								<div className="cart-product-detail">
									<div className="title">
										<h3>Products Details</h3>
									</div>
									<div className="checkout-products">
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
										<div className="products">
											<div className="abt-product">
												<div className="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div className="pro-dtl">
													<h5 className="name">Whisper Coneflower</h5>
													<ul className="variations">
														<li>
															<span className="size">X3</span>
															<span className="size">2XL</span>
															<span className="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-price">
												<h4 className="price">$158.07 </h4>
											</div>
										</div>
									</div>
									<div className="pricing-details">
										<div className="item-total">
											<h4 className="property">Item Total :</h4>
											<h4 className="value">$50</h4>
										</div>
										<div className="item-total">
											<h4 className="property">Shipment & Delivery</h4>
											<h4 className="value">$0</h4>
										</div>
										<div className="item-total">
											<h4 className="property">Promo Applied :</h4>
											<h4 className="value">-$0</h4>
										</div>
									</div>

									<div className="order-total">
										<h3 className="property">Order Total</h3>
										<h3 className="value">$45</h3>
									</div>
								</div>
								<div className="button-group">
									<button className="buy buy-with-gift">Pay with Gift card <img src={GiftCard} alt="" /></button>
									<span className="seprator"></span>
									<button className="buy buy-with-diamond">Pay with Diamonds <span className="count">04</span> <img src={Diamond} alt="" /></button>
								</div>
							</div>
						</div>
						<div className="border-last"></div>
						<div className="confirm-orderDv">
							<div className="checkbox">
								<input
									type="checkbox"
									className="form-check-input"
									id="for-checkbox"
								/>
								<label for="for-checkbox">
									Proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</label>
							</div>
							<div className="button-group">
								<button type="submit">Confirm Order</button>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* <!-- Checkout End Here --> */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Checkout;
