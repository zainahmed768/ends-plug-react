import React from "react";
import "../../assets/css/block.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
	Follower1,
	Follower10,
	Follower11,
	Follower12,
	Follower13,
	Follower14,
	Follower2,
	Follower3,
	Follower4,
	Follower5,
	Follower6,
	Follower7,
	Follower8,
	Follower9,
} from "../../constant";

const Blocklist = () => {
	const Followers = [
		{
			id: 1,
			Image: Follower1,
			FollowerName: "Herman Pope",
		},
		{
			id: 2,
			Image: Follower2,
			FollowerName: "Sue Caldwell",
		},
		{
			id: 3,
			Image: Follower3,
			FollowerName: "Ada Reyes",
		},
		{
			id: 4,
			Image: Follower4,
			FollowerName: "Ada Reyes",
		},
		{
			id: 5,
			Image: Follower5,
			FollowerName: "Hallie Sandoval",
		},
		{
			id: 6,
			Image: Follower6,
			FollowerName: "Herman Pope",
		},
		{
			id: 7,
			Image: Follower7,
			FollowerName: "Sue Caldwell",
		},
		{
			id: 8,
			Image: Follower8,
			FollowerName: "Ada Reyes",
		},
		{
			id: 9,
			Image: Follower9,
			FollowerName: "Hallie Sandoval",
		},
		{
			id: 10,
			Image: Follower10,
			FollowerName: "Herman Pope",
		},
		{
			id: 11,
			Image: Follower11,
			FollowerName: "Sue Caldwell",
		},
		{
			id: 10,
			Image: Follower10,
			FollowerName: "Herman Pope",
		},
		{
			id: 12,
			Image: Follower12,
			FollowerName: "Sue Caldwell",
		},
		{
			id: 13,
			Image: Follower13,
			FollowerName: "Ada Reyes",
		},
		{
			id: 14,
			Image: Follower14,
			FollowerName: "Hallie Sandoval",
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="block-list">
				<div className="container">
					<div className="block-list-box">
						<div className="heading">
							<h2>Block List</h2>
						</div>
						<div className="all-followers">
							{Followers?.map((follow, index) => (
								<div className="follow-box">
									<div className="left-side">
										<figure>
											<img src={follow?.Image} alt="" className="img-fluid" />
										</figure>
										<div className="name">
											<h5>{follow?.FollowerName}</h5>
										</div>
									</div>
									<div className="buton-group">
										<button className="btn">Unblock</button>
									</div>
								</div>
							))}
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

export default Blocklist;