import {
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	SIGNIN,
	SIGNUP,
	AUTH,
} from "./Endpoint";
import {
	doGet,
	doPost,
	doPatch,
	doDelete,
	doPostProfilePictureUpload,
} from "./Config";
export const postSignUp = (data) => {
	return doPostProfilePictureUpload(`${SIGNUP}`, data);
};

export const postSignIn = (data) => {
	return doPost(`${SIGNIN}`, { ...data });
};

export const forgotPasswordApi = (data) => {
	return doPost(`${FORGOT_PASSWORD}`, data);
};

export const ResetPasswordApi = (data) => {
	return doPost(`${RESET_PASSWORD}`, data);
};

export const forgotPasswordOtp = (data) => {
	return doPost(`${AUTH}${RESET_PASSWORD}`, data);
};
