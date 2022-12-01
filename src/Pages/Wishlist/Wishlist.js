import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { wishlist } from "../../constant";
import "../../assets/css/wishlist.css";

const Wishlist = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Wishlist Sec Start Here */}
			<section className="wishlist_sec">
				<div className="container">
					<div className="heading-wrapper">
						<h2>My Wishlist</h2>
					</div>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th></th>
									<th>Product Name</th>
									<th>Unit Price</th>
									<th>Stock Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="img">
										<div className="first">
											<button className="cancel">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="13.833"
													height="13.833"
													viewBox="0 0 13.833 13.833"
												>
													<path
														id="Union_3"
														data-name="Union 3"
														d="M-13087.792-11383.792l-6.209,6.209,6.209-6.209-6.209-6.21,6.209,6.21,6.21-6.21-6.21,6.21,6.21,6.209Z"
														transform="translate(13094.708 11390.709)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeWidth="2"
													/>
												</svg>
											</button>
											<figure>
												<img src={wishlist} alt="" className="img-fluid" />
											</figure>
										</div>
									</td>
									<td className="price">
										<p>Ents-Plug T-shirt</p>
									</td>
									<td className="price">
										<p>$20</p>
									</td>
									<td className="status">
										<p>In-Stock</p>
									</td>
									<td className="cartBtn">
										<button className="btn">Add To Cart</button>
									</td>
								</tr>
								<tr>
									<td className="img">
										<div className="first">
											<button className="cancel">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="13.833"
													height="13.833"
													viewBox="0 0 13.833 13.833"
												>
													<path
														id="Union_3"
														data-name="Union 3"
														d="M-13087.792-11383.792l-6.209,6.209,6.209-6.209-6.209-6.21,6.209,6.21,6.21-6.21-6.21,6.21,6.21,6.209Z"
														transform="translate(13094.708 11390.709)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeWidth="2"
													/>
												</svg>
											</button>
											<figure>
												<img src={wishlist} alt="" className="img-fluid" />
											</figure>
										</div>
									</td>
									<td className="price">
										<p>Ents-Plug T-shirt</p>
									</td>
									<td className="price">
										<p>$20</p>
									</td>
									<td className="status">
										<p>In-Stock</p>
									</td>
									<td className="cartBtn">
										<button className="btn">Add To Cart</button>
									</td>
								</tr>
								<tr>
									<td className="img">
										<div className="first">
											<button className="cancel">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="13.833"
													height="13.833"
													viewBox="0 0 13.833 13.833"
												>
													<path
														id="Union_3"
														data-name="Union 3"
														d="M-13087.792-11383.792l-6.209,6.209,6.209-6.209-6.209-6.21,6.209,6.21,6.21-6.21-6.21,6.21,6.21,6.209Z"
														transform="translate(13094.708 11390.709)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeWidth="2"
													/>
												</svg>
											</button>
											<figure>
												<img src={wishlist} alt="" className="img-fluid" />
											</figure>
										</div>
									</td>
									<td className="price">
										<p>Ents-Plug T-shirt</p>
									</td>
									<td className="price">
										<p>$20</p>
									</td>
									<td className="status">
										<p>In-Stock</p>
									</td>
									<td className="cartBtn">
										<button className="btn">Add To Cart</button>
									</td>
								</tr>
								<tr>
									<td className="img">
										<div className="first">
											<button className="cancel">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="13.833"
													height="13.833"
													viewBox="0 0 13.833 13.833"
												>
													<path
														id="Union_3"
														data-name="Union 3"
														d="M-13087.792-11383.792l-6.209,6.209,6.209-6.209-6.209-6.21,6.209,6.21,6.21-6.21-6.21,6.21,6.21,6.209Z"
														transform="translate(13094.708 11390.709)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeWidth="2"
													/>
												</svg>
											</button>
											<figure>
												<img src={wishlist} alt="" className="img-fluid" />
											</figure>
										</div>
									</td>
									<td className="price">
										<p>Ents-Plug T-shirt</p>
									</td>
									<td className="price">
										<p>$20</p>
									</td>
									<td className="status">
										<p>In-Stock</p>
									</td>
									<td className="cartBtn">
										<button className="btn">Add To Cart</button>
									</td>
								</tr>
							</tbody>
						</table>
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
				</div>
			</section>
			{/* Wishlist Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Wishlist;
