
import { IconPencil, IconTrashXFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editBodyTodo, editStatusTodo, editTodo, setTodosView} from "../redux/action/action-todo";
import { useEffect } from "react";

export default function Todos() {
  const { todos, todosView } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleEditBody = (value, id, isEdit) => {
    dispatch(editBodyTodo(value, id, isEdit));
  };

  const handleStatus = (id) => {
    dispatch(editStatusTodo(id));
  };

  useEffect(() => {
    dispatch(setTodosView(todos));
  }, [todos]);

  return (
    <div className="flex flex-col">
      {Array.isArray(todosView) &&
        todosView.map((todo) => (
          <div key={todo.id} className="form-control flex flex-col justify-between items-center border p-2">
            {!todo.isEdit && (
              <div className="flex w-full justify-between">
                <label className="label cursor-pointer flex px-2 gap-x-4 flex-1 justify-start">
                  <input
                    id={`checkbox-${todo.id}`}
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    onChange={() => handleStatus(todo.id)}
                    checked={todo.completed}
                  />
                  <span className={`label-text break-all ${todo.completed && "line-through"}`}>{todo.value}</span>
                </label>
                <div className="flex items-center px-2 gap-x-4">
                  <IconPencil onClick={() => handleEdit(todo.id)} className="cursor-pointer text-blue-600" />
                  <IconTrashXFilled onClick={() => handleDelete(todo.id)} className="cursor-pointer text-blue-600" />
                </div>
              </div>
            )}
            {todo.isEdit && (
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full focus:outline-none"
                  value={todo.value}
                  onChange={(e) => {
                    handleEditBody(e.target.value, todo.id, true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleEditBody(e.target.value, todo.id, false);
                    }
                  }}
                  autoFocus="autofocus"
                />
                <button onClick={() => handleEdit(todo.id)} className="btn">
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
