import classes from "./Counter.module.css";
// import this to use Redux here
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	// useSelector will give me the most updated counter whenever the value gets updated
	// subscribe the store to get data
	const counter = useSelector((state) => state.counter);

	// returns a dispatch function that we can call
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

  // increase the counter value dynamically
	const increaseHandler = () => {
    // we are dispatching an "action object" here
    dispatch({ type: "increase", amount: 5})

  };

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
