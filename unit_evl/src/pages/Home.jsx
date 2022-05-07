import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import style_h from "./Home.module.css"

const Home = () => {
  
    const {id}=useParams()
    const [data,setData]=useState([])
   
    const navigate=useNavigate()

     useEffect(() => {
        fetch("http://localhost:8080/library")
        .then((response) => response.json())
        .then((Data) =>  setData(Data));
     }, [])
     
      
  

    console.log(id);





  return (
    <>
     
      <div className={style_h.container}>

            {
               data.map((ele)=>{

                  return(
                      <div key={ele.id} className={style_h.card} onClick={()=>navigate(`info/${ele.id}`)} >
                       
                         <img src={ele.bimage} alt="not found" />
                          
                          <div className={style_h.childcard}>
                               
                               <h3>{ele.title}</h3>
                               <h4> Rs.{ele.price}</h4>
                            
                          </div>
                           

                      </div>
                  )


               })


            }








      </div>
        



    </>
  )
}

export default Home