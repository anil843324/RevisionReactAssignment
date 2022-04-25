
// const fs =require("fs");
const initialData = {
   list:[]
};

const  getData= async()=>{

  const data=await fetch("http://localhost:8000/lists", {
    method: "GET",
  })
  let res1 = await data.json();
  // console.log(res1)
  //  return res1
 return res1
}

getData().then((res)=>{
  initialData.list=[...initialData.list,...res];
})

console.log(initialData)

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case"DELETE_TODO":

   const newList=state.list.filter((elem)=>elem.id!==action.payload)

    return {
      ...state,
      list:newList
    };
    case"REMOVE_TODO":
    return{
      ...state,
      list:[]
    }

    default:
      return state;
  }
};

export {todoReducers} 


// const { id, data } = action.payload;
//       return {
//         ...state,
//         list: [
//           ...state.list,
//           {
//             id: id,
//             data: data,
//           },
//         ],
//       };