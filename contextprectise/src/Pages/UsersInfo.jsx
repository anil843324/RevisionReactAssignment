import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
 
import { useNavigate } from 'react-router-dom';

const UsersInfo = () => {

   const navigate=useNavigate();
 const {userId}=useParams();

 const [userData,setUserData]=useState({});


 useEffect(() => {
  
   fetch(`https://reqres.in/api/users/${userId}`)
   .then((response)=> response.json() )
   .then((data)=> setUserData(data.data))
  
 },[]);
 

  return (
   <>
      <div style={{ border: "1 px solid red" }}>
          <p>{userData.first_name}</p>
          <p>{userData.email}</p>
          <img src={userData.avatar} alt="not found"/>
        </div>
         <h3 onClick={()=> {navigate('/users')}}  style={{cursor:"pointer"}} > Back to user page </h3> 
      
       

   </>
  )
}

export default UsersInfo