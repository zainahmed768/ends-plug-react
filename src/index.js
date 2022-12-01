import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import AuthReducer from "./redux/reducers/AuthReducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
	key: "authType",
	storage: storage,
	whitelist: ["AuthReducer", "CartReducer"],
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		AuthReducer,
	}),
);

const store = createStore(
	persistedReducer,
	composeEnhancer(applyMiddleware(...[thunk])),
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
