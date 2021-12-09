import Minus from "./minus";
const Todo = ({ todo, index, removeTodo }) => {
  function handle() {
    removeTodo(index);
  }
  return (
    <div className="todo" onClick={handle}>
      <Minus />
      {todo.title}
    </div>
  );
};

export default Todo;