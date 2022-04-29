import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {getItems, getTodoItems } from "../redux/todo/action";
import TodoShow from "./TodoShow";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");


//  const fetchTodos=()=>{
//   fetch("http://localhost:8000/lists")
//   .then((response) => response.json())
//   .then((data) => dispatch(getItems(data)));
//  }


  const handleSubmit = () => {
    fetch("http://localhost:8000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputData,
      }),
    })
      .then(()=>{
        dispatch(getTodoItems());
      })
      setInputData('')
  };

  return (
    <div>
      <h3>Todo list</h3>
      <input
        type="text"
        value={inputData}
        placeholder="Add items"
        onChange={(event) => setInputData(event.target.value)}
      />
      <button onClick={handleSubmit}>Add Items</button>

      <TodoShow />
    </div>
  );
};

export default AddTodo;
