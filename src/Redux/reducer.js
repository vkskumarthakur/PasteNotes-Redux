import notesdata from "../components/NotesData";
const initialState = { todolist: notesdata, viewType: "grid" };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return {
        ...state,
        todolist: [action.payload, ...state.todolist],
      };
    case "UPDATE_TO_DO":
      const updatedTodoIndex = state.todolist.findIndex(
        (item) => Number(item?.id) === Number(action.payload.id)
      );
      if (updatedTodoIndex !== -1) {
        const updatedTodoList = [...state.todolist];
        updatedTodoList[updatedTodoIndex] = {
          ...updatedTodoList[updatedTodoIndex],
          ...action.payload,
        };
        return {
          ...state,
          todolist: updatedTodoList,
        };
      }
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
