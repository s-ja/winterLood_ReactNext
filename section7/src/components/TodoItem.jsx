import "./TodoItem.css";

export default function TodoItem() {
  return (
    <li className="TodoItem">
      <input type="checkbox" />
      <div className="content">todo</div>
      <div className="date">date</div>
      <button>delete</button>
    </li>
  );
}
