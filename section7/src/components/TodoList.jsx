import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onUpdate, onDelete }) {
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

  const getAnalyzedTodoData = () => {
    console.log("analyzed");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("analyzed");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>todos</h4>
      <div>
        <div>total todos : {totalCount}</div>
        <div>completed : {doneCount}</div>
        <div>not completed : {notDoneCount}</div>
      </div>
      <input
        type="text"
        placeholder="search works to do"
        value={search}
        onChange={onChangeSearch}
      />
      <ul className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
