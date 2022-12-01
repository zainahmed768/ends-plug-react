import React from "react";

const Filter = () => {
	return (
		<>
			<div className="sidebar">
				<div className="heading">
					<h3>Apply Filters</h3>
				</div>
				<div className="search">
					<form action="">
						<input type="text" placeholder="Search" className="form-control" />
						<button className="searchBtn" type="submit">
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
				</div>
				<div className="filter">
					<div className="box">
						<div className="title">
							<h4>Brands</h4>
						</div>
						<ul className="list">
							<li>
								<label for="species1">Lorem</label>
								<input
									type="checkbox"
									id="species1"
									className="form-check-input"
								/>
							</li>
							<li>
								<label for="species2">Lorem</label>
								<input
									type="checkbox"
									id="species2"
									className="form-check-input"
								/>
							</li>
						</ul>
					</div>
					<div className="box">
						<div className="title">
							<h4>Color</h4>
						</div>
						<ul className="list">
							<li>
								<label for="color1">Black</label>
								<input
									type="checkbox"
									id="color1"
									className="form-check-input"
								/>
							</li>
							<li>
								<label for="color2">White</label>
								<input
									type="checkbox"
									id="color2"
									className="form-check-input"
								/>
							</li>
						</ul>
					</div>
					<div className="box">
						<div className="title">
							<h4>Size</h4>
						</div>
						<ul className="list">
							<li>
								<label for="size1">Large</label>
								<input
									type="checkbox"
									id="size1"
									className="form-check-input"
								/>
							</li>
							<li>
								<label for="size2">Medium</label>
								<input
									type="checkbox"
									id="size2"
									className="form-check-input"
								/>
							</li>
							<li>
								<label for="size3">Small</label>
								<input
									type="checkbox"
									id="size3"
									className="form-check-input"
								/>
							</li>
						</ul>
					</div>
					<div className="price-range">
						<div className="title">
							<h4>Price</h4>
						</div>
						<div className="input-group">
							<div className="form-group">
								<label for="From">From</label>
								<input type="text" id="From" className="form-control" />
							</div>
							<div className="seprator"></div>
							<div className="form-group">
								<label for="To">To</label>
								<input type="text" id="To" className="form-control" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
