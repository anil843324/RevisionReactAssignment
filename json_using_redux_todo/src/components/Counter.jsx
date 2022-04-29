import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { increment,decrement } from '../redux/counter/action'




const Counter = () => {


 const dispatch=useDispatch()
  
 const count=useSelector((state)=> state.counterReducers)

  return (
   <>

          <h1>Counter {count}</h1>
         <button onClick={()=> dispatch(increment())}>Increment</button>
         <button onClick={()=> dispatch(decrement())}>Decrement</button>

   </>
  )
}

export default Counter