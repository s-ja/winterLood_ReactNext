import "./TodoEditor.css";

export default function TodoEditor() {
  return (
    <div className="TodoEditor">
      <input type="text" placeholder=" new works to do..." />
      <button>add</button>
    </div>
  );
}
