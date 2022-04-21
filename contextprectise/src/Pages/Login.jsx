import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const { login } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

  

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const submit = (event) => {
    event.preventDefault();


    if(userDetails.email !=="" && userDetails.password!==""){

       fetch('https://reqres.in/api/login',{
        method:"POST",
        body: JSON.stringify(userDetails),
         headers:{
          "Content-Type": "application/json",
         },
       })
       .then((res)=> res.json())
       .then((data)=> {

        console.log(data)
        login(data.token)
       })

       alert("login successful")
       navigate('/users')
       
    }else{

      alert("Invalid login credentials")
    }

  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <h3>Login Page</h3>
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userDetails.email}
            placeholder="Email"
          />

          <br />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
            placeholder="Password"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
