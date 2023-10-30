export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo(id) {
  return {
    type: "EDIT_TODO",
    payload: {
      id,
    },
  };
}

export function editBodyTodo(value, id, isEdit) {
  return {
    type: "EDIT_BODY_TODO",
    payload: {
      id,
      value,
      isEdit,
    },
  };
}

export function editStatusTodo(id) {
  return {
    type: "EDIT_STATUS_TODO",
    payload: id,
  };
}

export function getActiveTodo() {
  return {
    type: "GET_ACTIVE_TODO",
  };
}

export function getCompleteTodo() {
  return {
    type: "GET_COMPLETE_TODO",
  };
}

export function getAllTodo() {
  return {
    type: "GET_ALL_TODO",
  };
}

export function setTodosView(todos) {
  return {
    type: "SET_TODOS_VIEW",
    payload: todos,
  };
}
