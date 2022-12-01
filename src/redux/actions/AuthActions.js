import { toast } from "react-toastify";
import {
	forgotPasswordApi,
	forgotPasswordOtp,
	postSignIn,
	postSignUp,
	ResetPasswordApi,
} from "../../network/Network";
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_ERROR,
	SET_PASSWORD_REQUEST,
	SET_PASSWORD_SUCCESS,
	SET_PASSWORD_ERROR,
	LOGOUT,
	USER_TOKEN,
} from "../Types";
import { setError } from "../actions/AlertAction";
import { responses, responsesLogin } from "../../constant/ConstantFunction";

export const signUp = (data, Navigate, setBtnLoading) => (dispatch) => {
	new Promise(async (resolve, reject) => {
		dispatch({ type: SIGNUP_REQUEST });
		postSignUp(data)
			.then((res) => {
				console.log(res);
				setBtnLoading(false);
				Navigate("/login");
				dispatch(setError(responses(res)));
				dispatch({ type: SIGNUP_SUCCESS, payload: res?.data?.data });
				toast.success("Successfully Signup");
				dispatch(setError("success", "Successfully Signup!!!"));
				return resolve(true);
			})
			.catch((err) => {
				console.log("Error", err.response);
				setBtnLoading(false);
				if (err?.response?.data?.errors?.email[0]) {
					toast.error(err?.response?.data?.errors?.email[0]);
				}
				if (err?.response?.data?.errors?.password[0]) {
					toast.error(err?.response?.data?.errors?.password[0]);
				}
				if (
					err?.response?.data?.statusCode == "400" &&
					err?.response?.data?.errors?.zip[0]
				) {
					toast.error(err?.response?.data?.errors?.zip[0]);
				}
				if (
					err?.response?.data?.statusCode == "400" &&
					err?.response?.data?.errors?.password[0]
				) {
					toast.error(err?.response?.data?.errors?.password[0]);
				}
				// dispatch(setError(responses(err)));
				console.log(err?.response?.data?.errors[0]?.message);
				// toast.error(err?.response?.data?.errors[0]?.message);
				return reject(false);
			})
			.finally(() => {
				dispatch({ type: SIGNUP_ERROR });
			});
	});
};

export const login =
	(data, cb = () => {}) =>
	(dispatch) =>
		new Promise(async (resolve, reject) => {
			dispatch({ type: LOGIN_REQUEST });
			postSignIn(data)
				.then((res) => {
					console.log(res);
					dispatch({
						type: LOGIN_SUCCESS,
						payload: res?.data?.response?.data?.user,
					});
					dispatch({
						type: USER_TOKEN,
						payload: res?.data?.response?.data?.accessToken,
					});
					// dispatch(setError(responsesLogin(res)));
					return resolve(true);
				})
				.catch((err) => {
					console.log("Login", err);
					if (err?.response?.data?.errors[0]) {
						toast.error(err?.response?.data?.errors[0]);
					}
					// dispatch(setError(responses(err)));
					// toast.error(err?.response?.data?.payload?.message);
					dispatch({ type: LOGIN_ERROR });
					return reject(false);
				});
		});

export const logout = (payload) => {
	return {
		type: LOGOUT,
		payload,
	};
};

export const SetResetPassword = (data, Navigate) => (dispatch) => {
	new Promise(async (resolve, reject) => {
		dispatch({ type: SET_PASSWORD_REQUEST });
		ResetPasswordApi(data)
			.then((res) => {
				toast.success("Your password has been reset");
				dispatch({ type: SET_PASSWORD_SUCCESS });
				Navigate("/login");
				return resolve(true);
			})
			.catch((err) => {
				toast.error(err?.response?.data?.payload?.message);
				dispatch({ type: SET_PASSWORD_ERROR });
				return reject(false);
			});
	});
};

export const forgotPassword = (data) => (dispatch) => {
	new Promise(async (resolve, reject) => {
		dispatch({ type: FORGOT_PASSWORD_REQUEST });
		forgotPasswordApi(data)
			.then((res) => {
				dispatch(setError(responses(res)));
				dispatch({ type: FORGOT_PASSWORD_SUCCESS });
				console.log(res);
				toast.success(res?.data?.message);
				return resolve(true);
			})
			.catch((err) => {
				dispatch(setError(responses(err)));
				toast.error(err?.response?.data?.payload?.message);
				dispatch({ type: FORGOT_PASSWORD_ERROR });
				return reject(false);
			});
	});
};

export const forgotPasswordOtpVerify =
	(data, param, Navigate) => (dispatch) => {
		new Promise(async (resolve, reject) => {
			dispatch({ type: FORGOT_PASSWORD_REQUEST });
			forgotPasswordOtp(data)
				.then((res) => {
					dispatch(setError(responses(res)));
					dispatch({ type: FORGOT_PASSWORD_SUCCESS });
					toast.info(res?.data?.message);
					console.log(res);
					if (res?.data?.statusCode == 200) {
						Navigate("/new-password", { state: param });
					}

					// toast.success("Email has been sent to your email address");
					return resolve(true);
				})
				.catch((err) => {
					toast.error(err?.response?.data?.payload?.message);
					dispatch(setError(responses(err)));
					dispatch({ type: FORGOT_PASSWORD_ERROR });
					return reject(false);
				});
		});
	};
