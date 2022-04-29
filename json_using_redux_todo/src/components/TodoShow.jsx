import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getTodoItems,
  getTodoCompteItems,
} from "../redux/todo/action";
import "./All.css";
import CompleteDoto from "./CompleteDoto";
const TodoShow = () => {
  const items = useSelector((state) => state.todoReducer.list);

  console.log(items);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  // For delte data from json server

  // const fetchTodos=()=>{
  //   fetch("http://localhost:8000/lists")
  //   .then((response) => response.json())
  //   .then((data) => dispatch(getItems(data)));
  //  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/lists/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => dispatch(getTodoItems()));
  };

  // Handle complete

  const handleComplete = (data,id) => {
    fetch("http://localhost:8000/complteLists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data,
      }),
    }).then( ()=>dispatch(getTodoItems(),handleDelete(id,dispatch(getTodoCompteItems()))));
     
    

  };




  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="search items"
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />

      <div className="BigContainer">
        <div>
          <h3>Todo Items</h3>
          {items
            .filter((ele) => ele.title.toLowerCase().includes(searchKey))
            .map((ele, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "310px",
                    margin: "auto",
                    marginTop: "20px",
                    alignItems: "center",
                    border: "1px solid black",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    // height: "50px",
                    // marginTop: "5px",
                  }}
                >
                  <h4>{ele.title}</h4>
                  <div>
                    <button onClick={() => handleComplete(ele.title,ele.id)}>
                      Complete
                    </button>
                    <button onClick={() => handleDelete(ele.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
        </div>

        <CompleteDoto />
      </div>
    </div>
  );
};

export default TodoShow;
