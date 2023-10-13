import "./TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  createdDate,
  content,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
 
  return (
    <li className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>delete</button>
    </li>
  );
}
