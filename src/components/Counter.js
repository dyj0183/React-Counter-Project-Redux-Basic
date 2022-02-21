import classes from './Counter.module.css';
// import this to use Redux here
import { useSelector } from 'react-redux';

const Counter = () => {
  // useSelector will give me the most updated counter whenever the value gets updated
  // subscribe the store to get data
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
