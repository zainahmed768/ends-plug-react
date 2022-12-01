import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CartImg1 } from "../../constant";
import "../../assets/css/cart.css";
import Newslettter from "../../components/Newslettter";

const Cart = () => {
	const [count2, setCount2] = useState(1);

	function incrementCount2() {
		count2 = count2 + 1;
		setCount2(count2);
	}
	function decrementCount2() {
		count2 = count2 - 1;
		setCount2(count2);
	}
	if (count2 === 0) {
		setCount2(1);
	}
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Cart Sec Start Here */}
			<section className="cart-sec">
				<div className="container">
					<div className="heading-wrapper">
						<h2>My Shopping Cart</h2>
					</div>
					<div className="row">
						<div className="col-lg-7">
							<div className="all-cart-data">
								<div className="cart-box">
									<div className="img-box">
										<div className="delete">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="11.96"
												height="16.214"
												viewBox="0 0 11.96 16.214"
											>
												<path
													id="delete"
													d="M11.243,3.041H.778a.647.647,0,0,1-.525-.293,1.146,1.146,0,0,1-.222-.712,1.2,1.2,0,0,1,.216-.72.636.636,0,0,1,.531-.3H4.516A1.188,1.188,0,0,1,4.732.3.638.638,0,0,1,5.264,0h1.5A.638.638,0,0,1,7.29.3a1.188,1.188,0,0,1,.216.712h3.738a.643.643,0,0,1,.525.3,1.18,1.18,0,0,1,.222.72,1.145,1.145,0,0,1-.222.712.648.648,0,0,1-.525.293Zm0,11.148a2.349,2.349,0,0,1-.438,1.433,1.283,1.283,0,0,1-1.057.594H2.273a1.285,1.285,0,0,1-1.057-.594,2.344,2.344,0,0,1-.438-1.433V4.054H11.243V14.188ZM3.768,7.094a1.167,1.167,0,0,0-.222-.712.648.648,0,0,0-.531-.3.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72.637.637,0,0,0,.525.293.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Zm2.99,0a1.167,1.167,0,0,0-.222-.712A.648.648,0,0,0,6,6.081a.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72A.637.637,0,0,0,6,14.188a.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Zm2.99,0a1.167,1.167,0,0,0-.222-.712.648.648,0,0,0-.531-.3.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72.637.637,0,0,0,.525.293.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Z"
													transform="translate(-0.031 -0.001)"
													fill="#fff"
												/>
											</svg>
										</div>
										<figure>
											<img src={CartImg1} alt="" className="img-fluid" />
										</figure>
									</div>
									<div className="details">
										<h2 className="name">Ents-Plug logo T-shirt</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud
										</p>
										<div className="bottom-bar">
											<div className="price">
												<h4>$34.50</h4>
												<strike>45.00</strike>
											</div>
											<div className="quantity">
												<button onClick={incrementCount2} className="plus">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="9.421"
														height="9.421"
														viewBox="0 0 9.421 9.421"
													>
														<path
															id="plus"
															d="M9.456,9.456v3.469a.5.5,0,0,1-.991,0V9.456H5a.5.5,0,1,1,0-.991H8.465V5a.5.5,0,1,1,.991,0V8.465h3.469a.5.5,0,0,1,0,.991Z"
															transform="translate(-4.25 -4.25)"
															fill="#2c1800"
															stroke="#2c1800"
															strokeWidth="0.5"
															fill-rule="evenodd"
														/>
													</svg>
												</button>
												<input
													type="text"
													value={count2}
													className="form-control"
												/>
												<button onClick={decrementCount2} className="minus">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="8.548"
														height="1.538"
														viewBox="0 0 8.548 1.538"
													>
														<line
															id="Line_1"
															data-name="Line 1"
															y1="0.031"
															x2="7.041"
															transform="translate(0.753 0.753)"
															fill="none"
															stroke="#000"
															strokeLinecap="round"
															strokeWidth="1.5"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="cart-box">
									<div className="img-box">
										<div className="delete">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="11.96"
												height="16.214"
												viewBox="0 0 11.96 16.214"
											>
												<path
													id="delete"
													d="M11.243,3.041H.778a.647.647,0,0,1-.525-.293,1.146,1.146,0,0,1-.222-.712,1.2,1.2,0,0,1,.216-.72.636.636,0,0,1,.531-.3H4.516A1.188,1.188,0,0,1,4.732.3.638.638,0,0,1,5.264,0h1.5A.638.638,0,0,1,7.29.3a1.188,1.188,0,0,1,.216.712h3.738a.643.643,0,0,1,.525.3,1.18,1.18,0,0,1,.222.72,1.145,1.145,0,0,1-.222.712.648.648,0,0,1-.525.293Zm0,11.148a2.349,2.349,0,0,1-.438,1.433,1.283,1.283,0,0,1-1.057.594H2.273a1.285,1.285,0,0,1-1.057-.594,2.344,2.344,0,0,1-.438-1.433V4.054H11.243V14.188ZM3.768,7.094a1.167,1.167,0,0,0-.222-.712.648.648,0,0,0-.531-.3.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72.637.637,0,0,0,.525.293.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Zm2.99,0a1.167,1.167,0,0,0-.222-.712A.648.648,0,0,0,6,6.081a.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72A.637.637,0,0,0,6,14.188a.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Zm2.99,0a1.167,1.167,0,0,0-.222-.712.648.648,0,0,0-.531-.3.633.633,0,0,0-.525.3,1.191,1.191,0,0,0-.216.712v6.081a1.18,1.18,0,0,0,.216.72.637.637,0,0,0,.525.293.652.652,0,0,0,.531-.293,1.156,1.156,0,0,0,.222-.72V7.095Z"
													transform="translate(-0.031 -0.001)"
													fill="#fff"
												/>
											</svg>
										</div>
										<figure>
											<img src={CartImg1} alt="" className="img-fluid" />
										</figure>
									</div>
									<div className="details">
										<h2 className="name">Ents-Plug logo T-shirt</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud
										</p>
										<div className="bottom-bar">
											<div className="price">
												<h4>$34.50</h4>
												<strike>45.00</strike>
											</div>
											<div className="quantity">
												<button onClick={incrementCount2} className="plus">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="9.421"
														height="9.421"
														viewBox="0 0 9.421 9.421"
													>
														<path
															id="plus"
															d="M9.456,9.456v3.469a.5.5,0,0,1-.991,0V9.456H5a.5.5,0,1,1,0-.991H8.465V5a.5.5,0,1,1,.991,0V8.465h3.469a.5.5,0,0,1,0,.991Z"
															transform="translate(-4.25 -4.25)"
															fill="#2c1800"
															stroke="#2c1800"
															strokeWidth="0.5"
															fill-rule="evenodd"
														/>
													</svg>
												</button>
												<input
													type="text"
													value={count2}
													className="form-control"
												/>
												<button onClick={decrementCount2} className="minus">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="8.548"
														height="1.538"
														viewBox="0 0 8.548 1.538"
													>
														<line
															id="Line_1"
															data-name="Line 1"
															y1="0.031"
															x2="7.041"
															transform="translate(0.753 0.753)"
															fill="none"
															stroke="#000"
															strokeLinecap="round"
															strokeWidth="1.5"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="right-side">
								<div className="apply-coupon">
									<div className="title">
										<h4>Apply Coupon Code</h4>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
									</div>
									<form action="">
										<div className="form-group">
											<input
												type="text"
												placeholder="Coupon code"
												className="form-control"
											/>
											<button className="btn">Apply</button>
										</div>
									</form>
								</div>
								<div className="total">
									<ul className="total-price">
										<li>
											<span className="property">Cart Total</span>
											<span className="value">$175.0</span>
										</li>
										<li>
											<span className="property">Shipping</span>
											<span className="value">$188.48</span>
										</li>
									</ul>
									<div className="payable">
										<h4 className="property">Total Payable</h4>
										<h4 className="value">$343.48</h4>
									</div>
								</div>
								<a href="/checkout" className="btn btn-checkout form-control">
									Checkout
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Cart Sec End Here */}

			{/* Newsletter */}
			<Newslettter />
			{/* Newsletter */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Cart;
