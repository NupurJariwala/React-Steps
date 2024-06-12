import { useReducer } from "react";
const intialstate = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };

    case "decrement":
      return { counter: state.counter - action.payload };

    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, intialstate);
  console.log(state);

  return (
    <>
      <h2>{state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Add
      </button>
      <button
        disabled={state.counter == 0}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Sub
      </button>
    </>
  );
}
export default Counter;
