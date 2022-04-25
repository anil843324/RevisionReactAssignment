import React, { useState } from 'react'

import { addTodo } from '../actions'

import { useDispatch } from 'react-redux'

const AddTodo = () => {

    const [inputitem,setInputItem]=useState('')

    const dispatch=useDispatch();
    

  return (
    <>
    
      <div>

        <input type="text" value={inputitem} placeholder='Enter item' onChange={ (e)=>{setInputItem(e.target.value)} } />
        <button onClick={()=> dispatch(addTodo(inputitem),setInputItem(""))}  >Add</button>

      </div>
   
    
    </>
  )
}

export default AddTodo