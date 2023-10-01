import "./Button.css";

export default function Button({ text, color, children }) {
  //   const { color, text } = props;

  return (
    <button className="button" style={{ backgroundColor: color }}>
      {text}
      {children}
    </button>
  );
}
