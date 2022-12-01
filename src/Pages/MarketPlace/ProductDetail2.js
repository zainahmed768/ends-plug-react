import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "react-slick";
import Newsletter from "../../components/Newslettter";
import "../../assets/css/product-detail.css";
import {
	Product1,
	Product2,
	Product3,
	Product4,
	productslick1,
	productslick2,
	productslick3,
	productslick4,
	Product_Detail,
	reviewimg1,
	reviewimg2,
	reviewimg3,
} from "../../constant";
import { Link, useNavigate } from "react-router-dom";

const ProductDetail2 = () => {
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const [count, setCount] = useState(1);
	const navigate = useNavigate();

	function incrementCount() {
		count = count + 1;
		setCount(count);
	}
	function decrementCount() {
		count = count - 1;
		setCount(count);
	}
	if (count === 0) {
		setCount(1);
	}

	const product = [
		{
			id: 1,
			img: Product1,
			name: "Ents-Plug Short",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 2,
			img: Product2,
			name: "T-shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 3,
			img: Product3,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 4,
			img: Product4,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Product Detail Sec */}
			<section className="product-detail merchant-product-detail">
				<div className="container">
					<div className="product-box">
						<div className="row">
							<div className="col-lg-6">
								<div className="row">
									<div className="col-md-2">
										<Slider
											asNavFor={nav1}
											arrows={false}
											ref={(slider2) => setNav2(slider2)}
											slidesToShow={4}
											vertical={true}
											verticalSwiping={true}
											swipeToSlide={true}
											focusOnSelect={true}
										>
											<figure>
												<img src={productslick1} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick2} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick3} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick4} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick1} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick2} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick3} alt="" className="img-fluid" />
											</figure>
											<figure>
												<img src={productslick4} alt="" className="img-fluid" />
											</figure>
										</Slider>
									</div>
									<div className="col-md-10">
										<Slider
											asNavFor={nav2}
											arrows={false}
											ref={(slider1) => setNav1(slider1)}
											className="product-img"
										>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
											<figure>
												<img
													src={Product_Detail}
													alt=""
													className="img-fluid"
												/>
											</figure>
										</Slider>
										<p className="zoom">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="17.094"
												height="17.094"
												viewBox="0 0 17.094 17.094"
											>
												<g
													id="Icon_feather-zoom-in"
													data-name="Icon feather-zoom-in"
													transform="translate(-4 -4)"
												>
													<path
														id="Path_22"
														data-name="Path 22"
														d="M18.621,11.561A7.061,7.061,0,1,1,11.561,4.5,7.061,7.061,0,0,1,18.621,11.561Z"
														fill="none"
														stroke="#878787"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1"
													/>
													<path
														id="Path_23"
														data-name="Path 23"
														d="M28.814,28.814l-3.839-3.839"
														transform="translate(-8.428 -8.428)"
														fill="none"
														stroke="#878787"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1"
													/>
													<path
														id="Path_24"
														data-name="Path 24"
														d="M16.5,12v5.3"
														transform="translate(-4.939 -3.087)"
														fill="none"
														stroke="#878787"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1"
													/>
													<path
														id="Path_25"
														data-name="Path 25"
														d="M12,16.5h5.3"
														transform="translate(-3.087 -4.939)"
														fill="none"
														stroke="#878787"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1"
													/>
												</g>
											</svg>
											Mouse over to zoom in
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="product-content">
									<div className="title">
										<h3 className="name">Ents-Plug T-Shirt</h3>
										<p className="sub-title">
											Pure 100% cotton, Organic material
										</p>
									</div>
									<p className="description">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
									<div className="reviews">
										<ul className="stars">
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
										</ul>
										<p>5 Reviews </p>
									</div>
									<div className="price">
										<h3>$96.90</h3>
									</div>
									<div className="actions-button">
										<div className="quantity">
											<label htmlFor="Quantity">Quantity:</label>
											<div className="form-group">
												<button className="minus" onClick={decrementCount}>
													<i
														className="fa fa-angle-left"
														aria-hidden="true"
													></i>
												</button>
												<input
													type="text"
													readOnly
													value={count}
													className="form-control"
												/>
												<button className="minus" onClick={incrementCount}>
													<i
														className="fa fa-angle-right"
														aria-hidden="true"
													></i>
												</button>
											</div>
										</div>
										<div className="button-group">
											<button
												onClick={() => navigate("/shopping-cart")}
												className="btn edit-product"
											>
												Add To Cart
											</button>
										</div>
									</div>
									<div className="wishlist">
										<Link to="/wishlist">
											<i className="fa fa-heart" aria-hidden="true"></i> Add To
											Wishlist
										</Link>
									</div>
									<ul className="details">
										<li>
											<span className="property">SKU:</span>
											<span className="value">506-709A- KH</span>
										</li>
										<li>
											<span className="property">Category:</span>
											<span className="value">apperal/t-shirt</span>
										</li>
										<li>
											<span className="value">
												Tags: Shirt, T-shirt, Ents-plug, Merch,
											</span>
										</li>
										<li className="last">
											<p>
												Become a Seller?
												<Link to="/CreateAccount">Register now</Link>
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Product Detail Sec */}

			{/* Reviews Sec Start Here */}
			<section className="reviews-and-rating">
				<div className="container">
					<div className="title">
						<h3>Products Reviews</h3>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="total-rating">
								<h2>4.0</h2>
								<ul className="stars">
									<li>
										<i className="fa fa-star" aria-hidden="true"></i>
									</li>
									<li>
										<i className="fa fa-star" aria-hidden="true"></i>
									</li>
									<li>
										<i className="fa fa-star" aria-hidden="true"></i>
									</li>
									<li>
										<i className="fa fa-star" aria-hidden="true"></i>
									</li>
									<li>
										<i className="fa fa-star-half-o" aria-hidden="true"></i>
									</li>
								</ul>
								<p>
									Based On 100 Reviews
									<br />
									Total Purchases 167
								</p>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="progress-bar-rating">
								<label>Excellent</label>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "85%" }}
										aria-valuenow="85"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div className="progress-bar-rating">
								<label>Good</label>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "70%" }}
										aria-valuenow="70"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div className="progress-bar-rating">
								<label>Average</label>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "70%" }}
										aria-valuenow="60"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div className="progress-bar-rating">
								<label>Below Average</label>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "40%" }}
										aria-valuenow="40"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div className="progress-bar-rating">
								<label>Poor</label>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "30%" }}
										aria-valuenow="30"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="all-reviews">
						<div className="review-box">
							<div className="topbar">
								<figure>
									<img src={reviewimg1} alt="" className="img-fluid" />
								</figure>
								<div className="name">
									<h3>Joan Perkins</h3>
									<div className="rating">
										<ul>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star-half-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p>5.0</p>
									</div>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut
							</p>
						</div>
						<div className="review-box">
							<div className="topbar">
								<figure>
									<img src={reviewimg2} alt="" className="img-fluid" />
								</figure>
								<div className="name">
									<h3>Joan Perkins</h3>
									<div className="rating">
										<ul>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star-half-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p>5.0</p>
									</div>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore
							</p>
						</div>
						<div className="review-box">
							<div className="topbar">
								<figure>
									<img src={reviewimg3} alt="" className="img-fluid" />
								</figure>
								<div className="name">
									<h3>Joan Perkins</h3>
									<div className="rating">
										<ul>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i className="fa fa-star-half-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p>5.0</p>
									</div>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore
							</p>
						</div>
					</div>
					<div className="button-group">
						<button className="btn">See more reviews</button>
					</div>
				</div>
			</section>
			{/* Reviews Sec End Here */}

			{/* Related Product Sec Start Here */}
			<section className="related-product">
				<div className="container">
					<div className="title-wrapper">
						<h3>Related Products</h3>
					</div>
					<div className="row">
						{product?.map((pro, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div className="product-box">
									<div className="pro-img">
										<figure>
											<img src={pro?.img} alt="" className="img-fluid" />
										</figure>
									</div>
									<div className="content-wrapper">
										<div className="head">
											<h3>{pro?.name}</h3>
											<h4>{pro?.price}</h4>
										</div>
										<p>{pro?.description}</p>
										<ul className="stars">
											{[...Array(5)].map((starrr) => {
												return (
													<li key={`star_${starrr}`}>
														<i className="fa fa-star"></i>
													</li>
												);
											})}
										</ul>
										<div className="button-group">
											<a href="#" className="btn">
												View Product
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Related Product Sec End Here */}

			{/* Newsletter */}
			<Newsletter />
			{/* Newsletter */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default ProductDetail2;
