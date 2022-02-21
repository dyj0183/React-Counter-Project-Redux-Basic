import { createStore } from "redux";

// set up reducer, also set default state to be an object
// we can set up multiple states in the state object like this
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
	console.log(state);
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	}

	// dynamically increase the counter based on what was set up in the counter.js
	if (action.type === "increase") {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	// when users click on the toggle button to show and hide the counter
	if (action.type === "toggle") {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	// if the action doesn't match, simply return the old state
	return state;
};

// pass the counterReducer into createStore function
const store = createStore(counterReducer);

export default store;
