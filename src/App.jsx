
import FilterTodo from "./components/todo-filter";
import Header from "./components/header-todo";
import InputTodo from "./components/todo-input";
import Todos from "./components/todoss";


function App() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Header />
      <InputTodo />
      <FilterTodo />
      <Todos />
    </div>
  );
}

export default App;
