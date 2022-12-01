import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/profile.css";
import ProfileInfo from "./ProfileInfo";
import {
	postimg1,
	postimg2,
	postimg3,
	postimg4,
	postimg5,
	postimg6,
} from "../../constant";

const ProfilePost = () => {
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
					<ProfileInfo />
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

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default ProfilePost;
