import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoCompteItems } from "../redux/todo/action";
import "./All.css"
const CompleteDoto = () => {
  const dispatch = useDispatch();

  const cItems = useSelector((state) => state.todoReducer.completList);

  useEffect(() => {
    dispatch(getTodoCompteItems());
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/complteLists/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => dispatch(getTodoCompteItems()));
  };

  return (
    <div className="container-complete-show"> 
      <h3>Complete Todo</h3>
       {cItems.map((ele, index) => {
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
              <button onClick={() => handleDelete(ele.id)}>Remove</button>
            </div>
          </div>
        );
      })} 
    </div>
  );
};

export default CompleteDoto;
