const initialData = 0;

const calculatorReducers = (state = initialData, action) => {
  switch (action.type) {
    case "INCREMENT":
        
         return state+1;
    case "DECREMENT":
      return  state-1;
    case "ADDITION":
        
       return state+ action.payload;
    case "MULTIPLY":
      return state*action.payload;
    case "SUBTRACT":
      return state-action.payload;
    case "DIVIDE":
      return  state/action.payload;
    default:
      return state;
  }
};

export default calculatorReducers;
