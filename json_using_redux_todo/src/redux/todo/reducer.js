const initialState = {
  list: [],
  completList:[]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        list:action.payload,
      };
      case "GET_COMPETE_ITEMS":
      return {
        ...state,
        completList: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
