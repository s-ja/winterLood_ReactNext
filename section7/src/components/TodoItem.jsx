import "./TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  createdDate,
  content,
  onUpdate,
}) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <li className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button>delete</button>
    </li>
  );
}
