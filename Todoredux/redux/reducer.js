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
         case"REMOVE_TODO_ITEM":
           const  newdata=store.item.filter((ele,index)=>{

             if(index===action.payload){
                 return false;
             }
             return true;
           }) 
           return {
               ...store,
               item:newdata
           }


     }
      
}