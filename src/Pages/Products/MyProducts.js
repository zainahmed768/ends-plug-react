import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
	Product1,
	Product2,
	Product3,
	Product4,
	profile_img,
} from "../../constant";
import "../../assets/css/product.css";

const MyProducts = () => {
	const product = [
		{
			id: 1,
			img: Product1,
			name: "Ents-Plug Short",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: false,
		},
		{
			id: 2,
			img: Product2,
			name: "T-shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 3,
			img: Product3,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 4,
			img: Product4,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 5,
			img: Product1,
			name: "Ents-Plug Short",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 6,
			img: Product2,
			name: "T-shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 7,
			img: Product3,
			name: "Ents-Plug Shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 8,
			img: Product4,
			name: "Ents-Plug shirt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
		{
			id: 9,
			img: Product1,
			name: "Ents-Plug Short",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
			price: "$18",
			rating: "5",
			active: true,
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Products Sec Start Here */}
			<section className="product-sec">
				<div className="container">
					<div className="heading-wrapper">
						<h2>My Products</h2>
					</div>
					<div className="profile">
						<figure>
							<img src={profile_img} alt="" className="img-fluid" />
						</figure>
						<div className="name">
							<h3>DarrellBailey007</h3>
							<h4>Darrell Bailey</h4>
						</div>
					</div>
					<div className="title">
						<h4>Apparels</h4>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<div className="add-new">
								<a href="/upload-product">
									<div className="iner">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="34.986"
											height="34.986"
											viewBox="0 0 34.986 34.986"
										>
											<path
												id="Icon_awesome-plus"
												data-name="Icon awesome-plus"
												d="M32.487,15.995H21.242V4.749a2.5,2.5,0,0,0-2.5-2.5h-2.5a2.5,2.5,0,0,0-2.5,2.5V15.995H2.5a2.5,2.5,0,0,0-2.5,2.5v2.5a2.5,2.5,0,0,0,2.5,2.5H13.745V34.737a2.5,2.5,0,0,0,2.5,2.5h2.5a2.5,2.5,0,0,0,2.5-2.5V23.492H32.487a2.5,2.5,0,0,0,2.5-2.5v-2.5A2.5,2.5,0,0,0,32.487,15.995Z"
												transform="translate(0 -2.25)"
												fill="#fff"
											/>
										</svg>
										<h4>Add New Product</h4>
									</div>
								</a>
							</div>
						</div>
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
											{pro.active ? <a disabled href="/product-detail" className="btn">
												View Product
											</a> : <button disabled className="btn btn-light mt-3">Not Available  </button> }
											{/* <a disabled href="/product-detail" className="btn">
												View Product
											</a> */}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Products Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default MyProducts;
