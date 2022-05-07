import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import style_i from "./Info.module.css"
const Info = () => {
 
     const [infdata,setInfoData]=useState({})

    const {id}=useParams()
    useEffect(() => {
        fetch(`http://localhost:8080/library/${id}`)
        .then((response) => response.json())
        .then((Data) =>  setInfoData(Data));
     }, [])

    console.log(id)
  return (
    <>
        
        <div key={infdata.id} className={style_i.card} >
                       
                       <img src={infdata.bimage} alt="not found" />
                        
                        <div className={style_i.childcard}>
                             
                             <h2>{infdata.author}</h2>
                             <h3>{infdata.title}</h3>
                             <p>{infdata.description}</p>
                            
                             <h4 className={style_i.rating}>Rating: {infdata.rating}</h4>

                             <h4> ₹ {infdata.price}</h4>
                     
                          
                        </div>
                         

                    </div>






    </>
  )
}

export default Info