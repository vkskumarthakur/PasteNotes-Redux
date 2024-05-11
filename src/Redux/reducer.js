const initialState = { todolist: [], viewType: "grid" };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };
    case "UPDATE_TO_DO":
      const restTodoList = state.todolist.filter(
        (item) => Number(item?.id) !== Number(action.payload.id)
      );
      return {
        ...state,
        todolist: [...restTodoList, action.payload],
      };
    case "DELETE_TO_DO":
      const restTodoAfterDeleted = state.todolist.filter(
        (item) => Number(item?.id) !== Number(action.payload.id)
      );
      return {
        ...state,
        todolist: restTodoAfterDeleted,
      };
    case "CHANGE_VIEW_TYPE":
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
