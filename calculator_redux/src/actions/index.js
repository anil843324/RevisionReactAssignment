export const increment=()=>({

    type:"INCREMENT"
})

export const decrement=()=>({

    type:"DECREMENT"
})
export const add=(data)=>({

    type:"ADDITION",
    payload:data
})

export const multiply=(data)=>({

    type:"MULTIPLY",
    payload:data
})

export const subtract=(data)=>({

    type:"SUBTRACT",
    payload:data
})

export const divide=(data)=>({

    type:"DIVIDE",
    payload:data
})

