import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Infinity.css";
const Infinitys = () => {

  
    let offset=0

  const [pokeMon, setPokeMon] = useState([]);

  const pokenMoncallData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((data) => setPokeMon( oldData => [...oldData,...data.data.results]));
      offset+=10;
  };

  const handleScroll=(e)=>{

    //   console.log(e.target.documentElement.scrollTop)
    //   console.log('win:',window.innerHeight)
    //   console.log(e.target.documentElement.scrollHeight)

    if(e.target.documentElement.scrollTop+window.innerHeight+1>=e.target.documentElement.scrollHeight  ){
 
        pokenMoncallData()
    }


  }


  useEffect(() => {
    pokenMoncallData();

    window.addEventListener('scroll',handleScroll)
  }, []);

  return <>

    {
        pokeMon.map((ele,index)=>{
            return <div key={index} className='container'>

                 <h3>{index}:{ele.name}</h3>
            </div>
        })
    }


  </>;
};

export default Infinitys;
