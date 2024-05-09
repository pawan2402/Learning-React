import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todoContainer">
      <AppName />
      <div className="container text-center border border-4 border-black">
        <TodoInput />
        <TodoItem />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
