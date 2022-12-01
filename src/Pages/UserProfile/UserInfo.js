import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userProfile } from "../../constant";

const UserInfo = () => {
	let currentUrl = window.location.href.split("/");
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			<div className="userInfo-box">
				<div className="row align-items-center user-profile">
					<div className="col-lg-7">
						<div className="profile-info">
							<div className="profile-img">
								<figure>
									<img src={userProfile} alt="" className="img-fluid" />
								</figure>
							</div>
							<div className="info">
								<h3 className="username">Cathline07</h3>
								<p>
									<span className="id">@jorgecutis</span>
									<span className="interest">Canna interest</span>
								</p>
								<p className="bio">
									<button
										type="button"
										className="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#bioModal"
									>
										Your Bio Here. Clickable link
									</button>
								</p>
								{/* <h3 className="fullname">Cathline Karen</h3> */}
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="button-group">
							<button
								onClick={() => navigate("/edit-profile")}
								className="btn edit-profile"
							>
								Edit Profile
							</button>
							<button className="setting" onClick={() => setShow(true)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="27"
									height="27.007"
									viewBox="0 0 27 27.007"
								>
									<path
										id="Icon_ionic-ios-settings"
										data-name="Icon ionic-ios-settings"
										d="M29.271,18A3.474,3.474,0,0,1,31.5,14.759a13.772,13.772,0,0,0-1.666-4.015,3.521,3.521,0,0,1-1.413.3,3.467,3.467,0,0,1-3.171-4.88A13.73,13.73,0,0,0,21.241,4.5a3.471,3.471,0,0,1-6.483,0,13.772,13.772,0,0,0-4.015,1.666,3.467,3.467,0,0,1-3.171,4.88,3.406,3.406,0,0,1-1.413-.3A14.076,14.076,0,0,0,4.5,14.766a3.473,3.473,0,0,1,.007,6.483,13.772,13.772,0,0,0,1.666,4.015,3.468,3.468,0,0,1,4.577,4.577,13.852,13.852,0,0,0,4.015,1.666,3.465,3.465,0,0,1,6.469,0,13.772,13.772,0,0,0,4.015-1.666,3.472,3.472,0,0,1,4.577-4.577,13.852,13.852,0,0,0,1.666-4.015A3.491,3.491,0,0,1,29.271,18ZM18.063,23.618a5.625,5.625,0,1,1,5.625-5.625A5.623,5.623,0,0,1,18.063,23.618Z"
										transform="translate(-4.5 -4.5)"
										fill="#fff"
									/>
								</svg>
							</button>
							<button className="message" onClick={() => navigate("/chat")}>
								<i className="fa fa-comments" aria-hidden="true"></i>
								<span className="dot"></span>
							</button>
							<div className="dropdown">
								<button
									className="add-stuff"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-plus-lg"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										></path>
									</svg>
								</button>
								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton1"
								>
									<li>
										<Link className="dropdown-item" to="#">
											Post Photo/Video
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="#">
											Add Story
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="#">
											Go Live
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="#">
											Add merch
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="#">
											Request Ad Space
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="detail">
					<div className="topbar">
						<Link
							to="/user-profile"
							className={`${
								currentUrl?.[3] === "user-profile"
									? "topBarLink active"
									: "topBarLink"
							}`}
						>
							<span className="count">128</span>
							<span className="tag">Posts</span>
						</Link>
						<Link
							to="/user-followers"
							className={`${
								currentUrl?.[3] === "user-followers"
									? "topBarLink active"
									: "topBarLink"
							}`}
						>
							<span className="count">312</span>
							<span className="tag">Follower</span>
						</Link>
						<Link
							to="/user-following"
							className={`${
								currentUrl?.[3] === "user-following"
									? "topBarLink active"
									: "topBarLink"
							}`}
						>
							<span className="count">502</span>
							<span className="tag">Following</span>
						</Link>
					</div>
				</div>
				<div className={show ? "setting-box active" : "setting-box"}>
					<button className="seeting-icons" onClick={() => setShow(false)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34.131"
							height="35.078"
							viewBox="0 0 34.131 35.078"
						>
							<path
								id="Exclusion_1"
								data-name="Exclusion 1"
								d="M-14419.319-8261.423h-6.736c-.348,0-.841-.354-.841-.686l-.674-4.453-.021-.01a16.232,16.232,0,0,1-2.843-1.7l-4.211,1.71a.655.655,0,0,1-.295.066.8.8,0,0,1-.712-.411l-3.367-5.988c-.18-.367-.156-.868.167-1.03l3.874-2.74a4.894,4.894,0,0,0-.075-.727,6.2,6.2,0,0,1-.1-.987,5.329,5.329,0,0,1,.171-1.71l-3.537-2.914a.811.811,0,0,1-.17-1.025l3.37-5.992a.825.825,0,0,1,.607-.242,1.244,1.244,0,0,1,.4.07l4.211,1.714a15.575,15.575,0,0,1,2.821-1.692l.042-.021.674-4.449a.586.586,0,0,1,.078-.543.8.8,0,0,1,.6-.316h6.733c.349,0,.844.354.844.685l.674,4.624a9.389,9.389,0,0,1,2.29,1.315l.085.06c.158.111.321.226.488.339l4.04-1.714a1.139,1.139,0,0,1,.371-.066,1.112,1.112,0,0,1,.807.411l3.367,5.989c.169.174,0,.684-.338,1.03l-3.536,2.739a4.859,4.859,0,0,0,.076.732v.008a6.112,6.112,0,0,1,.093.97,5.289,5.289,0,0,1-.17,1.714l3.536,2.91a.818.818,0,0,1,.171,1.029l-3.37,5.993a.83.83,0,0,1-.608.241,1.244,1.244,0,0,1-.4-.07l-4.211-1.71a16.11,16.11,0,0,1-2.856,1.707l-.006,0-.674,4.453A.773.773,0,0,1-14419.319-8261.423Zm-3.812-23.076a6.008,6.008,0,0,0-6,6,6.006,6.006,0,0,0,6,6,6.006,6.006,0,0,0,6-6A6.008,6.008,0,0,0-14423.132-8284.5Z"
								transform="translate(14439.689 8296.001)"
								fill="#fff"
								stroke="rgba(0,0,0,0)"
								stroke-miterlimit="10"
								strokeWidth="1"
							/>
						</svg>
					</button>
					<ul className="all-settings">
						<li>
							<Link to="#">Sale</Link>
						</li>
						<li>
							<Link to="#">Canna Merch</Link>
						</li>
						<li>
							<Link to="#">Referal</Link>
						</li>
						<li>
							<Link to="#">Recharge</Link>
						</li>
						<li>
							<Link to="/my-order">My Orders and payments</Link>
						</li>
						<li>
							<Link to="#">Change personal info </Link>
						</li>
						<li>
							<Link to="#">Setting</Link>
						</li>
						<li>
							<Link to="/faqs">Help</Link>
						</li>
						<li>
							<Link to="#">P & P </Link>
						</li>
						<li>
							<Link to="#">Regions</Link>
						</li>
						<li>
							<Link to="/">Log out</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default UserInfo;
