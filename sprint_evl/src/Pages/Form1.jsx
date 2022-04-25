import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/ContextForm";

 import "./Form.css"


const Form1 = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth , setUserData} = useContext( AuthContext);

  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");

  let obj = {
    name,
    age,
    dob,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !age || !dob) {
      alert("don't be over smart fill the data");
    } else {

         setIsAuth(!isAuth)
         setUserData(obj)
      navigate("/form2");
      console.log(obj);
    }
  };

  return (
    <div className="formdiv">
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        </div>
        <br />
        <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="text"
          name="dob"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
        </div>
        <br />
        <input type="submit" value="Next" className="buttont" />
      </form>
    </div>
  );
};

export default Form1;
