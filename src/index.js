import React from "react";
import ReactDOM from "react-dom";
// import the provide in order to use Redux
import { Provider } from "react-redux";
// use the Redux store here
import store from "./store/index";

import "./index.css";
import App from "./App";

// we want the entire project to be able to use Redux, so we need to provide at the highest level of the project which is here
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
