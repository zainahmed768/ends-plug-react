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

const initialState = {
	isLogin: false,
	loading: false,
	// forgotLoading: false,
	// setPasswordLoading: false,
	users: {},
	token: "",
	categories: [],
	allStates: [],
	availableFranchise: [],
	siteSettings: [],
	investmentLevels: [],
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST: {
			return Object.assign({}, state, {
				loading: true,
			});
		}
		case LOGIN_SUCCESS: {
			return Object.assign({}, state, {
				users: action.payload,
				loading: false,
				isLogin: true,
			});
		}
		case LOGIN_ERROR: {
			return Object.assign({}, state, {
				loading: false,
				isLogin: false,
			});
		}
		case USER_TOKEN: {
			return Object.assign({}, state, {
				token: action.payload,
			});
		}
		case SIGNUP_REQUEST: {
			return Object.assign({}, state, {
				loading: true,
			});
		}
		case SIGNUP_SUCCESS: {
			return Object.assign({}, state, {
				users: action.data,
				loading: false,
			});
		}
		case SIGNUP_ERROR: {
			return Object.assign({}, state, {
				loading: false,
				isLogin: false,
			});
		}
		case FORGOT_PASSWORD_REQUEST: {
			return Object.assign({}, state, {
				forgotLoading: true,
				isSuccess: false,
			});
		}
		case FORGOT_PASSWORD_SUCCESS: {
			return Object.assign({}, state, {
				forgotLoading: false,
				isSuccess: true,
			});
		}
		case FORGOT_PASSWORD_ERROR: {
			return Object.assign({}, state, {
				forgotLoading: false,
				isSuccess: false,
			});
		}
		case SET_PASSWORD_REQUEST: {
			return Object.assign({}, state, {
				setPasswordLoading: true,
			});
		}
		case SET_PASSWORD_SUCCESS: {
			return Object.assign({}, state, {
				setPasswordLoading: false,
			});
		}
		case SET_PASSWORD_ERROR: {
			return Object.assign({}, state, {
				setPasswordLoading: false,
			});
		}
		case LOGOUT:
			return {
				users: null,
				isLogin: false,
			};
		// Franchise
		default:
			return state;
	}
};

export default AuthReducer;
