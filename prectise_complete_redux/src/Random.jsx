import React, { useEffect, useState } from "react";

import "./componets/Todo.css";
import Randomshow from "./Randomshow";
const Random = () => {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");

  const [toggle, setToggle] = useState(false);



  //   get data from json
  useEffect(() => {
    fetch("http://localhost:8000/lists", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [toggle]);

  //  add data to json

  let postData = async () => {
    if (inputData === "") {
      alert("don't be over smart fill item");
    } else {
      let obj = { title: inputData };

      let res = await fetch("http://localhost:8000/lists", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      console.log(res1);
      setToggle(!toggle);
      setInputData("");
    }
  };

  //  remove data

  

 

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter items"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <button onClick={() => postData()}>Add</button>
      </div>

      {list.map((ele) => {
        return (
           <Randomshow ele={ele } setToggle={setToggle} toggle={toggle} />
        );
      })}
    </>
  );
};

export default Random;
