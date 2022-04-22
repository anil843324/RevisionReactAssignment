
import { createContext, useState } from "react";

export  const Toggle=createContext();


export const ToggleProvider =({children})=>{

    const [toggle,setToggle]=useState(false);
    
    const Toggler =()=>{

        toggle ?setToggle(false):setToggle(true)
    }

   return <Toggle.Provider
   value={{
      Toggler,
      toggle,
      setToggle 

   }}
   >
        
 {
     children
 }

   </Toggle.Provider>



}
