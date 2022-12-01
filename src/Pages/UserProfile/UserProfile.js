import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/profile.css";
import {
	comment,
	comment1,
	comment2,
	comment3,
	comment4,
	comment_emoji,
	friend_profile_img,
	likes,
	newsfeed1,
	newsfeed2,
	postimg1,
	postimg2,
	postimg3,
	postimg4,
	postimg5,
	postimg6,
	profile_img,
	share,
} from "../../constant";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import Newslettter from "../../components/Newslettter";

const UserProfile = () => {
	const Postes = [
		{
			id: 1,
			Image: postimg1,
		},
		{
			id: 2,
			Image: postimg2,
		},
		{
			id: 3,
			Image: postimg3,
		},
		{
			id: 4,
			Image: postimg4,
		},
		{
			id: 5,
			Image: postimg5,
		},
		{
			id: 6,
			Image: postimg6,
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Profile Sec Start Here */}
			<section className="profile-sec">
				<div className="container">
					<UserInfo />
					<div className="profile-post">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="Posts-tab"
									data-bs-toggle="tab"
									data-bs-target="#Posts"
									type="button"
									role="tab"
									aria-controls="Posts"
									aria-selected="true"
								>
									Posts
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="images-tab"
									data-bs-toggle="tab"
									data-bs-target="#images"
									type="button"
									role="tab"
									aria-controls="images"
									aria-selected="false"
								>
									images
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="Videos-tab"
									data-bs-toggle="tab"
									data-bs-target="#Videos"
									type="button"
									role="tab"
									aria-controls="Videos"
									aria-selected="false"
								>
									Videos
								</button>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="Posts"
								role="tabpanel"
								aria-labelledby="Posts-tab"
							>
								<div className="row" style={{ marginTop: "80px" }}>
									<div className="col-md-2"></div>
									<div className="col-md-8">
										<div className="post-feed-wrapper">
											<div className="feed-profile-wrapper">
												<div className="feed-img-wrapper">
													<figure>
														<img
															src={profile_img}
															className="img-fluid"
															alt=""
														/>
													</figure>
												</div>
												<div className="feed-name-wrapper">
													<h4>
														<Link to="#">Darrell Bailey</Link>
													</h4>
													<h6>2 hr</h6>
												</div>
												<div className="more-option-wrapper">
													<div className="dropdown">
														<button
															className="btn btn-secondary dropdown-toggle"
															type="button"
															id="dropdownMenuButton"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="4.584"
																height="22.022"
																viewBox="0 0 4.584 22.022"
															>
																<path
																	id="Combined_Shape"
																	data-name="Combined Shape"
																	d="M0,19.5a2.416,2.416,0,0,1,2.291-2.523A2.416,2.416,0,0,1,4.584,19.5a2.416,2.416,0,0,1-2.292,2.523A2.416,2.416,0,0,1,0,19.5Zm0-8.488A2.416,2.416,0,0,1,2.291,8.488a2.416,2.416,0,0,1,2.292,2.523,2.416,2.416,0,0,1-2.292,2.523A2.416,2.416,0,0,1,0,11.011ZM0,2.523A2.416,2.416,0,0,1,2.291,0,2.416,2.416,0,0,1,4.584,2.523,2.416,2.416,0,0,1,2.291,5.047,2.416,2.416,0,0,1,0,2.523Z"
																	fill="#7a7a7a"
																/>
															</svg>
														</button>
														<div
															className="dropdown-menu"
															aria-labelledby="dropdownMenuButton"
														>
															<Link className="dropdown-item" to="#">
																Report
															</Link>
															<Link className="dropdown-item" to="#">
																hide
															</Link>
															<Link className="dropdown-item" to="#">
																share
															</Link>
															<Link className="dropdown-item" to="#">
																copy link
															</Link>
															<Link className="dropdown-item" to="#">
																unfollow
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div
												className="feed-des-wrapper"
												style={{ marginBottom: "15px" }}
											>
												<p style={{ marginBottom: "5px" }}>
													Weeeeeeeeeeeeeee...........
													<br />
													<Link
														style={{ color: "#fff", textDecoration: "none" }}
														to="#"
													>
														Follow us at https://linktr.ee/EntsPlug for more
													</Link>
												</p>
												<button
													style={{ marginBottom: "5px" }}
													className="hash-tag"
												>
													#CannabisContentCreators, #Ganjapreneurs
												</button>
											</div>
											<div className="feed-img-wrapper">
												<figure>
													<img src={newsfeed2} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="likes-comment-share-wrapper">
												<div className="likes-wrapper">
													<button className="likes">
														<img src={likes} alt="" />
														<span className="total-like">1125</span>
													</button>
												</div>
												<div className="comment-wrapper">
													<button className="comment">
														<img src={comment} alt="" />
														<span className="total-comment">348</span>
													</button>
												</div>
												<div className="share-wrapper">
													<button className="share">
														<img src={share} alt="" />
														<span className="total-share">20</span>
													</button>
												</div>
											</div>
											<div className="comments-wrapper">
												<div className="single-comment-wrapper">
													<div className="single-comment-img-wrapper">
														<img
															src={comment1}
															className="comment-img"
															alt=""
														/>
													</div>
													<div className="comment-content-wrapper">
														<h6 className="profile-name">
															<Link to="#">Howard Barton</Link>
														</h6>
														<p className="comment-des">
															Tag a fella that loves canna products (Via:
															@ents-plug )
														</p>
													</div>
												</div>
												<div className="single-comment-wrapper">
													<div className="single-comment-img-wrapper">
														<img
															src={comment2}
															className="comment-img"
															alt=""
														/>
													</div>
													<div className="comment-content-wrapper">
														<h6 className="profile-name">
															<Link to="#">robintallrothh</Link>
														</h6>
														<p className="comment-des">
															Billy from stranger things
														</p>
													</div>
												</div>
												<div className="single-comment-wrapper">
													<div className="single-comment-img-wrapper">
														<img
															src={comment3}
															className="comment-img"
															alt=""
														/>
													</div>
													<div className="comment-content-wrapper">
														<h6 className="profile-name">
															<Link to="#">lauren </Link>
														</h6>
														<p className="comment-des">
															Wow hairstyle so funny
														</p>
													</div>
												</div>
												<div className="single-comment-wrapper">
													<div className="single-comment-img-wrapper">
														<img
															src={comment4}
															className="comment-img"
															alt=""
														/>
													</div>
													<div className="comment-content-wrapper">
														<h6 className="profile-name">
															<Link to="#">michealholding2 </Link>
														</h6>
														<p className="comment-des">
															I've been wondering since long time, what is the
															exact full form of ENTS?
														</p>
													</div>
												</div>
											</div>
											<div className="post-comment-wrapper">
												<div className="emoji-wrapper">
													<figure>
														<img src={comment_emoji} alt="" />
													</figure>
												</div>
												<div className="post-content-wrapper">
													<input
														type="text"
														className="form-control"
														placeholder="Add Comment"
													/>
												</div>
												<div className="post-btn-wrapper">
													<button className="btn">Post</button>
												</div>
											</div>
										</div>
										<div className="post-feed-wrapper">
											<div className="feed-profile-wrapper">
												<div className="feed-img-wrapper">
													<figure>
														<img
															src={profile_img}
															className="img-fluid"
															alt=""
														/>
													</figure>
												</div>
												<div className="feed-name-wrapper">
													<h4>
														<Link to="#">Darrell Bailey</Link>
													</h4>
													<h6>2 hr</h6>
												</div>
												<div className="more-option-wrapper">
													<div className="dropdown">
														<button
															className="btn btn-secondary dropdown-toggle"
															type="button"
															id="dropdownMenuButton"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="4.584"
																height="22.022"
																viewBox="0 0 4.584 22.022"
															>
																<path
																	id="Combined_Shape"
																	data-name="Combined Shape"
																	d="M0,19.5a2.416,2.416,0,0,1,2.291-2.523A2.416,2.416,0,0,1,4.584,19.5a2.416,2.416,0,0,1-2.292,2.523A2.416,2.416,0,0,1,0,19.5Zm0-8.488A2.416,2.416,0,0,1,2.291,8.488a2.416,2.416,0,0,1,2.292,2.523,2.416,2.416,0,0,1-2.292,2.523A2.416,2.416,0,0,1,0,11.011ZM0,2.523A2.416,2.416,0,0,1,2.291,0,2.416,2.416,0,0,1,4.584,2.523,2.416,2.416,0,0,1,2.291,5.047,2.416,2.416,0,0,1,0,2.523Z"
																	fill="#7a7a7a"
																/>
															</svg>
														</button>
														<div
															className="dropdown-menu"
															aria-labelledby="dropdownMenuButton"
														>
															<Link className="dropdown-item" to="#">
																Report
															</Link>
															<Link className="dropdown-item" to="#">
																hide
															</Link>
															<Link className="dropdown-item" to="#">
																share
															</Link>
															<Link className="dropdown-item" to="#">
																copy link
															</Link>
															<Link className="dropdown-item" to="#">
																unfollow
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div
												className="feed-des-wrapper"
												style={{ marginBottom: "15px" }}
											>
												<button
													style={{ marginBottom: "5px" }}
													className="hash-tag"
												>
													#relax, #travel
												</button>
												<p style={{ marginBottom: "5px" }}>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</div>
											<div className="feed-img-wrapper">
												<figure>
													<img src={newsfeed2} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="likes-comment-share-wrapper">
												<div className="likes-wrapper">
													<button className="likes">
														<img src={likes} alt="" />
														<span className="total-like">1125</span>
													</button>
												</div>
												<div className="comment-wrapper">
													<button className="comment">
														<img src={comment} alt="" />
														<span className="total-comment">348</span>
													</button>
												</div>
												<div className="share-wrapper">
													<button className="share">
														<img src={share} alt="" />
														<span className="total-share">20</span>
													</button>
												</div>
											</div>
											<div className="post-comment-wrapper mt-0">
												<div className="emoji-wrapper">
													<figure>
														<img src={comment_emoji} alt="" />
													</figure>
												</div>
												<div className="post-content-wrapper">
													<input
														type="text"
														className="form-control"
														placeholder="Add Comment"
													/>
												</div>
												<div className="post-btn-wrapper">
													<button className="btn">Post</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-2"></div>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="images"
								role="tabpanel"
								aria-labelledby="images-tab"
							>
								<div className="row">
									{Postes?.map((postimg, index) => (
										<div key={index} className="col-lg-3 col-md-6">
											<div className="img-box">
												<figure>
													<img
														src={postimg?.Image}
														alt=""
														className="img-fluid"
													/>
												</figure>
											</div>
										</div>
									))}
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="Videos"
								role="tabpanel"
								aria-labelledby="Videos-tab"
							>
								<div className="row">
									{Postes?.map((postimg, index) => (
										<div key={index} className="col-lg-3 col-md-6">
											<div className="img-box">
												<figure>
													<img
														src={postimg?.Image}
														alt=""
														className="img-fluid"
													/>
												</figure>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Profile Sec End Here */}

			{/* Newsletter */}
			<Newslettter />
			{/* Newsletter */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default UserProfile;
