import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "mock data1",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "mock data2",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "mock data3",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
