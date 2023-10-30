import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/action-todo";
import { motion } from "framer-motion";

const InputTodo = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      setError(false);
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex my-5 gap-x-4">
        <input
            id="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your to do....."
            class="input border-4 border-blue-600 focus:border-accent-400 hover:shadow-lg transition-all duration-300 active:bg-accent-100 w-full"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
         Add
        </motion.button>
      </div>
      {error && (
        <div className="text-red-500 font-semibold">
          Oops! Please add a todo.
        </div>
      )}
    </motion.form>
  );
};

export default InputTodo;