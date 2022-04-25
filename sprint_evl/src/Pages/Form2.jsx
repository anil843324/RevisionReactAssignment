import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/ContextForm";

import { useNavigate } from "react-router-dom";

const Form2 = () => {
 const navigate=useNavigate()
  const { isAuth, setIsAuth ,userData,setUserData , data, setData } = useContext(AuthContext);

//   const [formData,setFormData]=useState()
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");

//   let obj1 = {
//     state,
//     address,
//     pin,
//   };
       
   useEffect(()=>{
      if(!isAuth){
        navigate('/')
      }    
     
   },[])

   
    
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!state || !address || !pin) {
      alert("don't be over smart fill the data");
    } else {
      
      
       setIsAuth(!isAuth)
       setData([...data,{...userData, state,address,pin}])
       navigate('/users')
      console.log(data);
    }
  };

  return (
    <div className="App formdiv">
      <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        </div>
        <br />
           <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        </div>
        <br />

         <div>
        <label htmlFor="pin">Pin</label>
        <input
          type="number"
          name="pin"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
        />
        </div>
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form2;
