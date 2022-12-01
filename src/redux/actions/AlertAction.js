import { ALERTS, SET_ALERTS } from "../Types";

export const makeAlert = (obj) => {
	return {
		type: ALERTS,
		payload: obj,
	};
};

export const resetAlerts = () => {
	return {
		type: SET_ALERTS,
		payload: null,
	};
};

export const setError = (arr) => {
	return (dispatch) => {
		dispatch(makeAlert(arr));
		setTimeout(() => {
			dispatch(resetAlerts());
		}, 50000);
	};
};
