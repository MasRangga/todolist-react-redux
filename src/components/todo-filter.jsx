import { useDispatch } from "react-redux";
import { getActiveTodo, getAllTodo, getCompleteTodo, setTodosView } from "../redux/action/action-todo";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

export default function FilterTodo() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    statusAll: true,
    statusActive: false,
    statusComplete: false,
  });

  const handleAll = () => {
    dispatch(getAllTodo());
    setStatus({
      statusAll: true,
      statusActive: false,
      statusComplete: false,
    });
  };

  const handleActive = () => {
    dispatch(getActiveTodo());
    setStatus({
      statusAll: false,
      statusActive: true,
      statusComplete: false,
    });
  };

  const handleComplete = () => {
    dispatch(getCompleteTodo());
    setStatus({
      statusAll: false,
      statusActive: false,
      statusComplete: true,
    });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className="my-5 flex gap-x-4">
  <motion.div onClick={handleAll} whileHover={{ scale: 1.1 }} className={`badge ${status.statusAll ? 'badge-accent' : 'badge-ghost'} cursor-pointer bg-blue-300`}>
    All
  </motion.div>
  <motion.div onClick={handleActive} whileHover={{ scale: 1.1 }} className={`badge ${status.statusActive ? 'badge-accent' : 'badge-ghost'} cursor-pointer bg-green-300`}>
    Active
  </motion.div>
  <motion.div onClick={handleComplete} whileHover={{ scale: 1.1 }} className={`badge ${status.statusComplete ? 'badge-accent' : 'badge-ghost'} cursor-pointer bg-purple-300`}>
    Completed
  </motion.div>
</motion.div>

  );
}