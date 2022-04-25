import React from 'react'

import { useSelector } from 'react-redux'
import "./Todo.css"
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions'

import {removeTodo} from "../actions"
const Todolist = () => {

  const item=useSelector( state=> state.todoReducers.list )
   const dispatch=useDispatch();

  return (
    <>
    
       {
       item.map((list)=>{
         return (
          <div className='outputdiv' key={list.id}   >
          <div className="showdiv">
           <h4>{list.data}</h4>
           <button onClick={ ()=>dispatch(deleteTodo(list.id))}>Remove</button>
           
           </div>
           </div>
         
         )
        
       })
     }   
    
     <button onClick={()=> dispatch(removeTodo())}>Remove All List</button>
    </>
  )
}

export default Todolist