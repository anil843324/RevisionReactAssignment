import React, { useState } from "react";

import "./Calculator.css"
import {
  increment,
  decrement,
  add,
  divide,
  multiply,
  subtract,
} from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Calculator = () => {
  const [inputData, setInputData] = useState();
  const dispatch = useDispatch();

  const count = useSelector((state) => state.calculatorReducers);

  return (
    <div className="bigconatiner">

       <div className="showDiv">
      <h3> Calculator</h3>
      <div>
        <h2>{count}</h2>
        <div className="btn_divincrent">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>

       </div>

      <div>
         
         <div className="inputdiv">
        <h4>Enter Number</h4>
        <input
          type="number"
          value={inputData}
          placeholder="x"
          onChange={(event) => setInputData(event.target.value)}
        />
        </div>
        <div className="btndiv">
        <button    onClick={() => dispatch(add(+inputData),setInputData(""))}>Add</button>
        <button onClick={() => dispatch(multiply(+inputData),setInputData(""))}>
          Multiply
        </button>
        <button onClick={() => dispatch(subtract(+inputData),setInputData(""))}>
          Subtract
        </button>
        <button onClick={() => dispatch(divide(+inputData),setInputData(""))}>
          Divide
        </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
