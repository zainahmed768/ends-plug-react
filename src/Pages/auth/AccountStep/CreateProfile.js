import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { upload_icon } from "../../../constant";

const CreateProfile = (props) => {
	const { NextStep } = props;
	const [images, setImages] = React.useState([]);
	const maxNumber = 69;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};
	const stopsubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<div className="login-card-wrapper Create-Your-Profile ">
				<div className="login-heading-wrapper">
					<h3>Create Your Profile</h3>
				</div>
				<div className="login-form-wrapper mt-5">
					<form action="" onSubmit={stopsubmit}>
						<div className="form-group">
							<div className="img-wrapper text-center">
								<ImageUploading
									multiple
									value={images}
									onChange={onChange}
									maxNumber={maxNumber}
									dataURLKey="data_url"
								>
									{({
										imageList,
										onImageUpload,
										onImageRemoveAll,
										onImageUpdate,
										onImageRemove,
										isDragging,
										dragProps,
									}) => (
										// write your building UI
										<div className="upload__image-wrapper">
											<button
												style={isDragging ? { color: "red" } : undefined}
												onClick={onImageUpload}
												{...dragProps}
											>
												<img src={upload_icon} />
											</button>
											{/* <button onClick={onImageRemoveAll}>
												Remove all images
											</button> */}
											<ruby>Upload a Pic</ruby>
											{imageList.map((image, index) => (
												<div key={index} className="image-item">
													<img src={image["data_url"]} alt="" width="100" />
													{/* <div className="image-item__btn-wrapper">
														<button onClick={() => onImageUpdate(index)}>
															i
														</button>
														<button onClick={() => onImageRemove(index)}>
															Remove
														</button>
													</div> */}
												</div>
											))}
										</div>
									)}
								</ImageUploading>
							</div>
						</div>
						<div className="form-group ">
							<input
								type="text"
								placeholder="User name"
								className="form-control"
							/>
						</div>
						<div className="form-group ">
							<input
								type="text"
								placeholder="Password"
								className="form-control"
							/>
						</div>
						<div className="form-group ">
							<input
								type="text"
								placeholder="Confirm Password"
								className="form-control"
							/>
						</div>
						<div className="form-group text-center">
							<button onClick={NextStep} className="btn">
								Next
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateProfile;
