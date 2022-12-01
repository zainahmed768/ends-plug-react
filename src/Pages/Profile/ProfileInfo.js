import React from "react";
import { Link } from "react-router-dom";
import { profileImg, ShutEmoji } from "../../constant";

const ProfileInfo = () => {
	let currentUrl = window.location.href.split("/");
	return (
		<>
			<div className="row align-items-center">
				<div className="col-lg-7">
					<div className="profile-info">
						<div className="profile-img">
							<figure>
								<img src={profileImg} alt="" className="img-fluid" />
							</figure>
						</div>
						<div className="info">
							<h3 className="username">Cathline07</h3>
							<p>
								<span className="id">@jorgecutis</span>
								<span className="interest">Canna interest</span>
							</p>
							<p className="bio">
								<a href="#">Your Bio Here. Clickable link</a>
							</p>
							<h3 className="fullname">Cathline Karen</h3>
						</div>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="button-group">
						<button className="btn message">Message</button>
						<button
							type="button"
							className="btn follow"
							data-bs-toggle="modal"
							data-bs-target="#unfollow"
						>
							Unfollow
						</button>
					</div>
				</div>
			</div>
			<div className="detail">
				<div className="topbar">
					<Link
						to="/profile"
						className={`${
							currentUrl?.[3] === "profile" ? "topBarLink active" : "topBarLink"
						}`}
					>
						<span className="count">128</span>
						<span className="tag">Posts</span>
					</Link>
					<Link
						to="/profile-followers"
						className={`${
							currentUrl?.[3] === "profile-followers"
								? "topBarLink active"
								: "topBarLink"
						}`}
					>
						<span className="count">312</span>
						<span className="tag">Follower</span>
					</Link>
					<Link
						to="/profile-following"
						className={`${
							currentUrl?.[3] === "profile-following"
								? "topBarLink active"
								: "topBarLink"
						}`}
					>
						<span className="count">502</span>
						<span className="tag">Following</span>
					</Link>
				</div>
			</div>

			{/* Follow Modal */}
			<div
				className="modal fade"
				id="unfollow"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="unfollowLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<h2>
								We Wont Tell Them
								<figure>
									<img src={ShutEmoji} alt="" className="img-fluid" />
								</figure>
							</h2>
							<div className="button-group">
								<button data-bs-dismiss="modal" className="btn message">
									Unfollow
								</button>
								<button data-bs-dismiss="modal" className="btn Block">
									Block quietly
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Follow Modal */}
		</>
	);
};

export default ProfileInfo;
