import "./Body.css";
import { useState } from "react";

export default function Body() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [bio, setBio] = useState("");
  const [state, setState] = useState({
    name: "",
    gender: "",
    bio: "",
  });

  // const onChangeName = (e) => {
  //   setState({
  //     ...state,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeGender = (e) => {
  //   setState({
  //     ...state,
  //     gender: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setState({
  //     ...state,
  //     bio: e.target.value,
  //   });
  // };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="body">
      <div>
        <input type="text" value={state.name} onChange={onChange} name="name" />
        <div>current value : {state.name}</div>
        <div>{state.name.length}</div>
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
    </div>
  );
}
