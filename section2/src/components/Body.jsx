import "./Body.css";
import Button from "./Button";

export default function Body() {
  const buttonProps = {
    text: "1st button",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  
  return (
    <div className="body">
      <h1>body</h1>
      <Button {...buttonProps} />
      <Button text={"2nd"} color={"green"}>
        <div>Btn</div>
      </Button>
      <Button text={"3rd"} color={"blue"} />
    </div>
  );
}
