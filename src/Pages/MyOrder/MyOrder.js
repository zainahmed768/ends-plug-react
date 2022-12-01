import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/MyOrder.css";

const MyOrder = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}
			<section className="orders">
				<div className="container">
					<div className="heading-wrapper">
						<h2>My Orders</h2>
					</div>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th className="orderno">OrderNo</th>
									<th className="orderdate">Order Date</th>
									<th className="status">Status </th>
									<th className="pymntstatus">Payment Status</th>
									<th className="total">Total</th>
									<th className="view"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="orderno">
										<p>#1084598423154</p>
									</td>
									<td className="orderdate">
										<p>04-12-21</p>
									</td>
									<td className="status">
										<p>Confirm</p>
									</td>
									<td className="pymntstatus">
										<p>Paid</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="19.606"
											height="19.606"
											viewBox="0 0 19.606 19.606"
										>
											<defs>
												<linearGradient
													id="linear-gradient"
													x1="0.5"
													x2="0.5"
													y2="1"
													gradientUnits="objectBoundingBox"
												>
													<stop offset="0" stop-color="#fe5b25" />
													<stop offset="1" stop-color="#f99914" />
												</linearGradient>
											</defs>
											<path
												id="Icon_awesome-check-circle"
												data-name="Icon awesome-check-circle"
												d="M20.168,10.365a9.8,9.8,0,1,1-9.8-9.8A9.8,9.8,0,0,1,20.168,10.365ZM9.231,15.556,16.5,8.283a.632.632,0,0,0,0-.894l-.894-.894a.632.632,0,0,0-.894,0L8.784,12.425,6.015,9.656a.632.632,0,0,0-.894,0l-.894.894a.632.632,0,0,0,0,.894l4.111,4.111a.632.632,0,0,0,.894,0Z"
												transform="translate(-0.563 -0.563)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</td>
									<td className="total">
										<p>$590.00</p>
									</td>
									<td className="view">
										<a href="#">view Details</a>
									</td>
								</tr>
								<tr>
									<td className="orderno">
										<p>#1084598423154</p>
									</td>
									<td className="orderdate">
										<p>04-12-21</p>
									</td>
									<td className="status">
										<p>Confirm</p>
									</td>
									<td className="pymntstatus">
										<p>Paid</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="19.606"
											height="19.606"
											viewBox="0 0 19.606 19.606"
										>
											<defs>
												<linearGradient
													id="linear-gradient"
													x1="0.5"
													x2="0.5"
													y2="1"
													gradientUnits="objectBoundingBox"
												>
													<stop offset="0" stop-color="#fe5b25" />
													<stop offset="1" stop-color="#f99914" />
												</linearGradient>
											</defs>
											<path
												id="Icon_awesome-check-circle"
												data-name="Icon awesome-check-circle"
												d="M20.168,10.365a9.8,9.8,0,1,1-9.8-9.8A9.8,9.8,0,0,1,20.168,10.365ZM9.231,15.556,16.5,8.283a.632.632,0,0,0,0-.894l-.894-.894a.632.632,0,0,0-.894,0L8.784,12.425,6.015,9.656a.632.632,0,0,0-.894,0l-.894.894a.632.632,0,0,0,0,.894l4.111,4.111a.632.632,0,0,0,.894,0Z"
												transform="translate(-0.563 -0.563)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</td>
									<td className="total">
										<p>$590.00</p>
									</td>
									<td className="view">
										<a href="#">view Details</a>
									</td>
								</tr>
								<tr>
									<td className="orderno">
										<p>#1084598423154</p>
									</td>
									<td className="orderdate">
										<p>04-12-21</p>
									</td>
									<td className="status">
										<p>Confirm</p>
									</td>
									<td className="pymntstatus">
										<p>Paid</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="19.606"
											height="19.606"
											viewBox="0 0 19.606 19.606"
										>
											<defs>
												<linearGradient
													id="linear-gradient"
													x1="0.5"
													x2="0.5"
													y2="1"
													gradientUnits="objectBoundingBox"
												>
													<stop offset="0" stop-color="#fe5b25" />
													<stop offset="1" stop-color="#f99914" />
												</linearGradient>
											</defs>
											<path
												id="Icon_awesome-check-circle"
												data-name="Icon awesome-check-circle"
												d="M20.168,10.365a9.8,9.8,0,1,1-9.8-9.8A9.8,9.8,0,0,1,20.168,10.365ZM9.231,15.556,16.5,8.283a.632.632,0,0,0,0-.894l-.894-.894a.632.632,0,0,0-.894,0L8.784,12.425,6.015,9.656a.632.632,0,0,0-.894,0l-.894.894a.632.632,0,0,0,0,.894l4.111,4.111a.632.632,0,0,0,.894,0Z"
												transform="translate(-0.563 -0.563)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</td>
									<td className="total">
										<p>$590.00</p>
									</td>
									<td className="view">
										<a href="#">view Details</a>
									</td>
								</tr>
								<tr>
									<td className="orderno">
										<p>#1084598423154</p>
									</td>
									<td className="orderdate">
										<p>04-12-21</p>
									</td>
									<td className="status">
										<p>Confirm</p>
									</td>
									<td className="pymntstatus">
										<p>Paid</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="19.606"
											height="19.606"
											viewBox="0 0 19.606 19.606"
										>
											<defs>
												<linearGradient
													id="linear-gradient"
													x1="0.5"
													x2="0.5"
													y2="1"
													gradientUnits="objectBoundingBox"
												>
													<stop offset="0" stop-color="#fe5b25" />
													<stop offset="1" stop-color="#f99914" />
												</linearGradient>
											</defs>
											<path
												id="Icon_awesome-check-circle"
												data-name="Icon awesome-check-circle"
												d="M20.168,10.365a9.8,9.8,0,1,1-9.8-9.8A9.8,9.8,0,0,1,20.168,10.365ZM9.231,15.556,16.5,8.283a.632.632,0,0,0,0-.894l-.894-.894a.632.632,0,0,0-.894,0L8.784,12.425,6.015,9.656a.632.632,0,0,0-.894,0l-.894.894a.632.632,0,0,0,0,.894l4.111,4.111a.632.632,0,0,0,.894,0Z"
												transform="translate(-0.563 -0.563)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</td>
									<td className="total">
										<p>$590.00</p>
									</td>
									<td className="view">
										<a href="#">view Details</a>
									</td>
								</tr>
								<tr>
									<td className="orderno">
										<p>#1084598423154</p>
									</td>
									<td className="orderdate">
										<p>04-12-21</p>
									</td>
									<td className="status">
										<p>Confirm</p>
									</td>
									<td className="pymntstatus">
										<p>Paid</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="19.606"
											height="19.606"
											viewBox="0 0 19.606 19.606"
										>
											<defs>
												<linearGradient
													id="linear-gradient"
													x1="0.5"
													x2="0.5"
													y2="1"
													gradientUnits="objectBoundingBox"
												>
													<stop offset="0" stop-color="#fe5b25" />
													<stop offset="1" stop-color="#f99914" />
												</linearGradient>
											</defs>
											<path
												id="Icon_awesome-check-circle"
												data-name="Icon awesome-check-circle"
												d="M20.168,10.365a9.8,9.8,0,1,1-9.8-9.8A9.8,9.8,0,0,1,20.168,10.365ZM9.231,15.556,16.5,8.283a.632.632,0,0,0,0-.894l-.894-.894a.632.632,0,0,0-.894,0L8.784,12.425,6.015,9.656a.632.632,0,0,0-.894,0l-.894.894a.632.632,0,0,0,0,.894l4.111,4.111a.632.632,0,0,0,.894,0Z"
												transform="translate(-0.563 -0.563)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</td>
									<td className="total">
										<p>$590.00</p>
									</td>
									<td className="view">
										<a href="#">view Details</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<ul className="pagination">
						<li className="arrow">
							<a href="#">
								<i className="fa fa-angle-left" aria-hidden="true"></i>
							</a>
						</li>
						<li className="pagi">
							<a href="#">1</a>
						</li>
						<li className="pagi active">
							<a href="#">2</a>
						</li>
						<li className="pagi">
							<a href="#">3</a>
						</li>
						<li className="pagi">
							<a href="#">4</a>
						</li>
						<li className="arrow">
							<a href="#">
								<i className="fa fa-angle-right" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
				</div>
			</section>
			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default MyOrder;
