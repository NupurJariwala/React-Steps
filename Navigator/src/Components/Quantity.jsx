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

function Quantity() {
  const [state, dispatch] = useReducer(reducer, intialstate);
  console.log(state);

  return (
    <div>
      <p>
       
        Quantity :
        
      </p>

      <button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        style={{ width: "30px" }}
      >
        +
      </button>
      <button
        disabled
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        style={{ width: "30px", color: "blue", border: "none" }}
      >
        {state.counter}
      </button>
      <button
        disabled={state.counter == 0}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
        style={{ width: "30px" }}
      >
        -
      </button>
    </div>
  );
}
export default Quantity;
