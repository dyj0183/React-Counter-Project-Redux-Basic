import { createStore } from "redux";

// set up reducer, also set default state to be an object
const counterReducer = (state = { counter: 0 }, action) => {
    console.log(state);
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}

	// if the action doesn't match, simply return the old state
	return state;
};

// pass the counterReducer into createStore function
const store = createStore(counterReducer);


export default store;
