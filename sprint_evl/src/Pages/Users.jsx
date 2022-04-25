import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/ContextForm";

const Users = () => {
  const { data } = useContext(AuthContext);
 const navigate=useNavigate()
  console.log(data);

  return (
    <div >
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>D.O.B</th>
            <th>State</th>
            <th>Address</th>
            <th>Pincode</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ele) => {
            return (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.dob}</td>
                <td>{ele.state}</td>
                <td>{ele.address}</td>
                <td>{ele.pin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
       <button onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Users;
