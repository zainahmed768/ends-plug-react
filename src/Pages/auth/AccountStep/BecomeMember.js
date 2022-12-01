import React from "react";
import { member_img, videoPlayer } from "../../../constant";
import "../../../assets/css/BecomeMember.css";

const BecomeMember = () => {
	return (
		<>
			<div className="row">
				<div className="col-lg-1"></div>
				<div className="col-lg-10">
					<section className="member-sec">
						<div className="member-wrapper">
							<div className="member-img-wrapper">
								<figure>
									<img src={member_img} className="img-fluid" alt="" />
									<img src={videoPlayer} className="video-btn" alt="" />
								</figure>
							</div>
							<div className="member-content-wrapper">
								<h5>Become a Supporting Member!</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<div className="btn-wrapper">
									<button className="btn">Explore Membership Options</button>
									<button>Close Window</button>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="col-lg-1"></div>
			</div>
		</>
	);
};

export default BecomeMember;
