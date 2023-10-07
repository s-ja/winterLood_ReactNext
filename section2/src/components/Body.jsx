import "./Body.css";
import { useRef, useState } from "react";

export default function Body() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.name === "") {
      alert("please write name")
      nameRef.current.focus();
      return;
    } else {
      alert(`${state.name} is registered`);
    }
  };

  const nameRef = useRef();

  return (
    <div className="body">
      <div>
        <input
          type="text"
          value={state.name}
          onChange={onChange}
          name="name"
          ref={nameRef}
        />
        <div>current value : {state.name}</div>
        <div>current length : {state.name.length}</div>
      </div>
      <div>
        <select name="gender" id="" value={state.gender} onChange={onChange}>
          <option value="">not asignable</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <div>selected gender : {state.gender}</div>
      </div>
      <div>
        <textarea
          name="bio"
          id=""
          cols="30"
          rows="10"
          onChange={onChange}
          value={state.bio}
        ></textarea>
      </div>
      <div>
        <button onClick={onSubmit}>register</button>
      </div>
    </div>
  );
}
