import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "react-slick";
import "../../assets/css/product-detail.css";
import {
	productslick1,
	productslick2,
	productslick3,
	productslick4,
	Product_Detail,
} from "../../constant";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const navigate = useNavigate();

	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="product-detail">
				<div className="container">
					<div className="heading-wrapper">
						<h2>My Products</h2>
					</div>
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
									<ul className="variation">
										<li>
											<label className="varai-container">
												<input
													type="radio"
													hidden
													className="input-group-text"
													defaultChecked
													name="variationRadio"
												/>
												<span className="checkmark">
													<p>S</p>
												</span>
											</label>
										</li>
										<li>
											<label className="varai-container">
												<input
													type="radio"
													hidden
													className="input-group-text"
													name="variationRadio"
												/>
												<span className="checkmark">
													<p>M</p>
												</span>
											</label>
										</li>
										<li>
											<label className="varai-container">
												<input
													type="radio"
													hidden
													className="input-group-text"
													name="variationRadio"
												/>
												<span className="checkmark">
													<span className="checkmark">
														<p>L</p>
													</span>
												</span>
											</label>
										</li>
										<li>
											<label className="varai-container">
												<input
													type="radio"
													hidden
													className="input-group-text"
													name="variationRadio"
												/>
												<span className="checkmark">
													<p>XL</p>
												</span>
											</label>
										</li>
									</ul>
									<div className="button-group">
										<div className="d-flex">
											<button
												onClick={() => navigate("/edit-product")}
												className="btn edit-product mr-2"
											>
												Edit Product
											</button>
											<button
												// onClick={() => navigate("/edit-product")}
												className="btn edit-product clr_gry_btzz"
											>
												Unpulish Item
											</button>
										</div>
										<br />
										<button className="btn delete-product">
											Delete Product
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default ProductDetail;
