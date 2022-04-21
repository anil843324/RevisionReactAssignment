import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Users = () => {

  const [users,setUsers]=useState([]);
  const { isAuth ,token} = useContext(AuthContext);


   useEffect(() => {
    fetch('https://reqres.in/api/users?page=2',{
      headers:{
        Auth:token,
      }
    })
    .then((response)=>response.json())
    .then((data)=> setUsers(data.data))

  
    
   }, [])
   


  if (!isAuth) {
    return (
      <>
        <div>
          you'r not authoenticated.
          <Link to="/login">Please lgoin</Link>
        </div>
      </>
    );
  }

  return <>
  
  <div>
      <h1>I'm in Users page</h1>
      {users.map((user) => (
        <div style={{ border: "1 px solid red" }}>
          <p>{user.first_name}</p>
          <p>{user.email}</p>
          <img src={user.avatar} alt="not found"/>
          <Link to={`/users/${user.id}`}>More details...</Link>
        </div>
      ))}
    </div>
  
  
  </>;
};

export default Users;
