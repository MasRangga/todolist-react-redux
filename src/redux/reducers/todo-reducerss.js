const initialState = {
  todos: [
    { id: 1, value: "Cooking plans", completed: false, isEdit: false },
    { id: 2, value: "Visit grandma's house", completed: false, isEdit: false },
    { id: 3, value: "Purchase water", completed: false, isEdit: false },
    { id: 4, value: "I want to go jogging", completed: false, isEdit: false },
  ],
  todosView: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
        completed: false,
        isEdit: false,
      };
      const updatedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: updatedTodos,
      };

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };

    case "EDIT_TODO":
      const editedTodoId = action.payload.id;
      const editedTodos = state.todos.map((todo) => {
        if (todo.id === editedTodoId) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: editedTodos,
      };

    case "EDIT_BODY_TODO":
      const { id, value, isEdit } = action.payload;
      const editedTodoBody = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            value,
            isEdit,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: editedTodoBody,
      };

    case "EDIT_STATUS_TODO":
      const editedTodoStatus = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      return {
        ...state,
        todos: editedTodoStatus,
      };

    case "GET_ACTIVE_TODO":
      const activeTodos = state.todos.filter((todo) => !todo.completed);
      return {
        ...state,
        todosView: activeTodos,
      };

    case "GET_COMPLETE_TODO":
      const completedTodos = state.todos.filter((todo) => todo.completed);
      return {
        ...state,
        todosView: completedTodos,
      };

    case "GET_ALL_TODO":
      return {
        ...state,
        todosView: state.todos,
      };

    case "SET_TODOS_VIEW":
      return {
        ...state,
        todosView: action.payload,
      };

    default:
      return state;
  }
}

export default todosReducer;
