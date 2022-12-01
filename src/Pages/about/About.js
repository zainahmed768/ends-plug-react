import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newslettter from "../../components/Newslettter";
import "../../assets/css/about.css";

const About = () => {
	return (
		<>
			<Header />
			{/* About sec starts here */}
			<section className="about-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<div className="content-wrapper">
								<h2>About Us</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Pellentesque id nibh tortor id aliquet lectus. Et sollicitudin
									ac orci phasellus. Netus et malesuada fames ac turpis egestas
									maecenas pharetra convallis. Nam aliquam sem et tortor
									consequat id. Feugiat sed lectus vestibulum mattis ullamcorper
									velit. Cursus in hac habitasse platea. Neque convallis a cras
									semper auctor neque. Aliquam purus sit amet luctus. Habitant
									morbi tristique senectus et. Dictum fusce ut placerat orci
									nulla pellentesque dignissim.
								</p>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</section>
			{/* About sec ends here */}
			<Newslettter />
			<Footer />
		</>
	);
};

export default About;
