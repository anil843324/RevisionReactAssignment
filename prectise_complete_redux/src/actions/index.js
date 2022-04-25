export const addTodo = (data) => ({
  type: "ADD_TODO",
  payload: {
    data: data,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const removeTodo = () => ({
  type: "REMOVE_TODO",
});
