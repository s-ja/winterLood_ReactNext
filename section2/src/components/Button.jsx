import "./Button.css";

export default function Button({ text, color, children }) {
  //   const { color, text } = props;

  const onClick = (e) => {
    console.log(e);
    // alert("button clicked");
  };

  return (
    <button
      onClick={onClick}
      className="button"
      style={{ backgroundColor: color }}
    >
      {text}
      {children}
    </button>
  );
}
