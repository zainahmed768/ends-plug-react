import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/profile.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EditUserInfo from "./EditUserInfo";
import UserInfo from "./UserInfo";

const EditProfile = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="edit-profile">
				<div className="container">
					<div className="topbar">
						<EditUserInfo />
					</div>
					<div className="row align-items-center">
						<div className="col-md-1"></div>
						<div className="col-md-10">
							<div className="edit-profile-form">
								<div className="close-btn">
									<Link to="/user-profile">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-x"
											viewBox="0 0 16 16"
										>
											<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
										</svg>
									</Link>
								</div>
								<form action="/user-profile">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Name</label>
												<input
													type="text"
													value="Darrell Bailey"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Username</label>
												<input
													type="text"
													value="Darrell007"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Favorite Strand</label>
												<input
													type="text"
													value="D.O.B"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Country</label>
												<input
													type="text"
													value="Gender (Optional)"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Website</label>
												<input
													type="text"
													value="Ents-plug.com"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Bio</label>
												<input
													type="text"
													value="Male"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Email</label>
												<input
													type="email"
													value="Yourname@mail.com"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Phone</label>
												<input
													type="text"
													value="+123 456 7899"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Password</label>
												<input
													type="password"
													value="12345678"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="button-group form-group">
												<button className="btn" type="submit">
													Save
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default EditProfile;
