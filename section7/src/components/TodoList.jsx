import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onUpdate }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <div className="TodoList">
      <h4>todos</h4>
      <input
        type="text"
        placeholder="search works to do"
        value={search}
        onChange={onChangeSearch}
      />
      <ul className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
}
