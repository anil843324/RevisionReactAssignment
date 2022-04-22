export const  addItem=(data)=>({
    type:'ADD_TODO_ITEM',
    payload:data,
})

export const  removeItem=(data)=>({
    type:'REMOVE_TODO_ITEM',
    payload:data,
})
