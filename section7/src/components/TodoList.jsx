import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="TodoList">
      <h4>todos</h4>
      <input type="text" placeholder="search works to do" />
      <ul className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}
