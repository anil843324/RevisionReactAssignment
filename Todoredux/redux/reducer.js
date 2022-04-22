const initialState={
    item:[],
}


export const reducer =(store=initialState,action)=>{

     switch (action.type){

         case"ADD_TODO_ITEM":
         return{
             ...store,
             item:[...store.item,action.payload]
         }
     }
      
}