import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoItemsList from "./components/TodoItemsList";
import "./App.css";

function App() {
  const todoItemsList = [
    {
      name: "Buy PS5",
      dueDate: "26/11/2024",
    },
    {
      name: "Work on Project",
      dueDate: "26/11/2024",
    },
  ];
  return (
    <center className="todoContainer">
      <AppName />
      <TodoInput />
      <TodoItemsList todoItemsList={todoItemsList}></TodoItemsList>
    </center>
  );
}

export default App;
