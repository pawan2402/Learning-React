import TodoItem from "./TodoItem";

const TodoItemsList = ({ todoItemsList }) => {
  return (
    <>
      <div className="container text-center">
        {todoItemsList.map((item) => (
          <TodoItem key='todoItemsList' todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItemsList;
