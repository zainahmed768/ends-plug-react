import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
	cat1,
	cat2,
	cat3,
	Merchand1,
	Merchand2,
	Merchand3,
	Merchand4,
	Product1,
	Product2,
	Product3,
	Product4,
} from "../../constant";
import "../../assets/css/market-place.css";
import { Link } from "react-router-dom";
import Newslettter from "../../components/Newslettter";
import Filter from "../../components/Filter";

const MarketPlace = () => {
	const [nav1, setNav1] = useState();

	const category = [
		{
			id: 1,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 2,
			image: cat2,
			title: "Accessories",
		},
		{
			id: 3,
			image: cat3,
			title: "Lorem Ipsum",
		},
		{
			id: 4,
			image: cat2,
			title: "Clothing",
		},
		{
			id: 5,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 6,
			image: cat2,
			title: "Clothing",
		},
		{
			id: 7,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 8,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 9,
			image: cat2,
			title: "Accessories",
		},
		{
			id: 10,
			image: cat3,
			title: "Lorem Ipsum",
		},
		{
			id: 11,
			image: cat2,
			title: "Clothing",
		},
		{
			id: 12,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 13,
			image: cat1,
			title: "Clothing",
		},
		{
			id: 14,
			image: cat1,
			title: "Clothing",
		},
	];

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
		{
			id: 5,
			img: Product1,
			name: "Ents-Plug Short",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 6,
			img: Product2,
			name: "T-shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 7,
			img: Product3,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
		{
			id: 8,
			img: Product4,
			name: "Ents-Plug shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
		},
	];

	const merchand = [
		{
			id: 1,
			img: Merchand1,
			name: "Hand Bag",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 2,
			img: Merchand2,
			name: "Lotion",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 3,
			img: Merchand3,
			name: "Handphones",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 1,
			img: Merchand4,
			name: "Teady Bear",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 5,
			img: Merchand1,
			name: "Hand Bag",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 6,
			img: Merchand2,
			name: "Lotion",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 7,
			img: Merchand3,
			name: "Handphones",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			id: 8,
			img: Merchand4,
			name: "Teady Bear",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Market Place Sec */}
			<section className="market-place">
				<div className="container">
					<div className="heading-wrapper">
						<h2>Our marketplace</h2>
					</div>
					<div className="title">
						<h3>Category</h3>
					</div>
					<div className="category">
						<Slider slidesToShow={7} slidesToScroll={1} arrows={false}>
							{category?.map((cat, index) => (
								<div className="cat-box">
									<Link to="#">
										<figure>
											<img src={cat?.image} alt="" className="img-fluid" />
										</figure>
										<h4>{cat?.title}</h4>
									</Link>
								</div>
							))}
						</Slider>
					</div>
					<div className="merchandise-sec">
						<div className="heading">
							<h2>Our merch</h2>
						</div>
						<div className="row">
							<div className="col-lg-3">
								<Filter />
							</div>
							<div className="col-lg-9">
								<div className="row">
									{product?.map((pro, index) => (
										<div className="col-lg-3 col-md-6" key={index}>
											<div className="product-box">
												<div className="pro-img">
													<figure>
														<a href="/product-detail2">
															<img
																src={pro?.img}
																alt=""
																className="img-fluid"
															/>
														</a>
													</figure>
												</div>
												<div className="content-wrapper">
													<div className="head">
														<h3>{pro?.name}</h3>
														<h4>{pro?.price}</h4>
													</div>
													<div className="brand-name">
														<h4>Brand name</h4>
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
													{/* <div className="button-group">
												<a href="#" className="btn">
													View Product
												</a>
											</div> */}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Market Place Sec */}

			{/* Merchandise Banner */}
			<section className="merchandise-banner">
				<div className="container">
					<div className="title">
						<h2>Ents Plug merchandising</h2>
					</div>
				</div>
			</section>
			{/* Merchandise Banner */}

			{/* Mechant Product Sec */}
			<section className="merchant-pro">
				<div className="container">
					<div className="row">
						{merchand?.map((mer, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div className="product-box">
									<div className="pro-img">
										<figure>
											<img src={mer?.img} alt="" className="img-fluid" />
										</figure>
									</div>
									<div className="content-wrapper">
										<div className="head">
											<h3>{mer?.name}</h3>
											<h4>{mer?.price}</h4>
										</div>
										<p>{mer?.description}</p>
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
					<div className="pagination-wrapper">
						<div className="pagination-list-wrapper">
							<ul>
								<li className="pagination-item">
									<button className="pagination-btn active">1</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn">2</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn">3</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn">4</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn">5</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn">10</button>
								</li>
								<li className="pagination-item">
									<button className="pagination-btn next-btn">
										Next <i className="fa fa-angle-right"></i>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* Merchant Product Sec */}

			{/* Newsletter */}
			<Newslettter />
			{/* Newsletter */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default MarketPlace;
