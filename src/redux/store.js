import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducerss";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
