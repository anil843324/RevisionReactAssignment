export const addItem = (data) => ({
  type: "ADD_TODO",
  payload: data,
});

export const delteItem = (index) => ({
  type: "DELTE_ITEM",
  payload: index,
});
export const getItems = (listData) => ({
  type: "GET_ITEMS",
  payload: listData,
});
// complete data
export const getCompleteItems = (competeData) => ({
  type: "GET_COMPETE_ITEMS",
  payload: competeData,
});


export const getTodoItems = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/lists")
      .then((response) => response.json())
      .then((data) => dispatch(getItems(data)));
  };
};

// for complete items thunk
export const getTodoCompteItems = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/complteLists")
      .then((response) => response.json())
      .then((data) => dispatch(getCompleteItems(data)));
  };
};
